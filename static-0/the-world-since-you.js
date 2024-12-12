//----------Constants
const now = new Date();
const currentYear = now.getFullYear();
//----------Variables
var birthYear = document.getElementById('birth-year');
var birthMonth = document.getElementById('birth-month');
var birthDay = document.getElementById('birth-day');
var selectedYear = -1;
var selectedMonth = -1;
var selectedDay = -1;
var selectedDate = new Date();
var lifeData = document.getElementById('life-data');
var timelineTitle = document.getElementById('timeline-title');
var timeline = document.getElementById('timeline');
var popupBack = document.getElementById('popup-back');
var popupContainer = document.getElementById('popup-container');
var popupMain = document.getElementById('popup-main');
var eventSuggestionPopup = document.getElementById('event-suggestion-popup');
var eventSuggestionFirst = true;
var hideWars = false
var hideRegularEvents = false;
//----------Event Listeners

//----------LOAD----------
birthYear.placeholder = "1900-" + currentYear;
birthDay.placeholder = "1-31";
birthYear.focus();
//----------Functions
function checkEnter(e) {
	var element = e.target || e.srcElement;
	if (element.id == "birth-year" && e.code == "Enter") {birthDay.focus()}
	else if (element.id == "birth-day" && e.code == "Enter") {loadTimeline()};
}

function limitInput(e, t) {
	var element = e.target || e.srcElement;
	if (t == "y") {
		var ss = element.selectionStart;
		var se = element.selectionEnd;
		var i = 0;
		var ns = "";
		for (const c of element.value) {
			if (["0","1","2","3","4","5","6","7","8","9"].includes(c) && !(ns.length == 4)) {
				ns += c;
			}
			else {
				if (!(i > ss)) {ss -= 1};
				if (!(i > se)) {se -= 1};
			}
			i++;
		}
		if (ns.length > 3 && (parseInt(ns) < 1900 || parseInt(ns) > currentYear)) {element.style.background = "#F22";element.style.boxShadow = "0px 0px 20px #7E000055, 0px 0px 10px #4B0303 inset"}
		else {
			element.style.background = null;
			element.style.boxShadow = null;
			//if (ns.length == 4) {birthDay.focus()};
		}
		element.value = ns;
		element.selectionStart = ss;
		element.selectionEnd = se;
		selectedYear = parseInt(element.value);
		if (birthDay.value.length > 0 && parseInt(birthDay.value) > daysInMonth(selectedYear, selectedMonth)) {birthDay.value = daysInMonth(selectedYear, selectedMonth);birthDay.style.background = null;birthDay.style.boxShadow = null};
		birthDay.placeholder = "1-" + daysInMonth(selectedYear, selectedMonth);
	}
	else if (t == "m") {
		for (const ele of birthMonth.children) {ele.style.outline = null};
		element.style.outline = "2px solid #BFF";
		if (element.textContent == "January") {selectedMonth = 0}
		else if (element.textContent == "February") {selectedMonth = 1}
		else if (element.textContent == "March") {selectedMonth = 2}
		else if (element.textContent == "April") {selectedMonth = 3}
		else if (element.textContent == "May") {selectedMonth = 4}
		else if (element.textContent == "June") {selectedMonth = 5}
		else if (element.textContent == "July") {selectedMonth = 6}
		else if (element.textContent == "August") {selectedMonth = 7}
		else if (element.textContent == "September") {selectedMonth = 8}
		else if (element.textContent == "October") {selectedMonth = 9}
		else if (element.textContent == "November") {selectedMonth = 10}
		else if (element.textContent == "December") {selectedMonth = 11};
		if (birthDay.value.length > 0 && parseInt(birthDay.value) > daysInMonth(selectedYear, selectedMonth)) {birthDay.value = daysInMonth(selectedYear, selectedMonth);birthDay.style.background = null;birthDay.style.boxShadow = null};
		birthDay.placeholder = "1-" + daysInMonth(selectedYear, selectedMonth);
		birthDay.focus();
	}
	else if (t == "d") {
		var ss = element.selectionStart;
		var se = element.selectionEnd;
		var i = 0;
		var ns = "";
		for (const c of element.value) {
			if (["0","1","2","3","4","5","6","7","8","9"].includes(c) && !(ns.length == 2)) {
				ns += c;
			}
			else {
				if (!(i > ss)) {ss -= 1};
				if (!(i > se)) {se -= 1};
			}
			i++;
		}
		if (ns.length > 0 && (parseInt(ns) < 1 || parseInt(ns) > daysInMonth(selectedYear, selectedMonth))) {element.style.background = "#F22";element.style.boxShadow = "0px 0px 20px #7E000055, 0px 0px 10px #4B0303 inset"}
		else {
			element.style.background = null;
			element.style.boxShadow = null;
		}
		element.value = ns;
		element.selectionStart = ss;
		element.selectionEnd = se;
		selectedDay = parseInt(element.value);
	}
}

