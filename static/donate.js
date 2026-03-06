const paypalDonate = document.getElementById('paypal-donate');
let url = new URL(window.location.href);
if (url.searchParams.get('p')) {
	paypalDonate.href = `https://www.paypal.com/donate?business=inquiries@blendertimer.com&no_recurring=0&item_name=${url.searchParams.get('p').replace(/ /g, "+")}&amount=10`;
}

function setPaypalDonation(e) {
	let el = e.target;
	if (el.children.length > 1) {
		if (url.searchParams.get('p')) {
			paypalDonate.href = `https://www.paypal.com/donate?business=inquiries@blendertimer.com&no_recurring=0&item_name=${url.searchParams.get('p').replace(/ /g, "+")}&amount=${el.children[1].innerHTML.replace("$", "")}`;
		}
		else {
			paypalDonate.href = `https://www.paypal.com/donate?business=inquiries@blendertimer.com&no_recurring=0&item_name=BlenderTimer+Donation&amount=${el.children[1].innerHTML.replace("$", "")}`;
		}
	}
}