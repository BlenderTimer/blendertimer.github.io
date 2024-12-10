function copyVLink(e) {
	var element = e.target || e.srcElement;
	navigator.clipboard.writeText(window.location.toString().removeAfter("#", -1) + "#" + element.parentNode.id);
}
//==========How much you weigh on each planet==========//
var hmywoepLB = document.getElementById("hmywoep-weight-lb");
var hmywoepKG = document.getElementById("hmywoep-weight-kg");
var hmywoepInput = document.getElementById("hmywoep-input");
var hmywoepResult = document.getElementById("hmywoep-result");
var hmywoepUnit = "lb";

var hmywoepMercury = document.getElementById("hmywoep-mercury");
var hmywoepVenus = document.getElementById("hmywoep-venus");
var hmywoepMars = document.getElementById("hmywoep-mars");
var hmywoepJupiter = document.getElementById("hmywoep-jupiter");
var hmywoepSaturn = document.getElementById("hmywoep-saturn");
var hmywoepUranus = document.getElementById("hmywoep-uranus");
var hmywoepNeptune = document.getElementById("hmywoep-neptune");

hmywoepLB.addEventListener("input", function() {hmywoepKG.value = "";hmywoepUnit = "pounds";hmywoepCalculate()});
hmywoepKG.addEventListener("input", function() {hmywoepLB.value = "";hmywoepUnit = "kilograms";hmywoepCalculate()});

function hmywoepCalculate() {
	if (hmywoepUnit == "pounds") {
		if (hmywoepLB.value == "") {
			hmywoepMercury.textContent = "... on Mercury";
			hmywoepVenus.textContent = "... on Venus";
			hmywoepMars.textContent = "... on Mars";
			hmywoepJupiter.textContent = "... on Jupiter";
			hmywoepSaturn.textContent = "... on Saturn";
			hmywoepUranus.textContent = "... on Uranus";
			hmywoepNeptune.textContent = "... on Neptune";
		}
		else {
			hmywoepMercury.textContent = (hmywoepLB.value * 0.37730).round(1).toLocaleString() + " " + hmywoepUnit + " on Mercury";
			hmywoepVenus.textContent = (hmywoepLB.value * 0.90449).round(1).toLocaleString() + " " + hmywoepUnit + " on Venus";
			hmywoepMars.textContent = (hmywoepLB.value * 0.37941).round(1).toLocaleString() + " " + hmywoepUnit + " on Mars";
			hmywoepJupiter.textContent = (hmywoepLB.value * 2.52800).round(1).toLocaleString() + " " + hmywoepUnit + " on Jupiter";
			hmywoepSaturn.textContent = (hmywoepLB.value * 1.06500).round(1).toLocaleString() + " " + hmywoepUnit + " on Saturn";
			hmywoepUranus.textContent = (hmywoepLB.value * 0.88600).round(1).toLocaleString() + " " + hmywoepUnit + " on Uranus";
			hmywoepNeptune.textContent = (hmywoepLB.value * 1.14000).round(1).toLocaleString() + " " + hmywoepUnit + " on Neptune";
		}
	}
	else {
		if (hmywoepKG.value == "") {
			hmywoepMercury.textContent = "... on Mercury";
			hmywoepVenus.textContent = "... on Venus";
			hmywoepMars.textContent = "... on Mars";
			hmywoepJupiter.textContent = "... on Jupiter";
			hmywoepSaturn.textContent = "... on Saturn";
			hmywoepUranus.textContent = "... on Uranus";
			hmywoepNeptune.textContent = "... on Neptune";
		}
		else {
			hmywoepMercury.textContent = (hmywoepKG.value * 0.37730).round(1).toLocaleString() + " " + hmywoepUnit + " on Mercury";
			hmywoepVenus.textContent = (hmywoepKG.value * 0.90449).round(1).toLocaleString() + " " + hmywoepUnit + " on Venus";
			hmywoepMars.textContent = (hmywoepKG.value * 0.37941).round(1).toLocaleString() + " " + hmywoepUnit + " on Mars";
			hmywoepJupiter.textContent = (hmywoepKG.value * 2.52800).round(1).toLocaleString() + " " + hmywoepUnit + " on Jupiter";
			hmywoepSaturn.textContent = (hmywoepKG.value * 1.06500).round(1).toLocaleString() + " " + hmywoepUnit + " on Saturn";
			hmywoepUranus.textContent = (hmywoepKG.value * 0.88600).round(1).toLocaleString() + " " + hmywoepUnit + " on Uranus";
			hmywoepNeptune.textContent = (hmywoepKG.value * 1.14000).round(1).toLocaleString() + " " + hmywoepUnit + " on Neptune";
		}
	}
}