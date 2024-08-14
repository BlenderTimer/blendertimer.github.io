//———————————HTML ELEMENTS——————————————————
var beepObject = document.getElementById("beep-object");
var beep30s = document.getElementById("beep-30s");
var fpsText = document.getElementById("fps-text");

var solarSystem = document.getElementById("solar-system");
var canvasShadow = document.getElementById("canvas-shadow");
var ssCanvas = document.getElementById("ss-canvas");
var canvasClick = document.getElementById("canvas-click");

var controls = document.getElementById("controls");
var icDistance = document.getElementById("ic-distance");
var icDistanceUnit = document.getElementById("ic-distance-unit");
var icTime = document.getElementById("ic-time");
var cSpeed = document.getElementById("c-speed");
var cSpeedUnit = document.getElementById("c-speed-unit");
var cSpeedX = document.getElementById("c-speed-x");
var cSpeedX05 = document.getElementById("c-speed-x05");
var cSpeedX1 = document.getElementById("c-speed-x1");
var cSpeedX2 = document.getElementById("c-speed-x2");
var cSpeedX10 = document.getElementById("c-speed-x10");
var cZoom = document.getElementById("c-zoom");

var journeyList = document.getElementById("journey-list");
//——————————————————————————————————————————

var ss2d = ssCanvas.getContext("2d");
var objects = [];
var started = false;
var endAnimation = true;
var grid = true;
var lastDistanceInput = 0;
var lastSpeedInput = 0;
var beeps = true;
var lastNextTime = 100000;

//———————————SETTINGS———————————————————————
var speedMultiplier = 1;
var zoom = 243;
var sizeBias = 350000;
//——————————————————————————————————————————

function voyager(probe) {
	//Calculate date from current_ms-((current_km_distance/speed)*1000)
	if (probe == 1) {
		var speed = 16.9994873; // km/s
		var date = new Date(276856370061);
		return ((Date.now()-date.getTime())/1000)*speed;
	}
	else if (probe == 2) {
		var speed = 15.3741437; // km/s
		var date = new Date(387319077994);
		return ((Date.now()-date.getTime())/1000)*speed;
	}
	else {
		return 0;
	}
}

function loadJourney() {
	document.getElementById('voyager2').children[1].children[2].innerHTML = voyager(2).round(0).toLocaleString() + " kilometers";
	document.getElementById('voyager2').children[1].children[3].innerHTML = (voyager(2)*0.62137119223733).round(0).toLocaleString() + " miles";
	document.getElementById('voyager1').children[1].children[2].innerHTML = voyager(1).round(0).toLocaleString() + " kilometers";
	document.getElementById('voyager1').children[1].children[3].innerHTML = (voyager(1)*0.62137119223733).round(0).toLocaleString() + " miles";
	for (var i=0; i < journeyList.children.length; i++) {
		objects.push({
			id:i,
			image:journeyList.children[i].children[0].src,
			img:journeyList.children[i].children[0],
			name:journeyList.children[i].children[1].children[0].textContent,
			distance:parseFloat(journeyList.children[i].children[1].children[2].textContent.replace(/,/g, "")),
			distanceI:parseFloat(journeyList.children[i].children[1].children[3].textContent.replace(/,/g, "")),
			width:parseFloat(journeyList.children[i].children[2].children[0].textContent.substring(journeyList.children[i].children[2].children[0].textContent.indexOf(" ") + 1, journeyList.children[i].children[2].children[0].textContent.indexOf("x"))),
			height:parseFloat(journeyList.children[i].children[2].children[0].textContent.substring(journeyList.children[i].children[2].children[0].textContent.indexOf("x") + 1, journeyList.children[i].children[2].children[0].textContent.length)),
		});
	}
}

function loadDemo() {
	icDistanceUnit.value = "km";
	loadJourney();
	setSpeedMultiplier(1);
	checkbox('grid-checkbox');
	checkbox('beep-checkbox');
	setCanvasSize();
	setTimeout(function() {setCanvasSize(); dataInit(); drawCanvas(); drawStart()},5);
	setTimeout(function() {setCanvasSize(); dataInit(); drawCanvas(); drawStart()},10);
	setTimeout(function() {setCanvasSize(); dataInit(); drawCanvas(); drawStart()},20);
	setTimeout(function() {setCanvasSize(); dataInit(); drawCanvas(); drawStart()},50);
	setTimeout(function() {document.getElementById('beeps-des').style.display = "none"},3000);
}

function setCanvasSize() {
	for (var i=0; i < controls.children.length; i++) {
		controls.children[i].style.width = null;
	}
	var h = solarSystem.offsetWidth*(2/5);
	if (h > (window.innerHeight-120)) {
		h = window.innerHeight-120;
	}
	solarSystem.style.height = h + controls.offsetHeight + "px";
	canvasShadow.style.height = h + controls.offsetHeight + "px";
	ssCanvas.style.height = h + controls.offsetHeight + "px";
	if (controls.children[1].offsetTop > controls.children[0].offsetTop) {
		for (var i=0; i < controls.children.length; i++) {
			controls.children[i].style.width = "100%";
		}
	}
}

function checkKey(event, element) {
	if (element == "ic-distance") {
		if (event.key == "Enter") {
			setDistance('d');
		}
	}
	else if (element == "ic-time") {
		if (event.key == "Enter") {
			setTime('t');
		}
	}
	else if (element == "c-speed") {
		if (event.key == "Enter") {
			inputSpeed()
		}
	}
}

function inputSpeed() {
	setTimeout(function() {setSpeed(cSpeed.value)}, 1);
}

var degree = -90;
var degSpeed = 0.01;
var lastObject = {};
var nextObject = {};

