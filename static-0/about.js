var contactMain = document.getElementById('contact');
var contactLink = document.getElementById('contact-link');
var contactText = document.getElementById('contact-text');
var contactImage = document.getElementById('contact-image');
var linkOpen = false
var logoTimelineLogos = document.getElementsByClassName('logo-timeline-logo');
var lastLogo = document.getElementById('last-logo');
var lastLogoText = document.getElementById('last-logo-text');
var funStats = document.getElementById('fun-stats');
var leftElements = document.getElementById('left-elements');
var rightElements = document.getElementById('right-elements');
var topspr = document.getElementById('topspr');

function contactLinkToggle() {
	if (linkOpen == true){
		contactLink.style.width = "100%";
		contactLink.style.marginLeft = "0px";
		contactText.textContent = "Email";
		linkOpen = false;
	}
	else{
		contactLink.style.width = "calc(100% + 30px)";
		contactLink.style.marginLeft = "-15px";
		contactLink.style.background = "#353535";
		contactLink.style.boxShadow = "0px 0px 20px rgba(0,0,0,0.5)";
		setTimeout(function() {if (linkOpen == true) {contactText.textContent = "Copied to clipboard!"}}, 150);
		navigator.clipboard.writeText("inquiries.blendertimer@gmail.com");
		linkOpen = true;
	}
}

function contactLinkMouseLeave() {
	contactLink.style.background = "#252525";
	contactLink.style.boxShadow = "none";
	contactLink.style.width = "100%";
	contactLink.style.marginLeft = "0px";
	contactText.textContent = "Email";
	linkOpen = false;
}

function contactLinkMouseEnter() {
	contactLink.style.background = "#353535";
	contactLink.style.boxShadow = "0px 0px 20px rgba(0,0,0,0.5)";
}

function lastLogoV(m) {
	if (m == 'down') {
		lastLogo.src = "./static-0/files/images/Logo-BT00000-512.png";
		lastLogoText.textContent = "December 29, 2020";
	}
	else {
		lastLogo.src = "./static-0/files/images/Logo-BT-512.png";
		lastLogoText.textContent = "April 20, 2022";
	}
}

function determineLayout() {
	if (window.innerWidth < 800) {
		funStats.style.width = "100%";
		funStats.style.marginTop = "15px";
		leftElements.style.maxWidth = "256px";
		leftElements.style.width = "256px";
		leftElements.style.marginLeft = "calc(50% - 128px)";
		rightElements.style.width = "100%";
		rightElements.style.marginTop = "15px";
		topspr.style.display = "block";
	}
	else if (window.innerWidth < 1000) {
		funStats.style.width = "100%";
		funStats.style.marginTop = "30px";
		leftElements.style.maxWidth = "256px";
		leftElements.style.width = "30vw";
		leftElements.style.marginLeft = "0px";
		rightElements.style.width = "calc(100% - 256px - 30px)";
		rightElements.style.marginTop = "0px";
		topspr.style.display = "none";
	}
	else {
		funStats.style.width = "calc(100% - 256px - 30px)";
		funStats.style.marginTop = "15px";
		leftElements.style.maxWidth = "256px";
		leftElements.style.width = "30vw";
		leftElements.style.marginLeft = "0px";
		rightElements.style.width = "calc(100% - 256px - 30px)";
		rightElements.style.marginTop = "0px";
		topspr.style.display = "none";
	}
}