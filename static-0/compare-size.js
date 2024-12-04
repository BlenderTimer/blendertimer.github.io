//----------Variables
var contentMain = document.getElementById('content-main');
var popupBack = document.getElementById('popup-back');
var popupContainer = document.getElementById('popup-container');
var popupMain = document.getElementById('popup-main');
var aosSearch = document.getElementById('aos-search');
var aosSortMain = document.getElementById('aos-sort-main');
var searchReset = document.getElementById('search-reset');
var addObjectDisplay = document.getElementById('add-object-display');
var aosThumbDisplay = document.getElementById('aos-search-right').children[0];
var aosListDisplay = document.getElementById('aos-search-right').children[1];
var aosObjectCount = document.getElementById('aos-object-count');
var contributorInfo = document.getElementById('contributor-info');
var ciLeft = document.getElementById('ci-left');
var ciRight = document.getElementById('ci-right');
var drawingBrightness = document.getElementById('drawing-brightness');
var drawingBrightnessBtn = document.getElementById('drawing-brightness-btn');
var backgroundBrightness = document.getElementById('background-brightness');
var backgroundBrightnessBtn = document.getElementById('background-brightness-btn');
var objectInfo = document.getElementById('object-info');
var objectList = document.getElementById('object-list');
var displayCanvas = document.getElementById('display-canvas');
var canvasCtrl = document.getElementById('canvas-ctrl');
var contributorSortMain = document.getElementById('contributor-sort-main');
var contributorList = document.getElementById('contributor-list');
var currentElement = 0;
var dropdownMenus = ["contributor-sort", "aos-sort"];
var lastPopups = [];
var aosDisplay = 0;
var searchObjects = [];
var compareObjects = [];
var aodMaxItemCount = 100;
var aodItemRowCount = 4;
var aodEstHeight = 100;
var aodItemEstHeight = 36;
var initSearch = true;
var zoom = 1;
var zoomOffset = 1;
var zoomAuto = true;
var lastAutoZoomOffset = 1;
var canvasPosition = {x:0,y:0};
var movingObjects = [];
var moveCursorPos = {x:0,y:0};
var lastCanvasScroll = Date.now();
var canvasMoved = false;
var canvasMoving = false;
var canvasMove = {x:0,y:0};
var drawingBrightnessDown = false;
var backgroundBrightnessDown = false;
var objectUndoList = [];
var extraUndoList = [];
var undoPosition = 0;
var drawingBrightnessValue = 1;
var backgroundBrightnessValue = 0.0902;
var submitImagesFormFirst = true;
var recommendObjectFormFirst = true;
var contributorViewing = "";
var contributors = [];
var contNames = [];
var visibleContributors = [];
//----------Functions
//Load
windowResize();
backgroundBrightness.children[0].children[0].style.top = (((1-backgroundBrightnessValue)*(backgroundBrightness.children[0].offsetHeight-18))+2)+"px";
objectUndoList.push(JSON.parse(JSON.stringify(compareObjects)));
extraUndoList.push({zoom:zoom,zoomAuto:zoomAuto,canvasPosition:JSON.parse(JSON.stringify(canvasPosition)),drawingBrightness:drawingBrightnessValue,backgroundBrightness:backgroundBrightnessValue});
if (readCookie("aos-dsply") == "list") {
	toggleAosDisplay(1);
}
else {
	toggleAosDisplay(0);
}
search();
loadContributors();
searchContributors();
checkInitialURL();
//----------
document.addEventListener('mousedown', function() {
	for (var i=0; i < dropdownMenus.length; i++) {
		var ddmm = document.getElementById(dropdownMenus[i] + "-main");
		var ddms = document.getElementById(dropdownMenus[i] + "-selector");
		if (cursorInfo('ex', ddms) < -10 || cursorInfo('ex', ddms) > (ddms.offsetWidth+10) || cursorInfo('ey', ddmm) < -11 || cursorInfo('ey', ddms) > (ddms.offsetHeight+10)) {
			toggleDropdown(ddmm, 0);
		}
	}
	if (drawingBrightness.style.opacity == "1") {
		if (cursorInfo('ex', drawingBrightness) < -10 || cursorInfo('ex', drawingBrightness) > 40 || cursorInfo('ey', drawingBrightness) < -40 || cursorInfo('ey', drawingBrightness) > (drawingBrightness.offsetHeight+10)) {
			toggleDBrightness();
			doUndo = true;
		}
	}
	if (backgroundBrightness.style.opacity == "1") {
		if (cursorInfo('ex', backgroundBrightness) < -10 || cursorInfo('ex', backgroundBrightness) > 40 || cursorInfo('ey', backgroundBrightness) < -40 || cursorInfo('ey', backgroundBrightness) > (backgroundBrightness.offsetHeight+10)) {
			toggleBBrightness();
		}
	}
});
document.addEventListener('mouseup', function() {
	var doUndo = false;
	if (movingObjects.length > 0 || canvasMoving == true || drawingBrightnessDown == true || backgroundBrightnessDown == true) {
		doUndo = true;
	}
	movingObjects = [];
	canvasMoving = false;
	drawingBrightnessDown = false;
	backgroundBrightnessDown = false;
	document.body.style.userSelect = null;
	document.body.style.pointerEvents = null;
	if (doUndo == true) {addUndoHistory()};
});
window.addEventListener('resize', function() {windowResize();determineDisplayMenu();drawCanvas()});
document.addEventListener('mousemove', function() {
	if (movingObjects.length > 0) {
		for (var i=0; i < movingObjects.length; i++) {
			if (event.ctrlKey == true) {
				if ((cursor.y-movingObjects[i].oy).toPositive() > (cursor.x-movingObjects[i].ox).toPositive()) {
					compareObjects[movingObjects[i].id].x = movingObjects[i].oox;
					compareObjects[movingObjects[i].id].y = cursor.y - movingObjects[i].y;
				}
				else {
					compareObjects[movingObjects[i].id].x = cursor.x - movingObjects[i].x;
					compareObjects[movingObjects[i].id].y = movingObjects[i].ooy;
				}
			}
			else {
				compareObjects[movingObjects[i].id].x = cursor.x - movingObjects[i].x;
				compareObjects[movingObjects[i].id].y = cursor.y - movingObjects[i].y;
			}
			compareObjects[movingObjects[i].id].manualPos = true;
		}
		drawCanvas();
	}
	if (canvasMoving == true) {
		canvasPosition.x = canvasMove.ox+(cursor.x-canvasMove.x)/zoom;
		canvasPosition.y = canvasMove.oy+(cursor.y-canvasMove.y)/zoom;
		zoomAuto = false;
		drawCanvas();
	}
	if (drawingBrightnessDown == true) {
		setDrawingBrightness();
	}
	if (backgroundBrightnessDown == true) {
		setBackgroundBrightness();
	}
});
displayCanvas.addEventListener("wheel",function(e) {if (e.ctrlKey==true) {e.preventDefault()}}, { passive: false });
document.addEventListener('wheel', function(event) {
	var element = event.target || event.srcElement;
	if (element.id == "display-canvas" && event.ctrlKey == true) {
		var t = Date.now() - lastCanvasScroll;
		if (event.deltaY > 0) {
			if (t > 100) {
				zoom = zoom*0.98;
			}
			else {
				zoom = zoom*((((t/100)/5)+0.8)*0.99);
			}
		}
		else {
			if (t > 100) {
				zoom = zoom/0.98;
			}
			else {
				zoom = zoom/((((t/100)/5)+0.8)*0.99);
			}
		}
		lastCanvasScroll = Date.now();
		lastZoom = zoom;
		setTimeout(function() {
			if ((Date.now() - lastCanvasScroll) >= 400) {
				addUndoHistory();
			}
		}, 450);
		drawCanvas();
	}
	else if (element.id == "display-canvas" && event.ctrlKey == false) {
		if (canvasCtrl.style.opacity == "0") {
			canvasCtrl.style.opacity = "1";
			setTimeout(function() {canvasCtrl.style.opacity = "0"}, 1000);
		}
	}
});
addObjectDisplay.addEventListener('scroll', function(event) {
	if (((addObjectDisplay.scrollTop + aodEstHeight)/(addObjectDisplay.children.length * aodItemEstHeight)) > 0.8) {
		var itemsDrawn = 0;
		for (var i=(addObjectDisplay.children.length); i < searchObjects.length; i++) {
			if (itemsDrawn <= aodMaxItemCount) {
				drawSearchObject(searchObjects[i]);
			}
			else {
				break;
			}
			itemsDrawn++;
		}
	}
})
document.addEventListener('keydown', function(event) {
	if (event.shiftKey == true && event.ctrlKey == true) {
		if (event.code == 'KeyA' && !(popupBack.style.opacity == 1)) {
			event.preventDefault();
			selectAll(-1);
		}
		else if (event.code == 'KeyZ' && !(popupBack.style.opacity == 1)) {
			event.preventDefault();
			redo();
		}
	}
	else if (event.ctrlKey == true) {
		if (event.code == 'KeyA' && !(popupBack.style.opacity == 1)) {
			event.preventDefault();
			selectAll();
		}
		else if (event.code == 'KeyZ' && !(popupBack.style.opacity == 1)) {
			event.preventDefault();
			undo();
		}
	}
	else {
		if (event.code == 'Delete' && !(popupBack.style.opacity == 1)) {
			for (var i=0; i < compareObjects.length; i++) {
				if (compareObjects[i].selected == true) {
					compareObjects.splice(i, 1);
					i -= 1;
				}
			}
			redrawCompareObjects(true);
			checkSelectedObjects();
			drawCanvas();
			addUndoHistory();
		}
	}
})
//----------Popup Functions
function closePopup(all) {
	if (lastPopups.length <= 1 || all == true) {
		document.body.style.width = null;
		document.body.style.overflowY = null;
		popupBack.style.opacity = 0;
		popupBack.style.pointerEvents = "none";
		popupContainer.style.opacity = 0;
		popupMain.style.pointerEvents = "none";
		popupMain.style.transform = "scale(0)";
	}
	else {
		popup(lastPopups[lastPopups.length-2], false, true);
	}
	if (lastPopups.pop() == 'add-object') {
		if (searchReset.style.background == "var(--semi-back)") {
			aosSearch.value = "";
			if (aosSortMain.parentNode.children[1].children[0].innerHTML == "Relevance") {
				aosSortMain.parentNode.children[1].children[0].remove();
			}
			aosSortMain.children[1].innerHTML = "Name";
			search("");
		}
	}
	if (all == true) {lastPopups = []};
}

function popup(popupElement, firstPopup, ignoreLast) {
	for (var i=1; i < popupMain.children.length; i++) {
		popupMain.children[i].style.display = "none";
	}
	if (firstPopup && firstPopup == true) {
		lastPopups = [];
	}
	if (!(ignoreLast == true)) {
		lastPopups.push(popupElement);
	}
	if (popupElement == 'submit-images' && submitImagesFormFirst == true) {
		var form = document.createElement('script');
		form.setAttribute("data-key", "ZITzLTGATEuVTYQNX0Ea0w");
		form.setAttribute("data-form", "8");
		form.src = "https://www.cognitoforms.com/f/seamless.js";
		submitImagesFormFirst = false;
		document.getElementById(popupElement).children[1].appendChild(form);
	}
	else if (popupElement == 'recommend-object' && recommendObjectFormFirst == true) {
		var form = document.createElement('script');
		form.setAttribute("data-key", "ZITzLTGATEuVTYQNX0Ea0w");
		form.setAttribute("data-form", "10");
		form.src = "https://www.cognitoforms.com/f/seamless.js";
		submitImagesFormFirst = false;
		document.getElementById(popupElement).children[1].appendChild(form);
	}
	document.getElementById(popupElement).style.display = "flex";
	popupBack.style.opacity = 1;
	popupBack.style.pointerEvents = "visible";
	popupContainer.style.opacity = 1;
	popupMain.style.pointerEvents = "visible";
	popupMain.style.transform = "scale(1)";
	var scrollPx = window.innerWidth - document.body.offsetWidth;
	document.body.style.width = "calc(100% - " + scrollPx + "px)";
	document.body.style.overflowY = "hidden";
	if (popupElement == "add-object") {
		aosSearch.focus();
	}
}
//----------Add Object Functions
function toggleAosReset(event) {
	var object = event.target || event.srcElement;
	if (object.style.background == "var(--semi-back)") {
		object.style.background = "none";
		object.style.boxShadow = "none";
	}
	else {
		object.style.background = "var(--semi-back)";
		object.style.boxShadow = "0px 0px 10px #0005 inset";
	}
}

