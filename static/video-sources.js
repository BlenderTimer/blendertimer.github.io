//----------VARIABLES----------
var contentTitle = document.getElementById("content-title");
var searchbar = document.getElementById("searchbar");
var sortMenu = document.getElementById("sort-dd");
var videoList = document.getElementById("video-list");
var videoListEnd = document.getElementById("video-list-end");
var vlist = videos;
var visibleVideos = videos.length.limitUp(50);
var loadingVideos = false;
var vlChanged = false;
var vstart = visibleVideos;
//----------LOAD----------
checkVideo();
videoList.children[1].remove();
document.body.addEventListener('mousedown', function(event) {bodyMouseDown(event)});
window.addEventListener('scroll', function(event) {checkVideoList(event)});
//----------FUNCTIONS----------
function bodyMouseDown(event) {
	var clickElement = event.srcElement || event.target;
	if (!(clickElement == sortMenu.children[0]) && sortMenu.style.overflow == "visible") {
		if (cursorInfo('ex', sortMenu) < -10 || cursorInfo('ex', sortMenu) > (sortMenu.offsetWidth + 10) || cursorInfo('ey', sortMenu) < -10 || cursorInfo('ey', sortMenu) > (sortMenu.children[1].offsetHeight + 10)) {
			toggleSortMenu();
		}
	}
}

function checkVideo() {
	var sVideo = "";
	if (window.location.toString().indexOf("#") > -1) {
		sVideo = window.location.toString().substring(window.location.toString().indexOf("#") + 1, window.location.toString().length);
		var vidiv = document.getElementById(sVideo);
		vidiv.style.border = "2px solid #22AAFF";
		vidiv.style.background = "var(--theme1)";
		setTimeout(function() {vidiv.style.border = null; vidiv.style.background = null;},2000);
	}
}

function loadVideos(vl, srch, srt) {
	let limit = 100;
	loadingVideos = true;
	videoListEnd.style.display = "none";
	if (vl) {
		vlist = vl;
	}
	if (vlChanged == true) {
		while (videoList.children.length > 2) {
			videoList.removeChild(videoList.lastChild);
		}
	}
	if (srch == true) {
		visibleVideos = videoList.children.length - 2;
	}
	if (srt == true) {
		vstart = 0;
	}
	else {
		vstart = visibleVideos;
	}
	vlChanged = false;
	if (sortMenu.children[0].textContent == "Relevance") {
		vlist.sort(((a, b) => (a.searchRelevance < b.searchRelevance) ? 1 : (a.searchRelevance === b.searchRelevance) ? ((a.id > b.id) ? 1 : -1) : -1));
	}
	else if (sortMenu.children[0].textContent == "Views First 10 Minutes") {
		vlist.sort(((a, b) => (a.views10 > b.views10) ? 1 : (a.views10 === b.views10) ? ((a.id > b.id) ? 1 : -1) : -1));
	}
	else if (sortMenu.children[0].textContent == "Views First 30 Minutes") {
		vlist.sort(((a, b) => (a.views30 > b.views30) ? 1 : (a.views30 === b.views30) ? ((a.id > b.id) ? 1 : -1) : -1));
	}
	else if (sortMenu.children[0].textContent == "Views First Hour") {
		vlist.sort(((a, b) => (a.views1 > b.views1) ? 1 : (a.views1 === b.views1) ? ((a.id > b.id) ? 1 : -1) : -1));
	}
	else if (sortMenu.children[0].textContent == "Views First 24 Hours") {
		vlist.sort(((a, b) => (a.views24 > b.views24) ? 1 : (a.views24 === b.views24) ? ((a.id > b.id) ? 1 : -1) : -1));
	}
	else {
		vlist.sort((a, b) => (a.id > b.id) ? 1 : -1);
	}
	for (var i=vlist.length-vstart-1; i >= 0; i--) {
		if (limit == 0 || !(vlist[i])) {if (!(vlist[i])) {videoListEnd.style.display = null};break};
		var vb = document.createElement('a');
		vb.className = "video-block";
		vb.id = "video-" + vlist[i].id;
		vb.href = "/video?v=" + videos[i].id;
		var vType = document.createElement('img');
		vType.className = "video-type";
		if (vlist[i].type == "short") {
			vType.alt = "Short";
			vType.title = "This video is a short.";
			vType.src = "./static/images/icons/videotype-short.svg";
		}
		else {
			vType.alt = "Full Video";
			vType.title = "This is a full video.";
			vType.src = "./static/images/icons/videotype-longform.svg";
		}
		var y = parseInt(vlist[i].date.removeBefore("-", 1, true));
		var m = parseInt(vlist[i].date.removeBefore("-", 1).removeAfter("-", -1, true));
		var d = parseInt(vlist[i].date.removeAfter("-", -1));
		if ((Date.now() - new Date(y, m-1, d).getTime()) <= 604800000) {
			var vNew = document.createElement('b');
			vNew.className = "video-new";
			vNew.textContent = "NEW!";
			vNew.title = "This video is a recent upload!"
			vb.appendChild(vNew);
		}
		if (new Date(vlist[i].date))
		var vThumb = document.createElement('img');
		vThumb.className = "video-thumb";
		vThumb.alt = "Thumbnail";
		vThumb.src = "./video-thumbnails/" + vlist[i].id + "-small.png";
		var vTitle = document.createElement('div');
		vTitle.className = "video-title";
		vTitle.innerHTML = "<p>" + vlist[i].title + "</p>"
		vb.appendChild(vType);
		vb.appendChild(vThumb);
		vb.appendChild(vTitle);
		document.getElementById('video-list').appendChild(vb);
		visibleVideos += 1;
		limit -= 1;
	}
	if (vlist.length == 0) {
		var noResults = document.createElement('b');
		noResults.innerHTML = "NO RESULTS";
		noResults.id = "no-results";
		videoList.appendChild(noResults);
	}
	loadingVideos = false;
}