function daysInMonth(year, month) {
	return new Date(year, month+1, 0).getDate();
}

function loadTimeline(scrollView) {
	selectedDate = new Date(selectedYear, selectedMonth, selectedDay);
	while (timeline.lastChild) {timeline.lastChild.remove()};
	var events = 0;
	var eventsShown = 0;
	var wars = 0;
	var inWars = 0;
	var inventions = 0;
	var warDeaths = 0;
	var majorWars = 0;
	for (const e of worldEvents) {
		var eDate = readDate(e.date);
		if (eDate.date >= selectedDate.getTime()) {
			if (!(hideWars == true && e.type.indexOf("war") > -1) && !(hideRegularEvents == true && !(e.major))) {
				var eb = document.createElement('div');
				eb.className = "event-block";
				if (e.major) {eb.className = "event-block major";if (e.type.indexOf("invention") > -1 || e.type.indexOf("product") > -1) {inventions++}};
				var ed = document.createElement('div');
				ed.className = "event-date";
				ed.innerHTML = "<span>" + getDateHTML(eDate.date, eDate.estimated) + "</span><i>" + timeAgo(Date.now()-eDate.date) + " (you were " + getAge(eDate.date-selectedDate.getTime()) + ")" + "</i>";
				eb.appendChild(ed);
				var et = document.createElement('span');
				et.className = "event-title";
				et.innerHTML = e.title;
				eb.appendChild(et);
				var erm = document.createElement('img');
				erm.src = "./static-0/files/images/icons/arrow-down2.svg";
				erm.alt = "Read more";
				erm.title = "Read more";
				erm.addEventListener('click', function(event) {readMore(event)});
				eb.appendChild(erm);
				var edes = document.createElement('div');
				edes.className = "event-description";
				edes.innerHTML = "<i>" + e.description + "</i>";
				edes.style.display = "none";
				eb.appendChild(edes);
				timeline.appendChild(eb);
				eventsShown++;
			}
			if (e.type == "war-begins") {
				wars++;
				inWars++;
				if (e.major) {majorWars++};
			}
			else if (e.type == "war-ends" && inWars > 0) {
				inWars -= 1;
				if (e.deaths) {warDeaths += e.deaths};
			}
			else if (e.type == "war-ends" && inWars == 0) {
				wars++;
				if (e.deaths) {warDeaths += e.deaths};
			}
			events++;
		}
	}
	if (timeline.children.length == 0) {
		timeline.innerHTML = "<div class=\"event-start\"><i>There are no events for your lifetime!</i></div>";
	}
	//Data section
	document.getElementById('data-people').children[1].children[1].innerHTML = getShortNumber(getPopulationChange(selectedDate.getTime()));
	document.getElementById('data-wars').children[1].children[1].innerHTML = wars.toLocaleString();
	document.getElementById('data-inventions').children[1].children[1].innerHTML = inventions.toLocaleString();
	if (warDeaths == 0 && majorWars > 0) {warDeaths = majorWars*100000}; 
	document.getElementById('data-war-deaths').children[1].children[1].innerHTML = getShortNumber(warDeaths);
	if (document.getElementById('data-wars').children[1].children[1].textContent == "1") {document.getElementById('data-wars').children[1].children[2].innerHTML = "war in your lifetime.";document.getElementById('data-wars').children[1].children[0].innerHTML = "There has been at least"}
	else {document.getElementById('data-wars').children[1].children[2].innerHTML = "wars in your lifetime.";document.getElementById('data-wars').children[1].children[0].innerHTML = "There have been at least"};
	if (document.getElementById('data-inventions').children[1].children[1].textContent == "1") {document.getElementById('data-inventions').children[1].children[2].innerHTML = "world changing invention/product in your lifetime.";document.getElementById('data-inventions').children[1].children[0].innerHTML = "There has been at least"}
	else {document.getElementById('data-inventions').children[1].children[2].innerHTML = "world changing inventions/products in your lifetime.";document.getElementById('data-inventions').children[1].children[0].innerHTML = "There have been at least"};
	lifeData.style.display = null;
	if (events == eventsShown) {
		timelineTitle.innerHTML = "The " + events + " Events of Your Lifetime:"
	}
	else {
		timelineTitle.innerHTML = eventsShown + " of the " + events + " Events of Your Lifetime:"
	}
	document.getElementById('timeline-legend').style.display = null;
	document.getElementById('timeline-filters').style.display = null;
	if (!(scrollView == false)) {setTimeout(function() {window.scrollTo({top:lifeData.getBoundingClientRect().top - 100, behavior:'smooth'})}, 20)};
}

