var tlCanvas = document.getElementById("tl-canvas");
var tl2d = tlCanvas.getContext("2d");
var timeline = document.getElementById("timeline");
var initialTime = new Date(2021, 3, 21).getTime();
var currentTime = new Date().getTime();
var currentDay = Math.floor(currentTime / 84000000) + 1;
var initialDay = Math.floor(initialTime / 84000000);
var totalDaysLive = Math.floor(currentDay - initialDay);
var lineSpacing = 30;
//----------MILESTONES----------
var channelStarted = Math.floor(new Date(2021, 3, 21).getTime() / 84000000);
var firstVideoUpload = Math.floor(new Date(2022, 2, 16).getTime() / 84000000);
var views10000 = Math.floor(new Date(2022, 6, 3).getTime() / 84000000);
var subscribers1000 = Math.floor(new Date(2022, 6, 5).getTime() / 84000000);
var views100000 = Math.floor(new Date(2022, 6, 6).getTime() / 84000000);
var subscribers5000 = Math.floor(new Date(2022, 7, 16).getTime() / 84000000);
var subscribers10000 = Math.floor(new Date(2022, 7, 30).getTime() / 84000000);
var views1000000 = Math.floor(new Date(2022, 8, 10).getTime() / 84000000);
var firstShortUpload = Math.floor(new Date(2022, 10, 30).getTime() / 84000000);
var watchHours100000 = Math.floor(new Date(2022, 10, 31).getTime() / 84000000);
//------------------------------
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

function drawTimeline() {
	tlCanvas.width = (((initialDay - currentDay) * lineSpacing) - (window.innerWidth / 2) + 100) * -1;
	timeline.scrollTo((((initialDay - currentDay) * lineSpacing) - (window.innerWidth / 2) + 100) * -1,0);
	var i = initialDay;
	var lastYear = 0;
	while (i < currentDay) {
		//----------MILESTONES----------
		if (i == channelStarted) {
			addMilestone("Channel Started!", "", "", 0, false, false, (i - initialDay) * lineSpacing + 25);
		}
		else if (i == firstVideoUpload) {
			addMilestone("First Video!", "First video uploaded:", "The Basics of the Solar System in 10 Minutes!", 0, false, false, (i - initialDay) * lineSpacing + 25);
		}
		else if (i == views10000) {
			addMilestone("10,000 Views!", "", "", 20, false, true, (i - initialDay) * lineSpacing + 25);
		}
		else if (i == subscribers1000) {
			addMilestone("1,000 Subscribers!", "", "", -40, false, true, (i - initialDay) * lineSpacing + 25);
		}
		else if (i == views100000) {
			addMilestone("100,000 Views!", "", "", -100, false, true, (i - initialDay) * lineSpacing + 25);
		}
		else if (i == subscribers5000) {
			addMilestone("5,000 Subscribers!", "", "", 0, false, false, (i - initialDay) * lineSpacing + 25);
		}
		else if (i == subscribers10000) {
			addMilestone("10,000 Subscribers!", "", "", 0, false, false, (i - initialDay) * lineSpacing + 25);
		}
		else if (i == views1000000) {
			addMilestone("1,000,000 Views!", "", "", 0, false, false, (i - initialDay) * lineSpacing + 25);
		}
		else if (i == firstShortUpload) {
			addMilestone("First Short!", "First short uploaded:", "The INTERROBANG - Fantastic Fact 01", 0, true, false, (i - initialDay) * lineSpacing + 25);
		}
		else if (i == watchHours100000) {
			addMilestone("100,000 watch hours!", "", "", -60, false, true, (i - initialDay) * lineSpacing + 25);
		}
		//------------------------------
		if (new Date(i * 84000000).getUTCDate() == 1) {
			addLine((i - initialDay) * lineSpacing + 25, 60);
			addMonth(new Date(i * 84000000).getUTCMonth(), ((i - initialDay) * lineSpacing) - 5 + 25, 80);
			if (new Date(i * 84000000).getUTCFullYear() == lastYear) {
				addYear(new Date(i * 84000000).getUTCFullYear(), (i - initialDay) * lineSpacing, false);
			}
			else {
				addYear(new Date(i * 84000000).getUTCFullYear(), (i - initialDay) * lineSpacing, true);
			}
		}
		else {
			addLine((i - initialDay) * lineSpacing + 25, 20);
			addDay(new Date(i * 84000000).getUTCDate(), ((i - initialDay) * lineSpacing) - 5 + 25, 40);
		}
		lastYear = new Date(i * 84000000).getUTCFullYear();
		i++;
	}
}