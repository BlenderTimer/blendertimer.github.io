// —————————— ELEMENTS ——————————
const languageSelector = document.getElementById('language-selector');
const languageLoader = document.getElementById('language-loader');
const wordInput = document.getElementById('word-input');
const unscrambleBTN = document.getElementById('unscramble-btn');
const btnAdditional = document.getElementById('btn-additional');
const toolStats = document.getElementById('tool-stats');
const toolOutput = document.getElementById('tool-output');
let englishLoad = false;
let spanishLoad = false;
let frenchLoad = false;
let germanLoad = false;
let currentLanguage = 'english';
let dictionary = [];
let currentDictionary = '';
let dictIndex = [];
let loadingDictionary = true;
let caseInsensitive = true;
let currentCase = true;

// —————————— LOAD ——————————
wordInput.focus();
checkURL();

// —————————— FUNCTIONS ——————————
function checkURL() {
	const urlParams = new URLSearchParams(window.location.search);
	const lang = urlParams.get('l') || urlParams.get('lang') || urlParams.get('language') || 'n/a';
	if (['es', 'español', 'espanol', 'spanish'].includes(lang.toLowerCase())) {
		importLanguageDictionary("spanish");
		document.getElementById("lang-spanish").style.background = "var(--wincol-lighter)";
		spanishLoad = true; currentLanguage = 'spanish'; startLoadInt(); return;
	}
	else if (['fr', 'français', 'francais', 'french'].includes(lang.toLowerCase())) {
		importLanguageDictionary("french");
		document.getElementById("lang-french").style.background = "var(--wincol-lighter)";
		frenchLoad = true; currentLanguage = 'french'; startLoadInt(); return;
	}
	else if (['de', 'deutsch', 'german'].includes(lang.toLowerCase())) {
		importLanguageDictionary("german");
		document.getElementById("lang-german").style.background = "var(--wincol-lighter)";
		germanLoad = true; currentLanguage = 'german'; startLoadInt(); return;
	}
	importLanguageDictionary("english");
	document.getElementById("lang-english").style.background = "var(--wincol-lighter)";
	englishLoad = true;
	currentLanguage = 'english';
	startLoadInt();
}

function importLanguageDictionary(lang) {
	const dict = document.createElement('script');
	dict.src = "./word-dictionaries/" + lang + "-words.js";
	document.body.appendChild(dict);
}

function startLoadInt() {
	languageLoader.removeAttribute('style');
	// Sync global dictionary if not synced
	const dictLoad = setInterval(() => {
		try {
			if (currentDictionary !== currentLanguage || currentCase !== caseInsensitive) {
				if (currentLanguage === 'english') {dictionary = englishDictionary; currentDictionary = currentLanguage}
				else if (currentLanguage === 'spanish') {dictionary = spanishDictionary; currentDictionary = currentLanguage}
				else if (currentLanguage === 'french') {dictionary = frenchDictionary; currentDictionary = currentLanguage}
				else if (currentLanguage === 'german') {dictionary = germanDictionary; currentDictionary = currentLanguage};
				dictIndex = buildUnscrambleIndex(dictionary, {caseInsensitive: caseInsensitive});
				currentCase = caseInsensitive;
				languageLoader.style.display = 'none';
				wordInput.focus();
				loadingDictionary = false;
				clearInterval(dictLoad);
			}
			else {
				languageLoader.style.display = 'none';
				wordInput.focus();
				loadingDictionary = false;
				clearInterval(dictLoad);
			}
		} catch {};
	}, 10);
}

function setLanguage(event) {
	loadingDictionary = true;
	languageLoader.removeAttribute('style');
	const element = event.target;
	const lang = element.id.substring(5);
	for (let i=0; i < element.parentNode.children.length; i++) {
		element.parentNode.children[i].style.background = null;
	}
	if (lang === "english") {
		if (englishLoad == false) {
			importLanguageDictionary(lang);
			element.style.background = "var(--wincol-lighter)";
			englishLoad = true;
		}
		else {
			element.style.background = "var(--wincol-lighter)";
			englishLoad = true;
		}
		const url = new URL(window.location.href);
		url.searchParams.delete('l');
		window.history.pushState({}, "", url);
		currentLanguage = 'english';
		startLoadInt();
	}
	else if (lang === "spanish") {
		if (spanishLoad == false) {
			importLanguageDictionary(lang);
			element.style.background = "var(--wincol-lighter)";
			spanishLoad = true;
		}
		else {
			element.style.background = "var(--wincol-lighter)";
			spanishLoad = true;
		}
		const url = new URL(window.location.href);
		url.searchParams.set('l', 'es');
		window.history.pushState({}, "", url);
		currentLanguage = 'spanish';
		startLoadInt();
	}
	else if (lang === "french") {
		if (frenchLoad == false) {
			importLanguageDictionary(lang);
			element.style.background = "var(--wincol-lighter)";
			frenchLoad = true;
		}
		else {
			element.style.background = "var(--wincol-lighter)";
			frenchLoad = true;
		}
		const url = new URL(window.location.href);
		url.searchParams.set('l', 'fr');
		window.history.pushState({}, "", url);
		currentLanguage = 'french';
		startLoadInt();
	}
	else if (lang === "german") {
		if (germanLoad == false) {
			importLanguageDictionary(lang);
			element.style.background = "var(--wincol-lighter)";
			germanLoad = true;
		}
		else {
			element.style.background = "var(--wincol-lighter)";
			germanLoad = true;
		}
		const url = new URL(window.location.href);
		url.searchParams.set('l', 'de');
		window.history.pushState({}, "", url);
		currentLanguage = 'german';
		startLoadInt();
	}
	resetUnscrambleBTN();
	wordInput.focus();
}