function toggleAosDisplay(mode) {
	if (!(mode) && !(mode == 0)) {
		if (aosDisplay == 0) {
			aosDisplay = 1;
		}
		else {
			aosDisplay = 0;
		}
		mode = aosDisplay;
	}
	if (mode == 0) {
		aosThumbDisplay.style.background = "var(--semi-back)";
		aosThumbDisplay.style.boxShadow = "0px 0px 10px #0005 inset"
		aosListDisplay.style.background = "none";
		aosListDisplay.style.boxShadow = "none";
		aosDisplay = mode;
		writeCookie("aos-dsply", "thumb", 730);
	}
	else {
		aosListDisplay.style.background = "var(--semi-back)";
		aosListDisplay.style.boxShadow = "0px 0px 10px #0005 inset"
		aosThumbDisplay.style.background = "none";
		aosThumbDisplay.style.boxShadow = "none";
		aosDisplay = mode;
		writeCookie("aos-dsply", "list", 730);
	}
}
//----------
function windowResize() {
	drawingBrightness.style.transition = "0s";
	drawingBrightness.style.left = drawingBrightnessBtn.getBoundingClientRect().x + "px";
	drawingBrightness.style.top = (drawingBrightnessBtn.getBoundingClientRect().y-20) + "px";
	backgroundBrightness.style.transition = "0s";
	backgroundBrightness.style.left = backgroundBrightnessBtn.getBoundingClientRect().x + "px";
	backgroundBrightness.style.top = (backgroundBrightnessBtn.getBoundingClientRect().y-20) + "px";
	setTimeout(function() {drawingBrightness.style.transition = null}, 1);
	setTimeout(function() {backgroundBrightness.style.transition = null}, 1);
}
function setAodText(text) {
	while (addObjectDisplay.lastChild) {addObjectDisplay.lastChild.remove()};
	if (text) {
		addObjectDisplay.style.alignItems = "center";
		addObjectDisplay.style.alignContent = "center";
		addObjectDisplay.style.justifyContent = "center";
		var textElement = document.createElement('b');
		textElement.className = "search-text";
		textElement.innerHTML = text;
		addObjectDisplay.appendChild(textElement);
	}
	else {
		addObjectDisplay.style.alignItems = null;
		addObjectDisplay.style.alignContent = null;
		addObjectDisplay.style.justifyContent = null;
	}
}

function checkMoveObject() {
	movingObjects = [];
	document.body.style.userSelect = "none";
	document.body.style.pointerEvents = "none";
	if (displayCanvas.style.cursor) {
		for (var i=0; i < compareObjects.length; i++) {
			if (compareObjects[i].selected == true) {
				movingObjects.push({id:i,x:cursor.x-compareObjects[i].x,y:cursor.y-compareObjects[i].y,ox:cursor.x,oy:cursor.y,oox:compareObjects[i].x,ooy:compareObjects[i].y});
			}
		}
	}
	if (movingObjects.length == 0) {
		canvasMoving = true;
		canvasMove = {x:cursor.x,y:cursor.y,ox:canvasPosition.x,oy:canvasPosition.y};
	}
}

function setZoom(mode) {
	if (mode == 0) {
		zoomAuto = false;
		zoom = zoom * 0.9;
		drawCanvas();
	}
	else if (mode == 1) {
		zoomAuto = false;
		zoom = zoom * 1.1;
		drawCanvas();
	}
	else {
		zoomAuto = true;
		zoom = 1;
		drawCanvas(true);
	}
	addUndoHistory();
}

function addUndoHistory() {
	if (!(JSON.stringify(compareObjects) == JSON.stringify(objectUndoList[undoPosition])) || !(JSON.stringify({zoom:zoom,zoomAuto:zoomAuto,canvasPosition:JSON.parse(JSON.stringify(canvasPosition)),drawingBrightness:drawingBrightnessValue,backgroundBrightness:backgroundBrightnessValue}) == JSON.stringify(extraUndoList[undoPosition]))) {
		while (undoPosition < (objectUndoList.length-1)) {
			objectUndoList.pop();
			extraUndoList.pop();
		}
		objectUndoList.push(JSON.parse(JSON.stringify(compareObjects)));
		extraUndoList.push({zoom:zoom,zoomAuto:zoomAuto,canvasPosition:JSON.parse(JSON.stringify(canvasPosition)),drawingBrightness:drawingBrightnessValue,backgroundBrightness:backgroundBrightnessValue});
		undoPosition++;
	}
}

function undo() {
	if (undoPosition > 0) {
		undoPosition -= 1;
		compareObjects = JSON.parse(JSON.stringify(objectUndoList[undoPosition]));
		canvasPosition.x = extraUndoList[undoPosition].canvasPosition.x;
		canvasPosition.y = extraUndoList[undoPosition].canvasPosition.y;
		drawingBrightnessValue = extraUndoList[undoPosition].drawingBrightnessValue;
		backgroundBrightnessValue = extraUndoList[undoPosition].backgroundBrightnessValue;
		zoom = extraUndoList[undoPosition].zoom;
		zoomAuto = extraUndoList[undoPosition].zoomAuto;
		drawingBrightness.children[0].children[0].style.top = (((1-drawingBrightnessValue)*(backgroundBrightness.children[0].offsetHeight-18))+2)+"px";
		backgroundBrightness.children[0].children[0].style.top = (((1-backgroundBrightnessValue)*(backgroundBrightness.children[0].offsetHeight-18))+2)+"px";
		redrawCompareObjects(true);
		checkSelectedObjects();
		drawCanvas();
		setURL();
	};
}

function redo() {
	if (undoPosition < (objectUndoList.length-1)) {
		undoPosition += 1;
		compareObjects = JSON.parse(JSON.stringify(objectUndoList[undoPosition]));
		canvasPosition.x = extraUndoList[undoPosition].canvasPosition.x;
		canvasPosition.y = extraUndoList[undoPosition].canvasPosition.y;
		drawingBrightnessValue = extraUndoList[undoPosition].drawingBrightnessValue;
		backgroundBrightnessValue = extraUndoList[undoPosition].backgroundBrightnessValue;
		zoom = extraUndoList[undoPosition].zoom;
		zoomAuto = extraUndoList[undoPosition].zoomAuto;
		drawingBrightness.children[0].children[0].style.top = (((1-drawingBrightnessValue)*(backgroundBrightness.children[0].offsetHeight-18))+2)+"px";
		backgroundBrightness.children[0].children[0].style.top = (((1-backgroundBrightnessValue)*(backgroundBrightness.children[0].offsetHeight-18))+2)+"px";
		redrawCompareObjects(true);
		checkSelectedObjects();
		drawCanvas();
		setURL();
	};
}

function drawCanvas(zoomReset) {
	setTimeout(function() {
		displayCanvas.width = displayCanvas.offsetWidth;
		displayCanvas.height = displayCanvas.offsetHeight;
		var c = displayCanvas.getContext('2d');
		var padding = 0;
		var align = "check";
		var firstPosition = {x:0,y:0};
		var lineObjects = 0;
		var widths = [];
		var addWidths = [];
		var maxHeight = 0;
		var lockZoom = false;
		c.scale(zoom*0.95, zoom*0.95);
		c.translate(((displayCanvas.width-(displayCanvas.width*(zoom*0.95)))/2)/(zoom*0.95), ((displayCanvas.height-(displayCanvas.height*(zoom*0.95)))/2)/(zoom*0.95));
		for (var i=0; i < compareObjects.length; i++) {
			var obj = compareObjects[i];
			if (obj.manualPos == false) {
				if (obj.angle == 1) {
					widths.push(obj.width);
					addWidths.push(widths.sumValues());
					if (obj.height > maxHeight) {
						maxHeight = obj.height;
					}
					if (align == "check") {align = obj.frontImageAlign};
				}
				else if (obj.angle == 2) {
					widths.push(obj.length);
					addWidths.push(widths.sumValues());
					if (obj.width > maxHeight) {
						maxHeight = obj.width;
					}
					if (align == "check") {align = obj.topImageAlign};
				}
				else {
					widths.push(obj.length);
					addWidths.push(widths.sumValues());
					if (obj.height > maxHeight) {
						maxHeight = obj.height;
					}
					if (align == "check") {align = obj.sideImageAlign};
				}
			}
			else if (!(zoomReset) || zoomReset == false) {
				lockZoom = true;
			}
		}
		var widthRatio = widths.sumValues() / (displayCanvas.width - (padding*2));
		var heightRatio = maxHeight / (displayCanvas.height - (padding*2));
		var center = 0;
		if (heightRatio > widthRatio) {
			center = ((displayCanvas.width/2)-padding) - ((widths.sumValues()/zoomOffset)/2);
		}
		if (zoomAuto == true && lockZoom == false) {
			if (heightRatio > widthRatio) {
				zoomOffset = heightRatio;
			}
			else {
				zoomOffset = widthRatio;
			}
			if (canvasMoved == false) {
				canvasPosition.x = padding;
				canvasPosition.y = padding;
			}
		}
		if (zoomOffset == 0) {
			zoomOffset = lastAutoZoomOffset;
		}
		else {
			lastAutoZoomOffset = zoomOffset;
		}
		var mi = 0;
		for (var i=0; i < compareObjects.length; i++) {
			var obj = compareObjects[i];
			var img = objectList.children[i].children[2].children[0].children[0].children[0];
			var pos = objectList.children[i].children[2].children[1].children[0];
			var width = 0;
			var height = 0;
			var x = 0;
			var y = 0;
			if (obj.angle == 1) {
				width = obj.width/zoomOffset;
				height = obj.height/zoomOffset;
			}
			else if (obj.angle == 2) {
				width = obj.length/zoomOffset;
				height = obj.width/zoomOffset;
			}
			else {
				width = obj.length/zoomOffset;
				height = obj.height/zoomOffset;
			}
			obj.drawnWidth = width;
			obj.drawnHeight = height;
			if (obj.manualPos == false) {
				if (mi > 0) {
					obj.x = (addWidths[mi-1]/zoomOffset) + (width/2) + center;
				}
				else {
					obj.x = (width/2) + center;
				}
				if (align == "bottom") {
					obj.y = (displayCanvas.height-(padding*2)) - (height/2);
				}
				else if (align == "top") {
					obj.y = height/2;
				}
				else {
					obj.y = (displayCanvas.height/2)-padding;
				}
				mi += 1;
			}
			pos.children[0].children[1].value = obj.x.round(0);
			pos.children[1].children[1].value = obj.y.round(0);
			x = canvasPosition.x + obj.x - (width/2);
			y = canvasPosition.y + obj.y - (height/2);
			c.drawImage(img, x, y, width, height);
			if (obj.selected == true) {
				drawRect(c, x, y, width, height, 3);
				c.fillStyle = "#3377EE20";
				c.fill();
				c.beginPath();
				drawRect(c, x-1, y-1, width+2, height+2, 3);
				c.strokeStyle = "#77AAFF";
				c.lineWidth = 2;
				c.lineCap = "round";
				c.lineJoin = "round";
				c.stroke();
				c.beginPath();
				c.arc(x+(width/2), y+(height/2), 8, 0, Math.PI*2);
				c.stroke();
				c.beginPath();
				c.moveTo(x+(width/2), y+(height/2)-5);
				c.lineTo(x+(width/2), y+(height/2)+5);
				c.stroke();
				c.beginPath();
				c.moveTo(x+(width/2)-5, y+(height/2));
				c.lineTo(x+(width/2)+5, y+(height/2));
				c.stroke();
			}
		}
	}, 1);
}

function setURL() {
	var url = window.location.toString().removeAfter("?", -1).removeAfter("#", -1);
	if (compareObjects.length > 0) {
		url += "?objects=";
	}
	for (var i=0; i < compareObjects.length; i++) {
		url += compareObjects[i].id + "&";
	}
	if (url.endsWith("&")) {url = url.substr(0, url.length-1)};
	history.replaceState({}, 'Compare (Size and Shape) - BlenderTimer Web Tools', url);
}

function addObject(id) {
	var wasZero = false;
	if (compareObjects.length == 0) {wasZero = true};
	compareObjects.push(objects[id-1]);
	compareObjects[compareObjects.length-1].angle = objects[id-1].defaultAngle;
	compareObjects[compareObjects.length-1].selected = false;
	compareObjects[compareObjects.length-1].manualPos = false;
	compareObjects[compareObjects.length-1].drawnWidth = 0;
	compareObjects[compareObjects.length-1].drawnHeight = 0;
	redrawCompareObjects(true);
	if (wasZero == true) {setZoom(-1)};
	setTimeout(function() {drawCanvas();drawCanvas();addUndoHistory();}, 1);
	objectList.scrollTop = 100000;
	setURL();
}

function deleteObject(id) {
	compareObjects.splice(id, 1);
	redrawCompareObjects(true);
	checkSelectedObjects();
	drawCanvas();
	addUndoHistory();
	setURL();
}

function clearCanvas() {
	compareObjects = [];
	redrawCompareObjects(true);
	checkSelectedObjects();
	drawCanvas();
	addUndoHistory();
	setURL();
}

