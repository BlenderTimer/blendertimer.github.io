//GENERAL INFO--------------------

var pages = 1;
var videos = [
	{
		name:"The Basics of the Solar System in 10 Minutes!",
		tui:1,
		url:"1-The-Basics-of-the-Solar-System-in-10-Minutes",
		page:1
	},
	{
		name:"The Speed of Light is EXTREMELY Slow",
		tui:2,
		url:"2-The-Speed-of-Light-is-EXTREMELY-Slow",
		page:1
	},
	{
		name:"You Can't Touch Anything",
		tui:3,
		url:"3-You-Can't-Touch-Anything",
		page:1
	},
	{
		name:"What You Didn't Know About Roman Numerals",
		tui:4,
		url:"4-What-You-Didn't-Know-About-Roman-Numerals",
		page:1
	},
	{
		name:"More Than 10 INSANE Facts About Water",
		tui:5,
		url:"5-More-Than-10-INSANE-Facts-About-Water",
		page:1
	},
	{
		name:"The INTERROBANG - Fantastic Fact 01",
		tui:6,
		url:"6-The-INTERROBANG",
		page:1
	},
	{
		name:"A Superior Language",
		tui:7,
		url:"7-A-Superior-Language",
		page:1
	},
	{
		name:"This Animal is as LOUD as an ATOMIC BOMB! - Fantastic Fact 02",
		tui:8,
		url:"8-This-Animal-is-as-LOUD-as-an-ATOMIC-BOMB",
		page:1
	},
	{
		name:"15 Facts That are Nearly IMPOSSIBLE to Believe",
		tui:9,
		url:"9-15-Facts-That-are-Nearly-IMPOSSIBLE-to-Believe",
		page:1
	},
	{
		name:"This Heart is Different - Fantastic Fact 03",
		tui:10,
		url:"10-This-Heart-is-Different",
		page:1
	},
	{
		name:"The Great Molasses Flood",
		tui:11,
		url:"11-The-Great-Molasses-Flood",
		page:1
	},
	{
		name:"Why are You Scared of Sharks? - Fantastic Fact 04",
		tui:12,
		url:"12-Why-are-You-Scared-of-Sharks",
		page:1
	},
];

//--------------------------------------

var currentPage = "";
var pgFirst = document.getElementById("pg-first");
var pgPrevious = document.getElementById("pg-previous");
var pgNext = document.getElementById("pg-next");
var pgLast = document.getElementById("pg-last");
var videoBlocks = document.getElementsByClassName("video-block");
var cp = document.getElementById("cp");
var searchbar = document.getElementById("searchbar");
var searchdiv = document.getElementById("search");
var noResults = document.getElementById("no-results");
var match0 = document.getElementById("match-0");
var match1 = document.getElementById("match-1");
var match2 = document.getElementById("match-2");
var pageEntered = "";

function determineLayout() {
	if (window.innerWidth < 500) {
		for (var i=0; i < videoBlocks.length; i++) {
  			videoBlocks[i].style.width = "100%";
		}
	}
	else if (window.innerWidth < 830) {
		for (var i=0; i < videoBlocks.length; i++) {
  			videoBlocks[i].style.width = "calc(50% - 20px)";
		}
	}
	else if (window.innerWidth < 1100) {
		for (var i=0; i < videoBlocks.length; i++) {
  			videoBlocks[i].style.width = "calc(33.33333% - 20px)";
		}
	}
	else if (window.innerWidth < 1700) {
		for (var i=0; i < videoBlocks.length; i++) {
  			videoBlocks[i].style.width = "calc(25% - 20px)";
		}
	}
	else if (window.innerWidth < 2100) {
		for (var i=0; i < videoBlocks.length; i++) {
  			videoBlocks[i].style.width = "calc(20% - 20px)";
		}
	}
	else {
		for (var i=0; i < videoBlocks.length; i++) {
  			videoBlocks[i].style.width = "calc(16.66666% - 20px)";
		}
	}
}

