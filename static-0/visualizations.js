//----------Load
var initialTime = Date.now();
var timeElapsed = 0;
//----------Functions
function copyFDLink(fdid) {
	navigator.clipboard.writeText(window.location.toString().removeAfter("#", -1) + "#" + fdid);
}

//==========Planet Distance Traveled==========//
var pdtPlanetBlocks = document.getElementsByClassName("pdt-planet-block");
var dpdtPlanetBlocks = document.getElementsByClassName("dpdt-planet-block");
var sunBlock = document.getElementsByClassName("sdt-star-block")[0];
var planetData = [
	{
		name:"Mercury",
		velocity:48.915,
	},
	{
		name:"Venus",
		velocity:35.02,
	},
	{
		name:"Earth",
		velocity:29.79,
	},
	{
		name:"Mars",
		velocity:24.235,
	},
	{
		name:"Jupiter",
		velocity:13.08,
	},
	{
		name:"Saturn",
		velocity:9.64,
	},
	{
		name:"Uranus",
		velocity:6.81,
	},
	{
		name:"Neptune",
		velocity:5.42,
	},
];
var dwarfPlanetData = [
	{
		name:"Ceres",
		velocity:17.9,
	},
	{
		name:"Pluto",
		velocity:4.64,
	},
	{
		name:"Haumea",
		velocity:4.53,
	},
	{
		name:"Makemake",
		velocity:4.419,
	},
	{
		name:"Eris",
		velocity:3.434,
	},
];
var sunVelocity = 230;

//----------PDT Main
setInterval(function() {
	timeElapsed = Date.now()-initialTime;
	for (var i=0; i < pdtPlanetBlocks.length; i++) {
		pdtPlanetBlocks[i].children[2].innerHTML = Math.floor(planetData[i].velocity*(timeElapsed/1000)) + " km";
		pdtPlanetBlocks[i].children[3].innerHTML = Math.floor((planetData[i].velocity*0.62137119223733)*(timeElapsed/1000)) + " mi";
	}
	for (var i=0; i < dpdtPlanetBlocks.length; i++) {
		dpdtPlanetBlocks[i].children[2].innerHTML = Math.floor(dwarfPlanetData[i].velocity*(timeElapsed/1000)) + " km";
		dpdtPlanetBlocks[i].children[3].innerHTML = Math.floor((dwarfPlanetData[i].velocity*0.62137119223733)*(timeElapsed/1000)) + " mi";
	}
	sunBlock.children[1].children[0].innerHTML = Math.floor(sunVelocity*(timeElapsed/1000)) + " km";
	sunBlock.children[1].children[1].innerHTML = Math.floor((sunVelocity*0.62137119223733)*(timeElapsed/1000)) + " mi";
}, 10);

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
			hmywoepMercury.textContent = (hmywoepLB.value * 0.37730).round(1).toLocaleString() + " " + hmywoepUnit + " on Mercury";
			hmywoepVenus.textContent = (hmywoepLB.value * 0.90449).round(1).toLocaleString() + " " + hmywoepUnit + " on Venus";
			hmywoepMars.textContent = (hmywoepLB.value * 0.37941).round(1).toLocaleString() + " " + hmywoepUnit + " on Mars";
			hmywoepJupiter.textContent = (hmywoepLB.value * 2.52800).round(1).toLocaleString() + " " + hmywoepUnit + " on Jupiter";
			hmywoepSaturn.textContent = (hmywoepLB.value * 1.06500).round(1).toLocaleString() + " " + hmywoepUnit + " on Saturn";
			hmywoepUranus.textContent = (hmywoepLB.value * 0.88600).round(1).toLocaleString() + " " + hmywoepUnit + " on Uranus";
			hmywoepNeptune.textContent = (hmywoepLB.value * 1.14000).round(1).toLocaleString() + " " + hmywoepUnit + " on Neptune";
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
			hmywoepMercury.textContent = (hmywoepKG.value * 0.37730).round(1).toLocaleString() + " " + hmywoepUnit + " on Mercury";
			hmywoepVenus.textContent = (hmywoepKG.value * 0.90449).round(1).toLocaleString() + " " + hmywoepUnit + " on Venus";
			hmywoepMars.textContent = (hmywoepKG.value * 0.37941).round(1).toLocaleString() + " " + hmywoepUnit + " on Mars";
			hmywoepJupiter.textContent = (hmywoepKG.value * 2.52800).round(1).toLocaleString() + " " + hmywoepUnit + " on Jupiter";
			hmywoepSaturn.textContent = (hmywoepKG.value * 1.06500).round(1).toLocaleString() + " " + hmywoepUnit + " on Saturn";
			hmywoepUranus.textContent = (hmywoepKG.value * 0.88600).round(1).toLocaleString() + " " + hmywoepUnit + " on Uranus";
			hmywoepNeptune.textContent = (hmywoepKG.value * 1.14000).round(1).toLocaleString() + " " + hmywoepUnit + " on Neptune";
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