function alignObjects(align) {
	for (var i=0; i < compareObjects.length; i++) {
		var obj = compareObjects[i];
		if (obj.selected == true) {
			if (align == 'left') {
				obj.x = obj.drawnWidth / 2;
			}
			else if (align == 'center') {
				obj.x = displayCanvas.width / 2;
			}
			else if (align == 'right') {
				obj.x = displayCanvas.width - (obj.drawnWidth/2);
			}
			else if (align == 'top') {
				obj.y = obj.drawnHeight / 2;
			}
			else if (align == 'middle') {
				obj.y = displayCanvas.height / 2;
			}
			else if (align == 'bottom') {
				obj.y = displayCanvas.height - (obj.drawnHeight/2);
			}
			obj.manualPos = true;
		}
	}
	drawCanvas();
	addUndoHistory();
}

function selectObject(id, addition) {
	if (!(addition) || addition == false) {
		for (var i=0; i < compareObjects.length; i++) {
			if (!(i == id)) {
				compareObjects[i].selected = false;
				objectList.children[i].children[0].style.opacity = "0";
			}
		}
	}
	if (compareObjects[id].selected == false) {
		compareObjects[id].selected = true;
		objectList.children[id].children[0].style.opacity = "1";
	}
	else {
		compareObjects[id].selected = false;
		objectList.children[id].children[0].style.opacity = "0";
	}
	checkSelectedObjects();
	drawCanvas();
	addUndoHistory();
}

function selectAll(de) {
	for (var i=0; i < compareObjects.length; i++) {
		if (de) {
			compareObjects[i].selected = false;
			objectList.children[i].children[0].style.opacity = "0";
		}
		else {
			compareObjects[i].selected = true;
			objectList.children[i].children[0].style.opacity = "1";
		}
	}
	checkSelectedObjects();
	drawCanvas();
	addUndoHistory();
}

function checkSelectedObjects() {
	displayCanvas.style.cursor = null;
	for (var i=0; i < compareObjects.length; i++) {
		if (compareObjects[i].selected == true) {
			displayCanvas.style.cursor = "move";
			break;
		}
	}
}

function setObjectAngle(id, angle) {
	var objID = parseInt(objectList.children[id].id.removeAfter("-", -1, true).removeBefore("-", 1))-1;
	if (angle == "front") {
		compareObjects[id].angle = 1;
		objectList.children[id].children[2].children[0].children[0].children[0].src = getImageURL(objID+1, 1);
		objectList.children[id].children[2].children[0].children[0].children[0].alt = objects[objID].name + "-Front";
		if (compareObjects[id].sideImage) {
			objectList.children[id].children[2].children[0].children[1].children[0].style.background = null;
			objectList.children[id].children[2].children[0].children[1].children[0].style.boxShadow = null;
		}
		objectList.children[id].children[2].children[0].children[1].children[1].style.background = "var(--semi-back)";
		objectList.children[id].children[2].children[0].children[1].children[1].style.boxShadow = "0px 0px 10px #0005 inset";
		if (compareObjects[id].topImage) {
			objectList.children[id].children[2].children[0].children[1].children[2].style.background = null;
			objectList.children[id].children[2].children[0].children[1].children[2].style.boxShadow = null;
		}
	}
	else if (angle == "top") {
		compareObjects[id].angle = 2;
		objectList.children[id].children[2].children[0].children[0].children[0].src = getImageURL(objID+1, 2);
		objectList.children[id].children[2].children[0].children[0].children[0].alt = objects[objID].name + "-Top";
		if (compareObjects[id].sideImage) {
			objectList.children[id].children[2].children[0].children[1].children[0].style.background = null;
			objectList.children[id].children[2].children[0].children[1].children[0].style.boxShadow = null;
		}
		if (compareObjects[id].frontImage) {
			objectList.children[id].children[2].children[0].children[1].children[1].style.background = null;
			objectList.children[id].children[2].children[0].children[1].children[1].style.boxShadow = null;
		}
		objectList.children[id].children[2].children[0].children[1].children[2].style.background = "var(--semi-back)";
		objectList.children[id].children[2].children[0].children[1].children[2].style.boxShadow = "0px 0px 10px #0005 inset";
	}
	else {
		compareObjects[id].angle = 0;
		objectList.children[id].children[2].children[0].children[0].children[0].src = getImageURL(objID+1, 0);
		objectList.children[id].children[2].children[0].children[0].children[0].alt = objects[objID].name + "-Side";
		objectList.children[id].children[2].children[0].children[1].children[0].style.background = "var(--semi-back)";
		objectList.children[id].children[2].children[0].children[1].children[0].style.boxShadow = "0px 0px 10px #0005 inset";
		if (compareObjects[id].frontImage) {
			objectList.children[id].children[2].children[0].children[1].children[1].style.background = null;
			objectList.children[id].children[2].children[0].children[1].children[1].style.boxShadow = null;
		}
		if (compareObjects[id].topImage) {
			objectList.children[id].children[2].children[0].children[1].children[2].style.background = null;
			objectList.children[id].children[2].children[0].children[1].children[2].style.boxShadow = null;
		}
	}
	drawCanvas();
	addUndoHistory();
}

function moveObject(id, direction) {
	if (direction == "up") {
		compareObjects.moveItem(id, id-1);
		redrawCompareObjects(true);
		objectList.scrollTop = objectList.scrollTop - objectList.children[0].offsetHeight - 4;
	}
	else {
		compareObjects.moveItem(id, id+1);
		redrawCompareObjects(true);
		objectList.scrollTop = objectList.scrollTop + objectList.children[0].offsetHeight + 4;
	}
	drawCanvas();
	addUndoHistory();
	setURL();
}

function showObjectInfo(id) {
	var obj = objects[compareObjects[id].id-1];
	objectInfo.children[0].innerHTML = obj.name;
	objectInfo.children[1].children[0].children[0].innerHTML = "<b>Width: </b><p>" + writeSize(obj.width, 5, false, true).replace(" (", "</p><i> (") + "</i>";
	objectInfo.children[1].children[0].children[1].innerHTML = "<b>Length: </b><p>" + writeSize(obj.length, 5, false, true).replace(" (", "</p><i> (") + "</i>";
	objectInfo.children[1].children[0].children[2].innerHTML = "<b>Height: </b><p>" + writeSize(obj.height, 5, false, true).replace(" (", "</p><i> (") + "</i>";
	objectInfo.children[1].children[2].children[0].children[1].innerHTML = obj.id;
	var categoriesString = "<b>Category: </b><button onclick=\"searchCategory()\">" + obj.category1 + "</button>";
	if (obj.category2) {
		categoriesString += "<i>/</i><button onclick=\"searchCategory()\">" + obj.category2 + "</button>";
	}
	if (obj.category3) {
		categoriesString += "<i>/</i><button onclick=\"searchCategory()\">" + obj.category3 + "</button>";
	}
	objectInfo.children[1].children[2].children[1].innerHTML = categoriesString;
	if (obj.tags) {
		var tagsString = "";
		for (var i=0; i < obj.tags.length; i++) {
			tagsString += "<button onclick=\"searchCategory(true)\">" + obj.tags[i] + "</button>"
		}
		objectInfo.children[1].children[2].children[2].innerHTML = "<b>Tags: </b>" + tagsString;
		objectInfo.children[1].children[2].children[2].style.display = null;
	}
	else {
		objectInfo.children[1].children[2].children[2].style.display = "none";
	}
	if (obj.notes) {
		objectInfo.children[1].children[2].children[3].children[1].innerHTML = obj.notes;
		objectInfo.children[1].children[2].children[3].style.display = null;
	}
	else {
		objectInfo.children[1].children[2].children[3].style.display = "none";
	}
	if (!(obj.dateAdded == obj.lastModified)) {
		objectInfo.children[1].children[2].children[4].innerHTML = "<b>Date: </b><p>" + writeDate(obj.dateAdded) + "</p><i> (modified " + writeDate(obj.lastModified) + ")</i>";
	}
	else {
		objectInfo.children[1].children[2].children[4].innerHTML = "<b>Date: </b><p>" + writeDate(obj.dateAdded) + "</p>";
	}
	if (obj.sideImage && obj.sideImage.length > 0) {
		objectInfo.children[1].children[4].children[0].style.display = null;
		if (obj.defaultAngle == 0) {
			objectInfo.children[1].children[4].children[0].children[0].children[0].innerHTML = "<b>Side</b><i> (default)</i>";
		}
		else {
			objectInfo.children[1].children[4].children[0].children[0].children[0].innerHTML = "<b>Side</b>";
		}
		objectInfo.children[1].children[4].children[0].children[1].href = getImageURL(obj.id, 0);
		objectInfo.children[1].children[4].children[0].children[1].children[0].src = getImageURL(obj.id, 0);
		objectInfo.children[1].children[4].children[0].children[1].children[0].alt = obj.name + "-Side";
		objectInfo.children[1].children[4].children[0].children[2].children[1].textContent = obj.sideImageArtist;
		objectInfo.children[1].children[4].children[0].children[2].children[2].children[1].innerHTML = getAlignment(obj.sideImageAlign);
		objectInfo.children[1].children[4].children[0].children[2].children[3].children[1].innerHTML = writeDate(obj.sideImageDate);
	}
	else {
		objectInfo.children[1].children[4].children[0].style.display = "none";
	}
	if (obj.frontImage && obj.frontImage.length > 0) {
		objectInfo.children[1].children[4].children[1].style.display = null;
		if (obj.defaultAngle == 1) {
			objectInfo.children[1].children[4].children[1].children[0].children[0].innerHTML = "<b>Front</b><i> (default)</i>";
		}
		else {
			objectInfo.children[1].children[4].children[1].children[0].children[0].innerHTML = "<b>Front</b>";
		}
		objectInfo.children[1].children[4].children[1].children[1].href = getImageURL(obj.id, 1);
		objectInfo.children[1].children[4].children[1].children[1].children[0].src = getImageURL(obj.id,1);
		objectInfo.children[1].children[4].children[1].children[1].children[0].alt = obj.name + "-Front";
		objectInfo.children[1].children[4].children[1].children[2].children[1].textContent = obj.frontImageArtist;
		objectInfo.children[1].children[4].children[1].children[2].children[2].children[1].innerHTML = getAlignment(obj.frontImageAlign);
		objectInfo.children[1].children[4].children[1].children[2].children[3].children[1].innerHTML = writeDate(obj.frontImageDate);
	}
	else {
		objectInfo.children[1].children[4].children[1].style.display = "none";
	}
	if (obj.topImage && obj.topImage.length > 0) {
		objectInfo.children[1].children[4].children[2].style.display = null;
		if (obj.defaultAngle == 2) {
			objectInfo.children[1].children[4].children[2].children[0].children[0].innerHTML = "<b>Top</b><i> (default)</i>";
		}
		else {
			objectInfo.children[1].children[4].children[2].children[0].children[0].innerHTML = "<b>Top</b>";
		}
		objectInfo.children[1].children[4].children[2].children[1].href = getImageURL(obj.id, 2);
		objectInfo.children[1].children[4].children[2].children[1].children[0].src = getImageURL(obj.id, 2);
		objectInfo.children[1].children[4].children[2].children[1].children[0].alt = obj.name + "-Top";
		objectInfo.children[1].children[4].children[2].children[2].children[1].textContent = obj.topImageArtist;
		objectInfo.children[1].children[4].children[2].children[2].children[2].children[1].innerHTML = getAlignment(obj.topImageAlign);
		objectInfo.children[1].children[4].children[2].children[2].children[3].children[1].innerHTML = writeDate(obj.topImageDate);
	}
	else {
		objectInfo.children[1].children[4].children[2].style.display = "none";
	}
	popup('object-info', true);
	objectInfo.children[1].scrollTop = 0;
}

