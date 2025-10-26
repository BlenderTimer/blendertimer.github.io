//----------Load
var initialTime = Date.now();
var timeElapsed = 0;
//----------Functions
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
		pdtPlanetBlocks[i].children[2].innerHTML = Math.floor(planetData[i].velocity*(timeElapsed/1000)).toLocaleString() + " km";
		pdtPlanetBlocks[i].children[3].innerHTML = Math.floor((planetData[i].velocity*0.62137119223733)*(timeElapsed/1000)).toLocaleString() + " mi";
	}
	for (var i=0; i < dpdtPlanetBlocks.length; i++) {
		dpdtPlanetBlocks[i].children[2].innerHTML = Math.floor(dwarfPlanetData[i].velocity*(timeElapsed/1000)).toLocaleString() + " km";
		dpdtPlanetBlocks[i].children[3].innerHTML = Math.floor((dwarfPlanetData[i].velocity*0.62137119223733)*(timeElapsed/1000)).toLocaleString() + " mi";
	}
	sunBlock.children[1].children[0].innerHTML = Math.floor(sunVelocity*(timeElapsed/1000)).toLocaleString() + " km";
	sunBlock.children[1].children[1].innerHTML = Math.floor((sunVelocity*0.62137119223733)*(timeElapsed/1000)).toLocaleString() + " mi";
}, 10);