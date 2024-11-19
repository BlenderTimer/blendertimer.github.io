//----------Variables
var languageSelector = document.getElementById('language-selector');
var findBTN = document.getElementById('find-btn');
var toolStats = document.getElementById('tool-stats');
var toolOutput = document.getElementById('tool-output');
var englishLoad = false;
var spanishLoad = false;
var frenchLoad = false;
var germanLoad = false;
var patternContainer = document.getElementById('pattern');
var pattern = [];
var overlaying = false;
var overlayingOffset = {x:0,y:0};
var overlayAddTo = -1;
//----------Functions
//Load
checkURL()
//----------Event Listeners
function btjs(t) {
	if (t == "cursor") {
		if (!(overlaying == false)) {
			document.getElementById(overlaying).style.top = cursor.y - 50 - overlayingOffset.y + "px";
			document.getElementById(overlaying).style.left = cursor.x - overlayingOffset.x + "px";
			overlayAddTo = -1;
			for (var i=0; i < patternContainer.children.length; i++) {
				if (cursor.x >= patternContainer.children[i].getBoundingClientRect().x && cursor.x <= (patternContainer.children[i].getBoundingClientRect().x + patternContainer.children[i].getBoundingClientRect().width) && (cursor.y-window.scrollY) >= patternContainer.children[i].getBoundingClientRect().y && (cursor.y-window.scrollY) <= (patternContainer.children[i].getBoundingClientRect().y + patternContainer.children[i].getBoundingClientRect().height)) {
					patternContainer.children[i].style.outline = "2px solid #FFF";
					overlayAddTo = i;
				}
				else {
					if (pattern[i].logic == "invert") {
						patternContainer.children[i].style.outline = "2px solid #FF1616";
					}
					else {
						patternContainer.children[i].style.outline = null;
					}
				}
			}
		}
	}
}

document.body.addEventListener('mouseup', function() {
	if (!(overlaying == false)) {
		document.getElementById(overlaying).remove();
		if (overlayAddTo > -1 && overlaying.indexOf("inverter") > -1) {
			patternContainer.children[overlayAddTo].style.outline = "2px solid #FF1616";
			pattern[overlayAddTo].logic = "invert";
		}
		else if (overlayAddTo > -1 && overlaying.indexOf("remove") > -1) {
			patternContainer.children[overlayAddTo].style.outline = null;
			pattern[overlayAddTo].logic = "none";
		}
		resetFindBTN();
	}
	overlaying = false;
})
//----------
function checkURL() {
	var url = window.location.toString();
	if (url.indexOf("?") > -1) {
		if (url.removeBefore("?", 1, true).startsWith("spanish") || url.removeBefore("?", 1, true).startsWith("es")) {
			importLanguageDictionary("spanish");
			document.getElementById("lang-spanish").style.background = "var(--hover-back2)";
			spanishLoad = true;
		}
		else if (url.removeBefore("?", 1, true).startsWith("fr")) {
			importLanguageDictionary("french");
			document.getElementById("lang-french").style.background = "var(--hover-back2)";
			frenchLoad = true;
		}
		else if (url.removeBefore("?", 1, true).startsWith("german") || url.removeBefore("?", 1, true).startsWith("de")) {
			importLanguageDictionary("german");
			document.getElementById("lang-german").style.background = "var(--hover-back2)";
			germanLoad = true;
		}
		else {
			importLanguageDictionary("english");
			document.getElementById("lang-english").style.background = "var(--hover-back2)";
			englishLoad = true;
		}
	}
	else {
		importLanguageDictionary("english");
		document.getElementById("lang-english").style.background = "var(--hover-back2)";
		englishLoad = true;
	}
}

