var tlCanvas = document.getElementById("tl-canvas");
var tl2d = tlCanvas.getContext("2d");
var timeline = document.getElementById("timeline");
var initialTime = new Date(2021, 3, 21).getTime();
var currentTime = Date.now();
var currentDay = Math.floor(currentTime / 86400000) + 2;
var initialDay = Math.floor(initialTime / 86400000) + 1;
var totalDaysLive = Math.floor(currentDay - initialDay);
var milestoneList = document.getElementById('milestone-list');
var milestones = [];
var tlHeight = 300;

//———————————SETTINGS———————————————————————
var lineSpacing = 30;
var startOffset = 30;
var boxRounding = 4;
var dayTag = {width:25,height:21,bottom:10};
var monthTag = {width:100,height:21,bottom:40};
var yearTag = {top:30};
var milestoneOffset = 0;
//——————————————————————————————————————————

function loadMilestones() {
	for (var i=0; i < milestoneList.children.length; i++) {
		var ih = milestoneList.children[i].innerHTML.toString();
		var d = ih.substring(ih.indexOf("(") + 1,ih.indexOf(")"));
		milestones.push({id:parseInt(milestoneList.children.length - i - 1),date:{year:parseInt(d.substring(0,4)),month:parseInt(d.substring(5,7)),day:parseInt(d.substring(8,10))},text:ih.substring(ih.indexOf(")") + 2,ih.length)});
		milestones[milestones.length - 1].offset = parseInt(milestoneList.children[i].classList[0]);
		if (milestoneList.children[i].classList.length > 1) {
			milestones[milestones.length - 1].titleOffset = milestoneList.children[i].classList[1];
		}
		else {
			milestones[milestones.length - 1].titleOffset = "no";
		}
		if (milestoneList.children[i].classList.length > 2) {
			milestones[milestones.length - 1].noLine = milestoneList.children[i].classList[2];
		}
		else {
			milestones[milestones.length - 1].noLine = "no";
		}
	}
	drawTimeline();
}

function addLine(x, height) {
	tl2d.beginPath();
	tl2d.moveTo(x, 300);
	tl2d.lineTo(x, 300 - height);
	tl2d.strokeStyle = "#1E1E1E";
	tl2d.lineWidth = 3;
	tl2d.lineCap = "round";
	tl2d.stroke();
}

function addDay(day, x, base) {
	tl2d.fillStyle = "#1E1E1E";
	tl2d.fillRect(x - 7, 300 - base, 25, 20);
	tl2d.font = "bold 12pt monospace";
	tl2d.fillStyle = "#555555";
	if (day < 10) {
		tl2d.fillText(day, x + 1, 300 - base + 15);
	}
	else {
		tl2d.fillText(day, x - 3.5, 300 - base + 15);
	}
}

function addMonth(month, x, base) {
	tl2d.fillStyle = "#1E1E1E";
	tl2d.fillRect(x - 45, 300 - base, 100, 20);
	tl2d.font = "bold 12pt monospace";
	tl2d.fillStyle = "#888888";
	var centerOffset = 0
	var m = ""
	if (month == 0) {
		m = "January";
		centerOffset = 26
	}
	else if (month == 1) {
		m = "February";
		centerOffset = 30
	}
	else if (month == 2) {
		m = "March";
		centerOffset = 17
	}
	else if (month == 3) {
		m = "April";
		centerOffset = 17
	}
	else if (month == 4) {
		m = "May";
		centerOffset = 9
	}
	else if (month == 5) {
		m = "June";
		centerOffset = 13.5
	}
	else if (month == 6) {
		m = "July";
		centerOffset = 12.5
	}
	else if (month == 7) {
		m = "August";
		centerOffset = 21
	}
	else if (month == 8) {
		m = "September";
		centerOffset = 34
	}
	else if (month == 9) {
		m = "October";
		centerOffset = 25
	}
	else if (month == 10) {
		m = "November";
		centerOffset = 29.5
	}
	else if (month == 11) {
		m = "December";
		centerOffset = 29.5
	}
	tl2d.fillText(m, x - centerOffset, 300 - base + 15);
}