function drawCanvas(disableUpdate) {
	lastObject = {};
	nextObject = {};
	ssCanvas.width = ssCanvas.offsetWidth;
	ssCanvas.height = ssCanvas.offsetHeight;
	var ssCenter = {x:(ssCanvas.width/2),y:((ssCanvas.height-controls.offsetHeight)/2)};
	var ssSize = {width:ssCanvas.width,height:(ssCanvas.height-controls.offsetHeight)};
	ss2d.clearRect(0, 0, ssCanvas.width, ssCenter.height);
	//—————————— Grid ——————————
	var km = zoom/sizeBias;
	var spacings = [];
	if (grid == true) {
		if (zoom > 65000) {
			spacings = [50, 200, 2000];
		}
		else if (zoom > 10000) {
			spacings = [250, 1000, 10000];
		}
		else if (zoom > 3500) {
			spacings = [1250, 5000, 50000];
		}
		else if (zoom > 1000) {
			spacings = [2500, 10000, 100000];
		}
		else if (zoom > 350) {
			spacings = [12500, 50000, 500000];
		}
		else if (zoom > 150) {
			spacings = [25000, 100000, 1000000];
		}
		else if (zoom > 40) {
			spacings = [50000, 200000, 2000000];
		}
		else if (zoom > 16) {
			spacings = [125000, 500000, 5000000];
		}
		else if (zoom > 13) {
			spacings = [250000, 1000000, 100000000];
		}
		else if (zoom > 6) {
			spacings = [500000, 2000000, 200000000];
		}
		else if (zoom > 1) {
			spacings = [2500000, 10000000, 100000000];
		}
		else if (zoom > 0.5) {
			spacings = [10000000, 40000000, 400000000];
		}
		else {
			spacings = [20000000, 80000000, 800000000];
		}
		var lineY = ssCenter.y-((spacings[2]*km)/2);
		//Spacing1
		var lineX = (-distance+(parseInt(distance/spacings[0])*spacings[0]))*km;
		while (lineX < (ssSize.width + 5)) {
			ss2d.beginPath();
			ss2d.moveTo(lineX, 0);
			ss2d.lineTo(lineX, ssCanvas.height);
			ss2d.lineWidth = 1;
			ss2d.strokeStyle = "#041130";
			ss2d.stroke();
			lineX += spacings[0]*km;
		}
		while (lineY > 0) {
			lineY -= spacings[0]*km;
		}
		var yOffset = lineY;
		while (lineY < (ssSize.height + 10)) {
			ss2d.beginPath();
			ss2d.moveTo(0, lineY);
			ss2d.lineTo(ssSize.width, lineY);
			ss2d.lineWidth = 1;
			ss2d.strokeStyle = "#041130";
			ss2d.stroke();
			lineY += spacings[0]*km;
		}
		//Spacing2
		lineX = (-distance+(parseInt(distance/spacings[1])*spacings[1]))*km;
		while (lineX < (ssSize.width + 5)) {
			ss2d.beginPath();
			ss2d.moveTo(lineX, 0);
			ss2d.lineTo(lineX, ssCanvas.height);
			ss2d.lineWidth = 1.5;
			ss2d.strokeStyle = "#07173B";
			ss2d.stroke();
			lineX += spacings[1]*km;
		}
		lineY = yOffset;
		while (lineY < (ssSize.height + 10)) {
			ss2d.beginPath();
			ss2d.moveTo(0, lineY);
			ss2d.lineTo(ssSize.width, lineY);
			ss2d.lineWidth = 1.5;
			ss2d.strokeStyle = "#07173B";
			ss2d.stroke();
			lineY += spacings[1]*km;
		}
		//Spacing3
		lineX = (-distance+(parseInt(distance/spacings[2])*spacings[2]))*km;
		while (lineX < (ssSize.width + 5)) {
			ss2d.beginPath();
			ss2d.moveTo(lineX, 0);
			ss2d.lineTo(lineX, ssCanvas.height);
			ss2d.lineWidth = 2;
			ss2d.strokeStyle = "#0E204C";
			ss2d.stroke();
			lineX += spacings[2]*km;
		}
		lineY = yOffset;
		while (lineY < (ssSize.height + 10)) {
			ss2d.beginPath();
			ss2d.moveTo(0, lineY);
			ss2d.lineTo(ssSize.width, lineY);
			ss2d.lineWidth = 2;
			ss2d.strokeStyle = "#0E204C";
			ss2d.stroke();
			lineY += spacings[2]*km;
		}
	}
	//—————————— Objects ——————————
	var breakDrawing = false
	var textOffset = 1000;
	var breakNextObject = false;
	for (var i=0; i < objects.length; i++) {
		var oOriX = ((objects[i].distance-distance)*zoom)/sizeBias;
		var oX = (oOriX-(((objects[i].width*zoom)/sizeBias)/2))+ssCenter.x;
		if (breakDrawing == false && (oX - ((objects[i].width*zoom)/sizeBias)) < (ssCanvas.width + textOffset)) {
			if ((oX + ((objects[i].width*zoom)/sizeBias)) > (0 - textOffset)) {
				ss2d.drawImage(objects[i].img, oX, ssCenter.y-(((objects[i].height*zoom)/sizeBias)/2), ((objects[i].width*zoom)/sizeBias), ((objects[i].height*zoom)/sizeBias));
				var objectTop = ssCenter.y - (((objects[i].height*zoom)/sizeBias) / 2);
				var nameBaseline = objectTop - (ssCenter.y / 8);
				var namePointer = false;
				if (nameBaseline < 35) {
					nameBaseline = 35;
				}
				else {
					namePointer = true;
				}
				ss2d.font = "bold 14pt monospace";
				ss2d.textAlign = 'center';
				ss2d.strokeStyle = "#000720";
				ss2d.lineWidth = 7;
				ss2d.lineJoin = 'round';
				ss2d.strokeText(objects[i].name.toUpperCase(), oOriX+ssCenter.x, nameBaseline);
				ss2d.fillStyle = "#F5F5F5";
				ss2d.fillText(objects[i].name.toUpperCase(), oOriX+ssCenter.x, nameBaseline);
				if (namePointer == true) {
					ss2d.beginPath();
					ss2d.moveTo(oOriX+ssCenter.x, objectTop - (ssCenter.y / 25));
					ss2d.lineTo(oOriX+ssCenter.x+(ssCenter.y / 15), objectTop - (ssCenter.y / 10));
					ss2d.lineTo(oOriX+ssCenter.x-(ssCenter.y / 15), objectTop - (ssCenter.y / 10));
					ss2d.fillStyle = "#F5F5F5";
					ss2d.fill();
				}
			}
		}
		else {
			breakDrawing = true;
		}
		if (oOriX > (-ssCenter.x + (ssCenter.x / 1.3)) && breakNextObject == false) {
			if (i == 0) {
				lastObject = objects[0];
				nextObject = objects[1];
				nextObject.canvasPosition = {x:((((objects[1].distance-distance)*zoom)/sizeBias)-(((objects[1].width*zoom)/sizeBias)/2))+ssCenter.x};
			}
			else {
				lastObject = objects[i - 1];
				nextObject = objects[i];
				nextObject.canvasPosition = {x:((((objects[i].distance-distance)*zoom)/sizeBias)-(((objects[i].width*zoom)/sizeBias)/2))+ssCenter.x};
			}
			breakNextObject = true;
		}
		if (breakDrawing == true && breakNextObject == true) {
			break;
		}
	}
	//—————————— Legend ——————————
	if (grid == true) {
		var legendX = ssSize.width - 20;
		var legendY = ssSize.height - 20;
		ss2d.beginPath();
		ss2d.moveTo(legendX, legendY);
		ss2d.lineTo(legendX - (spacings[1]*km), legendY);
		ss2d.strokeStyle = "#000720";
		ss2d.lineWidth = 9;
		ss2d.lineCap = 'flat';
		ss2d.stroke();
		ss2d.lineCap = 'round';
		ss2d.beginPath();
		ss2d.moveTo(legendX, legendY-3);
		ss2d.lineTo(legendX, legendY+3);
		ss2d.stroke();
		ss2d.beginPath();
		ss2d.moveTo(legendX-(spacings[1]*km), legendY-3);
		ss2d.lineTo(legendX-(spacings[1]*km), legendY+3);
		ss2d.stroke();
		//----------
		ss2d.beginPath();
		ss2d.moveTo(legendX, legendY);
		ss2d.lineTo(legendX - (spacings[1]*km), legendY);
		ss2d.strokeStyle = "#F5F5F5";
		ss2d.lineWidth = 2;
		ss2d.lineCap = 'flat';
		ss2d.stroke();
		ss2d.lineCap = 'round';
		ss2d.beginPath();
		ss2d.moveTo(legendX, legendY-3);
		ss2d.lineTo(legendX, legendY+3);
		ss2d.stroke();
		ss2d.beginPath();
		ss2d.moveTo(legendX-(spacings[1]*km), legendY-3);
		ss2d.lineTo(legendX-(spacings[1]*km), legendY+3);
		ss2d.stroke();
		ss2d.font = "10pt monospace";
		ss2d.textAlign = 'right';
		ss2d.strokeStyle = "#000720";
		ss2d.lineWidth = 7;
		ss2d.lineJoin = 'round';
		if (icDistanceUnit.value == "mi" || icDistanceUnit.value == "ft") {
			ss2d.strokeText(Math.round(convertKMtoMI(spacings[1])).toLocaleString() + " mi", legendX, legendY-10);
			ss2d.fillStyle = "#F5F5F5";
			ss2d.fillText(Math.round(convertKMtoMI(spacings[1])).toLocaleString() + " mi", legendX, legendY-10);
		}
		else {
			ss2d.strokeText(spacings[1].toLocaleString() + " km", legendX, legendY-10);
			ss2d.fillStyle = "#F5F5F5";
			ss2d.fillText(spacings[1].toLocaleString() + " km", legendX, legendY-10);
		}
	}
	//—————————— Dashboard ——————————
	//Center Stick/Pointer
	ss2d.beginPath();
	ss2d.moveTo(ssCenter.x, ssSize.height);
	ss2d.lineTo(ssCenter.x, ssCenter.y * 1.2);
	ss2d.strokeStyle = "#08A51020";
	ss2d.lineWidth = ssSize.height / 40;
	ss2d.lineCap = 'round';
	ss2d.stroke();
	ss2d.beginPath();
	ss2d.moveTo(ssCenter.x, ssSize.height);
	ss2d.lineTo(ssCenter.x, ssCenter.y * 1.2);
	ss2d.strokeStyle = "#14D73AFF";
	ss2d.lineWidth = ssSize.height / 130;
	ss2d.lineCap = 'round';
	ss2d.stroke();
	//Center Dash-Circle
	ss2d.beginPath();
	ss2d.arc(ssCenter.x, ssSize.height - (ssCenter.y / 12), ssCenter.y / 2.5, 0, 2*Math.PI);
	ss2d.fillStyle = "#151515";
	ss2d.fill();
	ss2d.strokeStyle = "#212121";
	ss2d.lineWidth = ssSize.height / 60;
	ss2d.stroke();
	ss2d.beginPath();
	ss2d.arc(ssCenter.x, ssSize.height - (ssCenter.y / 12), ssCenter.y / 3.5, 0, 2*Math.PI);
	ss2d.fillStyle = "#212121";
	ss2d.fill();
	//Center Dash-Circle Text
	ss2d.fillStyle = "#E8B03E";
	ss2d.font = "bold " + (ssCenter.y / 14) + "px monospace";
	ss2d.textAlign = 'center';
	ss2d.fillText("NEXT", ssCenter.x, ssSize.height - (ssCenter.y / 3.7));
	ss2d.fillText("OBJECT", ssCenter.x, ssSize.height - (ssCenter.y / 4.8));
	//Center Dash-Circle Arrow
	ss2d.beginPath();
	var deg = 0;
	if (nextObject) {
		if (nextObject.canvasPosition) {
			deg = Math.atan2(ssCenter.y - (ssSize.height - (ssCenter.y / 12)), nextObject.canvasPosition.x - ssCenter.x) * (180 / Math.PI);
			if (!(disableUpdate == true)) {
				if ((nextObject.canvasPosition.x-(distance*km)) < ssSize.width) {
					if (degree < deg) {degree += (deg-degree)*(degSpeed)}
					else if (degree > deg) {degree += ((deg-degree)*(degSpeed*10))};
				}
				else {
					if (degree < deg) {degree += (deg-degree)*degSpeed}
					else if (degree > deg) {degree += ((deg-degree)*degSpeed)};
				}
			}
			var arrowWidth = 8;
			var arrowHeight = 0.18;
			ss2d.moveTo(pointOnCircle(ssCenter.y/(3+arrowHeight), (degree-1)-arrowWidth, ssCenter.x, (ssSize.height-(ssCenter.y/12))).x, pointOnCircle(ssCenter.y/(3+arrowHeight), (degree-1)-arrowWidth, ssCenter.x, (ssSize.height-(ssCenter.y/12))).y);
			ss2d.lineTo(pointOnCircle(ssCenter.y/(3-arrowHeight), degree-1, ssCenter.x, (ssSize.height-(ssCenter.y/12))).x, pointOnCircle(ssCenter.y/(3-arrowHeight), degree-1, ssCenter.x, (ssSize.height-(ssCenter.y/12))).y);
			ss2d.lineTo(pointOnCircle(ssCenter.y/(3+arrowHeight), (degree-1)+arrowWidth, ssCenter.x, (ssSize.height-(ssCenter.y/12))).x, pointOnCircle(ssCenter.y/(3+arrowHeight), (degree-1)+arrowWidth, ssCenter.x, (ssSize.height-(ssCenter.y/12))).y);
			ss2d.strokeStyle = "#14D73AFF";
			ss2d.lineWidth = ssSize.height / 140;
			ss2d.lineCap = 'round';
			ss2d.lineJoin = 'round';
			ss2d.stroke();
		}
		else {
			degree = -90;
		}
	}
	else {
		degree = -90;
	}
	//Next Object-Time
	ss2d.fillStyle = "#212121";
	drawRect(ss2d, -5, ssSize.height-(ssCenter.y/2.5)+5, ssCenter.x/1.2, ssCenter.y, 5);
	ss2d.fill();
	ss2d.fillStyle = "#151515";
	ss2d.beginPath();
	drawRect(ss2d, 5, ssSize.height-(ssCenter.y/2.5)+10, (ssCenter.x/1.2)-15, (ssCenter.y/5)-10, 5);
	ss2d.fill();
	ss2d.fillStyle = "#14D73AFF";
	ss2d.font = "bold " + (ssCenter.y / 10) + "px monospace";
	ss2d.textAlign = 'left';
	if (nextObject.distance) {
		ss2d.fillText(getTimeLeft(distanceToTime(nextObject.distance-distance)) + " away", ssCenter.y/15, ssSize.height-(ssCenter.y/4.05));
	}
	//Next Object-Distance
	ss2d.fillStyle = "#212121";
	ss2d.fillRect(0, ssSize.height-(ssCenter.y/5), ssCenter.x, ssCenter.y);
	ss2d.fillStyle = "#151515";
	ss2d.beginPath();
	drawRect(ss2d, 5, ssSize.height-(ssCenter.y/5)+5, ssCenter.x+(ssCenter.y/5), (ssCenter.y/5)-10, 5);
	ss2d.fill();
	ss2d.fillStyle = "#14D73AFF";
	ss2d.font = "bold " + (ssCenter.y / 10) + "px monospace";
	ss2d.textAlign = 'left';
	if (nextObject.distance) {
		if (icDistanceUnit.value == "mi" || icDistanceUnit.value == "ft") {
			ss2d.fillText(Math.round(convertKMtoMI(nextObject.distance - distance)).toLocaleString() + " mi", ssCenter.y / 15, ssSize.height - (ssCenter.y / 14.5));
		}
		else {
			ss2d.fillText(Math.round(nextObject.distance - distance).toLocaleString() + " km", ssCenter.y / 15, ssSize.height - (ssCenter.y / 14.5));
		}
	}
	if (beeps == true) {
		if (distanceToTime(nextObject.distance-distance) > 29500 && distanceToTime(nextObject.distance-distance) < 30500) {
			beep30s.play();
		}
		if (distanceToTime(nextObject.distance-distance) > 500 && distanceToTime(nextObject.distance-distance) < 1500) {
			beepObject.play();
		}
	}
}

