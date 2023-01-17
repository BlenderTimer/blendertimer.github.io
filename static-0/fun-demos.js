var initialTime = new Date().getTime();
var copyFDIDBtns = document.getElementsByClassName("copy-fdid");

function copyFDID(FDID) {
	if (window.location.toString().search("#" + FDID) > -1) {
		FDID = window.location.toString()
	}
	else {
		FDID = window.location.toString() + "#" + FDID
	}
	navigator.clipboard.writeText(FDID);
}

//==========Planet Distance Traveled==========//
var dptdCPlanetBlocks = document.getElementsByClassName("dptd-c-planet-block");
var ptdCPlanetBlocks = document.getElementsByClassName("ptd-c-planet-block");

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
var stdSun = document.getElementById("std-c-sun-block");
var sunDTBlock1 = document.getElementById("sun-dt-block1");
var sunDTBlock2 = document.getElementById("sun-dt-block2");
var sunDTBlock3 = document.getElementById("sun-dt-block3");

function setPlanetDistance(planet) {
	if (planet == "mercury") {
		mercuryDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 29.4) + " mi";
		mercuryDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 29.4 * 1.609344) + " km";
	}
	else if (planet == "venus") {
		venusDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 21.8) + " mi";
		venusDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 21.8 * 1.609344) + " km";
	}
	else if (planet == "earth") {
		earthDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 18.5) + " mi";
		earthDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 18.5 * 1.609344) + " km";
	}
	else if (planet == "mars") {
		marsDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 15.0) + " mi";
		marsDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 15.0 * 1.609344) + " km";
	}
	else if (planet == "jupiter") {
		jupiterDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 8.1) + " mi";
		jupiterDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 8.1 * 1.609344) + " km";
	}
	else if (planet == "saturn") {
		saturnDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 6.0) + " mi";
		saturnDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 6.0 * 1.609344) + " km";
	}
	else if (planet == "uranus") {
		uranusDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 4.2) + " mi";
		uranusDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 4.2 * 1.609344) + " km";
	}
	else if (planet == "neptune") {
		neptuneDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 3.4) + " mi";
		neptuneDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 3.4 * 1.609344) + " km";
	}
	else if (planet == "ceres") {
		ceresDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 11.11235) + " mi";
		ceresDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 11.11235 * 1.609344) + " km";
	}
	else if (planet == "pluto") {
		plutoDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 2.945563) + " mi";
		plutoDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 2.945563 * 1.609344) + " km";
	}
	else if (planet == "haumea") {
		haumeaDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 2.786478) + " mi";
		haumeaDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 2.786478 * 1.609344) + " km";
	}
	else if (planet == "makemake") {
		makemakeDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 2.746085) + " mi";
		makemakeDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 2.746085 * 1.609344) + " km";
	}
	else if (planet == "eris") {
		erisDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 2.135222) + " mi";
		erisDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 2.135222 * 1.609344) + " km";
	}
	else if (planet == "sun") {
		sunDTMiles.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 142.9282) + " mi";
		sunDTKilometers.innerHTML = Math.round(((new Date().getTime() - initialTime) / 1000) * 142.9282 * 1.609344) + " km";
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

//==========How much you weigh on each planet==========//
var hmywoepLB = document.getElementById("hmywoep-weight-lb");
var hmywoepKG = document.getElementById("hmywoep-weight-kg");
var hmywoepInput = document.getElementById("hmywoep-input");
var hmywoepResult = document.getElementById("hmywoep-result");
var hmywoepUnit = "lb";

var hmywoepMercury = document.getElementById("hmywoep-mercury");
var hmywoepVenus = document.getElementById("hmywoep-venus");
var hmywoepMars = document.getElementById("hmywoep-mars");
var hmywoepJupiter = document.getElementById("hmywoep-jupiter");
var hmywoepSaturn = document.getElementById("hmywoep-saturn");
var hmywoepUranus = document.getElementById("hmywoep-uranus");
var hmywoepNeptune = document.getElementById("hmywoep-neptune");

hmywoepLB.addEventListener("input", function() {hmywoepUnit = "pounds"; hmywoepCalculate()});
hmywoepKG.addEventListener("input", function() {hmywoepUnit = "kilograms"; hmywoepCalculate()});

