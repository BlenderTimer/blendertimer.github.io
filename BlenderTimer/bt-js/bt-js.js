// --------------- SCRIPT INFORMATION ---------------
const btjsAuthor = "Daniel Roberts (BlenderTimer)" //				Author
const btjsVersion = "0.0.7" //										Version
const btjsLastUpdated = "November 26, 2024" //						Last Updated
const btjsLicense = "BT-LU" //										License
const btjsLicenseLink = "https://blendertimer.com/license/bt-lu" //	License Link
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
Array.prototype.moveItem = function(indexFrom, indexTo, method, placeholder) {
	if (indexFrom < 0) {indexFrom = 0}
	else if (indexFrom > (this.length-1)) {indexFrom = this.length-1};
	if (indexTo < 0) {indexTo = 0}
	else if (indexTo > (this.length-1)) {indexTo = this.length-1};
	if (!(indexFrom == indexTo)) {
		if (method == 2 || method == "overwrite") {
			var newArray = this;
			newArray.splice(indexTo, 1, this[indexFrom]);
			if (!(placeholder == undefined)) {newArray.splice(indexFrom, 1, placeholder)}
			else {newArray.splice(indexFrom, 1)};
			return newArray;
		}
		else if (method == 1 || method == "swap") {
			var newArray = this;
			var swapItem = this[indexTo];
			newArray.splice(indexTo, 1, this[indexFrom]);
			newArray.splice(indexFrom, 1, swapItem);
			return newArray;
		}
		else {
			var newArray = this;
			if (indexFrom > indexTo) {
				newArray.splice(indexTo, 0, this[indexFrom]);
				if (!(placeholder == undefined)) {newArray.splice(indexFrom + 1, 1, placeholder)}
				else {newArray.splice(indexFrom + 1, 1)};
			}
			else {
				newArray.splice(indexTo + 1, 0, this[indexFrom]);
				if (!(placeholder == undefined)) {newArray.splice(indexFrom, 1, placeholder)}
				else {newArray.splice(indexFrom, 1)};
			}
			return newArray;
		}
	}
	else {return this};
}

Array.prototype.selectRandom = function() {return this[parseInt(Math.random() * this.length)]};
Array.prototype.sumValues = function() {var sum = 0;for (var i=0; i < this.length; i++) {sum += this[i]};return sum};

// ---------- BOOLEAN FUNCTIONS ----------
Boolean.prototype.toYesNo = function() {if (this == true) {return "Yes"} else if (this == false) {return "No"}};

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

