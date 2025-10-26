//----------Variables
var numberInput = document.getElementById('number-input');
var baseFrom = document.getElementById('base-from').children[1];
var baseTo = document.getElementById('base-to').children[1];
var convertBTN = document.getElementById('convert-btn');
var toolOutput = document.getElementById('tool-output');
var numeralInput = document.getElementById('numeral-list-input');
var numeralList = document.getElementById('numeral-list-items');
var defaultNumerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η", "Θ", "Ι", "Κ", "Λ", "Μ", "Ν", "Ξ", "Ο", "Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω", "α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "ς", "τ", "υ", "φ", "χ", "ψ", "ω"];
var numerals = defaultNumerals;
//----------Functions
//Load

//----------
function resetConvertBTN() {
	convertBTN.innerHTML = "Convert!";
	convertBTN.style.background = null;
	convertBTN.style.border = null;
}

function convert() {
	var startTime = Date.now();
	convertBTN.innerHTML = "Converting...";
	syncNumeralList();
	var error = false;
	var safe = 0;
	var fBase = parseInt(baseFrom.value);
	var tBase = parseInt(baseTo.value);
	var numberStr = "";
	var oNumList = numberInput.value.toString().split("");
	var oNumBase10 = 0;
	for (var n=0; n < oNumList.length; n++) {
		for (var nl=0; nl < numerals.length; nl++) {
			if (numerals[nl] == oNumList[n]) {
				if (((oNumList.length - 1) - n) == 0) {
					oNumBase10 += nl;
				}
				else {
					oNumBase10 += nl * Math.pow(fBase, (oNumList.length - 1) - n);
				}
			}
		}
	}
	var oNum = oNumBase10;
	var i = oNum;
	var r = 0;
	if (oNum == 0) {
		if (tBase == 1) {
			numberStr = "";
		}
		else {
			if (numerals.length > 0) {
				numberStr = numerals[0];
			}
			else {
				numberStr = "0";
			}
		}
	}
	else {
		if (tBase == 1) {
			while (i > 0) {
				if (numerals.length > 0) {
					if (numerals[1] == "1") {
						numberStr += numerals[1];
					}
					else {
						numberStr += numerals[0];
					}
				}
				else {
					error = true;
					numberStr += "‽";
					convertBTN.style.background = "#F52510";
					convertBTN.style.border = "2px solid #F9A";
					convertBTN.innerHTML = "ERROR";
				}
				i -= 1;
			}
		}
		else {
			while (i > 0 && safe < 100000) {
				r = i % tBase;
				i = parseInt(i / tBase);
				if (numerals.length > r) {
					numberStr = numerals[r] + numberStr.toString();
				}
				else {
					error = true;
					numberStr = "‽" + numberStr.toString();
					convertBTN.style.background = "#F52510";
					convertBTN.style.border = "2px solid #F9A";
					convertBTN.innerHTML = "ERROR";
				}
				safe += 1;
			}
		}
	}
	if (safe >= 100000) {error = true};
	toolOutput.innerHTML = numberStr;
	if (error == false) {
		convertBTN.innerHTML = "Base " + baseFrom.value.toString() + " in base " + baseTo.value.toString();
	}
}

function checkEnter(e) {
	var element = e.target || e.srcElement;
	if (e.key == "Enter" && element.id == "number-input") {convert()}
	else if (e.key == "Enter" && element.id == "numeral-list-input") {addNumerals()};
}

function switchBases() {
	var bf = baseFrom.value;
	baseFrom.value = baseTo.value;
	baseTo.value = bf;
}

function clearNumeralList() {
	while (numeralList.lastChild) {numeralList.lastChild.remove()};
	numerals = [];
}

function addNumerals() {
	syncNumeralList();
	if (numeralInput.value.toString().length > 1) {
		var adds = numeralInput.value.toString().replace(/ /g, "").split(",");
		for (var i=0; i < adds.length; i++) {
			numerals.push(adds[i]);
			var numeral = document.createElement('span');
			numeral.innerHTML = "<p>" + numerals.length + "</p><input oninput=\"numeralChanged(event)\" name=\"numeral-" + numerals.length + "\" type=\"text\" value=\"" + adds[i] + "\" maxlength=\"1\"><img src=\"../static-0/files/images/icons/x.svg\" title=\"Remove from list\" alt=\"Delete\" onclick=\"deleteNumeral(event)\">"
			numeralList.appendChild(numeral);
		}
	}
	else {
		numerals.push(numeralInput.value.toString());
		var numeral = document.createElement('span');
		numeral.innerHTML = "<p>" + numerals.length + "</p><input oninput=\"numeralChanged(event)\" name=\"numeral-" + numerals.length + "\" type=\"text\" value=\"" + numeralInput.value.toString() + "\" maxlength=\"1\"><img src=\"../static-0/files/images/icons/x.svg\" title=\"Remove from list\" alt=\"Delete\" onclick=\"deleteNumeral(event)\">"
		numeralList.appendChild(numeral);
	}
	syncNumeralList();
}

function deleteNumeral(e) {
	syncNumeralList();
	var element = e.target || e.srcElement;
	numerals.splice(parseInt(element.parentNode.children[0].innerHTML)-1, 1);
	numeralList.children[parseInt(element.parentNode.children[0].innerHTML)-1].remove();
	for (var i=0; i < numeralList.children.length; i++) {
		numeralList.children[i].children[0].innerHTML = i+1;
	}
}

function copyNumeralList() {
	syncNumeralList();
	var l = "";
	for (var i=0; i < numerals.length; i++) {l += numerals[i] + ", "};
	l = l.substr(0, l.length-2);
	navigator.clipboard.writeText(l);
}

function resetNumeralList() {
	numerals = JSON.parse(JSON.stringify(defaultNumerals));
	while (numeralList.lastChild) {numeralList.lastChild.remove()};
	for (var i=0; i < numerals.length; i++) {
		var numeral = document.createElement('span');
		numeral.innerHTML = "<p>" + (i+1) + "</p><input oninput=\"numeralChanged(event)\" name=\"numeral-" + (i+1) + "\" type=\"text\" value=\"" + numerals[i] + "\" maxlength=\"1\"><img src=\"../static-0/files/images/icons/x.svg\" title=\"Remove from list\" alt=\"Delete\" onclick=\"deleteNumeral(event)\">"
		numeralList.appendChild(numeral);
	}
}

function syncNumeralList() {
	numerals = [];
	for (var i=0; i < numeralList.children.length; i++) {
		if (numerals.indexOf(numeralList.children[i].children[1].value.toString()) > -1) {
			numeralList.children[i].style.background = "#F22";
		}
		else {
			numeralList.children[i].style.background = null;
		}
		numerals.push(numeralList.children[i].children[1].value.toString());
	}
}

function numeralChanged(e) {
	syncNumeralList();
}