var bgPlate = document.getElementById('background-plate');
var warningBanner = document.getElementById('warning-banner');
var smallMenu = document.getElementById('small-menu');
var largeMenu = document.getElementById('large-menu');
var blah = document.getElementById('blah');

window.onscroll = function(){
	bgPlate.style.backgroundPosition = "0px " + (document.scrollingElement.scrollTop * -0.15) + "px";
}

	function hideWarningBanner(){
		warningBanner.style.transition = "0.3s cubic-bezier(0.79, 0.01, 1, 0.65)";
		warningBanner.style.margin = "0px 0px -100px 0px";
		warningBanner.style.opacity = "0";
}

function baseLoad() {
	if (window.innerWidth < 700){
		smallMenu.style.display = "block";
		largeMenu.style.display = "none";
	}
	else{
		smallMenu.style.display = "none";
		largeMenu.style.display = "block";
	}
}