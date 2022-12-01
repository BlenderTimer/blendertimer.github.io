var contactMain = document.getElementById('contact');
var contactLink = document.getElementById('contact-link');
var contactText = document.getElementById('contact-text');
var contactImage = document.getElementById('contact-image');
var linkOpen = false

function contactLinkToggle() {
	if (linkOpen == true){
		contactLink.style.width = "100%";
		contactLink.style.marginLeft = "0px";
		contactText.textContent = "Email";
		linkOpen = false;
	}
	else{
		contactLink.style.width = "calc(100% + 20px)";
		contactLink.style.marginLeft = "-10px";
		contactLink.style.background = "#353535";
		contactLink.style.boxShadow = "0px 0px 20px rgba(0,0,0,0.5)";
		setTimeout(function(){contactText.textContent = "Copied to clipboard!";}, 150);
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