function drawCompareObject(obj) {
	var objItem = document.createElement('div');
	objItem.className = "object-list-item";
	objItem.id = "oli-" + obj.id + "-" + objectList.children.length;
	//Selected ----------
	var objItemSelected = document.createElement('div');
	objItemSelected.className = "oli-selected";
	if (obj.selected == false) {
		objItemSelected.style.opacity = "0";
	}
	else {
		objItemSelected.style.opacity = "1";
	}
	objItem.appendChild(objItemSelected);
	//Title ----------
	var objItemTitle = document.createElement('div');
	objItemTitle.className = "oli-title";
	var objItemTitleH1 = document.createElement('h1');
	objItemTitleH1.innerHTML = obj.name;
	objItemTitleH1.addEventListener('click', function(event) {
		var element = event.target || event.srcElement;
		var objID = parseInt(element.parentNode.parentNode.id.removeBefore("-", 1, true));
		selectObject(objID, event.shiftKey);
	});
	var objItemTitleDelete = document.createElement('img');
	objItemTitleDelete.src = "../static-0/files/images/icons/x.svg";
	objItemTitleDelete.alt = "Delete";
	objItemTitleDelete.addEventListener('click', function(event) {
		var element = event.target || event.srcElement;
		var objID = parseInt(element.parentNode.parentNode.id.removeBefore("-", 1, true));
		deleteObject(objID);
	});
	objItemTitle.appendChild(objItemTitleH1);
	objItemTitle.appendChild(objItemTitleDelete);
	objItem.appendChild(objItemTitle);
	//Controls ----------
	var objItemControls = document.createElement('div');
	objItemControls.className = "oli-controls";
	//Image Controls ----------
	var objItemImageControls = document.createElement('div');
	objItemImageControls.className = "oli-image-controls";
	var objItemImageDisplay = document.createElement('div');
	objItemImageDisplay.className = "oli-image-display";
	var objItemImage = document.createElement('img');
	if (obj.angle == 1) {
		objItemImage.src = getImageURL(obj.id, 1);
		objItemImage.alt = obj.name + "-Front";
	}
	else if (obj.angle == 2) {
		objItemImage.src = getImageURL(obj.id, 2);
		objItemImage.alt = obj.name + "-Top";
	}
	else {
		objItemImage.src = getImageURL(obj.id, 0);
		objItemImage.alt = obj.name + "-Side";
	}
	objItemImageDisplay.appendChild(objItemImage);
	objItemImageControls.appendChild(objItemImageDisplay);
	var objItemImageAngles = document.createElement('div');
	objItemImageAngles.className = "oli-image-angles";
	if (obj.sideImage && obj.sideImage.length > 0) {
		var objItemImageAngleSide = document.createElement('img');
		objItemImageAngleSide.src = "../static-0/files/images/icons/side-view.svg";
		objItemImageAngleSide.alt = "Side";
		objItemImageAngleSide.addEventListener('click', function(event) {
			var element = event.target || event.srcElement;
			var objID = parseInt(element.parentNode.parentNode.parentNode.parentNode.id.removeBefore("-", 1, true));
			setObjectAngle(objID, element.alt.toLowerCase());
		});
		if (obj.angle == 0) {
			objItemImageAngleSide.style.background = "var(--semi-back)";
			objItemImageAngleSide.style.boxShadow = "0px 0px 10px #0005 inset";
		}
		objItemImageAngles.appendChild(objItemImageAngleSide);
	}
	if (obj.frontImage && obj.frontImage.length > 0) {
		var objItemImageAngleFront = document.createElement('img');
		objItemImageAngleFront.src = "../static-0/files/images/icons/front-view.svg";
		objItemImageAngleFront.alt = "Front";
		objItemImageAngleFront.addEventListener('click', function(event) {
			var element = event.target || event.srcElement;
			var objID = parseInt(element.parentNode.parentNode.parentNode.parentNode.id.removeBefore("-", 1, true));
			setObjectAngle(objID, element.alt.toLowerCase());
		});
		if (obj.angle == 1) {
			objItemImageAngleFront.style.background = "var(--semi-back)";
			objItemImageAngleFront.style.boxShadow = "0px 0px 10px #0005 inset";
		}
		objItemImageAngles.appendChild(objItemImageAngleFront);
	}
	if (obj.topImage && obj.topImage.length > 0) {
		var objItemImageAngleTop = document.createElement('img');
		objItemImageAngleTop.src = "../static-0/files/images/icons/top-view.svg";
		objItemImageAngleTop.alt = "Top";
		objItemImageAngleTop.addEventListener('click', function(event) {
			var element = event.target || event.srcElement;
			var objID = parseInt(element.parentNode.parentNode.parentNode.parentNode.id.removeBefore("-", 1, true));
			setObjectAngle(objID, element.alt.toLowerCase());
		});
		if (obj.angle == 2) {
			objItemImageAngleTop.style.background = "var(--semi-back)";
			objItemImageAngleTop.style.boxShadow = "0px 0px 10px #0005 inset";
		}
		objItemImageAngles.appendChild(objItemImageAngleTop);
	}
	objItemImageControls.appendChild(objItemImageAngles);
	var objItemRightControls = document.createElement('div');
	objItemRightControls.className = "oli-right-controls";
	//Positions Controls ----------
	var objItemPosition = document.createElement('div');
	objItemPosition.className = "oli-position";
	var objItemPositionX = document.createElement('div');
	objItemPositionX.className = "oli-pos-value oli-x";
	var objItemPositionXB = document.createElement('b');
	objItemPositionXB.innerHTML = "X";
	var objItemPositionXValue = document.createElement('input');
	objItemPositionXValue.type = "number";
	objItemPositionXValue.addEventListener('keydown', function(event) {
		setTimeout(function() {
			var element = event.target || event.srcElement;
			var objID = parseInt(element.parentNode.parentNode.parentNode.parentNode.parentNode.id.removeBefore("-", 1, true));
			if (event.code == "Enter" && element.value.toString().length == 0) {
				compareObjects[objID].manualPos = false;
				drawCanvas();
				addUndoHistory();
			}
		}, 1);
	});
	objItemPositionXValue.addEventListener('input', function(event) {
		setTimeout(function() {
			var element = event.target || event.srcElement;
			var objID = parseInt(element.parentNode.parentNode.parentNode.parentNode.parentNode.id.removeBefore("-", 1, true));
			if (element.value.toString().length > 0) {
				compareObjects[objID].x = parseFloat(element.value);
				compareObjects[objID].manualPos = true;
				drawCanvas();
				addUndoHistory();
			}
		}, 1);
	});
	objItemPositionX.appendChild(objItemPositionXB);
	objItemPositionX.appendChild(objItemPositionXValue);
	var objItemPositionY = document.createElement('div');
	objItemPositionY.className = "oli-pos-value oli-y";
	var objItemPositionYB = document.createElement('b');
	objItemPositionYB.innerHTML = "Y";
	var objItemPositionYValue = document.createElement('input');
	objItemPositionYValue.type = "number";
	objItemPositionYValue.addEventListener('keydown', function(event) {
		setTimeout(function() {
			var element = event.target || event.srcElement;
			var objID = parseInt(element.parentNode.parentNode.parentNode.parentNode.parentNode.id.removeBefore("-", 1, true));
			if (event.code == "Enter" && element.value.toString().length == 0) {
				compareObjects[objID].manualPos = false;
				drawCanvas();
				addUndoHistory();
			}
		}, 1);
	});
	objItemPositionYValue.addEventListener('input', function(event) {
		setTimeout(function() {
			var element = event.target || event.srcElement;
			var objID = parseInt(element.parentNode.parentNode.parentNode.parentNode.parentNode.id.removeBefore("-", 1, true));
			if (element.value.toString().length > 0) {
				compareObjects[objID].y = parseFloat(element.value);
				compareObjects[objID].manualPos = true;
				drawCanvas();
				addUndoHistory();
			}
		}, 1);
	});
	objItemPositionY.appendChild(objItemPositionYB);
	objItemPositionY.appendChild(objItemPositionYValue);
	objItemPosition.appendChild(objItemPositionX);
	objItemPosition.appendChild(objItemPositionY);
	objItemRightControls.appendChild(objItemPosition);
	//Controls2 ----------
	var objItemControls2 = document.createElement('div');
	objItemControls2.className = "oli-right2";
	//Size ----------
	var objItemSize = document.createElement('div');
	objItemSize.className = "oli-size";
	var objItemWidth = document.createElement('span');
	objItemWidth.innerHTML = "<b>Width:</b><p>" + writeSize(obj.width, 2, true) + "</p>";
	var objItemLength = document.createElement('span');
	objItemLength.innerHTML = "<b>Length:</b><p>" + writeSize(obj.length, 2, true) + "</p>";
	var objItemHeight = document.createElement('span');
	objItemHeight.innerHTML = "<b>Height:</b><p>" + writeSize(obj.height, 2, true) + "</p>";
	objItemSize.appendChild(objItemWidth);
	objItemSize.appendChild(objItemLength);
	objItemSize.appendChild(objItemHeight);
	objItemControls2.appendChild(objItemSize);
	//Move ----------
	var objItemMove = document.createElement('div');
	objItemMove.className = "oli-move";
	var objItemMoveUp = document.createElement('img');
	objItemMoveUp.src = "../static-0/files/images/icons/arrow-up.svg";
	objItemMoveUp.alt = "Move up";
	objItemMoveUp.addEventListener('click', function(event) {
		var element = event.target || event.srcElement;
		var objID = parseInt(element.parentNode.parentNode.parentNode.parentNode.parentNode.id.removeBefore("-", 1, true));
		moveObject(objID, "up");
	});
	var objItemMoveDown = document.createElement('img');
	objItemMoveDown.src = "../static-0/files/images/icons/arrow-down.svg";
	objItemMoveDown.alt = "Move down";
	objItemMoveDown.addEventListener('click', function(event) {
		var element = event.target || event.srcElement;
		var objID = parseInt(element.parentNode.parentNode.parentNode.parentNode.parentNode.id.removeBefore("-", 1, true));
		moveObject(objID, "down");
	});
	objItemMove.appendChild(objItemMoveUp);
	objItemMove.appendChild(objItemMoveDown);
	objItemControls2.appendChild(objItemMove);
	//More Info ----------
	var objItemInfo = document.createElement('button');
	objItemInfo.className = "oli-info";
	objItemInfo.textContent = "More Info";
	objItemInfo.addEventListener('click', function(event) {
		var element = event.target || event.srcElement;
		var objID = parseInt(element.parentNode.parentNode.parentNode.id.removeBefore("-", 1, true));
		showObjectInfo(objID);
	});
	//----------
	objItemControls.appendChild(objItemImageControls);
	objItemRightControls.appendChild(objItemControls2);
	objItemRightControls.appendChild(objItemInfo);
	objItemControls.appendChild(objItemRightControls);
	objItem.appendChild(objItemControls);
	objectList.appendChild(objItem);
}

function drawSearchObject(obj) {
	if (aosDisplay == 1) {
		var objItem = document.createElement('a');
		objItem.className = "aod-object-li";
		objItem.id = "search-object-" + obj.id;
		objItem.addEventListener('click', function(event) {
			var element = event.target || event.srcElement;
			addObject(parseInt(element.id.removeBefore("-", 1, true)));
			closePopup(true);
		});
		//Name
		var objItemName = document.createElement('b');
		objItemName.className = "aod-object-li-name";
		objItemName.innerHTML = obj.name;
		objItem.appendChild(objItemName);
		//Additions
		var oNew = false;
		var cont = false;
		if ((Date.now() - new Date(parseInt(obj.dateAdded.removeAfter("/", -1)), parseInt(obj.dateAdded.removeBefore("/", 1).removeAfter("/", -1, true))-1, parseInt(obj.dateAdded.removeBefore("/", 1, true)))) < 604800000) {
			oNew = true;
		}
		if (obj.sideImage && obj.sideImage.length > 0 && !(obj.sideImageArtist == "Daniel Roberts (BlenderTimer)")) {
			cont = true;
		}
		else if (obj.frontImage && obj.frontImage.length > 0 && !(obj.frontImageArtist == "Daniel Roberts (BlenderTimer)")) {
			cont = true;
		}
		else if (obj.topImage && obj.topImage.length > 0 && !(obj.topImageArtist == "Daniel Roberts (BlenderTimer)")) {
			cont = true;
		}
		if (oNew == true || cont == true) {
			var objItemAdditions = document.createElement('div');
			objItemAdditions.className = "aod-object-li-additions";
			if (oNew == true) {
				var objItemNew = document.createElement('b');
				objItemNew.className = "aod-object-li-new";
				objItemNew.innerHTML = "NEW!";
				objItemAdditions.appendChild(objItemNew);
			}
			if (cont == true) {
				var objItemCont = document.createElement('img');
				objItemCont.className = "aod-object-li-user";
				objItemCont.src = "../static-0/files/images/icons/user.svg";
				objItemAdditions.appendChild(objItemCont);
			}
			objItem.appendChild(objItemAdditions);
		}
		addObjectDisplay.appendChild(objItem);
		return objItem;
	}
	else {
		var objItem = document.createElement('a');
		objItem.className = "aod-object";
		objItem.id = "search-object-" + obj.id;
		objItem.addEventListener('click', function(event) {
			var element = event.target || event.srcElement;
			addObject(parseInt(element.id.removeBefore("-", 1, true)));
			closePopup(true);
		});
		//Additions
		var oNew = false;
		var cont = false;
		if ((Date.now() - new Date(parseInt(obj.dateAdded.removeAfter("/", -1)), parseInt(obj.dateAdded.removeBefore("/", 1).removeAfter("/", -1, true))-1, parseInt(obj.dateAdded.removeBefore("/", 1, true)))) < 604800000) {
			oNew = true;
		}
		if (obj.sideImage && obj.sideImage.length > 0 && !(obj.sideImageArtist == "Daniel Roberts (BlenderTimer)")) {
			cont = true;
		}
		else if (obj.frontImage && obj.frontImage.length > 0 && !(obj.frontImageArtist == "Daniel Roberts (BlenderTimer)")) {
			cont = true;
		}
		else if (obj.topImage && obj.topImage.length > 0 && !(obj.topImageArtist == "Daniel Roberts (BlenderTimer)")) {
			cont = true;
		}
		if (oNew == true || cont == true) {
			var objItemAdditions = document.createElement('div');
			objItemAdditions.className = "aod-object-additions";
			if (oNew == true) {
				var objItemNew = document.createElement('b');
				objItemNew.className = "aod-object-new";
				objItemNew.innerHTML = "NEW!";
				objItemAdditions.appendChild(objItemNew);
			}
			if (cont == true) {
				var objItemCont = document.createElement('img');
				objItemCont.className = "aod-object-user";
				objItemCont.src = "../static-0/files/images/icons/user.svg";
				if (oNew == false) {
					objItemAdditions.style.justifyContent = "flex-end";
				}
				objItemAdditions.appendChild(objItemCont);
			}
			objItem.appendChild(objItemAdditions);
		}
		//Image
		var objItemImage = document.createElement('div');
		objItemImage.className = "aod-object-image";
		var objItemImageImg = document.createElement('img');
		if (obj.defaultAngle == 0) {
			objItemImageImg.src = getImageURL(obj.id, 0);
		}
		else if (obj.defaultAngle == 1) {
			objItemImageImg.src = getImageURL(obj.id, 1);
		}
		else if (obj.defaultAngle == 2) {
			objItemImageImg.src = getImageURL(obj.id, 2);
		}
		objItemImageImg.alt = obj.name;
		objItemImage.appendChild(objItemImageImg);
		//Name
		var objItemName = document.createElement('div');
		objItemName.className = "aod-object-name";
		var objItemNameB = document.createElement('b');
		objItemNameB.innerHTML = obj.name;
		objItemName.appendChild(objItemNameB);
		objItem.appendChild(objItemImage);
		objItem.appendChild(objItemName);
		addObjectDisplay.appendChild(objItem);
		return objItem;
	}
}

