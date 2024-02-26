// --------------- SCRIPT INFORMATION ---------------
//
const btjsAuthor = "Daniel Roberts (BlenderTimer)" //	Author
const btjsVersion = "0.0.4" //							Version
const btjsLastUpdated = "February 19, 2024" //			Last Updated
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
			try {btjs('cursor')} catch {};
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

Number.prototype.translateTime = function(format) {
	if (!(format)) {
		format = "%yr2%-%mo2%-%dy2% %hr2%:%min2%:%sec2%.%ms3%";
	}
	var style = [
		{
			available:false,
			length:0,
		},
		{
			available:false,
			length:0,
		},
		{
			available:false,
			length:0,
		},
		{
			available:false,
			length:0,
		},
		{
			available:false,
			length:0,
		},
		{
			available:false,
			length:0,
		},
		{
			available:false,
			length:0,
		}
	]
	var fSplit = format.split('');
	var lastChars = [];
	var lastSet = "";
	var inKey = false;
	var newFormat = "";
	for (var i=0; i < fSplit.length; i++) {
		var c = fSplit[i];
		var charsCleared = false;
		if (c == "%") {
			if (inKey == false) {
				inKey = true;
				newFormat += c;
			}
			else {
				var num = "";
				for (i2=0; i2 < lastChars.length; i2++) {
					if (lastChars[i2] == "0" || lastChars[i2] == "1" || lastChars[i2] == "2" || lastChars[i2] == "3" || lastChars[i2] == "4" || lastChars[i2] == "5" || lastChars[i2] == "6" || lastChars[i2] == "7" || lastChars[i2] == "8" || lastChars[i2] == "9") {
						num = lastChars[i2] + num;
					}
				}
				if (num.length > 0) {
					if (lastSet == "years") {
						style[0].length = parseInt(num);
					}
					else if (lastSet == "months") {
						style[1].length = parseInt(num);
					}
					else if (lastSet == "days") {
						style[2].length = parseInt(num);
					}
					else if (lastSet == "hours") {
						style[3].length = parseInt(num);
					}
					else if (lastSet == "minutes") {
						style[4].length = parseInt(num);
					}
					else if (lastSet == "seconds") {
						style[5].length = parseInt(num);
					}
					else if (lastSet == "milliseconds") {
						style[6].length = parseInt(num);
					}
				}
				inKey = false;
				newFormat += c;
			}
			lastChars = [];
			charsCleared = true;
			lastSet = "";
		}
		if (inKey == true) {
			if (c == "r") {
				if (lastChars[0] == "y") {
					style[0].available = true;
					lastChars = [];
					charsCleared = true;
					lastSet = "years";
				}
				else if (lastChars[0] == "h") {
					style[1].available = true;
					lastChars = [];
					charsCleared = true;
					lastSet = "hours";
				}
			}
			else if (c == "o") {
				if (lastChars[0] == "m") {
					style[2].available = true;
					lastChars = [];
					charsCleared = true;
					lastSet = "months";
				}
			}
			else if (c == "y") {
				if (lastChars[0] == "d") {
					style[3].available = true;
					lastChars = [];
					charsCleared = true;
					lastSet = "days";
				}
			}
			else if (c == "n") {
				if (lastChars[0] == "i" && lastChars[1] == "m") {
					style[4].available = true;
					lastChars = [];
					charsCleared = true;
					lastSet = "minutes";
				}
			}
			else if (c == "c") {
				if (lastChars[0] == "e" && lastChars[1] == "s") {
					style[5].available = true;
					lastChars = [];
					charsCleared = true;
					lastSet = "seconds";
				}
			}
			else if (c == "s") {
				if (lastChars[0] == "m") {
					style[6].available = true;
					lastChars = [];
					charsCleared = true;
					lastSet = "milliseconds";
				}
			}
			if (!(c == "0" || c == "1" || c == "2" || c == "3" || c == "4" || c == "5" || c == "6" || c == "7" || c == "8" || c == "9")) {
				newFormat += c;
			}
		}
		else {
			newFormat += c;
		}
		if (charsCleared == false) {
			lastChars.unshift(c);
		}
	}
	var years = 0;
	var months = 0;
	var days = 0;
	var hours = 0;
	var minutes = 0;
	var seconds = 0;
	var milliseconds = 0;
	if (style[0].available) {
		if (style[1].available) {
			if (style[2].available) {
				if (style[3].available) {
					if (style[4].available) {
						if (style[5].available) {
							years = (this/1000/60/60/24/365);
							months = (years-Math.floor(years))*12;
							days = (months-Math.floor(months))*(365/12);
							hours = (days-Math.floor(days))*24;
							minutes = (hours-Math.floor(hours))*60;
							seconds = (minutes-Math.floor(minutes))*60;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							years = (this/1000/60/60/24/365);
							months = (years-Math.floor(years))*12;
							days = (months-Math.floor(months))*(365/12);
							hours = (days-Math.floor(days))*24;
							minutes = (hours-Math.floor(hours))*60;
							milliseconds = (minutes-Math.floor(minutes))*60000;
						}
					}
					else {
						if (style[5].available) {
							years = (this/1000/60/60/24/365);
							months = (years-Math.floor(years))*12;
							days = (months-Math.floor(months))*(365/12);
							hours = (days-Math.floor(days))*24;
							seconds = (hours-Math.floor(hours))*3600;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							years = (this/1000/60/60/24/365);
							months = (years-Math.floor(years))*12;
							days = (months-Math.floor(months))*(365/12);
							hours = (days-Math.floor(days))*24;
							milliseconds = (hours-Math.floor(hours))*3600000;
						}
					}
				}
				else {
					if (style[4].available) {
						if (style[5].available) {
							years = (this/1000/60/60/24/365);
							months = (years-Math.floor(years))*12;
							days = (months-Math.floor(months))*(365/12);
							minutes = (days-Math.floor(days))*1440;
							seconds = (minutes-Math.floor(minutes))*60;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							years = (this/1000/60/60/24/365);
							months = (years-Math.floor(years))*12;
							days = (months-Math.floor(months))*(365/12);
							minutes = (days-Math.floor(days))*1440;
							milliseconds = (minutes-Math.floor(minutes))*60000;
						}
					}
					else {
						if (style[5].available) {
							years = (this/1000/60/60/24/365);
							months = (years-Math.floor(years))*12;
							days = (months-Math.floor(months))*(365/12);
							seconds = (days-Math.floor(days))*86400;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							years = (this/1000/60/60/24/365);
							months = (years-Math.floor(years))*12;
							days = (months-Math.floor(months))*(365/12);
							milliseconds = (seconds-Math.floor(seconds))*86400000;
						}
					}
				}
			}
			else {
				if (style[3].available) {
					if (style[4].available) {
						if (style[5].available) {
							years = (this/1000/60/60/24/365);
							months = (years-Math.floor(years))*12;
							hours = (months-Math.floor(months))*24*(365/12);
							minutes = (hours-Math.floor(hours))*60;
							seconds = (minutes-Math.floor(minutes))*60;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							years = (this/1000/60/60/24/365);
							months = (years-Math.floor(years))*12;
							hours = (months-Math.floor(months))*24*(365/12);
							minutes = (hours-Math.floor(hours))*60;
							milliseconds = (minutes-Math.floor(minutes))*60000;
						}
					}
					else {
						if (style[5].available) {
							years = (this/1000/60/60/24/365);
							months = (years-Math.floor(years))*12;
							hours = (months-Math.floor(months))*24*(365/12);
							seconds = (hours-Math.floor(hours))*3600;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							years = (this/1000/60/60/24/365);
							months = (years-Math.floor(years))*12;
							hours = (months-Math.floor(months))*24*(365/12);
							milliseconds = (hours-Math.floor(hours))*3600000;
						}
					}
				}
				else {
					if (style[4].available) {
						if (style[5].available) {
							years = (this/1000/60/60/24/365);
							months = (years-Math.floor(years))*12;
							minutes = (months-Math.floor(months))*1440*(365/12);
							seconds = (minutes-Math.floor(minutes))*60;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							years = (this/1000/60/60/24/365);
							months = (years-Math.floor(years))*12;
							minutes = (months-Math.floor(months))*1440*(365/12);
							milliseconds = (minutes-Math.floor(minutes))*60000;
						}
					}
					else {
						if (style[5].available) {
							years = (this/1000/60/60/24/365);
							months = (years-Math.floor(years))*12;
							seconds = (months-Math.floor(months))*86400*(365/12);
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							years = (this/1000/60/60/24/365);
							months = (years-Math.floor(years))*12;
							milliseconds = (months-Math.floor(months))*86400000*(365/12);
						}
					}
				}
			}
		}
		else {
			if (style[2].available) {
				if (style[3].available) {
					if (style[4].available) {
						if (style[5].available) {
							years = (this/1000/60/60/24/365);
							days = (years-Math.floor(years))*365;
							hours = (days-Math.floor(days))*24;
							minutes = (hours-Math.floor(hours))*60;
							seconds = (minutes-Math.floor(minutes))*60;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							years = (this/1000/60/60/24/365);
							days = (years-Math.floor(years))*365;
							hours = (days-Math.floor(days))*24;
							minutes = (hours-Math.floor(hours))*60;
							milliseconds = (minutes-Math.floor(minutes))*60000;
						}
					}
					else {
						if (style[5].available) {
							years = (this/1000/60/60/24/365);
							days = (years-Math.floor(years))*365;
							hours = (days-Math.floor(days))*24;
							seconds = (hours-Math.floor(hours))*3600;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							years = (this/1000/60/60/24/365);
							days = (years-Math.floor(years))*365;
							hours = (days-Math.floor(days))*24;
							milliseconds = (hours-Math.floor(hours))*3600000;
						}
					}
				}
				else {
					if (style[4].available) {
						if (style[5].available) {
							years = (this/1000/60/60/24/365);
							days = (years-Math.floor(years))*365;
							minutes = (days-Math.floor(days))*1440;
							seconds = (minutes-Math.floor(minutes))*60;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							years = (this/1000/60/60/24/365);
							days = (years-Math.floor(years))*365;
							minutes = (days-Math.floor(days))*1440;
							milliseconds = (minutes-Math.floor(minutes))*60000;
						}
					}
					else {
						if (style[5].available) {
							years = (this/1000/60/60/24/365);
							days = (years-Math.floor(years))*365;
							seconds = (days-Math.floor(days))*86400;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							years = (this/1000/60/60/24/365);
							days = (years-Math.floor(years))*365;
							milliseconds = (seconds-Math.floor(seconds))*86400000;
						}
					}
				}
			}
			else {
				if (style[3].available) {
					if (style[4].available) {
						if (style[5].available) {
							years = (this/1000/60/60/24/365);
							hours = (years-Math.floor(years))*24*365;
							minutes = (hours-Math.floor(hours))*60;
							seconds = (minutes-Math.floor(minutes))*60;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							years = (this/1000/60/60/24/365);
							hours = (years-Math.floor(years))*24*365;
							minutes = (hours-Math.floor(hours))*60;
							milliseconds = (minutes-Math.floor(minutes))*60000;
						}
					}
					else {
						if (style[5].available) {
							years = (this/1000/60/60/24/365);
							hours = (years-Math.floor(years))*24*365;
							seconds = (hours-Math.floor(hours))*3600;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							years = (this/1000/60/60/24/365);
							hours = (years-Math.floor(years))*24*365;
							milliseconds = (hours-Math.floor(hours))*3600000;
						}
					}
				}
				else {
					if (style[4].available) {
						if (style[5].available) {
							years = (this/1000/60/60/24/365);
							minutes = (years-Math.floor(years))*1440*365;
							seconds = (minutes-Math.floor(minutes))*60;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							years = (this/1000/60/60/24/365);
							minutes = (years-Math.floor(years))*1440*365;
							milliseconds = (minutes-Math.floor(minutes))*60000;
						}
					}
					else {
						if (style[5].available) {
							years = (this/1000/60/60/24/365);
							seconds = (years-Math.floor(years))*86400*365;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							years = (this/1000/60/60/24/365);
							milliseconds = (years-Math.floor(years))*86400000*365;
						}
					}
				}
			}
		}
	}
	else {
		if (style[1].available) {
			if (style[2].available) {
				if (style[3].available) {
					if (style[4].available) {
						if (style[5].available) {
							months = (this/1000/60/60/24/(365/12));
							days = (months-Math.floor(months))*(365/12);
							hours = (days-Math.floor(days))*24;
							minutes = (hours-Math.floor(hours))*60;
							seconds = (minutes-Math.floor(minutes))*60;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							months = (this/1000/60/60/24/(365/12));
							days = (months-Math.floor(months))*(365/12);
							hours = (days-Math.floor(days))*24;
							minutes = (hours-Math.floor(hours))*60;
							milliseconds = (minutes-Math.floor(minutes))*60000;
						}
					}
					else {
						if (style[5].available) {
							months = (this/1000/60/60/24/(365/12));
							days = (months-Math.floor(months))*(365/12);
							hours = (days-Math.floor(days))*24;
							seconds = (hours-Math.floor(hours))*3600;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							months = (this/1000/60/60/24/(365/12));
							days = (months-Math.floor(months))*(365/12);
							hours = (days-Math.floor(days))*24;
							milliseconds = (hours-Math.floor(hours))*3600000;
						}
					}
				}
				else {
					if (style[4].available) {
						if (style[5].available) {
							months = (this/1000/60/60/24/(365/12));
							days = (months-Math.floor(months))*(365/12);
							minutes = (days-Math.floor(days))*1440;
							seconds = (minutes-Math.floor(minutes))*60;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							months = (this/1000/60/60/24/(365/12));
							days = (months-Math.floor(months))*(365/12);
							minutes = (days-Math.floor(days))*1440;
							milliseconds = (minutes-Math.floor(minutes))*60000;
						}
					}
					else {
						if (style[5].available) {
							months = (this/1000/60/60/24/(365/12));
							days = (months-Math.floor(months))*(365/12);
							seconds = (days-Math.floor(days))*86400;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							months = (this/1000/60/60/24/(365/12));
							days = (months-Math.floor(months))*(365/12);
							milliseconds = (seconds-Math.floor(seconds))*86400000;
						}
					}
				}
			}
			else {
				if (style[3].available) {
					if (style[4].available) {
						if (style[5].available) {
							months = (this/1000/60/60/24/(365/12));
							hours = (months-Math.floor(months))*24*(365/12);
							minutes = (hours-Math.floor(hours))*60;
							seconds = (minutes-Math.floor(minutes))*60;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							months = (this/1000/60/60/24/(365/12));
							hours = (months-Math.floor(months))*24*(365/12);
							minutes = (hours-Math.floor(hours))*60;
							milliseconds = (minutes-Math.floor(minutes))*60000;
						}
					}
					else {
						if (style[5].available) {
							months = (this/1000/60/60/24/(365/12));
							hours = (months-Math.floor(months))*24*(365/12);
							seconds = (hours-Math.floor(hours))*3600;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							months = (this/1000/60/60/24/(365/12));
							hours = (months-Math.floor(months))*24*(365/12);
							milliseconds = (hours-Math.floor(hours))*3600000;
						}
					}
				}
				else {
					if (style[4].available) {
						if (style[5].available) {
							months = (this/1000/60/60/24/(365/12));
							minutes = (months-Math.floor(months))*1440*(365/12);
							seconds = (minutes-Math.floor(minutes))*60;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							months = (this/1000/60/60/24/(365/12));
							minutes = (months-Math.floor(months))*1440*(365/12);
							milliseconds = (minutes-Math.floor(minutes))*60000;
						}
					}
					else {
						if (style[5].available) {
							months = (this/1000/60/60/24/(365/12));
							seconds = (months-Math.floor(months))*86400*(365/12);
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							months = (this/1000/60/60/24/(365/12));
							milliseconds = (months-Math.floor(months))*86400000*(365/12);
						}
					}
				}
			}
		}
		else {
			if (style[2].available) {
				if (style[3].available) {
					if (style[4].available) {
						if (style[5].available) {
							days = (this/1000/60/60/24);
							hours = (days-Math.floor(days))*24;
							minutes = (hours-Math.floor(hours))*60;
							seconds = (minutes-Math.floor(minutes))*60;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							days = (this/1000/60/60/24);
							hours = (days-Math.floor(days))*24;
							minutes = (hours-Math.floor(hours))*60;
							milliseconds = (minutes-Math.floor(minutes))*60000;
						}
					}
					else {
						if (style[5].available) {
							days = (this/1000/60/60/24);
							hours = (days-Math.floor(days))*24;
							seconds = (hours-Math.floor(hours))*3600;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							days = (this/1000/60/60/24);
							hours = (days-Math.floor(days))*24;
							milliseconds = (hours-Math.floor(hours))*3600000;
						}
					}
				}
				else {
					if (style[4].available) {
						if (style[5].available) {
							days = (this/1000/60/60/24);
							minutes = (days-Math.floor(days))*1440;
							seconds = (minutes-Math.floor(minutes))*60;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							days = (this/1000/60/60/24);
							minutes = (days-Math.floor(days))*1440;
							milliseconds = (minutes-Math.floor(minutes))*60000;
						}
					}
					else {
						if (style[5].available) {
							days = (this/1000/60/60/24);
							seconds = (days-Math.floor(days))*86400;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							days = (this/1000/60/60/24);
							milliseconds = (seconds-Math.floor(seconds))*86400000;
						}
					}
				}
			}
			else {
				if (style[3].available) {
					if (style[4].available) {
						if (style[5].available) {
							hours = (this/1000/60/60);
							minutes = (hours-Math.floor(hours))*60;
							seconds = (minutes-Math.floor(minutes))*60;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							hours = (this/1000/60/60);
							minutes = (hours-Math.floor(hours))*60;
							milliseconds = (minutes-Math.floor(minutes))*60000;
						}
					}
					else {
						if (style[5].available) {
							hours = (this/1000/60/60);
							seconds = (hours-Math.floor(hours))*3600;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							hours = (this/1000/60/60);
							milliseconds = (hours-Math.floor(hours))*3600000;
						}
					}
				}
				else {
					if (style[4].available) {
						if (style[5].available) {
							minutes = (this/1000/60);
							seconds = (minutes-Math.floor(minutes))*60;
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							minutes = (this/1000/60);
							milliseconds = (minutes-Math.floor(minutes))*60000;
						}
					}
					else {
						if (style[5].available) {
							seconds = (this/1000);
							milliseconds = (seconds-Math.floor(seconds))*1000;
						}
						else {
							milliseconds = this;
						}
					}
				}
			}
		}
	}
	var yr = Math.floor(years).toString();
	var mo = Math.floor(months).toString();
	var dy = Math.floor(days).toString();
	var hr = Math.floor(hours).toString();
	var min = Math.floor(minutes).toString();
	var sec = Math.floor(seconds).toString();
	var ms = Math.floor(milliseconds).toString();
	var cancel = 0;
	while (yr.length < style[0].length && cancel <= 100) {yr = "0" + yr;cancel++};
	cancel = 0;
	while (mo.length < style[1].length && cancel <= 100) {mo = "0" + mo;yr;cancel++};
	cancel = 0;
	while (dy.length < style[2].length && cancel <= 100) {dy = "0" + dy;cancel++};
	cancel = 0;
	while (hr.length < style[3].length && cancel <= 100) {hr = "0" + hr;cancel++};
	cancel = 0;
	while (min.length < style[4].length && cancel <= 100) {min = "0" + min;cancel++};
	cancel = 0;
	while (sec.length < style[5].length && cancel <= 100) {sec = "0" + sec;cancel++};
	cancel = 0;
	while (ms.length < style[6].length && cancel <= 100) {ms = "0" + ms;cancel++};
	console.log(newFormat)
	return newFormat.replace(/%%yr%%/g, yr).replace(/%%mo%%/g, mo).replace(/%%dy%%/g, dy).replace(/%%hr%%/g, hr).replace(/%%min%%/g, min).replace(/%%sec%%/g, sec).replace(/%%ms%%/g, ms);
}

