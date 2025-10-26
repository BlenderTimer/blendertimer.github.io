// --------------- SCRIPT INFORMATION ---------------
//
const btjsAuthor = "Daniel Roberts (BlenderTimer)" //	Author
const btjsVersion = "0.0.3" //							Version
const btjsLastUpdated = "February 6, 2024" //			Last Updated
//
// --------------------------------------------------

// ---------- ACTIVE VARIABLES ----------
// Cursor Information
var cursor = {x:0, y:0, xScreen:0, yScreen:0, lastX:0, lastY:0, lastScreenX:0, lastScreenY:0, xVelocity:0, yVelocity:0, xSpeed:0, ySpeed:0, eleOver:document, lastTrigger:Date.now()};
document.addEventListener('mousemove', gcp7316)

function gcp7316(event) {
	//Last cursor position relative to the page
	cursor.lastX = cursor.x;
	cursor.lastY = cursor.y;
	//Last cursor position relative to the screen
	cursor.lastScreenX = cursor.xScreen;
	cursor.lastScreenY = cursor.yScreen;
	//Cursor position relative to the page
	cursor.x = event.pageX;
	cursor.y = event.pageY;
	//Cursor position relative to the screen
	cursor.xScreen = event.screenX;
	cursor.yScreen = event.screenY;
	//Cursor velocity (pixels moved since last trigger)
	cursor.xVelocity = cursor.x - cursor.lastX;
	cursor.yVelocity = cursor.y - cursor.lastY;
	//Cursor speed (pixels moved since last trigger, all positive values)
	cursor.xSpeed = cursor.xVelocity.toPositive();
	cursor.ySpeed = cursor.yVelocity.toPositive();
	cursor.lastTrigger = Date.now();
	var cInt1 = setInterval(function() {
		if ((Date.now() - cursor.lastTrigger) > 100) {
			//Last cursor position relative to the page
			cursor.lastX = cursor.x;
			cursor.lastY = cursor.y;
			//Last cursor position relative to the screen
			cursor.lastScreenX = cursor.xScreen;
			cursor.lastScreenY = cursor.yScreen;
			//Cursor velocity (pixels moved since last trigger)
			cursor.xVelocity = 0;
			cursor.yVelocity = 0;
			//Cursor speed (pixels moved since last trigger, all positive values)
			cursor.xSpeed = 0;
			cursor.ySpeed = 0;
			if ((Date.now() - cursor.lastTrigger) > 1000) {
				clearInterval(cInt1);
			}
		}
	}, 10);
	//Element the cursor is over
	cursor.elementOver = event.target || event.srcElement;
	try {btjs('cursor')} catch {};
}

// ---------- ARRAY FUNCTIONS ----------
Array.prototype.selectRandom = function() {
	return this[parseInt(Math.random() * this.length)];
}

Array.prototype.sumValues = function() {
	var sum = 0;
	for (var i=0; i < this.length; i++) {sum += this[i]};
	return sum;
}

// ---------- BOOLEAN FUNCTIONS ----------
Boolean.prototype.toYesNo = function() {
	if (this == true) {
		return "Yes";
	}
	else if (this == false) {
		return "No";
	}
}

