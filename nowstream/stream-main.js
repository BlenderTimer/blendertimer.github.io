//----------Variables
var streamData = [];
var streamContainerChildren = document.getElementById("stream-container").children;
var sourcePopupBack = document.getElementById('source-popup-back');
var sourcePopupContainer = document.getElementById('source-popup-container');
var sourcePopupMain = document.getElementById('source-popup-main');
var sourcePopup = document.getElementById('source-popup');
var pageLoadTime = document.getElementById('page-load-time');
var lastFrames = [{d:Date.now(),t:0}];
var currentFPS = 0;
var logFPS = false;
var lastFPSLog = 0;
var timeRunningHover = false;
//----------Functions
//Load
for (var i=0; i < streamContainerChildren.length; i++) {
	var per = "s";
	if (streamContainerChildren[i].querySelector('span i').innerHTML.toLowerCase().endsWith(" millisecond")) {
		per = "ms";
	}
	else if (streamContainerChildren[i].querySelector('span i').innerHTML.toLowerCase().endsWith(" second")) {
		per = "s";
	}
	else if (streamContainerChildren[i].querySelector('span i').innerHTML.toLowerCase().endsWith(" minute")) {
		per = "m";
	}
	else if (streamContainerChildren[i].querySelector('span i').innerHTML.toLowerCase().endsWith(" hour")) {
		per = "h";
	}
	else if (streamContainerChildren[i].querySelector('span i').innerHTML.toLowerCase().endsWith(" day")) {
		per = "d";
	}
	var d = parseFloat(streamContainerChildren[i].querySelector('span i').innerHTML.replace(/,/g,""));
	if (per == "ms") {
		a = 1000;
	}
	else if (per == "s") {
		d = d/1000;
	}
	else if (per == "m") {
		d = d/60000
	}
	else if (per == "h") {
		d = d/3600000;
	}
	else if (per == "d") {
		d = d/86400000;
	};
	var r = d*1000;
	if (r >= 5) {r = 0}
	else if (r >= 1) {r = 1}
	else if (r >= 0.3) {r = 2}
	else {r = 3};
	var canvas = false;
	var forceInt = false;
	var imgAnim = false;
	if (streamContainerChildren[i].querySelector('canvas')) {canvas = true};
	if (Array.from(streamContainerChildren[i].children[0].children[0].classList).indexOf("image-flash") > -1) {imgAnim = "flash"}
	else if (Array.from(streamContainerChildren[i].children[0].children[0].classList).indexOf("image-flash-in") > -1) {imgAnim = "flash-in"}
	else if (Array.from(streamContainerChildren[i].children[0].children[0].classList).indexOf("image-flash-in-faster") > -1) {imgAnim = "flash-in-faster"}
	else if (Array.from(streamContainerChildren[i].children[0].children[0].classList).indexOf("image-shake") > -1) {imgAnim = "shake"};
	if (Array.from(streamContainerChildren[i].classList).indexOf("force-integer") > -1) {r = 0};
	streamData.push({name:streamContainerChildren[i].id,data:d,precision:r,imageAnimation:imgAnim,c:canvas});
	if (streamContainerChildren[i].querySelector('i') && !(streamContainerChildren[i].querySelector('i').parentNode.nodeName == "SPAN")) {
		streamData[streamData.length-1].imperial = true;
		streamData[streamData.length-1].imperialConversion = streamContainerChildren[i].querySelector('i').innerHTML.removeBefore(" ", 1).toLowerCase();
	}
	if (canvas) {
		streamData[streamData.length-1].blank = false;
		if (streamContainerChildren[i].children[0].children[0].alt == "Blank") {streamData[streamData.length-1].blank = true};
		streamData[streamData.length-1].precision = 0;
		if (streamData[streamData.length-1].blank == true) {
			streamData[streamData.length-1].fadeTime = 100;
		}
		else if (Array.from(streamContainerChildren[i].children[0].children[1].classList).indexOf("fade-2x") > -1) {
			streamData[streamData.length-1].fadeTime = ((1/streamData[streamData.length-1].data.limit(0.005, 0.05))*10).limit(300, 3000)/2;
		}
		else if (Array.from(streamContainerChildren[i].children[0].children[1].classList).indexOf("fade-3x") > -1) {
			streamData[streamData.length-1].fadeTime = ((1/streamData[streamData.length-1].data.limit(0.005, 0.05))*10).limit(300, 3000)/3;
		}
		else {
			streamData[streamData.length-1].fadeTime = ((1/streamData[streamData.length-1].data.limit(0.005, 0.05))*10).limit(300, 3000);
		}
		if (Array.from(streamContainerChildren[i].children[0].children[1].classList).indexOf("image-3x") > -1) {
			streamData[streamData.length-1].scale = 3;
		}
		else if (Array.from(streamContainerChildren[i].children[0].children[1].classList).indexOf("image-2x") > -1) {
			streamData[streamData.length-1].scale = 5;
		}
		else if (Array.from(streamContainerChildren[i].children[0].children[1].classList).indexOf("image-1.5x") > -1) {
			streamData[streamData.length-1].scale = 6.7;
		}
		else if (Array.from(streamContainerChildren[i].children[0].children[1].classList).indexOf("image-0.5x") > -1) {
			streamData[streamData.length-1].scale = 20;
		}
		else {
			streamData[streamData.length-1].scale = 10;
		}
		if (Array.from(streamContainerChildren[i].children[0].children[1].classList).indexOf("random-scale-1") > -1) {
			streamData[streamData.length-1].randomScale = 1.2;
		}
		else if (Array.from(streamContainerChildren[i].children[0].children[1].classList).indexOf("random-scale-2") > -1) {
			streamData[streamData.length-1].randomScale = 1.4;
		}
		else if (Array.from(streamContainerChildren[i].children[0].children[1].classList).indexOf("random-scale-3") > -1) {
			streamData[streamData.length-1].randomScale = 1.5;
		}
		else if (Array.from(streamContainerChildren[i].children[0].children[1].classList).indexOf("random-scale-4") > -1) {
			streamData[streamData.length-1].randomScale = 1.8;
		}
		else if (Array.from(streamContainerChildren[i].children[0].children[1].classList).indexOf("random-scale-5") > -1) {
			streamData[streamData.length-1].randomScale = 2;
		}
		else if (Array.from(streamContainerChildren[i].children[0].children[1].classList).indexOf("random-scale-6") > -1) {
			streamData[streamData.length-1].randomScale = 2.4;
		}
		else {
			streamData[streamData.length-1].randomScale = 1;
		}
		streamData[streamData.length-1].image = streamContainerChildren[i].children[0].children[0];
		streamData[streamData.length-1].aspect = streamContainerChildren[i].children[0].children[0].width/streamContainerChildren[i].children[0].children[0].height;
		streamData[streamData.length-1].particles = [];
		if (Array.from(streamContainerChildren[i].children[0].children[1].classList).indexOf("anim-in") > -1) {
			streamData[streamData.length-1].animation = "in";
		}
		else if (Array.from(streamContainerChildren[i].children[0].children[1].classList).indexOf("anim-grow") > -1) {
			streamData[streamData.length-1].animation = "grow";
		}
	}
}
const originalLoadTime = Date.now();
var loadTime = originalLoadTime;
pageLoadTime.children[0].innerHTML = "Page loaded at " + timeRead(new Date(loadTime));
var streamInterval = setInterval(function() {stream()}, 10);
//----------
function stream() {
	for (var i=0; i < streamData.length; i++) {
		var time = Date.now()-loadTime;
		var lastCount = parseInt(document.getElementById(streamData[i].name).querySelector('b').innerHTML.replace(/,/g, ""));
		if (streamData[i].precision == 0) {
			document.getElementById(streamData[i].name).querySelector('b').innerHTML = addCommas((streamData[i].data*time).round(0).toFullNumber());
			if (streamData[i].imperial) {
				document.getElementById(streamData[i].name).querySelector('i').innerHTML = addCommas(toImperial(streamData[i].data*time, streamData[i].imperialConversion).round(0).toFullNumber()) + " " + streamData[i].imperialConversion;
			}
		}
		else {
			document.getElementById(streamData[i].name).querySelector('b').innerHTML = addCommas((streamData[i].data*time).toFixed(streamData[i].precision));
			if (streamData[i].imperial) {
				document.getElementById(streamData[i].name).querySelector('i').innerHTML = addCommas(toImperial(streamData[i].data*time, streamData[i].imperialConversion).toFixed(streamData[i].precision)) + " " + streamData[i].imperialConversion;
			}
		}
		var diff = parseInt(document.getElementById(streamData[i].name).querySelector('b').innerHTML.replace(/,/g, ""))-lastCount;
		if (streamData[i].c) {
			var canvas = document.getElementById(streamData[i].name).children[0].children[1];
			var w = canvas.getBoundingClientRect().width;
			var h = canvas.getBoundingClientRect().height;
			var scale = w/streamData[i].scale;
			canvas.width = w;
			canvas.height = h;
			var c = canvas.getContext('2d');
			c.clearRect(0, 0, w, h);
			for (var n=0; n < diff; n++) {
				if (streamData[i].particles.length < (((streamData[i].data)*streamData[i].fadeTime)*3)) {
					if (streamData[i].blank == true) {
						streamData[i].particles.push({x:randomNumber(0,w-2),y:randomNumber(0,h-2),life:1,born:time});
					}
					else {
						var rndScl = randomNumber(1/streamData[i].randomScale,streamData[i].randomScale,2);
						if (streamData[i].animation == "grow") {
							streamData[i].particles.push({x:randomNumber((scale*rndScl)/2,w-((scale*rndScl)/2)),y:randomNumber(((scale*rndScl)/streamData[i].aspect)/2,h-(((scale*rndScl)/streamData[i].aspect)/2)),life:1,born:time,randomScale:rndScl});
						}
						else {
							streamData[i].particles.push({x:randomNumber(0,w-(scale*rndScl)),y:randomNumber(0,h-((scale*rndScl)/streamData[i].aspect)),life:1,born:time,randomScale:rndScl});
						}
					}
				}
			}
			for (var n=0; n < streamData[i].particles.length; n++) {
				streamData[i].particles[n].life = 1-(((time-streamData[i].particles[n].born))/streamData[i].fadeTime);
				if (streamData[i].particles[n].life <= 0) {
					streamData[i].particles.splice(n,1);
					continue;
				}
				else {
					c.globalAlpha = streamData[i].particles[n].life;
					if (streamData[i].animation == "in") {
						streamData[i].particles[n].y -= (streamData[i].particles[n].y-(h/2))/100;
						streamData[i].particles[n].x -= (streamData[i].particles[n].x-(w/2))/100;
					}
				}
				if (streamData[i].blank == true) {
					c.fillStyle = "#FFF";
					c.fillRect(streamData[i].particles[n].x-1,streamData[i].particles[n].y-1,2,2);
				}
				else {
					if (streamData[i].animation == "grow") {
						c.drawImage(streamData[i].image, streamData[i].particles[n].x-(((scale*streamData[i].particles[n].randomScale)*(1-streamData[i].particles[n].life))/2), streamData[i].particles[n].y-((((scale*streamData[i].particles[n].randomScale)/streamData[i].aspect)*(1-streamData[i].particles[n].life))/2), (scale*streamData[i].particles[n].randomScale)*(1-streamData[i].particles[n].life), ((scale*streamData[i].particles[n].randomScale)/streamData[i].aspect)*(1-streamData[i].particles[n].life));
					}
					else {
						c.drawImage(streamData[i].image, streamData[i].particles[n].x, streamData[i].particles[n].y, scale*streamData[i].particles[n].randomScale, (scale*streamData[i].particles[n].randomScale)/streamData[i].aspect);
					}
				}
			}
		}
		else if (streamData[i].imageAnimation == "flash") {
			if (diff > 0) {
				document.getElementById(streamData[i].name).children[0].children[1].style.display = null;
				document.getElementById(streamData[i].name).children[0].children[0].style.display = "none";
				var sdID = i;
				setTimeout(function() {document.getElementById(streamData[sdID].name).children[0].children[0].style.display = null;document.getElementById(streamData[sdID].name).children[0].children[1].style.display = "none"}, 150, sdID);
			}
		}
		else if (streamData[i].imageAnimation == "flash-in") {
			if (diff > 0) {
				document.getElementById(streamData[i].name).children[0].children[1].style.width = document.getElementById(streamData[i].name).children[0].children[0].offsetWidth + "px";
				document.getElementById(streamData[i].name).children[0].children[1].style.height = document.getElementById(streamData[i].name).children[0].children[0].offsetHeight + "px";
				document.getElementById(streamData[i].name).children[0].children[1].style.opacity = null;
				document.getElementById(streamData[i].name).children[0].children[1].style.transition = null;
				var sdID = i;
				setTimeout(function() {document.getElementById(streamData[sdID].name).children[0].children[1].style.opacity = "0";document.getElementById(streamData[sdID].name).children[0].children[1].style.transition = "1s ease"}, 1, sdID);
			}
		}
		else if (streamData[i].imageAnimation == "flash-in-faster") {
			if (diff > 0) {
				document.getElementById(streamData[i].name).children[0].children[1].style.width = document.getElementById(streamData[i].name).children[0].children[0].offsetWidth + "px";
				document.getElementById(streamData[i].name).children[0].children[1].style.height = document.getElementById(streamData[i].name).children[0].children[0].offsetHeight + "px";
				document.getElementById(streamData[i].name).children[0].children[1].style.opacity = null;
				document.getElementById(streamData[i].name).children[0].children[1].style.transition = null;
				var sdID = i;
				setTimeout(function() {document.getElementById(streamData[sdID].name).children[0].children[1].style.opacity = "0";document.getElementById(streamData[sdID].name).children[0].children[1].style.transition = "0.4s ease"}, 40, sdID);
			}
		}
		else if (streamData[i].imageAnimation == "shake") {
			if (diff > 0) {
				document.getElementById(streamData[i].name).children[0].children[0].style.transition = "0.2s cubic-bezier(0.64,-1.49, 0.44, 2.13)";
				document.getElementById(streamData[i].name).children[0].children[0].style.transform = "translateX(10px)";
				var sdID = i;
				setTimeout(function() {document.getElementById(streamData[sdID].name).children[0].children[0].style.transform = null}, 200, sdID);
			}
		}
	}
	pageLoadTime.children[1].innerHTML = readTime(time) + " ago";
	if (timeRunningHover == false) {pageLoadTime.children[1].title = time.translateTime("%yr%y %mo%mo %dy%d %hr%h %min%m %sec%s") + " ago"};
	lastFPSLog++;
	if (lastFPSLog == 20) {
		lastFrames.push({d:Date.now(),t:(Date.now()-lastFrames[lastFrames.length-1].d)/20});
		if (lastFrames.length > 20) {lastFrames.shift()};
		currentFPS = 0;
		for (var f=0; f < lastFrames.length; f++) {currentFPS += lastFrames[f].t};
		if (logFPS == true) {pageLoadTime.children[0].innerHTML = "FPS: " + (1000/(currentFPS/lastFrames.length)).round(0)};
		lastFPSLog = 0;
	}
}