function searchType(event) {
	var object = event.target || event.srcElement;
	setTimeout(function() {search(object.value)}, 1);
}

function search(query, cancelRelevance) {
	addObjectDisplay.scrollTop = 0;
	setAodText("SEARCHING...");
	searchObjects = [];
	var removedRelevance = false;
	var queryList = [];
	var exclusions = false;
	if (query) {
		query = query.toLowerCase();
		queryList = query.split(" ");
		if (query.indexOf(" -") > -1) {
			exclusions = true;
		}
		query = "";
		for (var i=0; i < queryList.length; i++) {
			if (!(queryList[i].startsWith("-"))) {
				query += queryList[i] + " ";
			}
		}
		if (query.endsWith(" ")) {
			query = query.substr(0, query.length-1);
		}
	}
	for (var i=0; i < objects.length; i++) {
		var relevance = 0;
		if (!(query) || query.length == "") {
			relevance = 1;
			initSearch = true;
			if (aosSortMain.parentNode.children[1].children[0].innerHTML == "Relevance") {
				aosSortMain.parentNode.children[1].children[0].remove();
				aosSortMain.children[1].innerHTML = "Name";
			}
			removedRelevance = true;
		}
		else {
			var o = objects[i];
			if (query.startsWith("category:")) {
				var query2 = query.removeBefore(":", 1);
				if (o.category1.toLowerCase() == query2 || o.category2.toLowerCase() == query2 || o.category3.toLowerCase() == query2) {
					relevance += 100;
				}
				else if (o.category1.toLowerCase().startsWith(query2) || o.category2.toLowerCase().startsWith(query2) || o.category3.toLowerCase().startsWith(query2)) {
					relevance += 10;
				}
				else if (o.category1.toLowerCase().indexOf(query2) > -1 || o.category2.toLowerCase().indexOf(query2) > -1 || o.category3.toLowerCase().indexOf(query2) > -1) {
					relevance += 1;
				}
			}
			else if (query.startsWith("artist:")) {
				var query2 = query.removeBefore(":", 1);
				if (o.sideImageArtist && o.sideImageArtist.toLowerCase() == query2) {
					relevance = 1;
				}
				else if (o.frontImageArtist && o.frontImageArtist.toLowerCase() == query2) {
					relevance = 1;
				}
				else if (o.topImageArtist && o.topImageArtist.toLowerCase() == query2) {
					relevance = 1;
				}
			}
			else if (query.startsWith("id:")) {
				var query2 = query.removeBefore(":", 1);
				if (o.id == parseInt(query2)) {
					relevance = 1;
				}
			}
			else if (query.startsWith("size:")) {
				var query2 = query.removeBefore(":", 1);
				var size = parseFloat(query2);
				if (query2.endsWith("ly") || query2.endsWith("lys") || query2.endsWith("light years") || query2.endsWith("light-years") || query2.endsWith("light year") || query2.endsWith("light-year")) {size = sizeToKilometers(size, "ly")}
				else if (query2.endsWith("au") || query2.endsWith("aus") || query2.endsWith("astronomical unit") || query2.endsWith("astronomical-unit") || query2.endsWith("astronomical units") || query2.endsWith("astronomical-units")) {size = sizeToKilometers(size, "au")}
				else if (query2.endsWith("km") || query2.endsWith("kilometer") || query2.endsWith("kilometers")) {size = sizeToKilometers(size, "km")}
				else if (query2.endsWith("cm") || query2.endsWith("centimeter") || query2.endsWith("centimeters")) {size = sizeToKilometers(size, "cm")}
				else if (query2.endsWith("mm") || query2.endsWith("millimeter") || query2.endsWith("millimeters")) {size = sizeToKilometers(size, "mm")}
				else if (query2.endsWith("micron") || query2.endsWith("microns") || query2.endsWith("micro") || query2.endsWith("micros") || query2.endsWith("µm") || query2.endsWith("micrometer") || query2.endsWith("micrometers")) {size = sizeToKilometers(size, "micron")}
				else if (query2.endsWith("nm") || query2.endsWith("nanometer") || query2.endsWith("nanometers")) {size = sizeToKilometers(size, "nm")}
				else if (query2.endsWith("pm") || query2.endsWith("picometer") || query2.endsWith("picometers")) {size = sizeToKilometers(size, "pm")}
				else if (query2.endsWith("fm") || query2.endsWith("femtometer") || query2.endsWith("femtometers")) {size = sizeToKilometers(size, "fm")}
				else if (query2.endsWith("am") || query2.endsWith("attometer") || query2.endsWith("attometers")) {size = sizeToKilometers(size, "am")}
				else if (query2.endsWith("mi") || query2.endsWith("mile") || query2.endsWith("miles")) {size = sizeToKilometers(size, "mi")}
				else if (query2.endsWith("ft") || query2.endsWith("foot") || query2.endsWith("feet")) {size = sizeToKilometers(size, "ft")}
				else if (query2.endsWith("in") || query2.endsWith("inch") || query2.endsWith("inches")) {size = sizeToKilometers(size, "in")}
				else if (query2.endsWith("m") || query2.endsWith("meter") || query2.endsWith("meters")) {size = sizeToKilometers(size, "m")}
				if ((size-o.width).toPositive() <= (o.width*0.1) || (size-o.length).toPositive() <= (o.length*0.1) || (size-o.height).toPositive() <= (o.height*0.1)) {
					if ((size-o.width).toPositive() <= (o.width*0.1)) {
						relevance = (o.width/(size-o.width).toPositive().limitDown(0.00001));
					}
					if ((size-o.length).toPositive() <= (o.length*0.1)) {
						relevance = (o.length/(size-o.length).toPositive().limitDown(0.00001));
					}
					if ((size-o.height).toPositive() <= (o.height*0.1)) {
						relevance = (o.height/(size-o.height).toPositive().limitDown(0.00001));
					}
				}
				else {
					relevance = 0;
				}
			}
			else if (query.startsWith("width:")) {
				var query2 = query.removeBefore(":", 1);
				var size = parseFloat(query2);
				if (query2.endsWith("ly") || query2.endsWith("lys") || query2.endsWith("light years") || query2.endsWith("light-years") || query2.endsWith("light year") || query2.endsWith("light-year")) {size = sizeToKilometers(size, "ly")}
				else if (query2.endsWith("au") || query2.endsWith("aus") || query2.endsWith("astronomical unit") || query2.endsWith("astronomical-unit") || query2.endsWith("astronomical units") || query2.endsWith("astronomical-units")) {size = sizeToKilometers(size, "au")}
				else if (query2.endsWith("km") || query2.endsWith("kilometer") || query2.endsWith("kilometers")) {size = sizeToKilometers(size, "km")}
				else if (query2.endsWith("cm") || query2.endsWith("centimeter") || query2.endsWith("centimeters")) {size = sizeToKilometers(size, "cm")}
				else if (query2.endsWith("mm") || query2.endsWith("millimeter") || query2.endsWith("millimeters")) {size = sizeToKilometers(size, "mm")}
				else if (query2.endsWith("micron") || query2.endsWith("microns") || query2.endsWith("micro") || query2.endsWith("micros") || query2.endsWith("µm") || query2.endsWith("micrometer") || query2.endsWith("micrometers")) {size = sizeToKilometers(size, "micron")}
				else if (query2.endsWith("nm") || query2.endsWith("nanometer") || query2.endsWith("nanometers")) {size = sizeToKilometers(size, "nm")}
				else if (query2.endsWith("pm") || query2.endsWith("picometer") || query2.endsWith("picometers")) {size = sizeToKilometers(size, "pm")}
				else if (query2.endsWith("fm") || query2.endsWith("femtometer") || query2.endsWith("femtometers")) {size = sizeToKilometers(size, "fm")}
				else if (query2.endsWith("am") || query2.endsWith("attometer") || query2.endsWith("attometers")) {size = sizeToKilometers(size, "am")}
				else if (query2.endsWith("mi") || query2.endsWith("mile") || query2.endsWith("miles")) {size = sizeToKilometers(size, "mi")}
				else if (query2.endsWith("ft") || query2.endsWith("foot") || query2.endsWith("feet")) {size = sizeToKilometers(size, "ft")}
				else if (query2.endsWith("in") || query2.endsWith("inch") || query2.endsWith("inches")) {size = sizeToKilometers(size, "in")}
				else if (query2.endsWith("m") || query2.endsWith("meter") || query2.endsWith("meters")) {size = sizeToKilometers(size, "m")}
				if ((size-o.width).toPositive() <= (o.width*0.1)) {
					relevance = (o.width/(size-o.width).toPositive().limitDown(0.00001));
				}
				else {
					relevance = 0;
				}
			}
			else if (query.startsWith("length:")) {
				var query2 = query.removeBefore(":", 1);
				var size = parseFloat(query2);
				if (query2.endsWith("ly") || query2.endsWith("lys") || query2.endsWith("light years") || query2.endsWith("light-years") || query2.endsWith("light year") || query2.endsWith("light-year")) {size = sizeToKilometers(size, "ly")}
				else if (query2.endsWith("au") || query2.endsWith("aus") || query2.endsWith("astronomical unit") || query2.endsWith("astronomical-unit") || query2.endsWith("astronomical units") || query2.endsWith("astronomical-units")) {size = sizeToKilometers(size, "au")}
				else if (query2.endsWith("km") || query2.endsWith("kilometer") || query2.endsWith("kilometers")) {size = sizeToKilometers(size, "km")}
				else if (query2.endsWith("cm") || query2.endsWith("centimeter") || query2.endsWith("centimeters")) {size = sizeToKilometers(size, "cm")}
				else if (query2.endsWith("mm") || query2.endsWith("millimeter") || query2.endsWith("millimeters")) {size = sizeToKilometers(size, "mm")}
				else if (query2.endsWith("micron") || query2.endsWith("microns") || query2.endsWith("micro") || query2.endsWith("micros") || query2.endsWith("µm") || query2.endsWith("micrometer") || query2.endsWith("micrometers")) {size = sizeToKilometers(size, "micron")}
				else if (query2.endsWith("nm") || query2.endsWith("nanometer") || query2.endsWith("nanometers")) {size = sizeToKilometers(size, "nm")}
				else if (query2.endsWith("pm") || query2.endsWith("picometer") || query2.endsWith("picometers")) {size = sizeToKilometers(size, "pm")}
				else if (query2.endsWith("fm") || query2.endsWith("femtometer") || query2.endsWith("femtometers")) {size = sizeToKilometers(size, "fm")}
				else if (query2.endsWith("am") || query2.endsWith("attometer") || query2.endsWith("attometers")) {size = sizeToKilometers(size, "am")}
				else if (query2.endsWith("mi") || query2.endsWith("mile") || query2.endsWith("miles")) {size = sizeToKilometers(size, "mi")}
				else if (query2.endsWith("ft") || query2.endsWith("foot") || query2.endsWith("feet")) {size = sizeToKilometers(size, "ft")}
				else if (query2.endsWith("in") || query2.endsWith("inch") || query2.endsWith("inches")) {size = sizeToKilometers(size, "in")}
				else if (query2.endsWith("m") || query2.endsWith("meter") || query2.endsWith("meters")) {size = sizeToKilometers(size, "m")}
				if ((size-o.length).toPositive() <= (o.length*0.1)) {
					relevance = (o.length/(size-o.length).toPositive().limitDown(0.00001));
				}
				else {
					relevance = 0;
				}
			}
			else if (query.startsWith("height:")) {
				var query2 = query.removeBefore(":", 1);
				var size = parseFloat(query2);
				if (query2.endsWith("ly") || query2.endsWith("lys") || query2.endsWith("light years") || query2.endsWith("light-years") || query2.endsWith("light year") || query2.endsWith("light-year")) {size = sizeToKilometers(size, "ly")}
				else if (query2.endsWith("au") || query2.endsWith("aus") || query2.endsWith("astronomical unit") || query2.endsWith("astronomical-unit") || query2.endsWith("astronomical units") || query2.endsWith("astronomical-units")) {size = sizeToKilometers(size, "au")}
				else if (query2.endsWith("km") || query2.endsWith("kilometer") || query2.endsWith("kilometers")) {size = sizeToKilometers(size, "km")}
				else if (query2.endsWith("cm") || query2.endsWith("centimeter") || query2.endsWith("centimeters")) {size = sizeToKilometers(size, "cm")}
				else if (query2.endsWith("mm") || query2.endsWith("millimeter") || query2.endsWith("millimeters")) {size = sizeToKilometers(size, "mm")}
				else if (query2.endsWith("micron") || query2.endsWith("microns") || query2.endsWith("micro") || query2.endsWith("micros") || query2.endsWith("µm") || query2.endsWith("micrometer") || query2.endsWith("micrometers")) {size = sizeToKilometers(size, "micron")}
				else if (query2.endsWith("nm") || query2.endsWith("nanometer") || query2.endsWith("nanometers")) {size = sizeToKilometers(size, "nm")}
				else if (query2.endsWith("pm") || query2.endsWith("picometer") || query2.endsWith("picometers")) {size = sizeToKilometers(size, "pm")}
				else if (query2.endsWith("fm") || query2.endsWith("femtometer") || query2.endsWith("femtometers")) {size = sizeToKilometers(size, "fm")}
				else if (query2.endsWith("am") || query2.endsWith("attometer") || query2.endsWith("attometers")) {size = sizeToKilometers(size, "am")}
				else if (query2.endsWith("mi") || query2.endsWith("mile") || query2.endsWith("miles")) {size = sizeToKilometers(size, "mi")}
				else if (query2.endsWith("ft") || query2.endsWith("foot") || query2.endsWith("feet")) {size = sizeToKilometers(size, "ft")}
				else if (query2.endsWith("in") || query2.endsWith("inch") || query2.endsWith("inches")) {size = sizeToKilometers(size, "in")}
				else if (query2.endsWith("m") || query2.endsWith("meter") || query2.endsWith("meters")) {size = sizeToKilometers(size, "m")}
				if ((size-o.height).toPositive() <= (o.height*0.1)) {
					relevance = (o.height/(size-o.height).toPositive().limitDown(0.00001));
				}
				else {
					relevance = 0;
				}
			}
			else {
				var excluded = false;
				if (exclusions == true) {
					for (var i2=0; i2 < queryList.length; i2++) {
						if (queryList[i2].length > 1 && queryList[i2].startsWith("-")) {
							var q = queryList[i2].removeBefore("-", 1, true);
							if (o.name.toLowerCase().indexOf(q) > -1 || o.category1.toLowerCase().indexOf(q) > -1 || o.category2.toLowerCase().indexOf(q) > -1 || o.category3.toLowerCase().indexOf(q) > -1) {
								excluded = true;
								break;
							}
						}
					}
				}
				if (excluded == false && query == o.name.toLowerCase()) {
					relevance = 1000000;
				}
				else if (excluded == false && o.name.toLowerCase().startsWith(query)) {
					relevance += 10000;
				}
				else if (excluded == false && o.name.toLowerCase().indexOf(query) > -1) {
					relevance += 1000;
				}
				if (excluded == false && o.category1.toLowerCase().replace(/\-/g, " ").startsWith(query)) {
					relevance += 100;
				}
				else if (excluded == false && o.category1.toLowerCase().replace(/\-/g, " ").indexOf(query) > -1) {
					relevance += 10;
				}
				if (excluded == false && o.category2.toLowerCase().replace(/\-/g, " ").startsWith(query)) {
					relevance += 100;
				}
				else if (excluded == false && o.category2.toLowerCase().replace(/\-/g, " ").indexOf(query) > -1) {
					relevance += 10;
				}
				if (excluded == false && o.category3.toLowerCase().replace(/\-/g, " ").startsWith(query)) {
					relevance += 100;
				}
				else if (excluded == false && o.category3.toLowerCase().replace(/\-/g, " ").indexOf(query) > -1) {
					relevance += 10;
				}
				if (excluded == false && o.tags) {
					for (var i2=0; i2 < o.tags.length; i2++) {
						if (exclusions == true) {
							for (var i3=0; i3 < queryList.length; i3++) {
								if (queryList[i3].length > 1 && queryList[i3].startsWith("-")) {
									var q = queryList[i3].removeBefore("-", 1, true);
									if (o.tags[i2].toLowerCase().indexOf(q) > -1) {
										excluded = true;
										break;
									}
								}
							}
						}
						if (excluded == false && o.tags[i2].toLowerCase() == query) {
							relevance += 500;
						}
						else if (excluded == false && o.tags[i2].toLowerCase().startsWith(query)) {
							relevance += 10;
						}
						else if (excluded == false && o.tags[i2].toLowerCase().indexOf(query) > -1) {
							relevance += 5;
						}
					}
				}
				if (excluded == false && o.searchBoosts) {
					for (var i2=0; i2 < o.searchBoosts.length; i2++) {
						if (query == o.searchBoosts[i2].query) {
							relevance += o.searchBoosts[i2].boost;
						}
					}
				}
			}
		}
		if (relevance > 0) {
			searchObjects.push(objects[i]);
			searchObjects[searchObjects.length-1].id = i+1;
			searchObjects[searchObjects.length-1].relevance = relevance;
		}
	}
	if (searchObjects.length > 0) {
		if (initSearch == true && removedRelevance == false && !(cancelRelevance == true)) {
			aosSortMain.children[1].innerHTML = "Relevance";
			var rel = document.createElement('p');
			rel.addEventListener('click', function(event) {dropdownSelect(event); sortSearchObjects(true)})
			rel.innerHTML = "Relevance";
			aosSortMain.parentNode.children[1].prepend(rel);
		}
		if (searchObjects.length < objects.length) {
			initSearch = false;
		}
		sortSearchObjects();
		setAodText();
		aosObjectCount.innerHTML = searchObjects.length.toLocaleString() + " of " + objects.length.toLocaleString() + " objects";
		redrawSearchObjects();
	}
	else {
		setAodText("NO OBJECTS");
	}
}

