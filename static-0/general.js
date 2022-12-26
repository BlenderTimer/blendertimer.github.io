var bgPlate = document.getElementById('background-plate');
var warningBanner = document.getElementById('warning-banner');
var smallMenu = document.getElementById('small-menu');
var largeMenu = document.getElementById('large-menu');
var largeMenuItem = document.getElementsByClassName('large-menu-item');
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
	if (window.innerWidth < 800){
		smallMenu.style.display = "block";
		for (var i=0; i < largeMenuItem.length; i++) {
  			largeMenuItem[i].style.display = "none";
		}
		smallMenuMain.style.display = "block";
	}
	else{
		smallMenu.style.display = "none";
		for (var i=0; i < largeMenuItem.length; i++) {
  			largeMenuItem[i].style.display = "block";
		}
		smallMenuMain.style.display = "none";
	}
}

function baseLoad() {
	determineDisplayMenu()
	contentMain.style.marginLeft = "5%";
	contentMain.style.opacity = "1";
	warningBanner.style.margin = "0px 0px 0px 0px";
	warningBanner.style.opacity = "1";
	bgPlate.style.backgroundPosition = "0px " + (document.scrollingElement.scrollTop * -0.15) + "px";
}

function smallMenuToggle() {
	if (smallMenuOpen == true){
		smallMenuMain.style.boxShadow = "0px 20px 20px rgba(0,0,0,0.0)";
		smallMenuMain.style.width = "0px";
		smallMenuMain.style.opacity = "0";
		smallMenuOpen = false;
	}
	else{
		smallMenuMain.style.boxShadow = "0px 20px 20px rgba(0,0,0,0.5)";
		smallMenuMain.style.width = "200px";
		smallMenuMain.style.opacity = "1";
		smallMenuOpen = true;
	}
}

function redirect(url) {
	window.location = url;
}