// ---------- MISC FUNCTIONS ----------
function cursorInfo(info, element) {
	var info2 = info;
	if ((typeof info) == "string") {info2 = info.toLowerCase()};
	if (info == 0 || info2 == 'x' || info2 == 'px' || info2 == 'xp' || info2 == 'pagex') {
		return cursor.x;
	}
	else if (info == 1 || info2 == 'y' || info2 == 'py'  || info2 == 'yp' || info2 == 'pagey') {
		return cursor.y;
	}
	else if (info == 2 || info2 == 'sx' || info2 == 'scx' || info2 == 'scrx' || info2 == 'screenx' || info2 == 'xs' || info2 == 'xsc' || info2 == 'xscr' || info2 == 'xscreen') {
		return cursor.xScreen;
	}
	else if (info == 3 || info2 == 'sy' || info2 == 'scy' || info2 == 'scry' || info2 == 'screeny' || info2 == 'ys' || info2 == 'ysc' || info2 == 'yscr' || info2 == 'yscreen') {
		return cursor.yScreen;
	}
	else if (info == 4 || info2 == 'lx' || info2 == 'lastx' || info2 == 'lpx' || info2 == 'lastpagex') {
		return cursor.lastX;
	}
	else if (info == 5 || info2 == 'ly' || info2 == 'lasty' || info2 == 'lpy' || info2 == 'lastpagey') {
		return cursor.lastY;
	}
	else if (info == 6 || info2 == 'lxs' || info2 == 'lxscr' || info2 == 'lastxscr' || info2 == 'lastscreenx' || info2 == 'lsx' || info2 == 'lscrx' || info2 == 'lastscrx' || info2 == 'lastxscreen') {
		return cursor.lastScreenX;
	}
	else if (info == 7 || info2 == 'lys' || info2 == 'lyscr' || info2 == 'lastyscr' || info2 == 'lastscreeny' || info2 == 'lsy' || info2 == 'lscry' || info2 == 'lastscry' || info2 == 'lastyscreen') {
		return cursor.lastScreenY;
	}
	else if (info == 8 || info2 == 'vx' || info2 == 'velx' || info2 == 'velocityx' || info2 == 'xv' || info2 == 'xvel' || info2 == 'xvelocity') {
		return cursor.xVelocity;
	}
	else if (info == 9 || info2 == 'vy' || info2 == 'vely' || info2 == 'velocityy' || info2 == 'yv' || info2 == 'yvel' || info2 == 'yvelocity') {
		return cursor.yVelocity;
	}
	else if (info == 10 || info2 == 'spx' || info2 == 'spex' || info2 == 'speedx' || info2 == 'xsp' || info2 == 'xspe' || info2 == 'xspeed') {
		return cursor.xSpeed;
	}
	else if (info == 11 || info2 == 'spy' || info2 == 'spey' || info2 == 'speedx' || info2 == 'ysp' || info2 == 'yspe' || info2 == 'yspeed') {
		return cursor.ySpeed;
	}
	else if (info == 12 || info2 == 'eo' || info2 == 'eleover' || info2 == 'over' || info2 == 'elementover' || info2 == 'element' || info2 == 'target') {
		return cursor.elementOver;
	}
	else if (info == 13 || info2 == 'xe' || info2 == 'xele' || info2 == 'xelement' || info2 == 'ex' || info2 == 'elex' || info2 == 'elementx') {
		var ex = cursor.x;
		var ele;
		if (!(element == null)) {
			ele = element;
		}
		else {
			ele = cursor.elementOver;
		}
		while (!(ele.offsetParent == null)) {
			ex -= ele.offsetLeft;
			ele = ele.offsetParent;
		}
		return ex;
	}
	else if (info == 14 || info2 == 'ye' || info2 == 'yele' || info2 == 'yelement' || info2 == 'ey' || info2 == 'eley' || info2 == 'elementy') {
		var ex = cursor.y;
		var ele;
		if (!(element == null)) {
			ele = element;
		}
		else {
			ele = cursor.elementOver;
		}
		while (!(ele.offsetParent == null)) {
			ex -= ele.offsetTop;
			ele = ele.offsetParent;
		}
		return ex;
	}
	else if (info == 15 || info2 == 'lt' || info2 == 'lastt' || info2 == 'ltrigger' || info2 == 'lasttrigger') {
		return cursor.lastTrigger;
	}
	else {
		return null;
	}
}

// ---------- NUMBER FUNCTIONS ----------
Number.prototype.toPositive = function() {
	var n = parseFloat(this);
	if (parseFloat(this) < 0) {n = parseFloat(this) * -1};
	return n;
}

Number.prototype.toNegative = function() {
	var n = parseFloat(this);
	if (parseFloat(this) > 0) {n = parseFloat(this) * -1};
	return n;
}

function randomNumber(low, high, decimalPlaces, returnAsString) {
	if (parseInt(decimalPlaces) <= 100 && parseInt(decimalPlaces) >= 0) {
		if (returnAsString == true) {
			return ((Math.random() * (high - low)) + low).toFixed(decimalPlaces);
		}
		else {
			return parseFloat(((Math.random() * (high - low)) + low).toFixed(decimalPlaces));
		}
	}
	else if (parseInt(decimalPlaces) > 100) {
		if (returnAsString == true) {
			return ((Math.random() * (high - low)) + low).toFixed(100);
		}
		else {
			return parseFloat(((Math.random() * (high - low)) + low).toFixed(100));
		}
	}
	else {
		if (returnAsString == true) {
			return ((Math.random() * (high - low)) + low).toFixed(0);
		}
		else {
			return parseFloat(((Math.random() * (high - low)) + low).toFixed(0));
		}
	}
}

