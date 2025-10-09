//----------Variables
var modeSwitch = document.getElementById('mode-switch');
var tempInput = document.getElementById('temp-input');
var speedInputLabel = document.getElementById('speed-input-label');
var speedInput = document.getElementById('speed-input');
var speedInputUnit = document.getElementById('speed-input-unit');
var resultTitle = document.getElementById('result-title');
var output = document.getElementById('output');
var outputUnit = document.getElementById('output-unit');
var precisionInput = document.getElementById('precision-input');
var mode = 0;
var tempUnit = "c";
var speedUnit = "m/s";
var sosUnit = "m/s";
//----------Functions
//Load
checkURL(window.location.href);
//----------
function checkURL(url) {
	if (window.location.href.toLowerCase().endsWith("?mach") || window.location.href.toLowerCase().endsWith("?mach-number")) {
		modeSwitch.children[0].classList.remove("mode-switch-selected");
		modeSwitch.children[1].className = "mode-switch-selected";
		speedInputLabel.style.display = null;
		speedInput.style.display = null;
		speedInputUnit.style.display = null;
		outputUnit.style.display = "none";
		mode = 1;
	}
	else {
		modeSwitch.children[0].className = "mode-switch-selected";
		modeSwitch.children[1].classList.remove("mode-switch-selected");
		speedInputLabel.style.display = "none";
		speedInput.style.display = "none";
		speedInputUnit.style.display = "none";
		outputUnit.style.display = null;
		mode = 0;
	}
	calculate();
}

function setMode(e) {
	var element = e.target || e.srcElement;
	if (element.textContent == "Mach Number") {
		modeSwitch.children[0].classList.remove("mode-switch-selected");
		modeSwitch.children[1].className = "mode-switch-selected";
		speedInputLabel.style.display = null;
		speedInput.style.display = null;
		speedInputUnit.style.display = null;
		outputUnit.style.display = "none";
		mode = 1;
		history.replaceState({}, 'Speed of Sound (in air) Calculator - BlenderTimer Web Tools', window.location.href.removeAfter("?", -1)+"?mach");
	}
	else {
		modeSwitch.children[0].className = "mode-switch-selected";
		modeSwitch.children[1].classList.remove("mode-switch-selected");
		speedInputLabel.style.display = "none";
		speedInput.style.display = "none";
		speedInputUnit.style.display = "none";
		outputUnit.style.display = null;
		mode = 0;
		history.replaceState({}, 'Speed of Sound (in air) Calculator - BlenderTimer Web Tools', window.location.href.removeAfter("?", -1));
	}
	calculate();
}

function calculate() {
	if (mode == 1) {
		resultTitle.innerHTML = "Object's Mach Number:";
		var k = 0;
		if (tempUnit == "f") {
			k = ((parseFloat(tempInput.value)-32)*(5/9))+273.15;
		}
		else if (tempUnit == "k") {
			k = parseFloat(tempInput.value);
		}
		else {
			k = parseFloat(tempInput.value)+273.15;
		}
		var sos = 643.855*Math.pow(k/273.15, 0.5)*(1/1.943844492);
		var result = parseFloat(speedInput.value) / sos;
		if (speedUnit == "ft/s") {
			result = parseFloat(speedInput.value) / (sos/0.3048);
		}
		else if (speedUnit == "km/h") {
			result = parseFloat(speedInput.value) / (sos*3.6);
		}
		else if (speedUnit == "mph") {
			result = parseFloat(speedInput.value) / (sos*(0.62137119223733/1000)*3600);
		}
		output.value = "Mach " + result.toFixed(parseInt(precisionInput.value).limit(0, 100));
	}
	else {
		var k = 0;
		if (tempUnit == "f") {
			resultTitle.innerHTML = "Speed of Sound at " + parseFloat(tempInput.value).round(1) + "°F:";
			k = ((parseFloat(tempInput.value)-32)*(5/9))+273.15;
		}
		else if (tempUnit == "k") {
			resultTitle.innerHTML = "Speed of Sound at " + parseFloat(tempInput.value).round(1) + "K:";
			k = parseFloat(tempInput.value);
		}
		else {
			resultTitle.innerHTML = "Speed of Sound at " + parseFloat(tempInput.value).round(1) + "°C:";
			k = parseFloat(tempInput.value)+273.15;
		}
		var result = 643.855*Math.pow(k/273.15, 0.5)*(1/1.943844492);
		if (sosUnit == "ft/s") {
			result = result/0.3048;
		}
		else if (sosUnit == "km/h") {
			result = result*3.6;
		}
		else if (sosUnit == "mph") {
			result = result*(0.62137119223733/1000)*3600;
		}
		output.value = result.toFixed(parseInt(precisionInput.value).limit(0, 100)) + " " + sosUnit;
	}
}

function setTempUnit(e) {
	var element = e.target || e.srcElement;
	for (var i=0; i < element.parentNode.children.length; i++) {
		element.parentNode.children[i].classList.remove("input-settings-selected");
	}
	if (element.textContent == "Fahrenheit") {
		element.className = "input-settings-selected";
		tempUnit = "f";
	}
	else if (element.textContent == "Kelvin") {
		element.className = "input-settings-selected";
		tempUnit = "k";
	}
	else {
		element.className = "input-settings-selected";
		tempUnit = "c";
	}
	calculate();
}

function setSpeedUnit(e) {
	var element = e.target || e.srcElement;
	for (var i=0; i < element.parentNode.children.length; i++) {
		element.parentNode.children[i].classList.remove("input-settings-selected");
	}
	if (element.textContent == "ft/s") {
		element.className = "input-settings-selected";
		speedUnit = "ft/s";
	}
	else if (element.textContent == "km/h") {
		element.className = "input-settings-selected";
		speedUnit = "km/h";
	}
	else if (element.textContent == "mph") {
		element.className = "input-settings-selected";
		speedUnit = "mph";
	}
	else {
		element.className = "input-settings-selected";
		speedUnit = "m/s";
	}
	calculate();
}

function setSOSUnit(e) {
	var element = e.target || e.srcElement;
	for (var i=0; i < element.parentNode.children.length; i++) {
		element.parentNode.children[i].classList.remove("input-settings-selected");
	}
	if (element.textContent == "ft/s") {
		element.className = "input-settings-selected";
		sosUnit = "ft/s";
	}
	else if (element.textContent == "km/h") {
		element.className = "input-settings-selected";
		sosUnit = "km/h";
	}
	else if (element.textContent == "mph") {
		element.className = "input-settings-selected";
		sosUnit = "mph";
	}
	else {
		element.className = "input-settings-selected";
		sosUnit = "m/s";
	}
	calculate();
}