function setPages() {
	if (window.location.toString().indexOf("video-sources-pg") > -1) {
		if (window.location.toString().indexOf(".html") > -1) {
			currentPage = window.location.toString().substring(window.location.toString().indexOf("video-sources-pg") + 16, window.location.toString().indexOf(".html"));
		}
		else {
			if (window.location.toString().indexOf("#") > -1) {
				currentPage = window.location.toString().substring(window.location.toString().indexOf("video-sources-pg") + 16, window.location.toString().indexOf("#"));
			}
			else {
				currentPage = window.location.toString().substring(window.location.toString().indexOf("video-sources-pg") + 16, window.location.toString().length);
			}
		}
	}
	else {
		currentPage = 1;
	}
	pgFirst.href = "./video-sources-pg1";
	if (currentPage == 1) {
		pgPrevious.href = "./video-sources-pg1";
		pgPrevious.style.pointerEvents = "None";
	}
	else {
		pgPrevious.href = "./video-sources-pg" + (currentPage - 1).toString();
	}
	if (currentPage == pages) {
		pgNext.href = "./video-sources-pg" + pages.toString();
		pgNext.style.pointerEvents = "None";
	}
	else {
		pgNext.href = "./video-sources-pg" + (currentPage + 1).toString();
	}
	pgLast.href = "./video-sources-pg" + pages.toString();
}

function search() {
	setTimeout(function() {
		if (searchbar.value.length > 0) {
			searchbar.focus();;
		}
		var bestMatch = "";
		var bestMatchTUI = "";
		var bestMatchURL = "";
		var bestMatchLevel = 10000;
		var bestMatch2 = "";
		var bestMatch2TUI = "";
		var bestMatch2URL = "";
		var bestMatch2Level = 10000;
		var bestMatch3 = "";
		var bestMatch3TUI = "";
		var bestMatch3URL = "";
		var bestMatch3Level = 100000;
		var bestMatches = [];
		if (!searchbar.value == "") {
			for (var i=0; i < videos.length; i++) {
				if (videos[i].name.toUpperCase() == searchbar.value.toUpperCase()) {
					bestMatches.push({level:0 - videos[i].tui, name:videos[i].name, tui:videos[i].tui, url:videos[i].url, page:videos[i].page});
				}
				else if (videos[i].name.toUpperCase().startsWith(searchbar.value.toUpperCase()) == true) {
					if (bestMatchLevel >= 1) {
						bestMatches.push({level:10000 - videos[i].tui, name:videos[i].name, tui:videos[i].tui, url:videos[i].url, page:videos[i].page});
					}
				}
				else if (videos[i].name.toUpperCase().indexOf(searchbar.value.toUpperCase()) > -1) {
					if (bestMatchLevel >= 2) {
						bestMatches.push({level:20000 - videos[i].tui, name:videos[i].name, tui:videos[i].tui, url:videos[i].url, page:videos[i].page});
					}
				}
			};
			bestMatches.sort(function(a, b) {return a.level - b.level});
			if (bestMatches.length >= 3) {
				bestMatch = bestMatches[0].name;
				bestMatchTUI = bestMatches[0].tui.toString();
				bestMatchURL = bestMatches[0].url.toString();
				bestMatch2 = bestMatches[1].name;
				bestMatch2TUI = bestMatches[1].tui.toString();
				bestMatch2URL = bestMatches[1].url.toString();
				bestMatch3 = bestMatches[2].name;
				bestMatch3TUI = bestMatches[2].tui.toString();
				bestMatch3URL = bestMatches[2].url.toString();
				searchdiv.style.maxWidth = "620px";
				searchdiv.style.height = "auto";
				noResults.style.display = "none";
				searchbar.style.maxWidth = "600px";
				searchbar.style.borderRadius = "5px 5px 0px 0px";
				match0.style.display = "block";
				match1.style.display = "block";
				match2.style.display = "block";
			}
			else if (bestMatches.length >= 2) {
				bestMatch = bestMatches[0].name;
				bestMatchTUI = bestMatches[0].tui.toString();
				bestMatchURL = bestMatches[0].url.toString();
				bestMatch2 = bestMatches[1].name;
				bestMatch2TUI = bestMatches[1].tui.toString();
				bestMatch2URL = bestMatches[1].url.toString();
				bestMatch3 = "";
				bestMatch3TUI = "";
				bestMatch3URL = "";
				searchdiv.style.maxWidth = "620px";
				searchdiv.style.height = "auto";
				noResults.style.display = "none";
				searchbar.style.maxWidth = "600px";
				searchbar.style.borderRadius = "5px 5px 0px 0px";
				match0.style.display = "block";
				match1.style.display = "block";
				match2.style.display = "none";
			}
			else if (bestMatches.length >= 1) {
				bestMatch = bestMatches[0].name;
				bestMatchTUI = bestMatches[0].tui.toString();
				bestMatchURL = bestMatches[0].url.toString();
				bestMatch2 = "";
				bestMatch2TUI = "";
				bestMatch2URL = "";
				bestMatch3 = "";
				bestMatch3TUI = "";
				bestMatch3URL = "";
				searchdiv.style.maxWidth = "620px";
				searchdiv.style.height = "auto";
				noResults.style.display = "none";
				searchbar.style.maxWidth = "600px";
				searchbar.style.borderRadius = "5px 5px 0px 0px";
				match0.style.display = "block";
				match1.style.display = "none";
				match2.style.display = "none";
			}
			else {
				bestMatch = "";
				bestMatchTUI = "";
				bestMatchURL = "";
				bestMatch2 = "";
				bestMatch2TUI = "";
				bestMatch2URL = "";
				bestMatch3 = "";
				bestMatch3TUI = "";
				bestMatch3URL = "";
				searchdiv.style.maxWidth = "320px";
				searchdiv.style.height = "auto";
				noResults.style.display = "block";
				searchbar.style.maxWidth = "300px";
				searchbar.style.borderRadius = "5px";
				match0.style.display = "none";
				match1.style.display = "none";
				match2.style.display = "none";
			}
			match0.innerHTML = bestMatch;
			match1.innerHTML = bestMatch2;
			match2.innerHTML = bestMatch3;
			match0.href = "./video-sources/" + bestMatchURL
			match1.href = "./video-sources/" + bestMatch2URL
			match2.href = "./video-sources/" + bestMatch3URL
		}
		else {
			match0.innerHTML = "";
			match1.innerHTML = "";
			match2.innerHTML = "";
			searchdiv.style.maxWidth = "320px";
			searchdiv.style.height = "25px";
			noResults.style.display = "none";
			searchbar.style.maxWidth = "300px";
			searchbar.style.borderRadius = "5px";
			match0.style.display = "none";
			match1.style.display = "none";
			match2.style.display = "none";
		}
	}, 1);
}