function hmywoepCalculate() {
	if (hmywoepUnit == "pounds") {
		if (hmywoepLB.value == "") {
			hmywoepMercury.textContent = "... on Mercury";
			hmywoepVenus.textContent = "... on Venus";
			hmywoepMars.textContent = "... on Mars";
			hmywoepJupiter.textContent = "... on Jupiter";
			hmywoepSaturn.textContent = "... on Saturn";
			hmywoepUranus.textContent = "... on Uranus";
			hmywoepNeptune.textContent = "... on Neptune";
		}
		else {
			hmywoepMercury.textContent = (hmywoepLB.value * 0.37730).toFixed(1).toString() + " " + hmywoepUnit + " on Mercury";
			hmywoepVenus.textContent = (hmywoepLB.value * 0.90449).toFixed(1).toString() + " " + hmywoepUnit + " on Venus";
			hmywoepMars.textContent = (hmywoepLB.value * 0.37941).toFixed(1).toString() + " " + hmywoepUnit + " on Mars";
			hmywoepJupiter.textContent = (hmywoepLB.value * 2.52800).toFixed(1).toString() + " " + hmywoepUnit + " on Jupiter";
			hmywoepSaturn.textContent = (hmywoepLB.value * 1.06500).toFixed(1).toString() + " " + hmywoepUnit + " on Saturn";
			hmywoepUranus.textContent = (hmywoepLB.value * 0.88600).toFixed(1).toString() + " " + hmywoepUnit + " on Uranus";
			hmywoepNeptune.textContent = (hmywoepLB.value * 1.14000).toFixed(1).toString() + " " + hmywoepUnit + " on Neptune";
		}
	}
	else {
		if (hmywoepKG.value == "") {
			hmywoepMercury.textContent = "... on Mercury";
			hmywoepVenus.textContent = "... on Venus";
			hmywoepMars.textContent = "... on Mars";
			hmywoepJupiter.textContent = "... on Jupiter";
			hmywoepSaturn.textContent = "... on Saturn";
			hmywoepUranus.textContent = "... on Uranus";
			hmywoepNeptune.textContent = "... on Neptune";
		}
		else {
			hmywoepMercury.textContent = (hmywoepKG.value * 0.37730).toFixed(1).toString() + " " + hmywoepUnit + " on Mercury";
			hmywoepVenus.textContent = (hmywoepKG.value * 0.90449).toFixed(1).toString() + " " + hmywoepUnit + " on Venus";
			hmywoepMars.textContent = (hmywoepKG.value * 0.37941).toFixed(1).toString() + " " + hmywoepUnit + " on Mars";
			hmywoepJupiter.textContent = (hmywoepKG.value * 2.52800).toFixed(1).toString() + " " + hmywoepUnit + " on Jupiter";
			hmywoepSaturn.textContent = (hmywoepKG.value * 1.06500).toFixed(1).toString() + " " + hmywoepUnit + " on Saturn";
			hmywoepUranus.textContent = (hmywoepKG.value * 0.88600).toFixed(1).toString() + " " + hmywoepUnit + " on Uranus";
			hmywoepNeptune.textContent = (hmywoepKG.value * 1.14000).toFixed(1).toString() + " " + hmywoepUnit + " on Neptune";
		}
	}
}

