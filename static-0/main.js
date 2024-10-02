//----------Variables
//----------Event Listeners
window.addEventListener('resize', function() {determineDisplayMenu()});
//----------LOAD----------
document.getElementById('content-main').style.opacity = "1";
//----------Functions
function donate(title, service) {
	if (title == null) {title = document.title};
	if (service) {
		//
	}
	else {
		window.open("https://www.paypal.com/donate?business=inquiries@blendertimer.com&no_recurring=0&item_name=" + title.replace(/ /g, "+"), "_blank");
	}
}