function drawStart(bias) {
	if (!(bias)) {
		bias = 0;
	}
	var sb = {width:100,height:80,borderRadius:5};
	var ssCenter = {x:(ssCanvas.width/2),y:((ssCanvas.height-controls.offsetHeight)/2)};
	ss2d.beginPath();
	drawRect(ss2d, ssCenter.x-60-(bias/2), ssCenter.y-40-(bias/2), 120+bias, 80+bias, 10);
	ss2d.fillStyle = "rgb(" + (30 + (bias*4)) + ", " + (30 + (bias*4)) + ", " + (30 + (bias*4)) + ")";
	ss2d.fill();
	ss2d.strokeStyle = "#555F";
	ss2d.lineWidth = 2;
	ss2d.stroke();
	ss2d.closePath();
	ss2d.beginPath();
	ss2d.moveTo(pointOnCircle(28+(bias/3), 0, ssCenter.x-5, ssCenter.y).x, pointOnCircle(24+(bias/3), 0, ssCenter.x-5, ssCenter.y).y);
	ss2d.lineTo(pointOnCircle(28+(bias/3), 120, ssCenter.x-5, ssCenter.y).x, pointOnCircle(24+(bias/3), 120, ssCenter.x-5, ssCenter.y).y);
	ss2d.lineTo(pointOnCircle(28+(bias/3), 240, ssCenter.x-5, ssCenter.y).x, pointOnCircle(24+(bias/3), 240, ssCenter.x-5, ssCenter.y).y);
	ss2d.fillStyle = "#F5F5F5";
	ss2d.fill();
}