function addYear(year, x, newyear) {
	if (newyear == true) {
		tl2d.font = "bold 30pt monospace";
		tl2d.fillStyle = "#BBBBBB";
		tl2d.fillText(year, x - 18, 50);
	}
	else {
		tl2d.font = "bold 20pt monospace";
		tl2d.fillStyle = "#2E2E2E";
		tl2d.fillText(year, x - 5, 50);
	}
}

function addMilestone(title, desl1, desl2, yOffset, desOffset, titleOffset, x) {
	tl2d.fillStyle = "#006AAF";
	tl2d.fillRect(x + 15, 106 - yOffset, 30, 40);
	tl2d.fillStyle = "#0087C1";
	tl2d.fillRect(x, 100 - yOffset, 40, 40);
	tl2d.beginPath();
	tl2d.moveTo(x + 15, 140 - yOffset);
	tl2d.lineTo(x + 40, 140 - yOffset);
	tl2d.lineTo(x + 15, 146 - yOffset);
	tl2d.closePath();
	tl2d.fillStyle = "#003D64";
	tl2d.fill();
	tl2d.beginPath();
	tl2d.moveTo(x + 45, 106 - yOffset);
	tl2d.lineTo(x + 58, 106 - yOffset);
	tl2d.lineTo(x + 45, 127 - yOffset);
	tl2d.closePath();
	tl2d.fillStyle = "#006AAF";
	tl2d.fill();
	tl2d.beginPath();
	tl2d.moveTo(x + 45, 127 - yOffset);
	tl2d.lineTo(x + 58, 146 - yOffset);
	tl2d.lineTo(x + 45, 146 - yOffset);
	tl2d.closePath();
	tl2d.fillStyle = "#006AAF";
	tl2d.fill();
	tl2d.beginPath();
	tl2d.moveTo(x, 300);
	tl2d.lineTo(x, 100 - yOffset);
	tl2d.strokeStyle = "#484F5F";
	tl2d.lineWidth = 3;
	tl2d.lineCap = "round";
	tl2d.stroke();
	if (titleOffset == true) {
		tl2d.font = "bold 15pt monospace";
		tl2d.fillStyle = "#BBBBBB";
		tl2d.fillText(title, x + 75, 132.5 - yOffset);
	}
	else {
		tl2d.font = "bold 15pt monospace";
		tl2d.fillStyle = "#BBBBBB";
		tl2d.fillText(title, x, 80 - yOffset);
	}
	if (desOffset == true) {
		tl2d.font = "12pt monospace";
		tl2d.fillStyle = "#555555";
		tl2d.fillText(desl1, x + 70, 122 - yOffset);
		tl2d.font = "12pt monospace";
		tl2d.fillStyle = "#555555";
		tl2d.fillText(desl2, x + 70, 142 - yOffset);
	}
	else {
		tl2d.font = "12pt monospace";
		tl2d.fillStyle = "#555555";
		tl2d.fillText(desl1, x + 20, 175 - yOffset);
		tl2d.font = "12pt monospace";
		tl2d.fillStyle = "#555555";
		tl2d.fillText(desl2, x + 20, 195 - yOffset);
	}
}

function getMonthName(month) {
	if (month == 1) {
		return "January";
	}
	else if (month == 2) {
		return "February";
	}
	else if (month == 3) {
		return "March";
	}
	else if (month == 4) {
		return "April";
	}
	else if (month == 5) {
		return "May";
	}
	else if (month == 6) {
		return "June";
	}
	else if (month == 7) {
		return "July";
	}
	else if (month == 8) {
		return "August";
	}
	else if (month == 9) {
		return "September";
	}
	else if (month == 10) {
		return "October";
	}
	else if (month == 11) {
		return "November";
	}
	else if (month == 12) {
		return "December";
	}
}

function drawLine(x, height) {
	tl2d.beginPath();
	tl2d.moveTo(x, tlHeight);
	tl2d.lineTo(x, tlHeight - height);
	tl2d.strokeStyle = "#1E1E1E";
	tl2d.lineWidth = 3;
	tl2d.lineCap = "round";
	tl2d.stroke();
}