function importLanguageDictionary(lang) {
	var ld = document.createElement('i');
	ld.innerHTML = "Loading...";
	document.getElementById("lang-" + lang).appendChild(ld);
	var dict = document.createElement('script');
	dict.src = "./word-dictionaries/" + lang + "-words.js";
	dict.onload = function() {document.getElementById("lang-" + lang).lastChild.remove()};
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
			element.style.background = "var(--hover-back2)";
			englishLoad = true;
		}
		else {
			element.style.background = "var(--hover-back2)";
			englishLoad = true;
		}
	}
	else if (lang == "spanish") {
		if (spanishLoad == false) {
			importLanguageDictionary(lang);
			element.style.background = "var(--hover-back2)";
			spanishLoad = true;
		}
		else {
			element.style.background = "var(--hover-back2)";
			spanishLoad = true;
		}
	}
	else if (lang == "french") {
		if (frenchLoad == false) {
			importLanguageDictionary(lang);
			element.style.background = "var(--hover-back2)";
			frenchLoad = true;
		}
		else {
			element.style.background = "var(--hover-back2)";
			frenchLoad = true;
		}
	}
	else if (lang == "german") {
		if (germanLoad == false) {
			importLanguageDictionary(lang);
			element.style.background = "var(--hover-back2)";
			germanLoad = true;
		}
		else {
			element.style.background = "var(--hover-back2)";
			germanLoad = true;
		}
	}
	resetFindBTN();
}

function addRule(e) {
	var o = (e.target || e.srcElement).parentNode;
	var rule = document.createElement('div');
	rule.style.cssText = "--back: " + getComputedStyle(o).getPropertyValue('--back');
	rule.classList = "pattern-block outlined-pattern-block";
	rule.innerHTML = o.innerHTML.replace("<div class=\"add-pattern\" onclick=\"addRule(event)\" style=\"opacity: 0;\"><img src=\"../static-0/files/images/icons/add.svg\"></div>", "");
	var deleteX = document.createElement('img');
	deleteX.src = "../static-0/files/images/icons/x.svg";
	deleteX.className = "rule-delete";
	deleteX.addEventListener('click', function(event) {removeRule(event)})
	rule.prepend(deleteX);
	rule.children[1].className = o.id;
	patternContainer.appendChild(rule);
	updatePattern();
	patternContainer.scrollTo(0, 100000);
}

function removeRule(e) {
	var o = (e.target || e.srcElement).parentNode;
	patternContainer.children[o.id.substring(2, o.id.length)].remove();
	updatePattern();
}

function updatePattern() {
	pattern = [];
	for (var i=0; i < patternContainer.children.length; i++) {
		patternContainer.children[i].id = "r-" + i;
		var p = {type:patternContainer.children[i].children[1].className.removeBefore("rule-", 5, true)};
		if (patternContainer.children[i].style.outline == "rgb(255, 22, 22) solid 2px") {
			p.logic = "invert";
		}
		else {
			p.logic = "none";
		}
		if (p.type == "contains" || p.type == "startswith" || p.type == "endswith" || p.type == "lengthis" || p.type == "lengthislessthan" || p.type == "lengthismorethan" || p.type == "hasnvowels" || p.type == "haslessthannvowels" || p.type == "hasmorethannvowels" || p.type == "hasnconsonants" || p.type == "haslessthannconsonants" || p.type == "hasmorethannconsonants") {
			p.val1 = patternContainer.children[i].children[3].value.toLowerCase();
			if (p.val1.isNumber()) {p.val1 = parseInt(p.val1)};
		}
		else if (p.type == "charnis") {
			p.val1 = patternContainer.children[i].children[2].value.toLowerCase();
			p.val2 = patternContainer.children[i].children[4].value.toLowerCase();
			if (p.val1.isNumber()) {p.val1 = parseInt(p.val1)};
			if (p.val2.isNumber()) {p.val2 = parseInt(p.val2)};
		}
		else if (p.type == "charisfoundntimes") {
			p.val1 = patternContainer.children[i].children[1].value.toLowerCase();
			p.val2 = patternContainer.children[i].children[3].value.toLowerCase();
			if (p.val1.isNumber()) {p.val1 = parseInt(p.val1)};
			if (p.val2.isNumber()) {p.val2 = parseInt(p.val2)};
		}
		pattern.push(p);
	}
	resetFindBTN();
}

