var paypalDonate = document.getElementById('paypal-donate');

function setPaypalDonation(e) {
	var el = e.target || e.srcElement;
	if (el.children.length > 1) {
		paypalDonate.href = "https://www.paypal.com/donate?business=inquiries@blendertimer.com&no_recurring=0&item_name=BlenderTimer+Donation&amount=" + el.children[1].innerHTML.replace("$", "");
	}
}