function drawDay(day, x) {
	tl2d.fillStyle = "#1E1E1E";
	tl2d.beginPath();
	tl2d.arc(x - (dayTag.width / 2) + boxRounding, tlHeight - dayTag.height - dayTag.bottom + boxRounding, boxRounding, 1*Math.PI, 1.5*Math.PI);
	tl2d.arc(x + (dayTag.width / 2) - boxRounding, tlHeight - dayTag.height - dayTag.bottom + boxRounding, boxRounding, 1.5*Math.PI, 0);
	tl2d.arc(x + (dayTag.width / 2) - boxRounding, tlHeight - (dayTag.bottom) - boxRounding, boxRounding, 0, 0.5*Math.PI);
	tl2d.arc(x - (dayTag.width / 2) + boxRounding, tlHeight - (dayTag.bottom) - boxRounding, boxRounding, 0.5*Math.PI, 1*Math.PI);
	tl2d.fill();
	tl2d.font = "bold 12pt monospace";
	tl2d.fillStyle = "#555555";
	tl2d.textAlign = 'center';
	tl2d.textBaseline = 'middle';
	tl2d.fillText(day, x, 300 - dayTag.bottom - (dayTag.height / 2) + 1);
}

function drawMonth(month, x) {
	tl2d.fillStyle = "#1E1E1E";
	tl2d.beginPath();
	tl2d.arc(x - (monthTag.width / 2) + boxRounding, tlHeight - monthTag.height - monthTag.bottom + boxRounding, boxRounding, 1*Math.PI, 1.5*Math.PI);
	tl2d.arc(x + (monthTag.width / 2) - boxRounding, tlHeight - monthTag.height - monthTag.bottom + boxRounding, boxRounding, 1.5*Math.PI, 0);
	tl2d.arc(x + (monthTag.width / 2) - boxRounding, tlHeight - (monthTag.bottom) - boxRounding, boxRounding, 0, 0.5*Math.PI);
	tl2d.arc(x - (monthTag.width / 2) + boxRounding, tlHeight - (monthTag.bottom) - boxRounding, boxRounding, 0.5*Math.PI, 1*Math.PI);
	tl2d.fill();
	tl2d.font = "bold 12pt monospace";
	tl2d.fillStyle = "#555555";
	tl2d.textAlign = 'center';
	tl2d.textBaseline = 'middle';
	tl2d.fillText(getMonthName(month), x, 300 - monthTag.bottom - (monthTag.height / 2) + 1);
}

function drawYear(year, newYear, x) {
	if (newYear == true) {
		tl2d.font = "bold 25pt monospace";
		tl2d.fillStyle = "#A5A5A5";
		tl2d.textAlign = 'center';
		tl2d.textBaseline = 'middle';
		tl2d.fillText(year, x, yearTag.top);
	}
	else {
		tl2d.font = "bold 20pt monospace";
		tl2d.fillStyle = "#303030";
		tl2d.textAlign = 'center';
		tl2d.textBaseline = 'middle';
		tl2d.fillText(year, x, yearTag.top);
	}
}

function drawDate(d, x) {
	var year = parseInt(d.getFullYear());
	var month = parseInt(d.getMonth() + 1);
	var day = parseInt(d.getDate());
	if (day == 1) {
		if (month == 1) {
			drawLine(x, monthTag.bottom + (monthTag.height / 2));
			drawMonth(month, x);
			drawYear(year, true, x);
		}
		else {
			drawLine(x, monthTag.bottom + (monthTag.height / 2));
			drawMonth(month, x);
			drawYear(year, false, x);
		}
	}
	else {
		drawLine(x, dayTag.bottom + (dayTag.height / 2));
		drawDay(day, x);
	}
}

function checkMilestones(d, x) {
	for (var i=0; i < milestones.length; i++) {
		if (d.getFullYear() == milestones[i].date.year && (d.getMonth() + 1) == milestones[i].date.month && d.getDate() == milestones[i].date.day) {
			drawMilestone(milestones[i], x);
		}
	}
}

