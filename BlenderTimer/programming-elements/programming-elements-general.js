var title = document.getElementById('title');
var info = document.getElementById('info');
var version = document.getElementById('version');
var navBack = document.getElementById('nav-back');
var noteBackground = document.getElementById('note-background');
var notePopup = document.getElementById('note-popup');
var noteText = document.getElementById('note-text');
var element = document.getElementById('element');
var elementSection = document.getElementById('element-section');
var elementScript = document.getElementById('element-script');
var elementDisplay = document.getElementById('element-display');
var displaySize = document.getElementById('display-size');
var scriptLines = document.getElementById('script-lines');
var scriptText = document.getElementById('script-text');
var rotateLayout = document.getElementById('rotate-layout');
var saveCode = document.getElementById('save-code');
var icodeMenu = document.getElementById('interactive-code-menu');
var icodeMenuTooltip = document.getElementById('interactive-code-menu-tooltip');
var lastICode;
var pageLoaded = false;
var shiftKey = false;
var ctrlKey = false;
var layout = 0;
var userCode = {};
//----- Splitter Settings and Properties -----
var splitter = document.getElementById('splitter');
var splitterActive = false;
var splitterPercentage = 50;
var splitterMax = 15;
var splitCtrlIncrement = 5;
//--------------------------------------------

var cursor = new Object();
cursor.x = 0;
cursor.y = 0;
cursor.splitX = 0;
cursor.startSplitX = 0;

function mouseLeave() {
	shiftKey = false;
	ctrlKey = false;
	splitterSet(false);	
}

function getCursorPosition(event) {
    cursor.x = event.clientX;
    cursor.y = event.clientY;
    cursor.splitX = event.clientX - elementScript.offsetLeft;
    if (splitterActive == true) {
    	if (shiftKey == true) {
    		var f = (((cursor.splitX / elementSection.offsetWidth) * 100) / 2) + (((cursor.startSplitX / elementSection.offsetWidth) * 100) / 2);
    		if (f < 0) {
    			f = 0;
    		}
    		else if (((f/100) * elementSection.offsetWidth) > (elementSection.offsetWidth - 10)) {
    			f = ((((elementSection.offsetWidth - 10) / elementSection.offsetWidth) * 100));
    		}
    		else {
    			if (ctrlKey == true) {
					f = Math.round(f / (splitCtrlIncrement / 2));
					f = f * (splitCtrlIncrement / 2);
				}
    		}
    		splitterPercentage = f;
    		setSplitterDistance();
    	}
    	else {
    		splitterPercentage = ((cursor.splitX / elementSection.offsetWidth) * 100);
	    	splitter.style.background = "#FFF2";
	    	if (splitterPercentage > 49 && splitterPercentage < 51) {
	    		splitterPercentage = 50;
	    	}
	    	if (splitterPercentage < (100 - splitterMax) && splitterPercentage > splitterMax) {
	    		if (ctrlKey == true) {
					splitterPercentage = Math.round(splitterPercentage / splitCtrlIncrement);
					splitterPercentage = splitterPercentage * splitCtrlIncrement;
				}
	    		setSplitterDistance();
			}
			else if (!(splitterPercentage < (100 - splitterMax))) {
				splitterPercentage = (100 - splitterMax);
				setSplitterDistance();
			}
			else if (!(splitterPercentage > splitterMax)) {
				splitterPercentage = splitterMax;
				setSplitterDistance();
			}
    	}
		writeDisplaySize();
    }
    if (cursor.x < (icodeMenu.offsetLeft - window.scrollX - 20) || cursor.x > (icodeMenu.offsetLeft - window.scrollX + icodeMenu.offsetWidth + 20) || cursor.y < (icodeMenu.offsetTop - window.scrollY - 20) || cursor.y > (icodeMenu.offsetTop - window.scrollY + icodeMenu.offsetHeight + 20)) {
    	closeICodeMenu();
    }
}

document.addEventListener("mousemove", getCursorPosition);
document.addEventListener("keydown", setKeys);
document.addEventListener("keyup", setKeys);