function readCookie(name) {
	name = name + "=";
	var cs = decodeURIComponent(document.cookie).split(';');
	for (var i=0; i < cs.length; i++) {
		var c = cs[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return null;	
}

function writeCookie(name, value, lifetime) {document.cookie = name + "=" + value + ";" + ("expires="+(new Date(Date.now()+(lifetime*24*60*60*1000))).toUTCString()) + ";path=/"};

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
	else if (decimalPlaces == "smart") {
		if (n > 1000) {
			n = parseFloat(n.toFixed(0));
		}
		else if (n < 100 && n >= 10) {
			n = parseFloat(n.toFixed(4))
		}
		else if (n < 10 && n >= 0.1) {
			n = parseFloat(n.toFixed(5))
		}
		else if (n > 0 && n < 0.1) {
			var ns = n.toFullNumber().substring(1);
			var rnd = 0;
			for (var i=0; i < ns.length; i++) {
				var c = ns.substr(i, 1);
				if (c == "0") {
					rnd += 1;
				}
				else if (!(c == ".")) {
					break;
				}
			}
			if ((rnd + 5) <= 100) {
				n = parseFloat(n.toFixed(rnd + 5))
			}
			else {
				n = parseFloat(n.toFixed(100))
			}
		}
		else {
			if (decimalPlaces > 100) {
				n = parseFloat(n.toFixed(100))
			}
			else if (decimalPlaces < 0) {
				n = parseFloat(n.toFixed(0))
			}
			else {
				n = parseFloat(n.toFixed(3))
			}
		}
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

Number.prototype.toFullNumber = function() {
	var data = String(this).split(/[eE]/);
	if (data.length == 1) return data[0];
	var z = '',
	sign = this < 0 ? '-' : '',
	str = data[0].replace('.', ''),
	mag = Number(data[1]) + 1;
	if (mag < 0) {
		z = sign + '0.';
		while (mag++) z += '0';
		return z + str.replace(/^\-/, '');
	}
	mag -= str.length;
	while (mag--) z += '0';
	return str + z;
}

Number.prototype.translateTime = function(format) {
	if (!(format)) {format = "%yr2%-%mo2%-%dy2% %hr2%:%min2%:%sec2%.%ms3%"};
	var style = [{available:false,length:0},{available:false,length:0},{available:false,length:0},{available:false,length:0},{available:false,length:0},{available:false,length:0},{available:false,length:0}];
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
	return newFormat.replace(/%%yr%%/g, yr).replace(/%%mo%%/g, mo).replace(/%%dy%%/g, dy).replace(/%%hr%%/g, hr).replace(/%%min%%/g, min).replace(/%%sec%%/g, sec).replace(/%%ms%%/g, ms);
}

Number.prototype.toNegative = function() {var n = parseFloat(this);if (parseFloat(this) > 0) {n = parseFloat(this) * -1};return n};
Number.prototype.toPositive = function() {var n = parseFloat(this);if (parseFloat(this) < 0) {n = parseFloat(this) * -1};return n};

// ---------- Object FUNCTIONS ----------
function clearCanvas(canvasContext2D) {
	if (canvasContext2D.canvas) {
		canvasContext2D.clearRect(0, 0, canvasContext2D.canvas.width, canvasContext2D.canvas.height);
		canvasContext2D.beginPath();
	}
	else {console.error("Failed to draw rectangle!\nError: Invalid canvas context")};
}

function drawRect(canvasContext2D, x, y, width, height, borderRadius) {
	if (canvasContext2D.canvas) {
		if (!(borderRadius) || borderRadius == 0) {
			canvasContext2D.rect(x, y, width, height);
		}
		else {
			if (borderRadius > (width / 2)) {
				borderRadius = width / 2;
			}
			if (borderRadius > (height / 2)) {
				borderRadius = height / 2;
			}
			canvasContext2D.beginPath();
			canvasContext2D.arc(x+borderRadius, y+borderRadius, borderRadius, 1*Math.PI, 1.5*Math.PI); // top left
			canvasContext2D.arc(x+width-borderRadius, y+borderRadius, borderRadius, -0.5*Math.PI, 0); // top right
			canvasContext2D.arc(x+width-borderRadius, y+height-borderRadius, borderRadius, 0, 0.5*Math.PI); // bottom right
			canvasContext2D.arc(x+borderRadius, y+height-borderRadius, borderRadius, 0.5*Math.PI, 1*Math.PI); // bottom left
			canvasContext2D.closePath();
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

function pointsOnCircle(count, radius, angle, x, y) {
	var i = 0;
	var t = 0;
	var points = [];
	while (i < count && t <= 1000000) {
		points.push(pointOnCircle(radius, angle+((i/count) * 360), x, y));
		i += 1;
		t += 1;
	}
	return points;
}

function sizeCanvas(canvas, widthBias, heightBias) {
	if (!(widthBias)) {widthBias = 0};
	if (!(heightBias)) {heightBias = 0};
	canvas.width = canvas.clientWidth + widthBias;
	canvas.height = canvas.clientHeight + heightBias;
}

// ---------- STRING FUNCTIONS ----------
String.prototype.extend = function(length, fillChar, appendToBeginning) {
	if (fillChar == null) {
		fillChar = " ";
	}
	var str = this.toString();
	var ol = str.length;
	var t = 1000000
	if (length < 0) {
		if (appendToBeginning == true) {
			while (str.length < ((length*-1)+ol) && t >= 0) {
				str = fillChar + str;
				t -= 1;
			}
		}
		else {
			while (str.length < ((length*-1)+ol) && t >= 0) {
				str += fillChar;
				t -= 1;
			}
		}
	}
	else {
		if (appendToBeginning == true) {
			while (str.length < length && t >= 0) {
				str = fillChar + str;
				t -= 1;
			}
		}
		else {
			while (str.length < length && t >= 0) {
				str += fillChar;
				t -= 1;
			}
		}
	}
	return str;
}

String.prototype.isNumber = function() {
	if (this.length == 0) {return false};
	var ts = this.split("");
	var tsNum = 0;
	var tsNumDec = 0;
	var tsNumNeg = 0;
	for (var i=0; i < ts.length; i++) {
		if (ts[i].toString() == "0" || ts[i].toString() == "1" || ts[i].toString() == "2" || ts[i].toString() == "3" || ts[i].toString() == "4" || ts[i].toString() == "5" || ts[i].toString() == "6" || ts[i].toString() == "7" || ts[i].toString() == "8" || ts[i].toString() == "9") {
			tsNum++;
		}
		else if (ts[i].toString() == ".") {
			tsNumDec++;
		}
		else if (ts[i].toString() == "-") {
			tsNumNeg++;
		}
	}

	if (tsNumDec > 0 && ts[ts.length-1] == ".") {return false};
	if (tsNumNeg > 0 && !(ts[0] == "-")) {return false};
	if (tsNum > 0 && tsNum == this.replace(/\./g,"").replace(/\-/g, "").length && tsNumDec < 2 && tsNumNeg < 2) {
		return true;
	}
	else {
		return false;
	}
}

String.prototype.removeAfter = function(breakChar, offset, last, returnEmptyIfNotFound) {
	var t = this.toString();
	if (offset == null) {
		offset = 1;
	}
	else {
		offset = offset + 1;
	}
	if (breakChar == null) {
		return t;
	}
	else {
		if (last == true) {
			last = t.lastIndexOf(breakChar)
		}
		else {
			last = t.indexOf(breakChar)
		}
		if (returnEmptyIfNotFound == true) {
			if (last == -1) {
				return "";
			}
		}
		if (last > -1) {
			if ((last + offset) < t.length) {
				return t.slice(0, last + offset);
			}
			else {
				return t;
			}
		}
		else {
			return t;
		}
	}
}

String.prototype.removeBefore = function(breakChar, offset, last, returnEmptyIfNotFound) {
	var t = this.toString();
	if (offset == null) {
		offset = 0;
	}
	if (breakChar == null) {
		return t;
	}
	else {
		if (last == true) {
			last = t.lastIndexOf(breakChar)
		}
		else {
			last = t.indexOf(breakChar)
		}
		if (returnEmptyIfNotFound == true) {
			if (last == -1) {
				return "";
			}
		}
		if (last > -1) {
			if ((last + offset) < t.length) {
				return t.slice(last + offset);
			}
			else {
				return t;
			}
		}
		else {
			return t;
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