function drawPause() {
	var ssCenter = {x:(ssCanvas.width/2),y:((ssCanvas.height-controls.offsetHeight)/2)};
	ss2d.fillStyle = "#F5F5F5";
	ss2d.fillRect(15, 15, ssCenter.y / 30, ssCenter.y / 10);
	ss2d.fillRect(15 + ((ssCenter.y / 30)*1.5), 15, ssCenter.y / 30, ssCenter.y / 10);
}

function getTimeLeft(t) {
	t = t/1000;
	if (t <= 59) {
		t = Math.ceil(t);
		if (t == 1) {
			return t.toString() + " second";
		}
		else {
			return t.toString() + " seconds";
		}
	}
	else if (t < 3600) {
		t = Math.round(t/60);
		if (t == 1) {
			return t.toString() + " minute";
		}
		else {
			return t.toString() + " minutes";
		}
	}
	else if (t < 86400) {
		t = Math.round(t/3600);
		if (t == 1) {
			return t.toString() + " hour";
		}
		else {
			return t.toString() + " hours";
		}
	}
	else if (t < 604800) {
		t = Math.round(t/86400);
		if (t == 1) {
			return t.toString() + " day";
		}
		else {
			return t.toString() + " days";
		}
	}
	else if (t < 2628000) {
		t = Math.round(t/604800);
		if (t == 1) {
			return t.toString() + " week";
		}
		else {
			return t.toString() + " weeks";
		}
	}
	else if (t < 31536000) {
		t = Math.round(t/2628000);
		if (t == 1) {
			return t.toString() + " month";
		}
		else {
			return t.toString() + " months";
		}
	}
	else if (t < 315360000) {
		t = Math.round(t/31536000);
		if (t == 1) {
			return t.toString() + " year";
		}
		else {
			return t.toString() + " years";
		}
	}
	else if (t < 3153600000) {
		t = Math.round(t/315360000);
		if (t == 1) {
			return t.toString() + " decade";
		}
		else {
			return t.toString() + " decades";
		}
	}
	else {
		t = Math.round(t/3153600000);
		if (t == 1) {
			return t.toString() + " century";
		}
		else {
			return t.toString() + " centuries";
		}
	}
}