function setKeys() {
	if (event.key == "Shift") {
		if (event.type == "keydown") {
			shiftKey = true;
		}
		else {
			shiftKey = false;
		}
	}
	if (event.key == "Control") {
		if (event.type == "keydown") {
			ctrlKey = true;
		}
		else {
			ctrlKey = false;
		}
	}
}

function baseLoad() {
	document.body.style.opacity = 1;
	var lines = getCode().split("\n");
	for (var i=0; i < lines.length; i++) {
		var line = document.createElement('b');
		line.innerHTML = i + 1;
		scriptLines.appendChild(line);
	}
	scriptText.innerHTML = scriptText.innerHTML.replace(/\\t/g, "&nbsp&nbsp&nbsp&nbsp");
	if (window.innerWidth <= window.innerHeight) {
		switchLayout(1);
	}
	setTimeout(function() {
		document.getElementById('loading').style.display = "none";
		document.body.style.overflow = "auto";
		pageLoaded = true;
		determineLayout();
	}, 100);
	try {display()} catch {};
}

function determineLayout() {
	setNotePosition();
	if (window.innerWidth < 700) {
		element.style.margin = "20px -20px 10px -20px";
		element.style.width = "100vw";
		element.style.minHeight = "calc(100vh - " + (element.offsetTop + 40).toString() + "px)";
		element.style.borderRadius = "0px";
		version.style.margin = "0px 0px 10px 0px";
	}
	else {
		element.style.margin = "20px 0px 20px 0px";
		element.style.width = "calc(100% - 8px)";
		element.style.minHeight = null;
		element.style.borderRadius = "5px";
		version.style.margin = null;
	}
	if (window.innerWidth < (info.offsetWidth + (navBack.offsetWidth * 2) + 100 || window.innerWidth < (title.offsetWidth + (navBack.offsetWidth * 2) + 100))) {
		title.style.marginTop = "60px";
		info.style.maxWidth = null;
	}
	else {
		title.style.marginTop = "0px";
		info.style.maxWidth = null;
	}
	if (displaySize.offsetTop > (rotateLayout.offsetTop + rotateLayout.offsetHeight)) {
		displaySize.style.margin = "0px auto 0px auto";
	}
	else {
		displaySize.style.margin = "0px 0px 0px auto";
	}
	setTimeout(function() {setNotePosition()}, 250);
	setTimeout(function() {setNotePosition()}, 500);
	try {display()} catch {};
}

function setNotePosition() {
	if (window.innerWidth < 500) {
		notePopup.style.width = "calc(100vw - 40px)";
		notePopup.style.height = "calc(100vh - 40px)";
		notePopup.style.top = "20px";
		notePopup.style.left = "20px";
	}
	else {
		notePopup.style.width = null;
		notePopup.style.height = null;
		notePopup.style.top = (window.innerHeight / 2) - (notePopup.offsetHeight / 2) + "px";
		notePopup.style.left = (window.innerWidth / 2) - (notePopup.offsetWidth / 2) + "px";
	}
}

function splitterSet(down) {
	splitterActive = down;
	if (down == true) {
		document.body.style.userSelect = "none";
		document.body.style.cursor = "col-resize";
		splitter.style.background = "#FFF2";
		cursor.startSplitX = cursor.splitX;
		scriptText.style.cursor = "col-resize";
	}
	else {
		document.body.style.userSelect = null;
		document.body.style.cursor = null;
		splitter.style.background = null;
		scriptText.style.cursor = null;
	}
	try {display()} catch {};
}

function writeDisplaySize() {
	if (layout == 1) {
		displaySize.innerHTML = "Display size: " + elementDisplay.offsetWidth + "x" + elementDisplay.offsetHeight;
	}
	else {
		displaySize.innerHTML = "Display size: " + elementDisplay.offsetWidth + "x" + elementDisplay.offsetHeight + " (" + Math.round(splitterPercentage) + "%)";
	}
}

