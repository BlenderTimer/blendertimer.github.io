var contactMain = document.getElementById('contact');
var contactLink = document.getElementById('contact-link');
var contactText = document.getElementById('contact-text');
var contactImage = document.getElementById('contact-image');
var linkOpen = false
var logoTimelineLogos = document.getElementsByClassName('logo-timeline-logo');
var lastLogo = document.getElementById('last-logo');
var lastLogoText = document.getElementById('last-logo-text');
var faq = document.getElementById('faq');
var funStats = document.getElementById('fun-stats');
var leftElements = document.getElementById('left-elements');
var rightElements = document.getElementById('right-elements');
var topspr = document.getElementById('topspr');
var closeXButton = document.getElementById('close-x-button');
var contactPopupDiv = document.getElementById('contact-popup-div');
var popupBackground = document.getElementById('popup-background');
var cpdTitle = document.getElementById('cpd-title');
var cpdText = document.getElementById('cpd-text');

function init() {
	if (window.location.toString().indexOf("#contact") > -1) {
		setTimeout(function() {contactMain.style.background = "#B02525"}, 50);
		setTimeout(function() {contactMain.style.background = "#252525"}, 2000);
	}
	var cxbc = closeXButton.getContext("2d");
	cxbc.beginPath();
	cxbc.moveTo(10, 10);
	cxbc.lineTo(20, 20);
	cxbc.strokeStyle = "#555555";
	cxbc.lineWidth = 2;
	cxbc.lineCap = "round";
	cxbc.stroke();
	cxbc.beginPath();
	cxbc.moveTo(20, 10);
	cxbc.lineTo(10, 20);
	cxbc.stroke();
}

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
		navigator.clipboard.writeText("inquiries@blendertimer.com");
		linkOpen = true;
	}
}

function contactLinkMouseLeave() {
	contactLink.style.background = "#25252500";
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
		faq.style.width = "100%";
		faq.style.marginTop = "15px";
		leftElements.style.maxWidth = "256px";
		leftElements.style.width = "256px";
		leftElements.style.marginLeft = "calc(50% - 128px)";
		rightElements.style.width = "100%";
		rightElements.style.marginTop = "15px";
		topspr.style.display = "block";
		contactPopupDiv.style.left = "20px";
		contactPopupDiv.style.right = "20px";
		contactPopupDiv.style.top = "20px";
		contactPopupDiv.style.bottom = "20px";
	}
	else if (window.innerWidth < 1000) {
		faq.style.width = "100%";
		faq.style.marginTop = "30px";
		leftElements.style.maxWidth = "256px";
		leftElements.style.width = "30vw";
		leftElements.style.marginLeft = "0px";
		rightElements.style.width = "calc(100% - 256px - 30px)";
		rightElements.style.marginTop = "0px";
		topspr.style.display = "none";
		contactPopupDiv.style.left = "10vw";
		contactPopupDiv.style.right = "10vw";
		contactPopupDiv.style.top = "10vh";
		contactPopupDiv.style.bottom = "10vh";
	}
	else {
		faq.style.width = "calc(100% - 256px - 30px)";
		faq.style.marginTop = "15px";
		leftElements.style.maxWidth = "256px";
		leftElements.style.width = "30vw";
		leftElements.style.marginLeft = "0px";
		rightElements.style.width = "calc(100% - 256px - 30px)";
		rightElements.style.marginTop = "0px";
		topspr.style.display = "none";
		contactPopupDiv.style.left = "10vw";
		contactPopupDiv.style.right = "10vw";
		contactPopupDiv.style.top = "10vh";
		contactPopupDiv.style.bottom = "10vh";
	}
}

function resizeB() {
    contactPopupDiv.style.top = (window.innerHeight / 2) - (contactPopupDiv.offsetHeight / 2);
    contactPopupDiv.style.left = (window.innerWidth / 2) - (contactPopupDiv.offsetWidth / 2);
}

function contactPopup(title) {	
    cpdTitle.textContent = title;
	setTimeout(function() {contactPopupDiv.style.opacity = "1"; popupBackground.style.opacity = "1"}, 1);
	contactPopupDiv.style.display = "block";
	popupBackground.style.display = "block";
	popupBackground.style.bottom = 0;
}

function popupCloseBegin(enter) {
	if (enter == true) {
		closeXButton.style.background = "#2E2E2E";
		closeXButton.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
	}
	else {
		closeXButton.style.background = "#1E1E1E";
		closeXButton.style.boxShadow = "none";
	}
}
function popupClose() {
	contactPopupDiv.style.opacity = "0";
	popupBackground.style.opacity = "0";
	setTimeout(function() {contactPopupDiv.style.display = "none"; popupBackground.style.display = "none"}, 500);
}