//———————————ANIMATION DATA—————————————————
var startTime = Date.now();
var pauseTime = Date.now();
var subtractTime = 0;
var time = 0; // in ms
var distance = 0; // in kilometers
var standardSpeed = 299792458; // in m/s
var animationMode = 0;
var lastFramesTime = [];
var lastFrameTime = Date.now();
var fps = 0;
//——————————————————————————————————————————

function dataInit() {
	startTime = Date.now();
	pauseTime = Date.now();
	subtractTime = 0;
	time = 0;
	distance = 0;
	subtractDistance = 0;
	lastDistanceInput = 0;
	getStandardSpeed();
	endAnimation = false;
	lastFramesTime = [];
	lastFrameTime = Date.now();
	fps = 0;
	fpsText.innerHTML = "FPS: " + Math.round(fps);
	degree = -90;
	setDistance('unit');
}

function reset() {
	dataInit();
	if (animationMode == 0) {
		drawCanvas();
		drawStart();
	}
	else if (animationMode == 2) {
		drawCanvas();
		drawPause();
	}
	else {
		drawCanvas();
	}
}

function start() {
	if (animationMode == 0) {
		startShrinking = false;
		if (lastDistanceInput == 1) {
			setDTime(distance);
		}
		else {
			dataInit();
		}
		animationMode = 1;
		var animation = setInterval(function() {updateFrame(); if (endAnimation == true) {clearInterval(animation); pauseTime = Date.now(); fpsText.innerHTML = "FPS: 0"; if (animationMode == 2) {drawCanvas(); drawPause()}}}, 1);
	}
	else if (animationMode == 2) {
		if (lastDistanceInput == 1) {
			setDTime(distance);
		}
		else {
			subtractTime += Date.now() - pauseTime;
		}
		lastFramesTime = [];
		lastFrameTime = Date.now();
		animationMode = 1;
		endAnimation = false;
		var animation = setInterval(function() {updateFrame(); if (endAnimation == true) {clearInterval(animation); pauseTime = Date.now(); fpsText.innerHTML = "FPS: 0"; if (animationMode == 2) {drawCanvas(); drawPause()}}}, 1);
	}
	else {
		endAnimation = true;
		animationMode = 2;
	}
}

function updateFrame() {
	var currentTime = Date.now();
	time = (currentTime - startTime - subtractTime);
	distance = timeToDistance(time);
	lastDistanceInput = 0;
	setDistance('unit');
	setTime();
	drawCanvas();
	// FPS
	lastFramesTime.push(Date.now() - lastFrameTime);
	if (lastFramesTime.length > 200) {
		lastFramesTime.shift();
	}
	fps = 1000 / (lastFramesTime.sumValues() / lastFramesTime.length);
	fpsText.innerHTML = "FPS: " + Math.round(fps);
	lastFrameTime = Date.now();
}

function getStandardSpeed() {
	if (cSpeedUnit.value == 'km/s') {
		standardSpeed = cSpeed.value * 1000;
	}
	else if (cSpeedUnit.value == 'km/h') {
		standardSpeed = ((cSpeed.value * 1000) / 60) / 60;
	}
	else if (cSpeedUnit.value == 'ft/s') {
		standardSpeed = ((cSpeed.value / 5280) * (1 / 0.62137119223733)) * 1000;
	}
	else if (cSpeedUnit.value == 'mi/s') {
		standardSpeed = (cSpeed.value * (1 / 0.62137119223733)) * 1000;
	}
	else if (cSpeedUnit.value == 'mph') {
		standardSpeed = (((cSpeed.value * (1 / 0.62137119223733)) * 1000) / 60) / 60;
	}
	else {
		standardSpeed = cSpeed.value;
	}
}

function timeToDistance(t) {
	//takes: t = time in milliseconds
	//returns: d = distance in kilometers
	return (t/1000/1000)*(standardSpeed*speedMultiplier);
}

function distanceToTime(d) {
	//takes: d = distance in kilometers
	//returns: t = time in milliseconds
	return (d*1000*1000)/(standardSpeed*speedMultiplier);
}

var startGrowing = false;
var startShrinking = false;
var startSizeBias = 0;

