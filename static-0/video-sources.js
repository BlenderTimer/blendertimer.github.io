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
var primaryBlock = document.getElementById("primary-block");
var contentTitle = document.getElementById("content-title");

contentTitle.innerHTML = "Video Sources (" + videos.length + ")";

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
		var results = [];
		var searchVal= searchbar.value.toString().toLowerCase()
		if (!(searchVal == "")) {
			for (i=0; i < videos.length; i++) {
				if (videos[i].name.toLowerCase() == searchVal) {
					results.push(videos[i]);
					results[results.length - 1].relevance = 10000000;
				}
				if (videos[i].name.toLowerCase().startsWith(searchVal)) {
					results.push(videos[i]);
					results[results.length - 1].relevance = 100000;
				}
				else if (videos[i].name.toLowerCase().indexOf(searchVal) > -1) {
					results.push(videos[i]);
					results[results.length - 1].relevance = 1000;
				}
				else if (videos[i].cc.toLowerCase().indexOf(searchVal) > -1) {
					results.push(videos[i]);
					results[results.length - 1].relevance = 10;
				}
			}
		}
		else {
			for (i=0; i < videos.length; i++) {
				results.push(videos[i]);
				results[results.length - 1].relevance = videos[i].tui;
			}
		}
		results.sort((a, b) => (a.relevance < b.relevance) ? 1 : (a.relevance === b.relevance) ? ((a.tui < b.tui) ? 1 : -1) : -1);
		var spliced = false;
		if (results.length > 50) {
			results.splice(50,results.length - 50);
			spliced = true;
		}
		if (spliced == true) {
			contentTitle.innerHTML = "Video Sources (" + results.length + "+)";
		}
		else {
			contentTitle.innerHTML = "Video Sources (" + results.length + ")";
		}
		while (primaryBlock.firstChild) {
    		primaryBlock.removeChild(primaryBlock.lastChild);
  		}
  		window.scrollTo(0, 0);
		if (results == 0 && searchVal.length > 0) {
			noResults.style.display = "block";
		}
		else {
			noResults.style.display = "none";
		}
		for (i=0; i < results.length; i++) {
			var videoBlock = document.createElement('div');
			videoBlock.id = results[i].tui;
			videoBlock.classList.add("video-block");
			var videoBlockLink = document.createElement('a');
			videoBlockLink.classList.add("video-block-link");
			videoBlockLink.href = "./video-sources/" + results[i].url;
			var videoType = document.createElement('img');
			if (results[i].type == "short") {
				videoType.src = "./static-0/files/images/videotype-short.png";
				videoType.title = "This video is a short.";
			}
			else {
				videoType.src = "./static-0/files/images/videotype-fullvideo.png";
				videoType.title = "This is a full video.";
			}
			videoType.classList.add("video-type");
			var videoThumbnail = document.createElement('img');
			videoThumbnail.src = "./static-0/files/images/videoThumb-" + results[i].tui + "-" + results[i].name.replaceAll(" ", "_").replaceAll(".", "").replaceAll("!", "").replaceAll("?", "").replaceAll(",", "") + "-180.png";
			videoThumbnail.classList.add("video-thumbnail");
			var videoTitle = document.createElement('div');
			videoTitle.classList.add("video-title");
			var videoTitleH4 = document.createElement('h4');
			videoTitleH4.innerHTML = results[i].name;
			videoTitle.appendChild(videoTitleH4);
			videoBlockLink.appendChild(videoType);
			videoBlockLink.appendChild(videoThumbnail);
			videoBlockLink.appendChild(videoTitle);
			videoBlock.appendChild(videoBlockLink);
			primaryBlock.appendChild(videoBlock);
		}
		determineLayout();
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