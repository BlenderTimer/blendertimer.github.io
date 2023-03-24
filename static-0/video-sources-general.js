var noSources = document.getElementById('no-sources');
var title = document.getElementById('title');
var info = document.getElementById('info');
var leftInfo = document.getElementById('left-info');
var rightInfo = document.getElementById('right-info');
var thumbnail = document.getElementById('thumbnail');
var infoP = info.getElementsByTagName('p');
var viewThumb = document.getElementById('view-thumb');
function baseLoad() {
	noSources.style.opacity = "1";
	setTimeout(function() {title.style.opacity = "1"; title.style.transition = "ease 0.5s"},1);
}
function determineLayout() {
	if (window.innerWidth < 800) {
		title.style.marginTop = "50px";
		title.style.width = "100%";
		title.style.marginLeft = "0px";
		info.style.flexWrap = "wrap";
		leftInfo.style.width = "100%";
		rightInfo.style.width = "100%";
		rightInfo.style.marginLeft = "0px";
		viewThumb.style.right = thumbnail.offsetLeft - 102;
	}
		else {
		title.style.marginTop = "0px";
		title.style.width = "calc(100% - 400px)"
		title.style.marginLeft = "200px";
		info.style.flexWrap = "nowrap";
		leftInfo.style.width = "calc(100% - 310px)";
		rightInfo.style.width = "300px";
		rightInfo.style.marginLeft = "10px";
		viewThumb.style.right = "-10px";
	}
}

function redirect(url) {
	window.location = url;
}