function startMouseover() {
	if (animationMode == 0) {
		startShrinking = false;
		drawCanvas(true);
		drawStart(startSizeBias);
		startGrowing = true;
		setTimeout(function() {if (startGrowing == true) {startSizeBias = (0.25+startSizeBias).limitUp(2); drawStart(startSizeBias)}},20);
		setTimeout(function() {if (startGrowing == true) {startSizeBias = (0.25+startSizeBias).limitUp(2); drawStart(startSizeBias)}},30);
		setTimeout(function() {if (startGrowing == true) {startSizeBias = (0.25+startSizeBias).limitUp(2); drawStart(startSizeBias)}},40);
		setTimeout(function() {if (startGrowing == true) {startSizeBias = (0.25+startSizeBias).limitUp(2); drawStart(startSizeBias)}},50);
		setTimeout(function() {if (startGrowing == true) {startSizeBias = (0.25+startSizeBias).limitUp(2); drawStart(startSizeBias)}},60);
		setTimeout(function() {if (startGrowing == true) {startSizeBias = (0.25+startSizeBias).limitUp(2); drawStart(startSizeBias)}},70);
		setTimeout(function() {if (startGrowing == true) {startSizeBias = (0.25+startSizeBias).limitUp(2); drawStart(startSizeBias)}},80);
		setTimeout(function() {if (startGrowing == true) {startSizeBias = (0.25+startSizeBias).limitUp(2); drawStart(startSizeBias)}},90);
	}
}

function startMouseleave() {
	if (animationMode == 0) {
		startGrowing = false;
		drawCanvas(true);
		drawStart(startSizeBias);
		startShrinking = true;
		setTimeout(function() {if (startShrinking == true) {startSizeBias = (-0.25+startSizeBias).limitDown(0); drawCanvas(true); drawStart(startSizeBias)}},20);
		setTimeout(function() {if (startShrinking == true) {startSizeBias = (-0.25+startSizeBias).limitDown(0); drawCanvas(true); drawStart(startSizeBias)}},30);
		setTimeout(function() {if (startShrinking == true) {startSizeBias = (-0.25+startSizeBias).limitDown(0); drawCanvas(true); drawStart(startSizeBias)}},40);
		setTimeout(function() {if (startShrinking == true) {startSizeBias = (-0.25+startSizeBias).limitDown(0); drawCanvas(true); drawStart(startSizeBias)}},50);
		setTimeout(function() {if (startShrinking == true) {startSizeBias = (-0.25+startSizeBias).limitDown(0); drawCanvas(true); drawStart(startSizeBias)}},60);
		setTimeout(function() {if (startShrinking == true) {startSizeBias = (-0.25+startSizeBias).limitDown(0); drawCanvas(true); drawStart(startSizeBias)}},70);
		setTimeout(function() {if (startShrinking == true) {startSizeBias = (-0.25+startSizeBias).limitDown(0); drawCanvas(true); drawStart(startSizeBias)}},80);
		setTimeout(function() {if (startShrinking == true) {startSizeBias = (-0.25+startSizeBias).limitDown(0); drawCanvas(true); drawStart(startSizeBias)}},90);
	}
}

function setZoom() {
	zoom = Math.pow(cZoom.value, 5);
	generalDraw();
}

function generalDraw() {
	if (animationMode == 0) {
		drawCanvas(true);
		drawStart(startSizeBias);
	}
	else if (animationMode == 2) {
		drawCanvas(true);
		drawPause();
	}
	else {
		drawCanvas(true);
	}
	setDistance('unit', true);
}

function convertKMtoMI(d) {
	return d*0.62137119223733;
}

var lObject = {};
var cObject = {};
var nObject = {};

function setDTime(d) {
	startTime = Date.now() - (d/((standardSpeed*speedMultiplier)/1000000));
	pauseTime = startTime;
	subtractTime = 0;
}

function setDistance(d, ldi) {
	var ssCenter = {x:(ssCanvas.width/2),y:((ssCanvas.height-controls.offsetHeight)/2)};
	var ssSize = {width:ssCanvas.width,height:(ssCanvas.height-controls.offsetHeight)};
	if (d == 'unit') {
		if (lastDistanceInput == 0 || ldi) {
			if (icDistanceUnit.value == 'm') {
				icDistance.value = Math.round(distance*1000);
			}
			else if (icDistanceUnit.value == 'ft') {
				icDistance.value = Math.round(distance*5280*0.62137119223733);
			}
			else if (icDistanceUnit.value == 'mi') {
				icDistance.value = Math.round(distance*0.62137119223733);
			}
			else if (icDistanceUnit.value == 'sr') {
				icDistance.value = (distance/695700).round(2);
			}
			else if (icDistanceUnit.value == 'au') {
				icDistance.value = (distance/149597870.700).round(2);
			}
			else if (icDistanceUnit.value == 'ly') {
				icDistance.value = (distance/9460730472580.8).round(5);
			}
			else {
				icDistance.value = Math.round(distance);
			}
		}
	}
	else if (d == 'previous') {
		for (var i=objects.length-1; i >= 0; i-=1) {
			if (objects[i].distance < distance) {
				lObject = objects[i];
				if (objects[i+1]) {
					nObject = objects[i+1];
				}
				else {
					nObject = objects[i];
				}
				distance = lObject.distance;
				lastDistanceInput = 1;
				generalDraw();
				break;
			}
			else if (objects[i].distance == distance) {
				cObject = objects[i];
				if (objects[i-1]) {
					lObject = objects[i-1];
				}
				else {
					lObject = objects[i];
				}
				if (objects[i+1]) {
					nObject = objects[i+1];
				}
				else {
					nObject = objects[i];
				}
			}
		}
		setDTime(distance);
		time = distanceToTime(distance);
		setTime();
	}
	else if (d == 'next') {
		for (var i=0; i < objects.length; i++) {
			if (objects[i].distance > distance) {
				nObject = objects[i];
				if (objects[i-2]) {
					lObject = objects[i-2];
				}
				else if (objects[i-1]) {
					lObject = objects[i-1];
				}
				else {
					lObject = objects[i];
				}
				distance = nObject.distance;
				lastDistanceInput = 1;
				generalDraw();
				break;
			}
			else if (objects[i].distance == distance) {
				cObject = objects[i];
				if (objects[i-1]) {
					lObject = objects[i-1];
				}
				else {
					lObject = objects[i];
				}
				if (objects[i+1]) {
					nObject = objects[i+1];
				}
				else {
					nObject = objects[i];
				}
			}
		}
		setDTime(distance);
		time = distanceToTime(distance);
		setTime();
	}
	else {
		if (icDistanceUnit.value == 'm') {
			distance = icDistance.value/1000;
		}
		else if (icDistanceUnit.value == 'ft') {
			distance = icDistance.value/5280*(1/0.62137119223733);
		}
		else if (icDistanceUnit.value == 'mi') {
			distance = icDistance.value*(1/0.62137119223733);
		}
		else if (icDistanceUnit.value == 'sr') {
			distance = icDistance.value*695700;
		}
		else if (icDistanceUnit.value == 'au') {
			distance = icDistance.value*149597870.700;
		}
		else if (icDistanceUnit.value == 'ly') {
			distance = icDistance.value*9460730472580.8;
		}
		else {
			distance = icDistance.value;
		}
		lastDistanceInput = 1;
		setDTime(distance);
		time = distanceToTime(distance);
		setTime();
		generalDraw();
	}
}

