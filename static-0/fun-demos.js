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

var ceresDTMiles = document.getElementById("ceres-dt-mi");
var ceresDTKilometers = document.getElementById("ceres-dt-km");
var plutoDTMiles = document.getElementById("pluto-dt-mi");
var plutoDTKilometers = document.getElementById("pluto-dt-km");
var haumeaDTMiles = document.getElementById("haumea-dt-mi");
var haumeaDTKilometers = document.getElementById("haumea-dt-km");
var makemakeDTMiles = document.getElementById("makemake-dt-mi");
var makemakeDTKilometers = document.getElementById("makemake-dt-km");
var erisDTMiles = document.getElementById("eris-dt-mi");
var erisDTKilometers = document.getElementById("eris-dt-km");

var sunDTMiles = document.getElementById("sun-dt-mi");
var sunDTKilometers = document.getElementById("sun-dt-km");

var initialTime = new Date().getTime();

function setPlanetDistance(planet) {
	if (planet == "mercury") {
		mercuryDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 29.4) + " mi";
		mercuryDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 29.4 * 1.609199471538894) + " km";
	}
	else if (planet == "venus") {
		venusDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 21.8) + " mi";
		venusDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 21.8 * 1.609199471538894) + " km";
	}
	else if (planet == "earth") {
		earthDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 18.5) + " mi";
		earthDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 18.5 * 1.609199471538894) + " km";
	}
	else if (planet == "mars") {
		marsDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 15.0) + " mi";
		marsDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 15.0 * 1.609199471538894) + " km";
	}
	else if (planet == "jupiter") {
		jupiterDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 8.1) + " mi";
		jupiterDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 8.1 * 1.609199471538894) + " km";
	}
	else if (planet == "saturn") {
		saturnDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 6.0) + " mi";
		saturnDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 6.0 * 1.609199471538894) + " km";
	}
	else if (planet == "uranus") {
		uranusDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 4.2) + " mi";
		uranusDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 4.2 * 1.609199471538894) + " km";
	}
	else if (planet == "neptune") {
		neptuneDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 3.4) + " mi";
		neptuneDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 3.4 * 1.609199471538894) + " km";
	}
	else if (planet == "ceres") {
		ceresDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 11.11235) + " mi";
		ceresDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 11.11235 * 1.609199471538894) + " km";
	}
	else if (planet == "pluto") {
		plutoDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 2.945563) + " mi";
		plutoDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 2.945563 * 1.609199471538894) + " km";
	}
	else if (planet == "haumea") {
		haumeaDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 2.786478) + " mi";
		haumeaDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 2.786478 * 1.609199471538894) + " km";
	}
	else if (planet == "makemake") {
		makemakeDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 2.746085) + " mi";
		makemakeDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 2.746085 * 1.609199471538894) + " km";
	}
	else if (planet == "eris") {
		erisDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 2.135222) + " mi";
		erisDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 2.135222 * 1.609199471538894) + " km";
	}
	else if (planet == "sun") {
		sunDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 142.9282) + " mi";
		sunDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 142.9282 * 1.609199471538894) + " km";
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
	setInterval(function() {setPlanetDistance("ceres")},30);
	setInterval(function() {setPlanetDistance("pluto")},30);
	setInterval(function() {setPlanetDistance("haumea")},30);
	setInterval(function() {setPlanetDistance("makemake")},30);
	setInterval(function() {setPlanetDistance("eris")},30);
	setInterval(function() {setPlanetDistance("sun")},30);
}