function readMore(e) {
	var element = e.target || e.srcElement;
	if (element.title == "Read more") {
		element.title = "Read less";
		element.alt = "Read less";
		element.src = "./static-0/files/images/icons/arrow-up2.svg";
		element.parentNode.children[element.parentNode.children.length-1].style.display = null;
	}
	else {
		element.title = "Read more";
		element.alt = "Read more";
		element.src = "./static-0/files/images/icons/arrow-down2.svg";
		element.parentNode.children[element.parentNode.children.length-1].style.display = "none";
	}
}

function readDate(date) {
	var year = 1900;
	var month = 6;
	var day = 1;
	var est = "no";
	if (date.indexOf("-") > -1) {
		if (date.removeBefore("-", 1).indexOf("-") > -1) {
			year = parseInt(date.removeAfter("-", -1));
			month = parseInt(date.removeBefore("-", 1).removeAfter("-", -1, true));
			day = parseInt(date.removeBefore("-", 1, true));
		}
		else {
			year = parseInt(date.removeAfter("-", -1));
			month = parseInt(date.removeBefore("-", 1, true));
			day = 1;
			est = "d";
		}
	}
	else {
		year = parseInt(date);
		month = 6;
		day = 1;
		est = "md";
	}
	return {date:new Date(year, month-1, day).getTime(), estimated:est};
}

function getDateHTML(date, est) {
	var d = new Date(date);
	var str = "";
	if (est == "md") {
		str = "<b>" + d.getFullYear() + "</b>";
	}
	else if (est == "d") {
		var m = "January";
		if (d.getMonth() == 1) {m = "February"}
		else if (d.getMonth() == 2) {m = "March"}
		else if (d.getMonth() == 3) {m = "April"}
		else if (d.getMonth() == 4) {m = "May"}
		else if (d.getMonth() == 5) {m = "June"}
		else if (d.getMonth() == 6) {m = "July"}
		else if (d.getMonth() == 7) {m = "August"}
		else if (d.getMonth() == 8) {m = "September"}
		else if (d.getMonth() == 9) {m = "October"}
		else if (d.getMonth() == 10) {m = "November"}
		else if (d.getMonth() == 11) {m = "December"};
		str = "<b>" + m + "</b><b>" + d.getFullYear() + "</b>";
	}
	else {
		var m = "January";
		if (d.getMonth() == 1) {m = "February"}
		else if (d.getMonth() == 2) {m = "March"}
		else if (d.getMonth() == 3) {m = "April"}
		else if (d.getMonth() == 4) {m = "May"}
		else if (d.getMonth() == 5) {m = "June"}
		else if (d.getMonth() == 6) {m = "July"}
		else if (d.getMonth() == 7) {m = "August"}
		else if (d.getMonth() == 8) {m = "September"}
		else if (d.getMonth() == 9) {m = "October"}
		else if (d.getMonth() == 10) {m = "November"}
		else if (d.getMonth() == 11) {m = "December"};
		str = "<b>" + m + "</b><b>" + d.getFullYear() + "</b><b>" + d.getDate() + "</b>";
	}
	return str;
}

function timeAgo(t) {
	if (t >= 31536000000) {
		var ti = Math.floor(t/31536000000);
		if (ti == 1) {return ti.toString() + " year ago"}
		else {return ti.toString() + " years ago"};
	}
	else if (t >= 2628000000) {
		var ti = Math.floor(t/2628000000);
		if (ti == 1) {return ti.toString() + " month ago"}
		else {return ti.toString() + " months ago"};
	}
	else if (t >= 604800000) {
		var ti = Math.floor(t/604800000);
		if (ti == 1) {return ti.toString() + " week ago"}
		else {return ti.toString() + " weeks ago"};
	}
	else if (t >= 86400000) {
		var ti = Math.floor(t/86400000);
		if (ti == 1) {return ti.toString() + " day ago"}
		else {return ti.toString() + " days ago"};
	}
	else if (t >= 3600000) {
		var ti = Math.floor(t/3600000);
		if (ti == 1) {return ti.toString() + " hour ago"}
		else {return ti.toString() + " hours ago"};
	}
	else if (t >= 60000) {
		var ti = Math.floor(t/60000);
		if (ti == 1) {return ti.toString() + " minute ago"}
		else {return ti.toString() + " minutes ago"};
	}
	else {
		var ti = Math.floor(t/1000);
		if (ti == 1) {return ti.toString() + " second ago"}
		else {return ti.toString() + " seconds ago"};
	}
}