function resetUnscrambleBTN() {
	unscrambleBTN.innerHTML = 'Unscramble!';
	unscrambleBTN.style.background = null;
	btnAdditional.style.display = 'none';
	toolStats.style.display = 'none';
}

function checkEnter(e) {if (e.key == "Enter") {unscramble()}};

function caseSensitive(e) {
	resetUnscrambleBTN();
	if (e.target.checked) {caseInsensitive = false}
	else {caseInsensitive = true};
	startLoadInt();
}

function unscramble() {
	if (loadingDictionary) {return};

	unscrambleBTN.innerHTML = "Unscrambling...";
	toolStats.style.display = "none";
	while (toolOutput.lastChild) {toolOutput.lastChild.remove()};

	const startTime = performance.now();

	const results = unscramble_funct(dictIndex, wordInput.value, {matchLength: false, caseInsensitive: currentCase});
	const inputLength = wordInput.value.length;
	const exactMatches = results.filter(r => r.match === inputLength).length;

	toolOutput.innerHTML = results.map(word => `<b class="output-${word.match === inputLength ? 'green':'regular'}">${word.word}</b>`).join('');
	unscrambleBTN.innerHTML = `${exactMatches.toLocaleString()} exact match${exactMatches !== 1 ? 'es':''} found!`;
	btnAdditional.innerHTML = `${results.length.toLocaleString()} total match${results.length !== 1 ? 'es':''}`;
	toolStats.innerHTML = `${dictionary.length.toLocaleString()} words searched in ${(performance.now()-startTime).round(1)} ms!`;
	btnAdditional.removeAttribute('style');
	toolStats.removeAttribute('style');
	toolOutput.removeAttribute('style');
}

function buildUnscrambleIndex(dictionary, { caseInsensitive = false } = {}) {
	// const t = performance.now();
	const index = new Map();
	for (const word of dictionary) {
		// Make key/hash
		const normalized = caseInsensitive ? word.toLowerCase() : word;
		const codes = new Uint16Array(normalized.length);
		for (let i = 0; i < normalized.length; i++) codes[i] = normalized.charCodeAt(i);
		codes.sort();
		const hash = hashCodes(codes);

		// Get and set bucket
		const bucket = index.get(hash);
		if (bucket) bucket.push({ word, codes });
		else index.set(hash, [{ word, codes }]);
	}
	// console.log(performance.now()-t);
	return index;
}

function unscramble_funct(index, scrambled, { matchLength = true, caseInsensitive = false } = {}) {
	const normalized = caseInsensitive ? scrambled.toLowerCase() : scrambled;
	const inputCodes = getSortedCodes(normalized);
	const inputHash = hashCodes(inputCodes);

	if (matchLength) {
		const bucket = index.get(inputHash) ?? [];
		return bucket
			.filter(entry => codesMatch(entry.codes, inputCodes))
			.map(entry => ({ word: entry.word, match: entry.word.length }));
	}

	const results = [];
	for (const [, bucket] of index) {
		for (const entry of bucket) {
			if (isSubsetCodes(entry.codes, inputCodes)) {
				results.push({ word: entry.word, match: entry.word.length });
			}
		}
	}
	results.sort((a, b) => b.match - a.match);
	return results;
}

function hashCodes(codes) {
	let h = 0x811c9dc5;
	for (let i = 0; i < codes.length; i++) {
		h ^= codes[i];
		h = (Math.imul(h, 0x01000193) >>> 0);
	}
	return h;
}

function codesMatch(a, b) {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
	return true;
}

function getSortedCodes(str) {
	const codes = new Uint16Array(str.length);
	for (let i = 0; i < str.length; i++) codes[i] = str.charCodeAt(i);
	codes.sort();
	return codes;
}

function isSubsetCodes(needCodes, haveCodes) {
	if (!needCodes || !haveCodes) return false;
	if (needCodes.length > haveCodes.length) return false;
	let ni = 0, hi = 0;
	while (ni < needCodes.length && hi < haveCodes.length) {
		if (needCodes[ni] === haveCodes[hi]) { ni++; hi++; }
		else if (needCodes[ni] > haveCodes[hi]) { hi++; }
		else return false;
	}
	return ni === needCodes.length;
}