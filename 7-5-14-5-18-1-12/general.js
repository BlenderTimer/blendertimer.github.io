var bgPlate = document.getElementById('background-plate');
var warningBanner = document.getElementById('warning-banner');
var smallMenu = document.getElementById('small-menu');
var largeMenu = document.getElementById('large-menu');
var blah = document.getElementById('blah');
var smallMenuMain = document.getElementById('small-menu-main');
var contentMain = document.getElementById('content-main');
var navDropdown = document.all["nav-dropdown"]
var smallMenuOpen = false

window.onscroll = function(){
	bgPlate.style.backgroundPosition = "0px " + (document.scrollingElement.scrollTop * -0.15) + "px";
}

	function hideWarningBanner(){
		warningBanner.style.transition = "0.3s cubic-bezier(0.79, 0.01, 1, 0.65)";
		warningBanner.style.margin = "0px 0px -100px 0px";
		warningBanner.style.opacity = "0";
}

function determineDisplayMenu() {
	if (window.innerWidth < 700){
		smallMenu.style.display = "block";
		largeMenu.style.display = "none";
	}
	else{
		smallMenu.style.display = "none";
		largeMenu.style.display = "block";
	}
}

function baseLoad() {
	determineDisplayMenu()
	contentMain.style.marginLeft = "5%";
	contentMain.style.opacity = "1";
	contentMain.style.transform = "scaleY(1) scaleX(1)";
	warningBanner.style.margin = "0px 0px 0px 0px";
	warningBanner.style.opacity = "1";
}

function smallMenuToggle() {
	if (smallMenuOpen == true){
		smallMenuMain.style.transition = "0.3s cubic-bezier(0.79, 0.01, 1, 0.65)";
		smallMenuMain.style.margin = "-180px 6% 0px 0px";
		smallMenuMain.style.boxShadow = "0px 20px 20px rgba(0,0,0,0.0)";
		smallMenuOpen = false;
	}
	else{
		smallMenuMain.style.transition = "0.3s cubic-bezier(0, 1.82, 0.51, 0.39)";
		smallMenuMain.style.margin = "50px 6% 0px 0px";
		smallMenuMain.style.boxShadow = "0px 20px 20px rgba(0,0,0,0.5)";
		smallMenuOpen = true;
	}
}