function setTime(t) {
	if (t == 't') {
		var currentTime = Date.now();
		startTime = currentTime-readTime(icTime.value);
		pauseTime = startTime;
		subtractTime = 0;
		time = (currentTime-startTime-subtractTime);
		setTime();
		distance = timeToDistance(time);
		setDistance('unit');
		lastDistanceInput = 1;
		generalDraw();
	}
	else {
		icTime.value = makeReadableTime(time);
	}
}

function makeReadableTime(t) {
	var years = (t/1000/60/60/24/365.25);
	var months = (years-Math.floor(years))*12;
	var days = (months-Math.floor(months))*(365.25/12);
	var hours = (days-Math.floor(days))*24;
	var minutes = (hours-Math.floor(hours))*60;
	var seconds = (minutes-Math.floor(minutes))*60;
	var milliseconds = (seconds-Math.floor(seconds))*1000;
	var yr = Math.floor(years).toString();
	var mo = Math.floor(months).toString();
	var dy = Math.floor(days).toString();
	var hr = Math.floor(hours).toString();
	var min = Math.floor(minutes).toString();
	var sec = Math.floor(seconds).toString();
	var ms = Math.floor(milliseconds).toString();
	if (Math.floor(years).toString().length < 2) {
		yr = "0" + Math.floor(years).toString();
	}
	if (Math.floor(months).toString().length < 2) {
		mo = "0" + Math.floor(months).toString();
	}
	if (Math.floor(days).toString().length < 2) {
		dy = "0" + Math.floor(days).toString();
	}
	if (Math.floor(hours).toString().length < 2) {
		hr = "0" + Math.floor(hours).toString();
	}
	if (Math.floor(minutes).toString().length < 2) {
		min = "0" + Math.floor(minutes).toString();
	}
	if (Math.floor(seconds).toString().length < 2) {
		sec = "0" + Math.floor(seconds).toString();
	}
	if (Math.floor(milliseconds).toString().length < 2) {
		ms = "00" + Math.floor(milliseconds).toString();
	}
	else if (Math.floor(milliseconds).toString().length < 3) {
		ms = "0" + Math.floor(milliseconds).toString();
	}
	return yr + "-" + mo + "-" + dy + " " + hr + ":" + min + ":" + sec + "." + ms;
}

function readTime(t) {
	var years = 0;
	var months = 0;
	var days = 0;
	var hours = 0;
	var minutes = 0;
	var seconds = 0;
	var milliseconds = 0;
	years = parseFloat(t.removeAfter("-", -1));
	t = t.removeBefore("-", 1);
	months = parseFloat(t.removeAfter("-", -1));
	t = t.removeBefore("-", 1);
	days = parseFloat(t.removeAfter("-", -1));
	t = t.removeBefore(" ", 1);
	hours = parseFloat(t.removeAfter(" ", -1));
	t = t.removeBefore(":", 1);
	minutes = parseFloat(t.removeAfter(":", -1));
	t = t.removeBefore(":", 1);
	seconds = parseFloat(t.removeAfter(":", -1));
	return (seconds*1000) + (minutes*60*1000) + (hours*60*60*1000) + (days*24*60*60*1000) + (months*(365.25/12)*60*60*1000) + (years*12*(365.25/12)*60*60*1000);
}

function setSpeed(s, lsi) {
	var ssCenter = {x:(ssCanvas.width/2),y:((ssCanvas.height-controls.offsetHeight)/2)};
	var ssSize = {width:ssCanvas.width,height:(ssCanvas.height-controls.offsetHeight)};
	if (s == 'unit') {
		if (lastSpeedInput == 0 || lsi) {
			if (cSpeedUnit.value == 'km/s') {
				cSpeed.value = (standardSpeed/1000).round(2);
			}
			else if (cSpeedUnit.value == 'km/h') {
				cSpeed.value = ((standardSpeed/1000)*60*60).round(2);
			}
			else if (cSpeedUnit.value == 'ft/s') {
				cSpeed.value = (standardSpeed*(1/0.0003048)).round(2);
			}
			else if (cSpeedUnit.value == 'mi/s') {
				cSpeed.value = (standardSpeed*(0.62137119223733/1000)).round(2);
			}
			else if (cSpeedUnit.value == 'mph') {
				cSpeed.value = ((standardSpeed*(0.62137119223733/1000))*60*60).round(2);
			}
			else {
				cSpeed.value = parseFloat(standardSpeed).round(2);
			}
		}
		else {
			setSpeed(cSpeed.value);
		}
	}
	else if (s == 'sol') {
		standardSpeed = 299792458;
		cSpeed.value = standardSpeed;
		cSpeedUnit.value = 'm/s';
		lastSpeedInput = 0;
		lastDistanceInput = 1;
		setDTime(distance);
		time = distanceToTime(distance);
		setTime();
	}
	else if (s == 'sos') {
		cSpeed.value = 1235;
		cSpeedUnit.value = 'km/h';
		standardSpeed = 343;
		lastSpeedInput = 0;
		lastDistanceInput = 1;
		setDTime(distance);
		time = distanceToTime(distance);
		setTime();
	}
	else {
		if (cSpeedUnit.value == 'km/s') {
			standardSpeed = (s*1000).round(2);
		}
		else if (cSpeedUnit.value == 'km/h') {
			standardSpeed = ((s*1000)/60/60).round(2);
		}
		else if (cSpeedUnit.value == 'ft/s') {
			standardSpeed = (s/5280*(1/0.62137119223733)*1000).round(2);
		}
		else if (cSpeedUnit.value == 'mi/s') {
			standardSpeed = (s*(1/0.62137119223733)*1000).round(2);
		}
		else if (cSpeedUnit.value == 'mph') {
			standardSpeed = ((s*(1/0.62137119223733)*1000)/60/60).round(2);
		}
		else {
			standardSpeed = parseFloat(s).round(2);
		}
		lastSpeedInput = 1;
		lastDistanceInput = 1;
		setDTime(distance);
		time = distanceToTime(distance);
		setTime();
		generalDraw();
	}
}