//==========General==========
function determineLayout() {
	if (window.innerWidth < 450) {
		for (var i=0; i < ptdCPlanetBlocks.length; i++) {
  			ptdCPlanetBlocks[i].style.width = "100%";
		}
		for (var i=0; i < dptdCPlanetBlocks.length; i++) {
  			dptdCPlanetBlocks[i].style.width = "100%";
		}
		stdSun.style.height = "auto";
		sunDTBlock1.style.marginRight = "0px";
		sunDTBlock1.style.marginLeft =  "calc(50% - 95px)";
		sunDTBlock1.style.position = "relative";
		sunDTBlock2.style.marginTop = "215px";
		sunDTBlock2.style.marginLeft = "0px";
		sunDTBlock2.style.width = "calc(100% - 120px)";
		sunDTBlock3.style.float = "left";
		sunDTBlock3.style.marginTop = "50px";
		sunDTBlock3.style.marginLeft = "calc(50% - 95px)";
		hmywoepInput.style.width = "100%";
		hmywoepInput.style.marginBottom = "20px";
		hmywoepResult.style.width = "100%";
		hmywoepResult.style.height = "auto";
		hmywoepLB.placeholder = "Your weight in lb";
		hmywoepKG.placeholder = "Your weight in kg";
	}
	else if (window.innerWidth < 600) {
		for (var i=0; i < ptdCPlanetBlocks.length; i++) {
  			ptdCPlanetBlocks[i].style.width = "100%";
		}
		for (var i=0; i < dptdCPlanetBlocks.length; i++) {
  			dptdCPlanetBlocks[i].style.width = "100%";
		}
		stdSun.style.height = "auto";
		sunDTBlock1.style.marginRight = "0px";
		sunDTBlock1.style.marginLeft =  "calc(50% - 95px)";
		sunDTBlock1.style.position = "relative";
		sunDTBlock2.style.marginTop = "215px";
		sunDTBlock2.style.marginLeft = "0px";
		sunDTBlock2.style.width = "calc(100% - 120px)";
		sunDTBlock3.style.float = "left";
		sunDTBlock3.style.marginTop = "50px";
		sunDTBlock3.style.marginLeft = "calc(50% - 95px)";
		hmywoepInput.style.width = "100%";
		hmywoepInput.style.marginBottom = "20px";
		hmywoepResult.style.width = "100%";
		hmywoepResult.style.height = "auto";
		hmywoepLB.placeholder = "Your weight in pounds";
		hmywoepKG.placeholder = "Your weight in kilograms";
	}
	else if (window.innerWidth < 1000) {
		for (var i=0; i < ptdCPlanetBlocks.length; i++) {
  			ptdCPlanetBlocks[i].style.width = "50%";
		}
		for (var i=0; i < dptdCPlanetBlocks.length; i++) {
  			dptdCPlanetBlocks[i].style.width = "100%";
		}
		stdSun.style.height = "auto";
		sunDTBlock1.style.marginRight = "0px";
		sunDTBlock1.style.marginLeft =  "calc(50% - 95px)";
		sunDTBlock1.style.position = "relative";
		sunDTBlock2.style.marginTop = "215px";
		sunDTBlock2.style.marginLeft = "0px";
		sunDTBlock2.style.width = "calc(100% - 120px)";
		sunDTBlock3.style.float = "left";
		sunDTBlock3.style.marginTop = "50px";
		sunDTBlock3.style.marginLeft = "calc(50% - 95px)";
		hmywoepInput.style.width = "100%";
		hmywoepInput.style.marginBottom = "20px";
		hmywoepResult.style.width = "100%";
		hmywoepResult.style.height = "auto";
		hmywoepLB.placeholder = "Your weight in pounds";
		hmywoepKG.placeholder = "Your weight in kilograms";
	}
	else {
		for (var i=0; i < ptdCPlanetBlocks.length; i++) {
  			ptdCPlanetBlocks[i].style.width = "25%";
		}
		for (var i=0; i < dptdCPlanetBlocks.length; i++) {
  			dptdCPlanetBlocks[i].style.width = "20%";
		}
		stdSun.style.height = "230px";
		sunDTBlock1.style.marginRight = "20px";
		sunDTBlock1.style.marginLeft = "0px";
		sunDTBlock1.style.position = "absolute";
		sunDTBlock2.style.marginTop = "72px";
		sunDTBlock2.style.marginLeft = "190px";
		sunDTBlock2.style.width = "calc(100% - 500px)";
		sunDTBlock3.style.float = "right";
		sunDTBlock3.style.marginTop = "0px";
		sunDTBlock3.style.marginLeft = "0px";
		hmywoepInput.style.width = "calc(50% - 10px)";
		hmywoepInput.style.marginBottom = "0px";
		hmywoepResult.style.width = "calc(50% - 10px)";
		hmywoepResult.style.height = "210px";
		hmywoepLB.placeholder = "Your weight in pounds";
		hmywoepKG.placeholder = "Your weight in kilograms";
	}
}