function addCommas(n) {
	var parts = n.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
}

function closeSourcePopup() {
	document.body.style.width = null;
	document.getElementById('revolve-button').style.transition = "0s";
	document.getElementById('revolve-button').style.right = null;
	setTimeout(function() {document.getElementById('revolve-button').style.transition = "0.2s"}, 1);
	document.body.style.overflowY = null;
	sourcePopupBack.style.opacity = 0;
	sourcePopupBack.style.pointerEvents = "none";
	sourcePopupContainer.style.opacity = 0;
	sourcePopupMain.style.pointerEvents = "none";
	sourcePopupMain.style.transform = "scale(0)";
}

function viewSource(e) {
	var element = e.target || e.srcElement;
	sourcePopup.children[1].innerHTML = sourceData[element.parentNode.parentNode.id];
	sourcePopupBack.style.opacity = 1;
	sourcePopupBack.style.pointerEvents = "visible";
	sourcePopupContainer.style.opacity = 1;
	sourcePopupMain.style.pointerEvents = "visible";
	sourcePopupMain.style.transform = "scale(1)";
	var scrollPx = window.innerWidth - document.body.offsetWidth;
	document.body.style.width = "calc(100% - " + scrollPx + "px)";
	document.getElementById('revolve-button').style.transition = "0s";
	document.getElementById('revolve-button').style.right = scrollPx + "px";
	setTimeout(function() {document.getElementById('revolve-button').style.transition = "0.2s"}, 1);
	document.body.style.overflowY = "hidden";
}