function sortSearchObjects(redraw) {
	if (aosSortMain.children[1].textContent == "Relevance") {
		searchObjects.sort((a, b) => (a.relevance < b.relevance) ? 1 : (a.relevance === b.relevance) ? ((a.name > b.name) ? 1 : -1) : -1);
	}
	else if (aosSortMain.children[1].textContent == "Largest") {
		searchObjects.sort((a, b) => (((a.width + a.length + a.height) / 3) < ((b.width + b.length + b.height) / 3)) ? 1 : (((a.width + a.length + a.height) / 3) === ((b.width + b.length + b.height) / 3)) ? ((a.name > b.name) ? 1 : -1) : -1);
	}
	else if (aosSortMain.children[1].textContent == "Smallest") {
		searchObjects.sort((a, b) => (((a.width + a.length + a.height) / 3) > ((b.width + b.length + b.height) / 3)) ? 1 : (((a.width + a.length + a.height) / 3) === ((b.width + b.length + b.height) / 3)) ? ((a.name > b.name) ? 1 : -1) : -1);
	}
	else if (aosSortMain.children[1].textContent == "Newest") {
		searchObjects.sort((a, b) => (a.id < b.id) ? 1 : -1);
	}
	else if (aosSortMain.children[1].textContent == "Oldest") {
		searchObjects.sort((a, b) => (a.id > b.id) ? 1 : -1);
	}
	else {
		searchObjects.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) ? ((a.id < b.id) ? 1 : -1) : -1);
	}
	if (redraw == true && !(addObjectDisplay.children[0].innerHTML == "NO OBJECTS")) {
		redrawSearchObjects(true);
	}
}

function redrawSearchObjects(clear) {
	if (clear == true) {
		while (addObjectDisplay.lastChild) {addObjectDisplay.lastChild.remove()};
	}
	addObjectDisplay.scrollTop = 0;
	if (window.innerWidth <= 550) {aodItemRowCount = 3}
	else if (window.innerWidth <= 420) {aodItemRowCount = 2}
	else if (window.innerWidth <= 300) {aodItemRowCount = 1}
	else {aodItemRowCount = 4};
	if (window.innerWidth > 800) {aodEstHeight = (window.innerHeight-50)*0.8}
	else {aodEstHeight = window.innerHeight-70};
	aodEstHeight = aodEstHeight.round();
	aodMaxItemCount = (aodEstHeight / ((140/aodItemRowCount) + 1.5)) * 4;
	aodItemEstHeight = (140/aodItemRowCount) + 1.5;
	if (aosDisplay == 1) {
		aodItemEstHeight = 22 + 1.5;
		aodMaxItemCount = (aodEstHeight / (22 + 1.5)) * 4;
	}
	aodMaxItemCount = aodMaxItemCount.round();
	for (var i=0; i < searchObjects.length; i++) {
		if (i < aodMaxItemCount) {
			drawSearchObject(searchObjects[i])
		}
		else {
			break;
		}
	}
}

function redrawCompareObjects(clear) {
	if (clear == true) {
		while (objectList.lastChild) {objectList.lastChild.remove()};
	}
	for (var i=0; i < compareObjects.length; i++) {
		drawCompareObject(compareObjects[i])
	}
}

function selectElement(event) {
	var object = event.target || event.srcElement;
	for (var i=0; i < elements.length; i++) {
		if (elements[i].n.toLowerCase() == object.id) {
			currentElement = i+1;
			break;
		}
	}
}

function oliSelect(event) {
	var object = event.target || event.srcElement;
	if (event.type == "mouseenter") {
		//if (object.parentNode)
	}
}

function toggleDropdown(event, mode) {
	var object;
	if (event.innerHTML) {
		object = event;
	}
	else {
		object = event.target || event.srcElement;
	}
	if (object.parentNode.children[1].style.transform && !(mode == 0)) {
		object.parentNode.children[1].style.transform = null;
		object.parentNode.children[1].style.opacity = null;
		object.style.borderRadius = "5px 5px 0px 0px";
	}
	else {
		object.parentNode.children[1].style.transform = "scaleY(0)";
		object.parentNode.children[1].style.opacity = "0";
		object.style.borderRadius = null;
	}
}

function dropdownSelect(event) {
	var object = event.target || event.srcElement;
	object.parentNode.parentNode.children[0].children[1].textContent = object.textContent;
	toggleDropdown(object.parentNode.parentNode.children[0], 0);
}

function startBrightness(unit) {
	document.body.style.userSelect = "none";
	if (unit == "drawing") {
		drawingBrightnessDown = true;
		setDrawingBrightness();
	}
	else if (unit == 'background') {
		backgroundBrightnessDown = true;
		setBackgroundBrightness();
	}
}

function setDrawingBrightness() {
	var value = cursorInfo('ey', drawingBrightness.children[0]);
	value = ((value-7)/((drawingBrightness.children[0].offsetHeight-16)/100))/100;
	if (value > 1){
		value = 1;
	}
	else if (value < 0) {
		value = 0;
	}
	drawingBrightness.children[0].children[0].style.top = ((value*(backgroundBrightness.children[0].offsetHeight-18))+2)+"px";
	drawingBrightnessValue = 1-value;
	displayCanvas.style.filter = "brightness(" + (1-value.round(2)) + ")";
}

