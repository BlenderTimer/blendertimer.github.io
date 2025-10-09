var paypalDonate = document.getElementById('paypal-donate');

function setPaypalDonation(e) {
	var el = e.target || e.srcElement;
	if (el.children.length > 1) {
		paypalDonate.href = "https://www.paypal.com/donate?business=inquiries@blendertimer.com&no_recurring=0&item_name=BlenderTimer+Donation&amount=" + el.children[1].innerHTML.replace("$", "");
	}
}

//membership ideas
//$1.99 = Subsonic: discord, yt, name on website
//$4.99 = Transonic: Higher server permissions
//$9.99 = Supersonic: larger name on website
//24.99 = Hypersonic: highlighted name on website
//49.99 = 50% Lightspeed: large name on website
//99.99 = Lightspeed: Early access to next video's title, huge name on website