function toImperial(num, returnAs) {
	if (returnAs == "gallons") {
		return num/3.785411784;
	}
	else if (returnAs == "miles") {
		return num*0.62137119223733;
	}
	else if (returnAs == "tons") {
		return num/0.90718474;
	}
	else if (returnAs == "books") {
		return num/64000;
	}
	else {
		return num;
	}
}

function timeRead(t) {
	var hours = t.getHours();
	var minutes = t.getMinutes();
	if (hours > 11) {return (hours-12).toString() + ":" + minutes.toString().extend(2, "0", true) + " PM"}
	else {return (hours+1).toString() + ":" + minutes.toString().extend(2, "0", true) + " AM"};
}

function readTime(t) {
	if (t >= 31536000000) {
		var ti = Math.floor(t/31536000000);
		if (ti == 1) {return ti.toString() + " year"}
		else {return ti.toString() + " years"};
	}
	else if (t >= 2628000000) {
		var ti = Math.floor(t/2628000000);
		if (ti == 1) {return ti.toString() + " month"}
		else {return ti.toString() + " months"};
	}
	else if (t >= 604800000) {
		var ti = Math.floor(t/604800000);
		if (ti == 1) {return ti.toString() + " week"}
		else {return ti.toString() + " weeks"};
	}
	else if (t >= 86400000) {
		var ti = Math.floor(t/86400000);
		if (ti == 1) {return ti.toString() + " day"}
		else {return ti.toString() + " days"};
	}
	else if (t >= 3600000) {
		var ti = Math.floor(t/3600000);
		if (ti == 1) {return ti.toString() + " hour"}
		else {return ti.toString() + " hours"};
	}
	else if (t >= 60000) {
		var ti = Math.floor(t/60000);
		if (ti == 1) {return ti.toString() + " minute"}
		else {return ti.toString() + " minutes"};
	}
	else {
		var ti = Math.floor(t/1000);
		if (ti == 1) {return ti.toString() + " second"}
		else {return ti.toString() + " seconds"};
	}
}

function fps() {
	if (logFPS == false) {logFPS = true;pageLoadTime.children[0].className = "fps"}
	else {logFPS = false;pageLoadTime.children[0].innerHTML = "Page loaded at " + timeRead(new Date(loadTime));pageLoadTime.children[0].className = null};
}

function readFullTime(t) {
	var s = t/1000;
	var m = s/60;
	var h = m/60;
	var d = h/24;
	var y = d/365;
	var sec = Math.floor(s);
	var min = Math.floor(m);
	var hr = Math.floor(h);
	var day = Math.floor(d);
	var yr = Math.floor(y);
	return Math.floor(yr) + "y " + Math.floor(day-(yr*365)) + "d " + Math.floor(hr-(day*24)-(yr*8760)) + "h " + Math.floor(min-(hr*60)-(day*1440)-(yr*525600)) + "m " + Math.floor(sec-(min*60)-(hr*3600)-(day*86400)-(yr*31536000)) + "s"
}

function btjs(e) {
	if (e == "cursor") {
		if (cursorInfo("eo").parentNode.id == "page-load-time") {
			timeRunningHover = true;
		}
		else {
			timeRunningHover = false;
		}
	}
}