Number.prototype.round = function(decimalPlaces) {
	var n = parseFloat(this);
	if (decimalPlaces == null) {
		n = parseFloat(n.toFixed(0))
	}
	else if (decimalPlaces > 100) {
		n = parseFloat(n.toFixed(100))
	}
	else if (decimalPlaces < 0) {
		n = parseFloat(n.toFixed(0))
	}
	else {
		n = parseFloat(n.toFixed(decimalPlaces))
	}
	return n;
}

Number.prototype.limit = function(ll, ul) {
	var n = parseFloat(this);
	if (ll == null) {
		ll = 0;
	}
	if (ul == null) {
		ul = 1;
	}
	if (n < ll) {n = ll} else if (n > ul) {n = ul};
	return n;
}

Number.prototype.limitDown = function(l) {
	var n = parseFloat(this);
	if (l == null) {
		l = 0;
	}
	if (n < l) {n = l};
	return n;
}

Number.prototype.limitUp = function(l) {
	var n = parseFloat(this);
	if (l == null) {
		l = 1;
	}
	if (n > l) {n = l};
	return n;
}

// ---------- Object FUNCTIONS ----------
Object.prototype.clearCanvas = function() {
	if (this.canvas) {
		this.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.beginPath();
	}
	else {
		console.error("Failed to draw rectangle!\nError: Invalid canvas context");
	}
}

Object.prototype.drawRect = function(x, y, width, height, borderRadius) {
	if (this.canvas) {
		if (!(borderRadius) || borderRadius == 0) {
			this.rect(x, y, width, height);
		}
		else {
			if (borderRadius > (width / 2)) {
				borderRadius = width / 2;
			}
			if (borderRadius > (height / 2)) {
				borderRadius = height / 2;
			}
			this.beginPath();
			this.arc(x+borderRadius, y+borderRadius, borderRadius, 1*Math.PI, 1.5*Math.PI); // top left
			this.arc(x+width-borderRadius, y+borderRadius, borderRadius, -0.5*Math.PI, 0); // top right
			this.arc(x+width-borderRadius, y+height-borderRadius, borderRadius, 0, 0.5*Math.PI); // bottom right
			this.arc(x+borderRadius, y+height-borderRadius, borderRadius, 0.5*Math.PI, 1*Math.PI); // bottom left
			this.closePath();
		}
	}
	else {
		console.error("Failed to draw rectangle!\nError: Invalid canvas context");
	}
}

function pointOnCircle(radius, angle, x, y) {
	if (!(x)) {x = 0};
	if (!(y)) {y = 0};
	var width = radius * 2;
	var height = radius * 2;
	if (typeof radius == 'string') {
		width = parseFloat(radius.substring(0, radius.indexOf("x")));
		height = parseFloat(radius.substring(radius.indexOf("x")+1, radius.length));
	}
	var point = {
		x:x+((width/2)*Math.cos(angle*(Math.PI/180))),
		y:y+((height/2)*Math.sin(angle*(Math.PI/180)))
	};
	return point;
}

Object.prototype.sizeCanvas = function(widthBias, heightBias) {
	if (!(widthBias)) {widthBias = 0};
	if (!(heightBias)) {heightBias = 0};
	this.width = this.clientWidth + widthBias;
	this.height = this.clientHeight + heightBias;
}