function getAge(t) {
	if (t >= 31536000000) {
		var ti = Math.floor(t/31536000000);
		if (ti == 1) {return ti.toString() + " year old"}
		else {return ti.toString() + " years old"};
	}
	else if (t >= 2628000000) {
		var ti = Math.floor(t/2628000000);
		if (ti == 1) {return ti.toString() + " month old"}
		else {return ti.toString() + " months old"};
	}
	else if (t >= 604800000) {
		var ti = Math.floor(t/604800000);
		if (ti == 1) {return ti.toString() + " week old"}
		else {return ti.toString() + " weeks old"};
	}
	else if (t >= 86400000) {
		var ti = Math.floor(t/86400000);
		if (ti == 1) {return ti.toString() + " day old"}
		else {return ti.toString() + " days old"};
	}
}

function closePopup() {
	document.body.style.width = null;
	document.body.style.overflowY = null;
	popupBack.style.opacity = 0;
	popupBack.style.pointerEvents = "none";
	popupContainer.style.opacity = 0;
	popupMain.style.pointerEvents = "none";
	popupMain.style.transform = "scale(0)";
}

function showPopup(popup) {
	if (popup == "event-suggestion") {
		if (eventSuggestionFirst == true) {
			var scr = document.createElement('script');
			scr.setAttribute("data-key", "ZITzLTGATEuVTYQNX0Ea0w");
			scr.setAttribute("data-form", "11");
			scr.src = "https://www.cognitoforms.com/f/seamless.js";
			eventSuggestionPopup.children[1].appendChild(scr);
			eventSuggestionFirst = false;
		}
		eventSuggestionPopup.style.display = null;
	}
	popupBack.style.opacity = 1;
	popupBack.style.pointerEvents = "visible";
	popupContainer.style.opacity = 1;
	popupMain.style.pointerEvents = "visible";
	popupMain.style.transform = "scale(1)";
	var scrollPx = window.innerWidth - document.body.offsetWidth;
	document.body.style.width = "calc(100% - " + scrollPx + "px)";
	document.body.style.overflowY = "hidden";
}

function getPopulationChange(d) {
	var wpNames = Object.getOwnPropertyNames(worldPopulation);
	var i = 0;
	var closest = {wp:0,dis:10000000000000000000};
	var closestc = {wp:0,dis:10000000000000000000};
	var dc = Date.now();
	for (const p of wpNames) {
		if ((d-parseInt(p)).toPositive() < closest.dis) {
			closest = {wp:worldPopulation[wpNames[i]],dis:(d-parseInt(p)).toPositive()};
		}
		if ((dc-parseInt(p)).toPositive() < closestc.dis) {
			closestc = {wp:worldPopulation[wpNames[i]],dis:(dc-parseInt(p)).toPositive()};
		}
		i++;
	}
	return closestc.wp-closest.wp;
}

function getShortNumber(n) {
	if (n >= 1000000000) {return (n/1000000000).round(1).toString() + " billion"}
	else if (n >= 10000000) {return (n/1000000).round(0).toString() + " million"}
	else if (n >= 1000000) {return (n/1000000).round(1).toString() + " million"}
	else if (n >= 10000) {return (n/1000).round(0).toString() + " thousand"}
	else if (n >= 1000) {return (n/1000).round(1).toString() + " thousand"}
	else {return n.toString()};
}

function filter(e) {
	var element = e.target || e.srcElement;
	if (element.textContent == "Hide Wars") {
		hideWars = true;
		element.innerHTML = "Show Wars";
		element.className = "filter-enabled";
		loadTimeline(false);
	}
	else if (element.textContent == "Show Wars") {
		hideWars = false;
		element.innerHTML = "Hide Wars";
		element.className = "";
		loadTimeline(false);
	}
	else if (element.textContent == "Hide Regular Events") {
		hideRegularEvents = true;
		element.innerHTML = "Show Regular Events";
		element.className = "filter-enabled";
		loadTimeline(false);
	}
	else if (element.textContent == "Show Regular Events") {
		hideRegularEvents = false;
		element.innerHTML = "Hide Regular Events";
		element.className = "";
		loadTimeline(false);
	}
}