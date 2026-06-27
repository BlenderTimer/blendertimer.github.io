// —————————— ELEMENTS ——————————
const numberInput = document.getElementById('number-input');
const baseFrom = document.getElementById('base-from').children[1];
const baseTo = document.getElementById('base-to').children[1];
const toolOutput = document.getElementById('tool-output');
const error = document.getElementById('error');
const numeralListCont = document.getElementById('numeral-list');
const numeralInput = document.getElementById('numeral-list-input');
const numeralList = document.getElementById('numeral-list-items');

// —————————— VARIABLES ——————————
const defaultNumerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η", "Θ", "Ι", "Κ", "Λ", "Μ", "Ν", "Ξ", "Ο", "Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω", "α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "ς", "τ", "υ", "φ", "χ", "ψ", "ω"];
let numerals = defaultNumerals;

// —————————— LOAD ——————————
setTimeout(() => {numberInput.focus()}, 1);
setTimeout(() => {numberInput.focus()}, 100);

// —————————— FUNCTIONS ——————————
function convertBase(value, from, to) {
	if (from < 1 || to < 1) throw new Error("Bases must be >= 1");
	if (from > numerals.length || to > numerals.length) throw new Error(`Bases must be <= ${numerals.length}`);
	if (from === to) return value;

	// Handle sign
	let negative = false;
	let s = value;
	if (s[0] === '-') { negative = true; s = s.slice(1); }
	if (!s) throw new Error("Empty value string");

	// Build reverse lookup once
	const charToVal = new Map();
	for (let i = 0; i < numerals.length; i++) charToVal.set(numerals[i], i);

	// Decode to integer magnitude
	let magnitude; // BigInt for arbitrary precision

	if (from === 1) {
		// Unary: value is just the count of the single tally symbol
		const tally = numerals[0];
		for (const ch of s) {
			if (ch !== tally) throw new Error(`Invalid unary symbol "${ch}"`);
		}
		magnitude = BigInt(s.length);
	} else {
		magnitude = 0n;
		const bigFrom = BigInt(from);
		for (let i = 0; i < s.length; i++) {
			const v = charToVal.get(s[i]);
			if (v === undefined || v >= from) throw new Error(`Symbol "${s[i]}" is invalid for base ${from}`);
			magnitude = magnitude * bigFrom + BigInt(v);
		}
	}

	// Encode from integer magnitude to target base
	let result;

	if (to === 1) {
		// Unary: repeat the tally symbol `magnitude` times
		if (magnitude > 100_000n) throw new Error("Unary output too large (>100,000)");
		result = numerals[0].repeat(Number(magnitude));
		if (result === '') result = ''; // zero in unary is empty string
	} else {
		if (magnitude === 0n) {
			result = numerals[0];
		} else {
			const bigTo = BigInt(to);
			const digits = [];
			let n = magnitude;
			while (n > 0n) {
				digits.push(numerals[Number(n % bigTo)]);
				n = n / bigTo;
			}
			result = digits.reverse().join('');
		}
	}

	return negative ? '-' + result : result;
}

function convert() {
	const input = numberInput.value.toString();
	if (input.length > 0) {
		try {
			let result = convertBase(input, parseInt(baseFrom.value), parseInt(baseTo.value));
			if (result.length === 0) {result = '​'};
			error.style.display = 'none';
			toolOutput.children[0].innerHTML = result;
		}
		catch (e) {
			toolOutput.children[0].innerHTML = '​';
			error.innerHTML = e;
			error.style.display = 'block';
		}
	}
	else {
		error.style.display = 'none';
		toolOutput.children[0].innerHTML = "​";
	}
}

function checkEnter(e) {
	let element = e.target || e.srcElement;
	if (e.key === "Enter" && element.id === "number-input") {convert()}
	else if (e.key === "Enter" && element.id === "numeral-list-input") {addNumerals()};
}

function copyResult() {
	navigator.clipboard.writeText(toolOutput.children[0].textContent);
}

function switchBases() {
	const bf = baseFrom.value;
	baseFrom.value = baseTo.value;
	baseTo.value = bf;
	convert();
}

function clearNumeralList() {
	while (numeralList.lastChild) {numeralList.lastChild.remove()};
	numerals = [];
}

function addNumerals() {
	syncNumeralList();
	if (numeralInput.value.toString().length > 1) {
		let adds = numeralInput.value.toString().replace(/ /g, "").split(",");
		for (let i=0; i < adds.length; i++) {
			numerals.push(adds[i]);
			let numeral = document.createElement('span');
			numeral.innerHTML = "<p>" + numerals.length + "</p><input oninput=\"numeralChanged(event)\" name=\"numeral-" + numerals.length + "\" type=\"text\" value=\"" + adds[i] + "\" maxlength=\"1\"><img src=\"../static-0/files/images/icons/x.svg\" title=\"Remove from list\" alt=\"Delete\" onclick=\"deleteNumeral(event)\">"
			numeralList.appendChild(numeral);
		}
	}
	else {
		numerals.push(numeralInput.value.toString());
		let numeral = document.createElement('span');
		numeral.innerHTML = "<p>" + numerals.length + "</p><input oninput=\"numeralChanged(event)\" name=\"numeral-" + numerals.length + "\" type=\"text\" value=\"" + numeralInput.value.toString() + "\" maxlength=\"1\"><img src=\"../static-0/files/images/icons/x.svg\" title=\"Remove from list\" alt=\"Delete\" onclick=\"deleteNumeral(event)\">"
		numeralList.appendChild(numeral);
	}
	syncNumeralList();
}

function deleteNumeral(e) {
	syncNumeralList();
	let element = e.target || e.srcElement;
	numerals.splice(parseInt(element.parentNode.children[0].innerHTML)-1, 1);
	numeralList.children[parseInt(element.parentNode.children[0].innerHTML)-1].remove();
	for (let i=0; i < numeralList.children.length; i++) {
		numeralList.children[i].children[0].innerHTML = i+1;
	}
}

function copyNumeralList() {
	syncNumeralList();
	let l = "";
	for (let i=0; i < numerals.length; i++) {l += numerals[i] + ", "};
	l = l.substr(0, l.length-2);
	navigator.clipboard.writeText(l);
}

function resetNumeralList() {
	numerals = JSON.parse(JSON.stringify(defaultNumerals));
	while (numeralList.lastChild) {numeralList.lastChild.remove()};
	for (let i=0; i < numerals.length; i++) {
		let numeral = document.createElement('span');
		numeral.innerHTML = "<p>" + (i+1) + "</p><input oninput=\"numeralChanged(event)\" name=\"numeral-" + (i+1) + "\" type=\"text\" value=\"" + numerals[i] + "\" maxlength=\"1\"><img src=\"../static-0/files/images/icons/x.svg\" title=\"Remove from list\" alt=\"Delete\" onclick=\"deleteNumeral(event)\">"
		numeralList.appendChild(numeral);
	}
}

function syncNumeralList() {
	numerals = [];
	for (let i=0; i < numeralList.children.length; i++) {
		if (numerals.indexOf(numeralList.children[i].children[1].value.toString()) > -1) {
			numeralList.children[i].style.background = "#F22";
		}
		else {
			numeralList.children[i].style.background = null;
		}
		numerals.push(numeralList.children[i].children[1].value.toString());
	}
	convert();
}

function numeralChanged(e) {
	syncNumeralList();
}

function toggleNumerals() {
	if (numeralListCont.style.display === 'none') {numeralListCont.removeAttribute('style')}
	else {numeralListCont.style.display = 'none'};
}