function drawMilestone(ms, x) {
	tl2d.fillStyle = "#006AAF";
	tl2d.fillRect(x + 15, 106 - (ms.offset * -1) - milestoneOffset, 30, 40);
	tl2d.fillStyle = "#0087C1";
	tl2d.fillRect(x, 100 - (ms.offset * -1) - milestoneOffset, 40, 40);
	tl2d.beginPath();
	tl2d.moveTo(x + 15, 140 - (ms.offset * -1) - milestoneOffset);
	tl2d.lineTo(x + 40, 140 - (ms.offset * -1) - milestoneOffset);
	tl2d.lineTo(x + 15, 146 - (ms.offset * -1) - milestoneOffset);
	tl2d.closePath();
	tl2d.fillStyle = "#003D64";
	tl2d.fill();
	tl2d.beginPath();
	tl2d.moveTo(x + 45, 106 - (ms.offset * -1) - milestoneOffset);
	tl2d.lineTo(x + 58, 106 - (ms.offset * -1) - milestoneOffset);
	tl2d.lineTo(x + 45, 127 - (ms.offset * -1) - milestoneOffset);
	tl2d.closePath();
	tl2d.fillStyle = "#006AAF";
	tl2d.fill();
	tl2d.beginPath();
	tl2d.moveTo(x + 45, 127 - (ms.offset * -1) - milestoneOffset);
	tl2d.lineTo(x + 58, 146 - (ms.offset * -1) - milestoneOffset);
	tl2d.lineTo(x + 45, 146 - (ms.offset * -1) - milestoneOffset);
	tl2d.closePath();
	tl2d.fillStyle = "#006AAF";
	tl2d.fill();
	if (ms.noLine == "no") {
		tl2d.beginPath();
		tl2d.moveTo(x, tlHeight);
		tl2d.lineTo(x, 100 - (ms.offset * -1) - milestoneOffset);
		tl2d.strokeStyle = "#484F5F";
		tl2d.lineWidth = 3;
		tl2d.lineCap = "round";
		tl2d.stroke();
	}
	console.log(ms.titleOffset)
	if (ms.titleOffset == "after") {
		tl2d.font = "bold 15pt monospace";
		tl2d.fillStyle = "#E0E0E0";
		tl2d.textAlign = 'left';
		tl2d.textBaseline = 'middle';
		tl2d.fillText(ms.text, x + 65, tlHeight - 172 - (ms.offset * -1) - milestoneOffset);
	}
	else if (ms.titleOffset == "center") {
		tl2d.font = "bold 15pt monospace";
		tl2d.fillStyle = "#E0E0E0";
		tl2d.textAlign = 'center';
		tl2d.textBaseline = 'bottom';
		tl2d.fillText(ms.text, x + 30, tlHeight - 205 - (ms.offset * -1) - milestoneOffset);
	}
	else {
		tl2d.font = "bold 15pt monospace";
		tl2d.fillStyle = "#E0E0E0";
		tl2d.textAlign = 'left';
		tl2d.textBaseline = 'bottom';
		tl2d.fillText(ms.text, x, tlHeight - 205 - (ms.offset * -1) - milestoneOffset);
	}
}

function drawTimeline() {
	tlHeight = timeline.offsetHeight - 15;
	tlCanvas.width = (((initialDay - currentDay) * lineSpacing) - (window.innerWidth / 2) + 100) * -1;
	timeline.scrollTo((((initialDay - currentDay) * lineSpacing) - (window.innerWidth / 2) + 100) * -1,0);
	var i = initialDay;
	while (i < currentDay) {
		checkMilestones(new Date(i * 86400000), parseInt((i - initialDay) * lineSpacing + startOffset));
		i++;
	}
	var i = initialDay;
	while (i < currentDay) {
		drawDate(new Date(i * 86400000), parseInt((i - initialDay) * lineSpacing + startOffset));
		i++;
	}
}