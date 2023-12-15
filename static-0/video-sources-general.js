var noSources = document.getElementById('no-sources');
var title = document.getElementById('title');
var base = document.getElementById('base');
var info = document.getElementById('info');
var leftInfo = document.getElementById('left-info');
var rightInfo = document.getElementById('right-info');
var thumbnail = document.getElementById('thumbnail');
var infoP = info.getElementsByTagName('p');
var viewThumb = document.getElementById('view-thumb');
var corrections = document.getElementById('corrections');
var thumbnailHistory = document.getElementById('thumbnail-history');

function baseLoad() {
	noSources.style.opacity = "1";
	setTimeout(function() {title.style.opacity = "1"; title.style.transition = "ease 0.5s"},1);
}

function determineLayout() {
	if (window.innerWidth < 500) {
		title.style.marginTop = "50px";
		title.style.width = "100%";
		title.style.marginLeft = "0px";
		base.style.width = "calc(100% + 80px)";
		base.style.margin = "0px 0px -20px -40px";
		base.style.borderRadius = "0px";
		info.style.flexWrap = "wrap";
		leftInfo.style.width = "100%";
		rightInfo.style.width = "100%";
		rightInfo.style.margin = "20px 0px 0px 0px";
		viewThumb.style.right = thumbnail.offsetLeft - rightInfo.offsetLeft - 10 + "px";
	}
	else if (window.innerWidth < 800) {
		title.style.marginTop = "50px";
		title.style.width = "100%";
		title.style.marginLeft = "0px";
		base.style.width = "100%";
		base.style.margin = "0px 0px 30px 0px";
		base.style.borderRadius = "10px";
		info.style.flexWrap = "wrap";
		leftInfo.style.width = "100%";
		rightInfo.style.width = "100%";
		rightInfo.style.margin = "20px 0px 0px 0px";
	}
	else {
		title.style.marginTop = "0px";
		title.style.width = "calc(100% - 400px)"
		title.style.marginLeft = "200px";
		base.style.width = "100%";
		base.style.margin = "0px 0px 30px 0px";
		base.style.borderRadius = "10px";
		info.style.flexWrap = "nowrap";
		leftInfo.style.width = "calc(100% - 310px)";
		rightInfo.style.width = "300px";
		rightInfo.style.margin = "10px 0px 0px 10px";
		viewThumb.style.right = "-10px";
	}
}

function redirect(url) {
	window.location = url;
}

function scrollToCorrections() {
	window.scrollTo(0, corrections.offsetTop - (window.innerHeight / 2) + (corrections.offsetHeight / 2));
}

function scrollToThumbnailHistory() {
	window.scrollTo(0, thumbnailHistory.offsetTop - (window.innerHeight / 2) + (thumbnailHistory.offsetHeight / 2));
}