function setSpeedMultiplier(mul) {
	if (mul == -1) {
		if (!(cSpeedX.value.toString() == "" || cSpeedX.value == 0)) {
			speedMultiplier = cSpeedX.value;
			mul = speedMultiplier;
		}
	}
	else {
		speedMultiplier = mul;
		cSpeedX.value = speedMultiplier;
	}
	setDTime(distance);
	time = distanceToTime(distance);
	setTime();
	if (mul == 0.5) {
		cSpeedX1.style.background = null;
		cSpeedX2.style.background = null;
		cSpeedX10.style.background = null;
		cSpeedX05.style.background = "#333";
	}
	else if (mul == 1) {
		cSpeedX05.style.background = null;
		cSpeedX2.style.background = null;
		cSpeedX10.style.background = null;
		cSpeedX1.style.background = "#333";
	}
	else if (mul == 2) {
		cSpeedX05.style.background = null;
		cSpeedX1.style.background = null;
		cSpeedX10.style.background = null;
		cSpeedX2.style.background = "#333";
	}
	else if (mul == 10) {
		cSpeedX05.style.background = null;
		cSpeedX1.style.background = null;
		cSpeedX2.style.background = null;
		cSpeedX10.style.background = "#333";
	}
	else {
		cSpeedX05.style.background = null;
		cSpeedX1.style.background = null;
		cSpeedX2.style.background = null;
		cSpeedX10.style.background = null;
	}
}

function checkbox(event, value) {
	if (!(value)) {
		value = null;
	}
	if (typeof event == 'string') {
		var element = document.getElementById(event);
		if (element.children.length == 0 || value == true && !(value == false)) {
			var check = document.createElement('img');
			check.alt = "Checked";
			check.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAV9JREFUSInt1TtKA0EYwPH/bIYQJbXiFQTZE1jEBAuLgJFMEVBP4A1sFjxHbEIIQzaVWIqQE6hhQbCxkmiqEBTiPmw2IMHNY10I6H7VzPDN/JiPeYggCFhFGCtRUziFUzjJkEkvaFmW4TjOoRDiqdVq3UXliSRfLqVUBrgEjoH3bDa71Wg0hj/lJlbqKRRgOB6PP6PyZ5a6Wq2eATue5513Op3XJdA3YF9r/RE1J7LUlUplQ0rZD7uOlHKv2Wz2p/OUUhkhRD0IgpMJ6vt+qd1u38/aVGSpTdMcALdhd9t13ZtarbaZBApzDle5XF7P5XJXQCEcevQ8r2Db9otlWUav16sLIU4nKFDUWj/MQ+fCM/CSYRgX39FFd7owDKCUygPXwG44NALyYXvg+35xGXRhOAKPjcIS91hrPQIOgO5vUYjxciml1oQQR67rdm3bfo6DxoKTiv/3LaZwCv89+Au22KlYnhW5bQAAAABJRU5ErkJggg==";
			check.style.width = "30px";
			check.style.height = "30px";
			check.style.pointerEvents = "none";
			element.appendChild(check);
		}
		else {
			while (element.firstChild) {
				element.removeChild(element.lastChild);
			}
		}
	}
	else {
		var element = event.target || event.srcElement;
		if (element.children.length == 0) {
			var check = document.createElement('img');
			check.alt = "Checked";
			check.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAV9JREFUSInt1TtKA0EYwPH/bIYQJbXiFQTZE1jEBAuLgJFMEVBP4A1sFjxHbEIIQzaVWIqQE6hhQbCxkmiqEBTiPmw2IMHNY10I6H7VzPDN/JiPeYggCFhFGCtRUziFUzjJkEkvaFmW4TjOoRDiqdVq3UXliSRfLqVUBrgEjoH3bDa71Wg0hj/lJlbqKRRgOB6PP6PyZ5a6Wq2eATue5513Op3XJdA3YF9r/RE1J7LUlUplQ0rZD7uOlHKv2Wz2p/OUUhkhRD0IgpMJ6vt+qd1u38/aVGSpTdMcALdhd9t13ZtarbaZBApzDle5XF7P5XJXQCEcevQ8r2Db9otlWUav16sLIU4nKFDUWj/MQ+fCM/CSYRgX39FFd7owDKCUygPXwG44NALyYXvg+35xGXRhOAKPjcIS91hrPQIOgO5vUYjxciml1oQQR67rdm3bfo6DxoKTiv/3LaZwCv89+Au22KlYnhW5bQAAAABJRU5ErkJggg==";
			check.style.width = "30px";
			check.style.height = "30px";
			check.style.pointerEvents = "none";
			element.appendChild(check);
		}
		else {
			while (element.firstChild) {
				element.removeChild(element.lastChild);
			}
		}
	}
}

function setBackgroundGrid(event) {
	var element = event.target || event.srcElement;
	if (element.children.length > 0) {
		grid = true;
	}
	else {
		grid = false;
	}
	generalDraw();
}

function setBeeps(event) {
	var element = event.target || event.srcElement;
	if (element.children.length > 0) {
		beeps = true;
		document.getElementById('beeps-des').style.display = "block";
		setTimeout(function() {document.getElementById('beeps-des').style.display = "none"},3000);
	}
	else {
		beeps = false;
	}
}