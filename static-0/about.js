//----------Variables
var popupBack = document.getElementById('popup-back');
var popupContainer = document.getElementById('popup-container');
var popupMain = document.getElementById('popup-main');
var contactPopup = document.getElementById('contact-popup');
var skillsPopup = document.getElementById('skills-popup');
var contactForm = document.getElementById('contact-form');
var contactEmail = document.getElementById('contact-email');
var contactName = document.getElementById('contact-name');
var contactCompany = document.getElementById('contact-company');
var contactSubject = document.getElementById('contact-subject');
var contactMessage = document.getElementById('contact-message');
var contactLimit = document.getElementById('contact-limit');
var firstContact = true;
var lastCookie = "";
//----------Functions
//Load
var btCntctAS = readCookie("btCntctAS");
if (!(btCntctAS == null)) {
	var cnt = btCntctAS.split("}®!®{");
	contactSubject.value = cnt[0];
	contactMessage.value = cnt[1];
	contactEmail.value = cnt[2];
	contactName.value = cnt[3];
	contactCompany.value = cnt[4];
}
if (window.location.href.toLowerCase().indexOf("skills") > -1) {
	showPopup('skills');
}
//----------
function closePopup() {
	document.body.style.width = null;
	document.getElementById('revolve-button').style.transition = "0s";
	document.getElementById('revolve-button').style.right = null;
	setTimeout(function() {document.getElementById('revolve-button').style.transition = "0.2s"}, 1);
	document.body.style.overflowY = null;
	popupBack.style.opacity = 0;
	popupBack.style.pointerEvents = "none";
	popupContainer.style.opacity = 0;
	popupMain.style.pointerEvents = "none";
	popupMain.style.transform = "scale(0)";
}

function showPopup(popup) {
	if (popup == "contact") {
		contactPopup.style.display = null;
		skillsPopup.style.display = "none";
	}
	else if (popup == "skills") {
		skillsPopup.style.display = null;
		contactPopup.style.display = "none";
	}
	popupBack.style.opacity = 1;
	popupBack.style.pointerEvents = "visible";
	popupContainer.style.opacity = 1;
	popupMain.style.pointerEvents = "visible";
	popupMain.style.transform = "scale(1)";
	var scrollPx = window.innerWidth - document.body.offsetWidth;
	document.body.style.width = "calc(100% - " + scrollPx + "px)";
	document.getElementById('revolve-button').style.transition = "0s";
	document.getElementById('revolve-button').style.right = scrollPx + "px";
	setTimeout(function() {document.getElementById('revolve-button').style.transition = "0.2s"}, 1);
	document.body.style.overflowY = "hidden";
}

function contactEmailClick(e) {
	navigator.clipboard.writeText("inquiries@blendertimer.com");
	(e.srcElement || e.target).children[1].textContent = "Copied!";
	setTimeout(function() {(e.srcElement || e.target).children[1].textContent = "Email"}, 3000, e);
}

function contactInput(e) {
	setTimeout(function() {contactLimit.innerHTML = (e.srcElement || e.target).value.length.toLocaleString() + "/" + "10,000"; if (parseInt(contactLimit.innerHTML.removeAfter("/", -1).replace(/,/g, "")) > 9500) {contactLimit.style.color = "#FF4F4F"} else {contactLimit.style.color = "var(--italic-text)"}}, 1, e);
	if (firstContact == true) {
		setInterval(function() {
			if (!(lastCookie == getCookieString())) {
				writeCookie("btCntctAS", getCookieString(), 14);
				lastCookie = getCookieString();
			}
		}, 5000)
		firstContact = false;
	}
}

function getCookieString() {
	return contactSubject.value + "}®!®{" + contactMessage.value.replace(/\n/g, "\\n") + "}®!®{" + contactEmail.value + "}®!®{" + contactName.value + "}®!®{" + contactCompany.value;
}