function setSplitterDistance() {
	elementScript.style.width = "calc(" + splitterPercentage + "% - 10px)";
	elementDisplay.style.width = "calc(" + (100 - splitterPercentage) + "% - 10px)";
	try {display()} catch {};
}

function getCode() {
	var l = scriptText.textContent.split("\n");
	var code = "";
	for (var i=0; i < l.length; i++) {
		if ((i - 1) > 0) {
			if (!(l[i-1].length <=7)) {
				if (l[i].length <= 7) {continue};
			}
		}
		code += l[i].substring(7, l[i].length).replace(/\s\s\s\s/g, "\t") + "\n";
	}
	l = code.split("\n");
	code = "";
	for (var i=0; i < l.length; i++) {
		if (i > 0) {
			if (i < (l.length - 2)) {
				code += l[i] + "\n";
			}
			else {
				code += l[i];
			}
		}
	}
	return code;
}

function copyElementCode() {
	navigator.clipboard.writeText(getCode());
}

function switchLayout(l) {
	if (l == null) {
		if (layout == 1) {
			l = 0;
		}
		else {
			l = 1;
		}
	}
	if (l == 1) {
		layout = 1;
		splitter.style.display = "none";
		elementSection.style.flexWrap = "wrap";
		elementScript.style.width = "100%";
		elementScript.style.marginBottom = "20px";
		elementDisplay.style.width = "100%";
	}
	else {
		layout = 0;
		splitter.style.display = "block";
		elementSection.style.flexWrap = null;
		elementScript.style.marginBottom = null;
		setSplitterDistance();
	}
	writeDisplaySize();
	try {display()} catch {};
}

function icode(code, event) {
	icodeMenu.style.opacity = "0";
	var element = event.target || event.srcElement;
	if (icodeMenu.style.display == "block" && element == lastICode) {
		icodeMenu.style.display = "none";
	}
	else {
		while (icodeMenu.firstChild) {
			icodeMenu.removeChild(icodeMenu.lastChild);
		}
		if (window.innerWidth < 400) {
			icodeMenu.style.width = "100%";
			icodeMenu.style.left = "0px";
			icodeMenu.style.top = (elementScript.offsetTop + element.offsetTop + element.offsetHeight) + "px";
		}
		else {
			icodeMenu.style.width = "200px";
			icodeMenu.style.left = (elementScript.offsetLeft + element.offsetLeft) + "px";
			icodeMenu.style.top = (elementScript.offsetTop + element.offsetTop + element.offsetHeight) + "px";
			if ((parseFloat(icodeMenu.style.left) + 200) > window.innerWidth) {
				icodeMenu.style.left = (window.innerWidth - 200 - 20) + "px";
			}
		}
		var items = code.split(" ");
		for (var i=0; i < items.length; i++) {
			var item = items[i].replace(/`s`/g, " ").replace(/`n`/g, "<br>");
			if (item.startsWith("-")) {
				var button = document.createElement('button');
				button.className = 'icode-button';
				if (item.indexOf("//") > -1) {
					button.addEventListener("mouseenter", (event) => {icodeTooltip(event)});
					button.id = item.substring(item.indexOf("//") + 2, item.length);
					button.innerHTML = item.substring(1, item.indexOf("//"));
				}
				else {
					button.innerHTML = item.substring(1, item.length);
				}
				button.addEventListener("mouseleave", closeICodeTooltip);
				button.addEventListener("click", (event) => {performICode(event)});
				icodeMenu.appendChild(button);
			}
			else if (item.startsWith("#")) {
				var number = document.createElement('input');
				number.type = 'number';
				number.className = 'icode-number';
				number.value = element.textContent;
				if (item.indexOf(";") > -1) {
					number.min = item.substring(item.indexOf("#") + 1, item.indexOf(";"));
					number.max = item.substring(item.indexOf(";") + 1, item.length);
				}
				number.addEventListener("keydown", (event) => {performICode(event, 'number')});
				number.addEventListener("input", (event) => {performICode(event, 'number')});
				icodeMenu.appendChild(number);
			}
		}
		lastICode = element;
		icodeMenu.style.display = "block";
		if ((icodeMenu.offsetTop + icodeMenu.offsetHeight) > document.body.offsetHeight) {
			icodeMenu.style.top = (elementScript.offsetTop + element.offsetTop - icodeMenu.offsetHeight) + "px";
		}
		icodeMenu.style.opacity = "1";

	}
}