Number.prototype.toNegative = function() {
	var n = parseFloat(this);
	if (parseFloat(this) > 0) {n = parseFloat(this) * -1};
	return n;
}

Number.prototype.toPositive = function() {
	var n = parseFloat(this);
	if (parseFloat(this) < 0) {n = parseFloat(this) * -1};
	return n;
}

// ---------- Object FUNCTIONS ----------
// Object.prototype.clearCanvas = function() {
// 	if (this.canvas) {
// 		this.clearRect(0, 0, this.canvas.width, this.canvas.height);
// 		this.beginPath();
// 	}
// 	else {
// 		console.error("Failed to draw rectangle!\nError: Invalid canvas context");
// 	}
// }

// Object.prototype.drawRect = function(x, y, width, height, borderRadius) {
// 	if (this.canvas) {
// 		if (!(borderRadius) || borderRadius == 0) {
// 			this.rect(x, y, width, height);
// 		}
// 		else {
// 			if (borderRadius > (width / 2)) {
// 				borderRadius = width / 2;
// 			}
// 			if (borderRadius > (height / 2)) {
// 				borderRadius = height / 2;
// 			}
// 			this.beginPath();
// 			this.arc(x+borderRadius, y+borderRadius, borderRadius, 1*Math.PI, 1.5*Math.PI); // top left
// 			this.arc(x+width-borderRadius, y+borderRadius, borderRadius, -0.5*Math.PI, 0); // top right
// 			this.arc(x+width-borderRadius, y+height-borderRadius, borderRadius, 0, 0.5*Math.PI); // bottom right
// 			this.arc(x+borderRadius, y+height-borderRadius, borderRadius, 0.5*Math.PI, 1*Math.PI); // bottom left
// 			this.closePath();
// 		}
// 	}
// 	else {
// 		console.error("Failed to draw rectangle!\nError: Invalid canvas context");
// 	}
// }

// function pointOnCircle(radius, angle, x, y) {
// 	if (!(x)) {x = 0};
// 	if (!(y)) {y = 0};
// 	var width = radius * 2;
// 	var height = radius * 2;
// 	if (typeof radius == 'string') {
// 		width = parseFloat(radius.substring(0, radius.indexOf("x")));
// 		height = parseFloat(radius.substring(radius.indexOf("x")+1, radius.length));
// 	}
// 	var point = {
// 		x:x+((width/2)*Math.cos(angle*(Math.PI/180))),
// 		y:y+((height/2)*Math.sin(angle*(Math.PI/180)))
// 	};
// 	return point;
// }

// Object.prototype.sizeCanvas = function(widthBias, heightBias) {
// 	if (!(widthBias)) {widthBias = 0};
// 	if (!(heightBias)) {heightBias = 0};
// 	this.width = this.clientWidth + widthBias;
// 	this.height = this.clientHeight + heightBias;
// }

// ---------- STRING FUNCTIONS ----------
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