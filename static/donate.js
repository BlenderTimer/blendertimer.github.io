const paypalDonate = document.getElementById('paypal-donate');

function setPaypalDonation(e) {
	let el = e.target;
	let url = new URL(window.location.href);
	if (el.children.length > 1) {
		if (url.get('p')) {
			paypalDonate.href = `https://www.paypal.com/donate?business=inquiries@blendertimer.com&no_recurring=0&item_name=${url.get('p')}&amount=${el.children[1].innerHTML.replace("$", "")}`;
		}
		else {
			paypalDonate.href = `https://www.paypal.com/donate?business=inquiries@blendertimer.com&no_recurring=0&item_name=BlenderTimer+Donation&amount=${{el.children[1].innerHTML.replace("$", "")}`;
		}
	}
}