// ---------- STRING FUNCTIONS ----------
String.prototype.toProperCase = function(mode) {
	var mode2 = mode;
	if ((typeof mode) == "string") {mode2 = mode.toLowerCase()};
	if (mode == 1 || mode2 == "w" || mode2 == "word" || mode2 == "words") {
		var words = this.toString().split(" ");
		var string = "";
		for (var i=0; i < words.length; i++) {
			string = string + " " + words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
		}
		return string.slice(1);
	}
	else if (mode == 2 || mode2 == "f" || mode2 == "first" || mode2 == "firstletter") {
		return this.toString().charAt(0).toUpperCase() + this.toString().slice(1).toLowerCase();
	}
	else {
		var string1 = this.toString();
		var string = "";
		var nxID = 0;
		var times = 0;
		if (string1.indexOf(".") == -1 && string1.indexOf("!") == -1 && string1.indexOf("?") == -1) {
			return this.toString().charAt(0).toUpperCase() + this.toString().slice(1).toLowerCase();
		}
		else {
			while (nxID > -1) {
				var period = string1.indexOf(".");
				var questionMark = string1.indexOf("?");
				var exclamationMark = string1.indexOf("!");
				if (period > -1) {
					if (questionMark > -1) {
						if (exclamationMark > -1) {
							nxID = Math.min(period, questionMark, exclamationMark);
						}
						else {
							nxID = Math.min(period, questionMark);
						}
					}
					else {
						if (exclamationMark > -1) {
							nxID = Math.min(period, exclamationMark);
						}
						else {
							nxID = period;
						}
					}
				}
				else {
					if (questionMark > -1) {
						if (exclamationMark > -1) {
							nxID = Math.min(questionMark, exclamationMark);
						}
						else {
							nxID = questionMark;
						}
					}
					else {
						if (exclamationMark > -1) {
							nxID = exclamationMark;
						}
						else {
							nxID = -1;
						}
					}
				}
				if (nxID == -1) {
					var s1ss = string1.substring(0, string1.length);
					var s1ssl = s1ss.split("");
					var chg = false;
					for (var i=0; i < s1ssl.length; i++) {
						if (!(s1ssl[i] == " ") && !(s1ssl[i] == "	")) {
							string += s1ss.substring(0, i) + s1ss.charAt(i).toUpperCase() + s1ss.slice(i + 1).toLowerCase();
							chg = true;
							break
						}
					}
					if (chg == false) {
						string += s1ss.charAt(0).toUpperCase() + s1ss.slice(1).toLowerCase();
					}
					break;
				}
				else {
					var s1ss = string1.substring(0, nxID + 1);
					var s1ssl = s1ss.split("");
					var chg = false;
					for (var i=0; i < s1ssl.length; i++) {
						if (!(s1ssl[i] == " ") && !(s1ssl[i] == "	")) {
							string += s1ss.substring(0, i) + s1ss.charAt(i).toUpperCase() + s1ss.slice(i + 1).toLowerCase();
							chg = true;
							break
						}
					}
					if (chg == false) {
						string += s1ss.charAt(0).toUpperCase() + s1ss.slice(1).toLowerCase();
					}
					string1 = string1.substr(nxID + 1);
				}
				times += 1;
				if (times > 1000) {
					break
				}
			}
			return string;
		}
	}
}

String.prototype.removeAfter = function(breakChar, offset, last, returnEmptyIfNotFound) {
	if (offset == null) {
		offset = 0;
	}
	else {
		offset = offset + 1;
	}
	if (breakChar == null) {
		return this.toString();
	}
	else {
		if (last == true) {
			last = this.toString().lastIndexOf(breakChar)
		}
		else {
			last = this.toString().indexOf(breakChar)
		}
		if (returnEmptyIfNotFound == true) {
			if (last == -1) {
				return "";
			}
		}
		if (last > -1) {
			if ((last + offset) < this.toString().length) {
				return this.toString().substring(0, last + offset);
			}
			else {
				return this.toString()
			}
		}
		else {
			return this.toString()
		}
	}
}

String.prototype.removeBefore = function(breakChar, offset, last, returnEmptyIfNotFound) {
	if (offset == null) {
		offset = 0;
	}
	if (breakChar == null) {
		return this.toString();
	}
	else {
		if (last == true) {
			last = this.toString().lastIndexOf(breakChar)
		}
		else {
			last = this.toString().indexOf(breakChar)
		}
		if (returnEmptyIfNotFound == true) {
			if (last == -1) {
				return "";
			}
		}
		if (last > -1) {
			if ((last + offset) < this.toString().length) {
				return this.toString().substring(last + offset, this.toString().length);
			}
			else {
				return this.toString()
			}
		}
		else {
			return this.toString()
		}
	}
}