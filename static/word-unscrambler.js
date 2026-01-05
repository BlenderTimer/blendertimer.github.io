//----------Variables
var languageSelector = document.getElementById('language-selector');
var wordInput = document.getElementById('word-input');
var unscrambleBTN = document.getElementById('unscramble-btn');
var toolStats = document.getElementById('tool-stats');
var toolOutput = document.getElementById('tool-output');
var englishLoad = false;
var spanishLoad = false;
var frenchLoad = false;
var germanLoad = false;
//----------Functions
//Load
checkURL()
//----------
function checkURL() {
	var url = window.location.toString();
	if (url.indexOf("?") > -1) {
		if (url.removeBefore("?", 1, true).startsWith("spanish") || url.removeBefore("?", 1, true).startsWith("es")) {
			importLanguageDictionary("spanish");
			document.getElementById("lang-spanish").style.background = "var(--wincol-lighter)";
			spanishLoad = true;
		}
		else if (url.removeBefore("?", 1, true).startsWith("fr")) {
			importLanguageDictionary("french");
			document.getElementById("lang-french").style.background = "var(--wincol-lighter)";
			frenchLoad = true;
		}
		else if (url.removeBefore("?", 1, true).startsWith("german") || url.removeBefore("?", 1, true).startsWith("de")) {
			importLanguageDictionary("german");
			document.getElementById("lang-german").style.background = "var(--wincol-lighter)";
			germanLoad = true;
		}
		else {
			importLanguageDictionary("english");
			document.getElementById("lang-english").style.background = "var(--wincol-lighter)";
			englishLoad = true;
		}
	}
	else {
		importLanguageDictionary("english");
		document.getElementById("lang-english").style.background = "var(--wincol-lighter)";
		englishLoad = true;
	}
}

function importLanguageDictionary(lang) {
	var ld = document.createElement('i');
	ld.innerHTML = "Loading...";
	document.getElementById("lang-" + lang).appendChild(ld);
	var dict = document.createElement('script');
	dict.src = "./word-dictionaries/" + lang + "-words.js";
	dict.onload = function() {document.getElementById("lang-" + lang).lastChild.remove();wordInput.focus()};
	document.body.appendChild(dict);
}

function setLanguage(event) {
	var element = event.srcElement || event.target;
	var lang = element.children[0].innerHTML.toLowerCase();
	for (var i=0; i < element.parentNode.children.length; i++) {
		element.parentNode.children[i].style.background = null;
	}
	if (lang == "english") {
		if (englishLoad == false) {
			importLanguageDictionary(lang);
			element.style.background = "var(--wincol-lighter)";
			englishLoad = true;
		}
		else {
			element.style.background = "var(--wincol-lighter)";
			englishLoad = true;
		}
	}
	else if (lang == "spanish") {
		if (spanishLoad == false) {
			importLanguageDictionary(lang);
			element.style.background = "var(--wincol-lighter)";
			spanishLoad = true;
		}
		else {
			element.style.background = "var(--wincol-lighter)";
			spanishLoad = true;
		}
	}
	else if (lang == "french") {
		if (frenchLoad == false) {
			importLanguageDictionary(lang);
			element.style.background = "var(--wincol-lighter)";
			frenchLoad = true;
		}
		else {
			element.style.background = "var(--wincol-lighter)";
			frenchLoad = true;
		}
	}
	else if (lang == "german") {
		if (germanLoad == false) {
			importLanguageDictionary(lang);
			element.style.background = "var(--wincol-lighter)";
			germanLoad = true;
		}
		else {
			element.style.background = "var(--wincol-lighter)";
			germanLoad = true;
		}
	}
	resetUnscrambleBTN();
	wordInput.focus();
}

function resetUnscrambleBTN() {
	unscrambleBTN.innerHTML = "Unscramble!";
	unscrambleBTN.style.background = null;
	toolStats.style.display = "none";
}

function unscramble() {
	var startTime = Date.now();
	unscrambleBTN.innerHTML = "Unscrambling...";
	toolStats.style.display = "none";
	var lang = "english";
	var langLoaded = true;
	var word = wordInput.value.toLowerCase();
	var wl = word.length;
	var w = word.split("");
	for (var i=0; i < languageSelector.children.length; i++) {
		if (languageSelector.children[i].style.background) {
			lang = languageSelector.children[i].children[0].innerHTML.toLowerCase();
			if (languageSelector.children[i].innerHTML.indexOf("Loading...") > -1) {
				langLoaded = false;
			}
		}
	}
	if (langLoaded == true) {
		if (lang == "english") {dict = englishDictionary}
		else if (lang == "spanish") {dict = spanishDictionary}
		else if (lang == "french") {dict = frenchDictionary}
		else if (lang == "german") {dict = germanDictionary};
		while (toolOutput.lastChild) {toolOutput.lastChild.remove()};
		for (var i=0; i < dict.length; i++) {
			var w = word.split("");
			if (dict[i].length == w.length) {
				var matches = 0;
				var ww = dict[i].toLowerCase().split("");
				for (var i2=0; i2 < ww.length; i2++) {
					for (var i3=0; i3 < w.length; i3++) {
						if (w[i3] == ww[i2]) {
							matches += 1;
							w.splice(i3, 1);
							break;
						}
					}
				}
				if (matches == wl) {
					var match = document.createElement('b');
					match.innerHTML = dict[i];
					toolOutput.appendChild(match);
				}
			}
		}
		unscrambleBTN.innerHTML = toolOutput.children.length.toLocaleString() + " words found!";
		toolStats.innerHTML = dict.length.toLocaleString() + " words searched in " + ((Date.now()-startTime)/1000).round(3).toString() + " seconds!";
		toolStats.style.display = null;
		var dataObject = {
			'event': 'word_unscramble',
			'word': wordInput.value.toString(),
		};
		if(typeof dataLayer != 'undefined'){dataLayer.push(dataObject)};
	}
	else {
		unscrambleBTN.innerHTML = "Language Not Loaded";
	}
}

function checkEnter(e) {
	if (e.key == "Enter") {unscramble()};
}