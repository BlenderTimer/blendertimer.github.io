var mercuryDTMiles = document.getElementById("mercury-dt-mi");
var mercuryDTKilometers = document.getElementById("mercury-dt-km");
var venusDTMiles = document.getElementById("venus-dt-mi");
var venusDTKilometers = document.getElementById("venus-dt-km");
var earthDTMiles = document.getElementById("earth-dt-mi");
var earthDTKilometers = document.getElementById("earth-dt-km");
var marsDTMiles = document.getElementById("mars-dt-mi");
var marsDTKilometers = document.getElementById("mars-dt-km");
var jupiterDTMiles = document.getElementById("jupiter-dt-mi");
var jupiterDTKilometers = document.getElementById("jupiter-dt-km");
var saturnDTMiles = document.getElementById("saturn-dt-mi");
var saturnDTKilometers = document.getElementById("saturn-dt-km");
var uranusDTMiles = document.getElementById("uranus-dt-mi");
var uranusDTKilometers = document.getElementById("uranus-dt-km");
var neptuneDTMiles = document.getElementById("neptune-dt-mi");
var neptuneDTKilometers = document.getElementById("neptune-dt-km");
var initialTime = new Date().getTime();

function setPlanetDistance(planet) {
	if (planet == "mercury") {
		mercuryDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 29.4) + " mi";
		mercuryDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 47.3) + " km";
	}
	else if (planet == "venus") {
		venusDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 21.8) + " mi";
		venusDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 35.1) + " km";
	}
	else if (planet == "earth") {
		earthDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 18.5) + " mi";
		earthDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 29.8) + " km";
	}
	else if (planet == "mars") {
		marsDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 15.0) + " mi";
		marsDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 24.1) + " km";
	}
	else if (planet == "jupiter") {
		jupiterDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 8.1) + " mi";
		jupiterDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 13.0) + " km";
	}
	else if (planet == "saturn") {
		saturnDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 6.0) + " mi";
		saturnDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 9.7) + " km";
	}
	else if (planet == "uranus") {
		uranusDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 4.2) + " mi";
		uranusDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 6.8) + " km";
	}
	else if (planet == "neptune") {
		neptuneDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 3.4) + " mi";
		neptuneDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 5.5) + " km";
	}
}

function planetsTravelDistance() {
	setInterval(function() {setPlanetDistance("mercury")},30);
	setInterval(function() {setPlanetDistance("venus")},30);
	setInterval(function() {setPlanetDistance("earth")},30);
	setInterval(function() {setPlanetDistance("mars")},30);
	setInterval(function() {setPlanetDistance("jupiter")},30);
	setInterval(function() {setPlanetDistance("saturn")},30);
	setInterval(function() {setPlanetDistance("uranus")},30);
	setInterval(function() {setPlanetDistance("neptune")},30);
}