function overlayStart(e) {
	document.body.style.userSelect = "none";
	var element = (e.target || e.srcElement).parentNode;
	overlaying = element.id + "-action";
	var a = document.createElement('div');
	a.innerHTML = element.innerHTML;
	a.id = overlaying;
	a.children[0].remove();
	a.className = "overlay-block"
	a.style.cssText = "--back: " + getComputedStyle(element).getPropertyValue('--back');
	a.style.position = "absolute";
	a.style.top = cursor.y + "px";
	a.style.left = cursor.x + "px";
	a.style.zIndex = 50;
	a.style.cursor = "grabbing";
	a.style.width = element.offsetWidth + "px";
	a.style.opacity = "0.8";
	overlayingOffset.x = cursorInfo('ex', element);
	overlayingOffset.y = cursorInfo('ey', element);
	document.getElementById('content-main').appendChild(a);
}

function resetFindBTN() {
	findBTN.innerHTML = "Find Words!";
	findBTN.style.background = null;
	toolStats.style.display = "none";
}

function findWords(fullList) {
	updatePattern();
	var cancel = false;
	for (const e of patternContainer.getElementsByTagName('input')) {
		if (e.value.length == 0) {
			window.scrollTo(0, e.getBoundingClientRect().top - (window.innerHeight / 2));
			e.style.background = "#B90000";
			e.style.boxShadow = "0px 0px 10px 1px #F22";
			cancel = true;
		}
		else {
			e.style.background = null;
			e.style.boxShadow = null;
		}
	}
	if (cancel == true) {patternContainer.style.background = "#500000";return}
	else {patternContainer.style.background = null};
	var startTime = Date.now();
	findBTN.innerHTML = "Searching...";
	toolStats.style.display = "none";
	var lang = "english";
	var langLoaded = true;
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
		toolOutput.children[0].value = "";
		toolOutput.children[1].value = "...";
		var words = [];
		for (var i=0; i < dict.length; i++) {
			var w = dict[i].toLowerCase();
			var valid = 0;
			for (var n=0; n < pattern.length; n++) {
				var p = pattern[n];
				//---------- CHARACTER RULES ----------
				if (p.type == "contains") {
					if (p.logic == "invert") {
						if (!(w.indexOf(p.val1) > -1)) {valid += 1}
						else {break};
					}
					else {
						if (w.indexOf(p.val1) > -1) {valid += 1}
						else {break};
					}
				}
				else if (p.type == "startswith") {
					if (p.logic == "invert") {
						if (!(w.startsWith(p.val1))) {valid += 1}
						else {break};
					}
					else {
						if (w.startsWith(p.val1)) {valid += 1}
						else {break};
					}
				}
				else if (p.type == "endswith") {
					if (p.logic == "invert") {
						if (!(w.endsWith(p.val1))) {valid += 1}
						else {break};
					}
					else {
						if (w.endsWith(p.val1)) {valid += 1}
						else {break};
					}
				}
				else if (p.type == "charnis") {
					if (p.logic == "invert") {
						if (!(w.split("")[p.val1-1] == p.val2)) {valid += 1}
						else {break};
					}
					else {
						if (w.length >= (p.val1-1) && w.split("")[p.val1-1] == p.val2) {valid += 1}
						else {break};
					}
				}
				else if (p.type == "charisfoundntimes") {
					if (p.logic == "invert") {
						var ww = w.split("");
						var m = 0;
						for (var t=0; t < ww.length; t++) {if (ww[t] == p.val1) {m++}};
						if (!(m == p.val2)) {valid += 1}
						else {break};
					}
					else {
						var ww = w.split("");
						var m = 0;
						for (var t=0; t < ww.length; t++) {if (ww[t] == p.val1) {m++}};
						if (m == p.val2) {valid += 1}
						else {break};
					}
				}
				else if (p.type == "hasnvowels") {
					if (p.logic == "invert") {
						var ww = w.split("");
						var m = 0;
						for (var t=0; t < ww.length; t++) {if (ww[t] == "a" || ww[t] == "e" || ww[t] == "i" || ww[t] == "o" || ww[t] == "u") {m++}};
						if (!(m == p.val1)) {valid += 1}
						else {break};
					}
					else {
						var ww = w.split("");
						var m = 0;
						for (var t=0; t < ww.length; t++) {if (ww[t] == "a" || ww[t] == "e" || ww[t] == "i" || ww[t] == "o" || ww[t] == "u") {m++}};
						if (m == p.val1) {valid += 1}
						else {break};
					}
				}
				else if (p.type == "haslessthannvowels") {
					if (p.logic == "invert") {
						var ww = w.split("");
						var m = 0;
						for (var t=0; t < ww.length; t++) {if (ww[t] == "a" || ww[t] == "e" || ww[t] == "i" || ww[t] == "o" || ww[t] == "u") {m++}};
						if (!(m < p.val1)) {valid += 1}
						else {break};
					}
					else {
						var ww = w.split("");
						var m = 0;
						for (var t=0; t < ww.length; t++) {if (ww[t] == "a" || ww[t] == "e" || ww[t] == "i" || ww[t] == "o" || ww[t] == "u") {m++}};
						if (m < p.val1) {valid += 1}
						else {break};
					}
				}
				else if (p.type == "hasmorethannvowels") {
					if (p.logic == "invert") {
						var ww = w.split("");
						var m = 0;
						for (var t=0; t < ww.length; t++) {if (ww[t] == "a" || ww[t] == "e" || ww[t] == "i" || ww[t] == "o" || ww[t] == "u") {m++}};
						if (!(m > p.val1)) {valid += 1}
						else {break};
					}
					else {
						var ww = w.split("");
						var m = 0;
						for (var t=0; t < ww.length; t++) {if (ww[t] == "a" || ww[t] == "e" || ww[t] == "i" || ww[t] == "o" || ww[t] == "u") {m++}};
						if (m > p.val1) {valid += 1}
						else {break};
					}
				}
				else if (p.type == "hasnconsonants") {
					if (p.logic == "invert") {
						var ww = w.split("");
						var m = 0;
						for (var t=0; t < ww.length; t++) {if (ww[t] == "b" || ww[t] == "c" || ww[t] == "d" || ww[t] == "f" || ww[t] == "g" || ww[t] == "h" || ww[t] == "j" || ww[t] == "k" || ww[t] == "l" || ww[t] == "m" || ww[t] == "n" || ww[t] == "p" || ww[t] == "q" || ww[t] == "r" || ww[t] == "s" || ww[t] == "t" || ww[t] == "v" || ww[t] == "w" || ww[t] == "x" || ww[t] == "y" || ww[t] == "z") {m++}};
						if (!(m == p.val1)) {valid += 1}
						else {break};
					}
					else {
						var ww = w.split("");
						var m = 0;
						for (var t=0; t < ww.length; t++) {if (ww[t] == "b" || ww[t] == "c" || ww[t] == "d" || ww[t] == "f" || ww[t] == "g" || ww[t] == "h" || ww[t] == "j" || ww[t] == "k" || ww[t] == "l" || ww[t] == "m" || ww[t] == "n" || ww[t] == "p" || ww[t] == "q" || ww[t] == "r" || ww[t] == "s" || ww[t] == "t" || ww[t] == "v" || ww[t] == "w" || ww[t] == "x" || ww[t] == "y" || ww[t] == "z") {m++}};
						if (m == p.val1) {valid += 1}
						else {break};
					}
				}
				else if (p.type == "haslessthannconsonants") {
					if (p.logic == "invert") {
						var ww = w.split("");
						var m = 0;
						for (var t=0; t < ww.length; t++) {if (ww[t] == "b" || ww[t] == "c" || ww[t] == "d" || ww[t] == "f" || ww[t] == "g" || ww[t] == "h" || ww[t] == "j" || ww[t] == "k" || ww[t] == "l" || ww[t] == "m" || ww[t] == "n" || ww[t] == "p" || ww[t] == "q" || ww[t] == "r" || ww[t] == "s" || ww[t] == "t" || ww[t] == "v" || ww[t] == "w" || ww[t] == "x" || ww[t] == "y" || ww[t] == "z") {m++}};
						if (!(m < p.val1)) {valid += 1}
						else {break};
					}
					else {
						var ww = w.split("");
						var m = 0;
						for (var t=0; t < ww.length; t++) {if (ww[t] == "b" || ww[t] == "c" || ww[t] == "d" || ww[t] == "f" || ww[t] == "g" || ww[t] == "h" || ww[t] == "j" || ww[t] == "k" || ww[t] == "l" || ww[t] == "m" || ww[t] == "n" || ww[t] == "p" || ww[t] == "q" || ww[t] == "r" || ww[t] == "s" || ww[t] == "t" || ww[t] == "v" || ww[t] == "w" || ww[t] == "x" || ww[t] == "y" || ww[t] == "z") {m++}};
						if (m < p.val1) {valid += 1}
						else {break};
					}
				}
				else if (p.type == "hasmorethannconsonants") {
					if (p.logic == "invert") {
						var ww = w.split("");
						var m = 0;
						for (var t=0; t < ww.length; t++) {if (ww[t] == "b" || ww[t] == "c" || ww[t] == "d" || ww[t] == "f" || ww[t] == "g" || ww[t] == "h" || ww[t] == "j" || ww[t] == "k" || ww[t] == "l" || ww[t] == "m" || ww[t] == "n" || ww[t] == "p" || ww[t] == "q" || ww[t] == "r" || ww[t] == "s" || ww[t] == "t" || ww[t] == "v" || ww[t] == "w" || ww[t] == "x" || ww[t] == "y" || ww[t] == "z") {m++}};
						if (!(m >p.val1)) {valid += 1}
						else {break};
					}
					else {
						var ww = w.split("");
						var m = 0;
						for (var t=0; t < ww.length; t++) {if (ww[t] == "b" || ww[t] == "c" || ww[t] == "d" || ww[t] == "f" || ww[t] == "g" || ww[t] == "h" || ww[t] == "j" || ww[t] == "k" || ww[t] == "l" || ww[t] == "m" || ww[t] == "n" || ww[t] == "p" || ww[t] == "q" || ww[t] == "r" || ww[t] == "s" || ww[t] == "t" || ww[t] == "v" || ww[t] == "w" || ww[t] == "x" || ww[t] == "y" || ww[t] == "z") {m++}};
						if (m > p.val1) {valid += 1}
						else {break};
					}
				}
				//---------- LENGTH RULES ----------
				else if (p.type == "lengthis") {
					if (p.logic == "invert") {
						if (!(w.length == p.val1)) {valid += 1}
						else {break};
					}
					else {
						if (w.length == p.val1) {valid += 1}
						else {break};
					}
				}
				else if (p.type == "lengthislessthan") {
					if (p.logic == "invert") {
						if (!(w.length < p.val1)) {valid += 1}
						else {break};
					}
					else {
						if (w.length < p.val1) {valid += 1}
						else {break};
					}
				}
				else if (p.type == "lengthismorethan") {
					if (p.logic == "invert") {
						if (!(w.length > p.val1)) {valid += 1}
						else {break};
					}
					else {
						if (w.length > p.val1) {valid += 1}
						else {break};
					}
				}
			}
			if (valid == pattern.length) {words.push(dict[i])};
		}
		findBTN.innerHTML = "Find Words!";
		toolStats.innerHTML = dict.length.toLocaleString() + " words searched in " + ((Date.now()-startTime)/1000).round(3).toString() + " seconds!";
		var wordsWritten = 0;
		for (var i=0; i < words.length; i++) {
			if (i == 0) {
				toolOutput.children[0].value = words[i];
			}
			else {
				toolOutput.children[0].value += "\n" + words[i];
			}
			wordsWritten++;
			if (wordsWritten >= 1000 && !(fullList == true)) {break};
		}
		toolOutput.children[1].children[1].innerHTML = "Showing " + wordsWritten.toLocaleString() + "/" + words.length.toLocaleString() + " words";
		if (wordsWritten < words.length) {
			toolOutput.children[1].children[0].style.opacity = null;
			toolOutput.children[1].children[0].style.pointerEvents = null;
		}
		else {
			toolOutput.children[1].children[0].style.opacity = "0";
			toolOutput.children[1].children[0].style.pointerEvents = "none";
		}
		toolStats.style.display = null;
	}
	else {
		findBTN.innerHTML = "Language Not Loaded";
	}
}

function clearPattern() {
	if (confirm("Clear all rules? (you cannot undo)")) {
		patternContainer.innerHTML = "";
		pattern = [];
	}
}

function showAllWords() {
	if (confirm("WARNING: Showing all words may cause your device to freeze or crash!")) {
		findWords(true);
	}
}