function setBackgroundBrightness() {
	var value = cursorInfo('ey', backgroundBrightness.children[0]);
	value = ((value-7)/((backgroundBrightness.children[0].offsetHeight-16)/100))/100;
	if (value > 1){
		value = 1;
	}
	else if (value < 0) {
		value = 0;
	}
	backgroundBrightness.children[0].children[0].style.top = ((value*(backgroundBrightness.children[0].offsetHeight-18))+2)+"px";
	backgroundBrightnessValue = 1-value;
	value = ((1-value.round(2))*255);
	displayCanvas.parentNode.style.background = "rgb(" + value + ", " + value + ", " + value + ")";
}

function toggleDBrightness() {
	if (backgroundBrightness.style.opacity == "1") {
		backgroundBrightness.style.opacity = "0";
		backgroundBrightness.style.transform = "scaleY(0)";
	}
	if (drawingBrightness.style.opacity == "0") {
		drawingBrightness.style.opacity = "1";
		drawingBrightness.style.transform = "scaleY(1)";
	}
	else {
		drawingBrightness.style.opacity = "0";
		drawingBrightness.style.transform = "scaleY(0)";
	}
}

function toggleBBrightness() {
	if (drawingBrightness.style.opacity == "1") {
		drawingBrightness.style.opacity = "0";
		drawingBrightness.style.transform = "scaleY(0)";
	}
	if (backgroundBrightness.style.opacity == "0") {
		backgroundBrightness.style.opacity = "1";
		backgroundBrightness.style.transform = "scaleY(1)";
	}
	else {
		backgroundBrightness.style.opacity = "0";
		backgroundBrightness.style.transform = "scaleY(0)";
	}
}

function sizeToKilometers(size, unit) {
	if (unit == "ly") {return size * 9460730472580.8}
	else if (unit == "au") {return size * 149597870.7}
	else if (unit == "m") {return size / 1000}
	else if (unit == "cm") {return size / 100000}
	else if (unit == "mm") {return size / 1000000}
	else if (unit == "micron") {return size / 1000000000}
	else if (unit == "nm") {return size / 1000000000000}
	else if (unit == "pm") {return size / 1000000000000000}
	else if (unit == "fm") {return size / 1000000000000000000}
	else if (unit == "am") {return size / 1000000000000000000000}
	else if (unit == "mi") {return size / 0.62137119223733}
	else if (unit == "ft") {return size * 0.0003048}
	else if (unit == "in") {return size * 0.0000254}
	else {return size};
}

function writeSize(size, decimals, abbreviate, imperial) {
	var unit = " kilometers";
	var convert = 0;
	var method = "div";
	var unitI = " miles";
	var convertI = 0;
	var methodI = "div";
	var includeI = false;
	if (size >= 946073047258.08) {
		if (abbreviate && abbreviate == true) {unit = "ly"}
		else {unit = " light-years"};
		convert = 9460730472580.8;
		method = "div";
		includeI = false;
	}
	else if (size >= 149597870.7) {
		if (abbreviate && abbreviate == true) {unit = "au"}
		else {unit = " astronomical units"};
		convert = 149597870.7;
		method = "div";
		includeI = false;
	}
	else if (size >= 1) {
		if (imperial && imperial == true) {
			if (abbreviate && abbreviate == true) {unitI = "mi"}
			else {unitI = " miles"};
			convertI = 0.62137119223733;
			methodI = "mul";
			includeI = true;
		}
		if (abbreviate && abbreviate == true) {unit = "km"}
		else {unit = " kilometers"};
		convert = 1;
		method = "mul";
	}
	else if (size >= 0.001) {
		if (imperial && imperial == true) {
			if (abbreviate && abbreviate == true) {unitI = "ft"}
			else {unitI = " feet"};
			convertI = 0.0003048;
			methodI = "div";
			includeI = true;
		}
		if (abbreviate && abbreviate == true) {unit = "m"}
		else {unit = " meters"};
		convert = 1000;
		method = "mul";
	}
	else if (size >= 0.00001) {
		if (imperial && imperial == true) {
			if (abbreviate && abbreviate == true) {unitI = "in"}
			else {unitI = " inches"};
			convertI = 0.0000254;
			methodI = "div";
			includeI = true;
		}
		if (abbreviate && abbreviate == true) {unit = "cm"}
		else {unit = " centimeters"};
		convert = 100000;
		method = "mul";
	}
	else if (size >= 0.000001) {
		if (imperial && imperial == true) {
			if (abbreviate && abbreviate == true) {unitI = "in"}
			else {unitI = " inches"};
			convertI = 0.0000254;
			methodI = "div";
			includeI = true;
		}
		if (abbreviate && abbreviate == true) {unit = "mm"}
		else {unit = " millimeters"};
		convert = 1000000;
		method = "mul";
	}
	else if (size >= 0.000000001) {
		if (imperial && imperial == true) {
			if (abbreviate && abbreviate == true) {unitI = "in"}
			else {unitI = " inches"};
			convertI = 0.0000254;
			methodI = "div";
			includeI = true;
		}
		if (abbreviate && abbreviate == true) {unit = "µm"}
		else {unit = " micrometers"};
		convert = 1000000000;
		method = "mul";
	}
	else if (size >= 0.000000000001) {
		if (abbreviate && abbreviate == true) {unit = "nm"}
		else {unit = " nanometers"};
		convert = 1000000000000;
		method = "mul";
		includeI = false;
	}
	else if (size >= 0.000000000000001) {
		if (abbreviate && abbreviate == true) {unit = "pm"}
		else {unit = " picometers"};
		convert = 1000000000000000;
		method = "mul";
		includeI = false;
	}
	else if (size >= 0.000000000000000001) {
		if (abbreviate && abbreviate == true) {unit = "fm"}
		else {unit = " femtometers"};
		convert = 1000000000000000000;
		method = "mul";
		includeI = false;
	}
	else {
		if (abbreviate && abbreviate == true) {unit = "am"}
		else {unit = " attometers"};
		convert = 1000000000000000000000;
		method = "mul";
		includeI = false;
	}
	if (decimals == null) {
		decimals = 2;
	}
	var metricSize;
	if (method == "div") {
		metricSize = (size / convert).round(decimals);
	}
	else if (method == "mul") {
		metricSize = (size * convert).round(decimals);
	}
	if (metricSize == 1) {
		if (unit.endsWith("s")) {
			unit = unit.substring(0, unit.length-1);
		}
	}
	var imperialSize;
	var imperialString;
	if (imperial && imperial == true && includeI) {
		if (methodI == "div") {
			imperialSize = (size / convertI).round(decimals);
		}
		else if (methodI == "mul") {
			imperialSize = (size * convertI).round(decimals);
		}
		if (imperialSize == 1) {
			if (unitI.endsWith("s")) {
				unitI = unitI.substring(0, unitI.length-1);
			}
		}
		return metricSize.toLocaleString() + unit + " (" + imperialSize.toLocaleString() + unitI + ")";
	}
	else {
		return metricSize.toLocaleString() + unit;
	}
}

function writeDate(dateString) {
	var year = parseInt(dateString.removeAfter("/", -1));
	var month = parseInt(dateString.removeAfter("/", -1, true).removeBefore("/", 1));
	var day = parseInt(dateString.removeBefore("/", 1, true));
	var strMonth = "";
	if (month == 1) {strMonth = "January"}
	else if (month == 2) {strMonth = "February"}
	else if (month == 3) {strMonth = "March"}
	else if (month == 4) {strMonth = "April"}
	else if (month == 5) {strMonth = "May"}
	else if (month == 6) {strMonth = "June"}
	else if (month == 7) {strMonth = "July"}
	else if (month == 8) {strMonth = "August"}
	else if (month == 9) {strMonth = "September"}
	else if (month == 10) {strMonth = "October"}
	else if (month == 11) {strMonth = "November"}
	else if (month == 12) {strMonth = "December"};
	return strMonth + " " + day + ", " + year;
}

function getAlignment(align) {
	if (align == "none") {return "Middle"}
	else {return align.toProperCase()};
}

function  getImageURL(id, angle) {
	var url = "./compare-size/images/" + objects[id-1].category1;
	if (objects[id-1].category2) {
		url += "/" + objects[id-1].category2;
	}
	if (objects[id-1].category3) {
		url += "/" + objects[id-1].category3;
	}
	if (angle == 1) {
		url += "/" + objects[id-1].frontImage + ".svg";
	}
	else if (angle == 2) {
		url += "/" + objects[id-1].topImage + ".svg";
	}
	else {
		url += "/" + objects[id-1].sideImage + ".svg";
	}
	return url;
}

function copyImage() {
	makeCanvasImage();
	displayCanvas.toBlob(blob => navigator.clipboard.write([new ClipboardItem({'image/png': blob})]));
}

function downloadImage() {
	makeCanvasImage();
	var l = document.createElement('a');
	l.href = displayCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	var filename = "Comparison";
	for (var i=0; i < compareObjects.length; i++) {
		if (i==0) {
			filename += " - ";
		}
		else {
			filename += " and ";
		}
		filename += compareObjects[i].name.replace(/\(/g, "").replace(/\)/g, "");
	}
	l.download = filename + ".png";
	l.click();
	l.remove();
}

function makeCanvasImage() {
	selectAll(-1);
	var c = displayCanvas.getContext('2d');
	var cdata = c.getImageData(0, 0, displayCanvas.width, displayCanvas.height);
	var cpix = cdata.data;
	for (var i=0; i < cpix.length; i+=4) {
		var r = cpix[i]; var g = cpix[i+1]; var b = cpix[i+2]; var a = cpix[i+3];
		if (a > 0) {
			cpix[i] = drawingBrightnessValue*255;
			cpix[i+1] = drawingBrightnessValue*255;
			cpix[i+2] = drawingBrightnessValue*255;
		}
		else {
			cpix[i] = backgroundBrightnessValue*255;
			cpix[i+1] = backgroundBrightnessValue*255;
			cpix[i+2] = backgroundBrightnessValue*255;
		}
		cpix[i+3] = 255;
	}
	c.putImageData(cdata, 0, 0);
}

function donate() {
	var l = document.createElement('a');
	l.href = "https://www.paypal.com/donate?business=inquiries@blendertimer.com&no_recurring=0&item_name=BlenderTimer+Compare+Tool+Donation";
	l.target = "blank";
	l.click();
	l.remove();
}

function searchCategory(tag) {
	var element = event.target || event.srcElement;
	if (tag == true) {
		search(element.textContent);
		aosSearch.value = element.textContent;
	}
	else {
		search("category:" + element.textContent);
		aosSearch.value = "category:" + element.textContent;
	}
	popup('add-object');
}

function loadContributors() {
	var totalContributions = 0;
	for (var i=0; i < objects.length; i++) {
		var o = objects[i];
		if (o.sideImageArtist && o.sideImageArtist.length > 0) {
			var contFound = false;
			for (var i2=0; i2 < contributors.length; i2++) {
				if (contributors[i2].name == o.sideImageArtist) {
					contributors[i2].contributions.push({name:o.sideImage,date:o.sideImageDate,objectID:o.id});
					totalContributions += 1;
					contFound = true;
					break;
				}
			}
			if (contFound == false) {
				contributors.push({name:o.sideImageArtist});
				contributors[contributors.length-1].contributions = [{name:o.sideImage,date:o.sideImageDate,objectID:o.id}];
					totalContributions += 1;
			}
		}
		if (o.frontImageArtist && o.frontImageArtist.length > 0) {
			var contFound = false;
			for (var i2=0; i2 < contributors.length; i2++) {
				if (contributors[i2].name == o.frontImageArtist) {
					contributors[i2].contributions.push({name:o.frontImage,date:o.frontImageDate,objectID:o.id});
					totalContributions += 1;
					contFound = true;
					break;
				}
			}
			if (contFound == false) {
				contributors.push({name:o.frontImageArtist});
				contributors[contributors.length-1].contributions = [{name:o.frontImage,date:o.frontImageDate,objectID:o.id}];
				totalContributions += 1;
			}
		}
		if (o.topImageArtist && o.topImageArtist.length > 0) {
			var contFound = false;
			for (var i2=0; i2 < contributors.length; i2++) {
				if (contributors[i2].name == o.topImageArtist) {
					contributors[i2].contributions.push({name:o.topImage,date:o.topImageDate,objectID:o.id});
					totalContributions += 1;
					contFound = true;
					break;
				}
			}
			if (contFound == false) {
				contributors.push({name:o.topImageArtist});
				contributors[contributors.length-1].contributions = [{name:o.topImage,date:o.topImageDate,objectID:o.id}];
				totalContributions += 1;
			}
		}
	}
	contributors.sort((a, b) => (a.contributions.length < b.contributions.length) ? 1 : (a.contributions.length === b.contributions.length) ? (((new Date(parseInt(a.contributions[a.contributions.length-1].date.removeAfter("/", -1)), parseInt(a.contributions[a.contributions.length-1].date.removeBefore("/", 1).removeAfter("/", -1, true))-1, parseInt(a.contributions[a.contributions.length-1].date.removeBefore("/", 1, true)))) < (new Date(parseInt(b.contributions[b.contributions.length-1].date.removeAfter("/", -1)), parseInt(b.contributions[b.contributions.length-1].date.removeBefore("/", 1).removeAfter("/", -1, true))-1, parseInt(b.contributions[b.contributions.length-1].date.removeBefore("/", 1, true))))) ? 1 : -1) : -1);
	for (var i=0; i < contributors.length; i++) {
		contributors[i].rank = i+1;
		contributors[i].contributions.sort((a, b) => (a.id > b.id) ? 1 : -1);
		if (contributors[i].contributions.length >= 1000) {contributors[i].level = 10}
		else if (contributors[i].contributions.length >= 500) {contributors[i].level = 9}
		else if (contributors[i].contributions.length >= 200) {contributors[i].level = 8}
		else if (contributors[i].contributions.length >= 100) {contributors[i].level = 7}
		else if (contributors[i].contributions.length >= 75) {contributors[i].level = 6}
		else if (contributors[i].contributions.length >= 50) {contributors[i].level = 5}
		else if (contributors[i].contributions.length >= 25) {contributors[i].level = 4}
		else if (contributors[i].contributions.length >= 10) {contributors[i].level = 3}
		else if (contributors[i].contributions.length >= 5) {contributors[i].level = 2}
		else {contributors[i].level = 1};
	}
	document.getElementById('ic-des').textContent = "HUGE thanks to the " + contributors.length + " contributors who have collectively contributed " + totalContributions + " graphics to make this free web tool possible!";
}