function closeICodeMenu() {
	icodeMenu.style.display = "none";
	icodeMenuTooltip.style.display = "none";
}

function icodeTooltip(event) {
	var element = event.target || event.srcElement;
	icodeMenuTooltip.style.left = icodeMenu.offsetLeft + icodeMenu.offsetWidth - 4 + "px";
	icodeMenuTooltip.style.top = element.offsetTop + icodeMenu.offsetTop - icodeMenu.scrollTop + "px";
	icodeMenuTooltip.innerHTML = element.id;
	icodeMenuTooltip.style.display = "block";
	if ((icodeMenuTooltip.offsetLeft + icodeMenuTooltip.offsetWidth) > window.innerWidth) {
		icodeMenuTooltip.style.left = window.innerWidth - (icodeMenuTooltip.offsetWidth) - 20 + "px";
		icodeMenuTooltip.style.top = element.offsetTop + element.offsetHeight + 6 + icodeMenu.offsetTop + "px";
	}
	icodeMenuTooltip.style.opacity = "1";
}

function closeICodeTooltip() {
	icodeMenuTooltip.style.display = "none";
}

function performICode(event,type) {
	var element = event.target || event.srcElement;
	var key = event.code;
	if (type == 'number') {
		setTimeout(function() {
			lastICode.textContent = element.value;
			userCode[lastICode.id.substring(3, lastICode.id.length)] = parseFloat(lastICode.textContent);
			try {icodeTrigger(lastICode.id.substring(3, lastICode.id.length))} catch {};
			if (key == "Enter") {
				closeICodeMenu();
			}
		}, 1);
	}
	else {
		lastICode.textContent = element.textContent;
		userCode[lastICode.id.substring(3, lastICode.id.length)] = lastICode.textContent;
		try {icodeTrigger(lastICode.id.substring(3, lastICode.id.length))} catch {};
		closeICodeMenu();
	}
}

function showNote(note) {
	note = note.replace(/`qq`/g, "\"");
	noteText.innerHTML = note;
	noteBackground.style.pointerEvents = null;
	noteBackground.style.opacity = "1";
	notePopup.style.pointerEvents = null;
	notePopup.style.opacity = "1";
}

function closeNote() {
	notePopup.style.pointerEvents = "none";
	notePopup.style.opacity = "0";
	noteBackground.style.pointerEvents = "none";
	noteBackground.style.opacity = "0";
}

function codeType() {
	return window.location.toString().substring(window.location.toString().lastIndexOf("programming-elements/") + 21, window.location.toString().lastIndexOf("/"));
}
const saveCodeFile = () => {
	const saveCode = document.createElement("a");
	const file = new Blob([getCode()], {type:"text/" + ct});
	var ct = "";
	var cft = "";
	if (codeType() == "html") {
		ct = "html";
		cft = ".html";
	}
	else if (codeType() == "css") {
		ct = "css";
		cft = ".css";
	}
	else if (codeType() == "js") {
		ct = "javascript";
		cft = ".js";
	}
	else if (codeType() == "btjs") {
		ct = "javascript";
		cft = ".js";
	}
	else if (codeType() == "py") {
		ct = "plain";
		cft = ".py";
	}
	else if (codeType() == "vb-net") {
		ct = "plain";
		cft = ".txt";
	}
	else {
		ct = "plain";
		cft = ".txt";
	}
	saveCode.href = URL.createObjectURL(file);
	saveCode.download = title.textContent + cft;
	saveCode.click();
	URL.revokeObjectURL(saveCode.href);
};