function pageInput() {
	for (var i=0; i < cp.value.toString().length; i++) {
		if (cp.value.toString().substr(i,1) == "0" || cp.value.toString().substr(i,1) == "1" || cp.value.toString().substr(i,1) == "2" || cp.value.toString().substr(i,1) == "3" || cp.value.toString().substr(i,1) == "4" || cp.value.toString().substr(i,1) == "5" || cp.value.toString().substr(i,1) == "6" || cp.value.toString().substr(i,1) == "7" || cp.value.toString().substr(i,1) == "8" || cp.value.toString().substr(i,1) == "9") {
			pageEntered += cp.value.toString().substr(i,1);
		}
	}
}

function pageKey(event) {
	if (event.key == "Enter") {
		navigateToPage();
	}
}

function navigateToPage() {
	window.location = "./video-sources-pg" + pageEntered;
}

function checkVideo() {
	var sVideo = "";
	if (window.location.toString().indexOf("#") > -1) {
		sVideo = window.location.toString().substring(window.location.toString().indexOf("#") + 1, window.location.toString().length);
		var vidiv = document.getElementById(sVideo);
		vidiv.style.border = "2px solid #22AAFF";
		vidiv.style.background = "#052555";
		setTimeout(function() {vidiv.style.border = null; vidiv.style.background = null;},2000);
	}
}