function search() {
	contentTitle.innerHTML = "Searching...";
	setTimeout(function() {
		var q = searchbar.value.toLowerCase();
		if (q == "") {
			vlChanged = true;
			loadVideos(videos, true);
			contentTitle.innerHTML = "Video Sources (" + videos.length + ")";
			if (sortMenu.children[1].firstChild.textContent == "Relevance") {
				sortMenu.children[1].firstChild.remove();
				sortMenu.children[0].innerHTML = "Latest";
			}
		}
		else {
			var vl = [];
			if (q.startsWith("tui:") && !(videos[parseInt(q.removeBefore(":", 1))-1] == undefined)) {
				vl.push(videos[parseInt(q.removeBefore(":", 1, true))-1]);
			}
			else if (q.startsWith("vui:") && !(videos[parseInt(q.removeBefore(":", 1))-1] == undefined)) {
				for (var i=0; i < videos.length; i++) {
					if (videos[i].vui == parseInt(q.removeBefore(":", 1, true))) {
						vl.push(videos[i]);
					}
				}
			}
			else if (q.startsWith("sui:") && !(videos[parseInt(q.removeBefore(":", 1))-1] == undefined)) {
				for (var i=0; i < videos.length; i++) {
					if (videos[i].sui == parseInt(q.removeBefore(":", 1, true))) {
						vl.push(videos[i]);
					}
				}
			}
			else {
				for (var i=0; i < videos.length; i++) {
					var r = 0;
					if (videos[i].title.toLowerCase() == q) {
						r = -1000000;
					}
					if (videos[i].title.toLowerCase().startsWith(q)) {
						r -= 10000;
					}
					if (videos[i].title.toLowerCase().indexOf(q) > -1) {
						r -= 100;
					}
					if (videos[i].subtitles.replace(/<\/p><p>/g, " ").replace(/<\/p>/g, " ").replace(/<p>/g, " ").replace(/<br>/g, " ").toLowerCase().indexOf(q) > -1) {
						r -= 1;
					}
					if (r < 0) {
						vl.push(videos[i]);
						vl[vl.length-1].searchRelevance = r;
					}
				}
			}
			contentTitle.innerHTML = "Video Sources (" + vl.length + "/" + videos.length + ")";
			if (!(sortMenu.children[1].firstChild.textContent == "Relevance")) {
				var ddi = document.createElement('button');
				ddi.addEventListener('click', function(event) {setSort(event)});
				ddi.innerHTML = "Relevance";
				sortMenu.children[1].prepend(ddi);
				sortMenu.children[0].innerHTML = "Relevance";
			}
			vlChanged = true;
			loadVideos(vl, true);
		}
	}, 1);
}

function checkVideoList() {
	var videoListAverage = 0;
	for (var i=0; i < videoList.children.length; i++) {
		videoListAverage += videoList.children[i].getBoundingClientRect().height + 16;
	}
	videoListAverage = videoListAverage / videoList.children.length;
	if ((window.scrollY + window.innerHeight) > (videoList.offsetTop + videoList.getBoundingClientRect().height - videoListAverage)) {
		if (loadingVideos == false) {
			loadVideos();
		}
	}
}

function setSort(event) {
	var element = event.srcElement || event.target;
	sortMenu.children[0].innerHTML = element.textContent;
	vlChanged = true;
	loadVideos(vlist, false, true);
	toggleSortMenu();
}

function toggleSortMenu() {
	if (sortMenu.style.overflow == "hidden") {
		sortMenu.style.overflow = "visible";
	}
	else {
		sortMenu.style.overflow = "hidden";
	}
}