function viewContributor(contID, first) {
	if (first == null) {first = true};
	var cont = contributors[contID-1];
	contributorInfo.children[0].innerHTML = cont.name;
	ciLeft.children[0].children[0].innerHTML = cont.contributions.length;
	ciLeft.children[1].children[0].innerHTML = "#" + cont.rank;
	ciRight.children[0].children[0].src = "../static-0/files/images/compare-level-" + cont.level + ".svg";
	ciRight.children[1].children[0].innerHTML = "<b>" + getLevelName(cont.level) + "</b><i>(Level " + cont.level + ")</i>";
	for (var i=0; i < ciRight.children[1].children[1].children[0].children.length; i++) {
		if (i < cont.level) {
			ciRight.children[1].children[1].children[0].children[i].style.opacity = null;
		}
		else {
			ciRight.children[1].children[1].children[0].children[i].style.opacity = "0.2";
		}
	}
	if (cont.level == 10) {
		ciRight.children[1].children[1].children[1].innerHTML = "<b>0 contributions to next level</b><i>(MAX LEVEL REACHED)</i>";
	}
	else {
		ciRight.children[1].children[1].children[1].innerHTML = "<b>" + getContsToNextLevel(cont.contributions.length, cont.level, false) + " contributions to next level</b><i>(" + getContsToNextLevel(cont.contributions.length, cont.level, true) + "%)</i>";
	}
	ciRight.children[1].children[1].children[2].children[0].style.width = ((getContsToNextLevel(cont.contributions.length, cont.level, true)*0.96)+2) + "%";
	contributorInfo.children[1].children[0].children[2].children[0].innerHTML = "<b>First Contribution: </b><p>" + writeDate(cont.contributions[cont.contributions.length-1].date) + "</p><i> (" + cont.contributions[cont.contributions.length-1].name + ")</i>";
	contributorInfo.children[1].children[0].children[2].children[1].innerHTML = "<b>Latest Contribution: </b><p>" + writeDate(cont.contributions[0].date) + "</p><i> (" + cont.contributions[0].name + ")</i>";
	contributorInfo.children[1].children[0].children[3].id = "cont-" + contID;
	popup('contributor-info', first);
}

function getLevelName(level) {
	if (level == 1) {return "Good"}
	if (level == 2) {return "Better"}
	if (level == 3) {return "Great"}
	if (level == 4) {return "Super"}
	if (level == 5) {return "Phenomenal"}
	if (level == 6) {return "Remarkable"}
	if (level == 7) {return "Amazing"}
	if (level == 8) {return "Outstanding"}
	if (level == 9) {return "Incredible"}
	if (level == 10) {return "Legend"}
}

function viewContsObjects(event) {
	var element = event.target || event.srcElement
	aosSortMain.children[1].innerHTML = "Newest";
	search("artist:" + contributors[parseInt(element.id.removeBefore("-", 1, true))-1].name, true);
	aosSearch.value = "artist:" + contributors[parseInt(element.id.removeBefore("-", 1, true))-1].name;
	popup('add-object');
}

function getContsToNextLevel(conts, level, returnPercentage) {
	if (level == 1) {
		if (returnPercentage == true) {
			return 100 - (((5 - conts) / (5-1)) * 100).round(0);
		}
		else {
			return 5 - conts;
		}
	}
	else if (level == 2) {
		if (returnPercentage == true) {
			return 100 - (((10 - conts) / (10-5)) * 100).round(0);
		}
		else {
			return 10 - conts;
		}
	}
	else if (level == 3) {
		if (returnPercentage == true) {
			return 100 - (((25 - conts) / (25-10)) * 100).round(0);
		}
		else {
			return 25 - conts;
		}
	}
	else if (level == 4) {
		if (returnPercentage == true) {
			return 100 - (((50 - conts) / (50-25)) * 100).round(0);
		}
		else {
			return 50 - conts;
		}
	}
	else if (level == 5) {
		if (returnPercentage == true) {
			return 100 - (((75 - conts) / (75-50)) * 100).round(0);
		}
		else {
			return 75 - conts;
		}
	}
	else if (level == 6) {
		if (returnPercentage == true) {
			return 100 - (((100 - conts) / (100-75)) * 100).round(0);
		}
		else {
			return 100 - conts;
		}
	}
	else if (level == 7) {
		if (returnPercentage == true) {
			return 100 - (((200 - conts) / (200-100)) * 100).round(0);
		}
		else {
			return 200 - conts;
		}
	}
	else if (level == 8) {
		if (returnPercentage == true) {
			return 100 - (((500 - conts) / (500-200)) * 100).round(0);
		}
		else {
			return 500 - conts;
		}
	}
	else if (level == 9) {
		if (returnPercentage == true) {
			return 100 - (((1000 - conts) / (1000-500)) * 100).round(0);
		}
		else {
			return 1000 - conts;
		}
	}
	else if (level == 10) {
		if (returnPercentage == true) {
			return 100;
		}
		else {
			return 0;
		}
	}
}

function drawContributor(contID) {
	var cont = contributors[contID-1];
	var cli = document.createElement('div');
	cli.className = "contributor-list-item";
	cli.addEventListener('click', function(event) {
		var element = event.target || event.srcElement;
		viewContributor(parseInt(element.children[2].children[0].children[0].children[0].innerHTML.removeBefore("#", 1, true)));
	});
	//Brightness ----------
	var cb = document.createElement('div');
	cb.className = "cli-brightness";
	cb.style.opacity = "0";
	cli.appendChild(cb);
	//Name ----------
	var cname = document.createElement('h1');
	cname.className = "cli-name";
	cname.innerHTML = cont.name;
	cli.appendChild(cname);
	//Main ----------
	var cmain = document.createElement('div');
	cmain.className = "cli-main";
	//Level ----------
	var clevel = document.createElement('div');
	clevel.className = "cli-level";
	var crank = document.createElement('div');
	crank.className = "cli-rank";
	crank.innerHTML = "<b>#" + cont.rank + "</b>";
	clevel.appendChild(crank);
	var clevelimg = document.createElement('img');
	clevelimg.src = "../static-0/files/images/compare-level-" + cont.level + ".svg";
	clevelimg.alt = "Level badge";
	clevel.appendChild(clevelimg);
	cmain.appendChild(clevel);
	//Level ----------
	var cconts = document.createElement('div');
	cconts.className = "cli-conts";
	cconts.innerHTML = "<b>CONTRIBUTIONS</b><h1>" + cont.contributions.length + "</h1>";
	cmain.appendChild(cconts);
	cli.appendChild(cmain);
	contributorList.appendChild(cli);
}

function searchContributorsType(event) {
	var element = event.target || event.srcElement;
	searchContributors(element.value);
}

function searchContributors(query) {
	visibleContributors = [];
	if (query) {query = query.toLowerCase()};
	for (var i=0; i < contributors.length; i++) {
		var cont = contributors[i];
		var relevance = 0;
		if (!(query) || query.length == 0) {
			relevance = contributors.length - i;
		}
		else {
			if (cont.name.toLowerCase() == query) {
				relevance = 1000;
			}
			else if (cont.name.toLowerCase().startsWith(query)) {
				relevance += 100;
			}
			else if (cont.name.toLowerCase().indexOf(query) > -1) {
				relevance += 10;
			}
		}
		if (relevance > 0) {
			visibleContributors.push(cont);
			visibleContributors[visibleContributors.length-1].relevance = relevance;
		}
	}
	sortConts();
}

function sortConts() {
	while (contributorList.lastChild) {contributorList.lastChild.remove()};
	if (contributorSortMain.children[1].textContent == "Latest Contribution") {
		visibleContributors.sort((a, b) => (a.contributions[0].objectID < b.contributions[0].objectID) ? 1 : -1);
	}
	else if (contributorSortMain.children[1].textContent == "Contributions") {
		visibleContributors.sort((a, b) => (a.contributions.length < b.contributions.length) ? 1 : (a.contributions.length === b.contributions.length) ? ((a.contributions[a.contributions.length-1].objectID > b.contributions[b.contributions.length-1].objectID) ? 1 : -1) : -1);
	}
	else if (contributorSortMain.children[1].textContent == "Contributor Name") {
		visibleContributors.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);
	}
	else {
		visibleContributors.sort((a, b) => (a.relevance < b.relevance) ? 1 : (a.relevance === b.relevance) ? ((a.contributions[0].objectID < b.contributions[0].objectID) ? 1 : -1) : -1);
	}
	for (var i=0; i < visibleContributors.length; i++) {drawContributor(visibleContributors[i].rank)};
}

function toggleHowTo(event) {
	var element = event.target || event.srcElement;
	if (element.parentNode.children[1].style.display) {
		element.parentNode.children[1].style.display = null;
		element.parentNode.style.background = "var(--base-back)";
	}
	else {
		element.parentNode.children[1].style.display = "none";
		element.parentNode.style.background = null;
	}
}

function helpScroll(id) {
	document.getElementById('help-popupscroll').scrollTop = document.getElementById('help-' + id).offsetTop;
}

function checkInitialURL() {
	var url = window.location.toString();
	var urlEnd = url;
	if (url.indexOf("?") > -1) {urlEnd = url.removeBefore("?")}
	else if (url.indexOf("#") > -1) {urlEnd = url.removeBefore("#")};
	if (urlEnd.startsWith("?recommend-object") || urlEnd.startsWith("?recommend") || urlEnd.startsWith("?recommend-objects") || urlEnd.startsWith("?ro") || urlEnd.startsWith("?r") || urlEnd.startsWith("?request") || urlEnd.startsWith("?request-object") || urlEnd.startsWith("?request-objects")) {
		popup('recommend-object', true);
	}
	else if (urlEnd.startsWith("?submit-object") || urlEnd.startsWith("?submit-objects") || urlEnd.startsWith("?submit-object-images") || urlEnd.startsWith("?submit") || urlEnd.startsWith("?s") || urlEnd.startsWith("?so") || urlEnd.startsWith("?soi") || urlEnd.startsWith("?si") || urlEnd.startsWith("?submit-images") || urlEnd.startsWith("?submit-image") || urlEnd.startsWith("?contribute")) {
		popup('submit-images', true);
	}
	else if (urlEnd.startsWith("?help") || urlEnd.startsWith("?h") || urlEnd.startsWith("?support")) {
		popup('help', true);
	}
	else if (urlEnd.startsWith("?artist:")) {
		var an = urlEnd.removeBefore("?artist:", 8, true).toLowerCase();
		for (var i=0; i < contributors.length; i++) {
			if (contributors[i].name.toLowerCase() == an.replace(/\%20/g, " ")) {
				viewContributor(i+1);
				break;
			}
		}
	}
	else if (urlEnd.startsWith("?objects=")) {
		var objList = urlEnd.removeBefore("?objects=", 9, true).split("&");
		for (var i=0; i < objList.length; i++) {
			addObject(parseInt(objList[i]));
		}
		while (objectUndoList.length > 0) {
			objectUndoList.shift();
			extraUndoList.shift();
			undoPosition -= 1;
		}
	}
	else {
		popup('add-object', true);
	}
}

function imageAuthorClick(e) {
	var element = e.target || e.srcElement;
	for (var i=0; i < contributors.length; i++) {
		if (contributors[i].name == element.textContent) {
			viewContributor(i+1, false);
			break;
		}
	}
}