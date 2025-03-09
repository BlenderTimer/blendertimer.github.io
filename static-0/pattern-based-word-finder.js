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
var patternLoad = document.getElementById('pattern-load');
var patternIDContainer = document.getElementById('pattern-id');
var patternID = "";
var ptps = ["B","C","D","F","H","I","J","K","M","N","O","P","Q","R","T","V","a","b","c","d","e","f","g","h","i","j","k","m","n","p","q","r","s","t","v","w","x","z"];
var customDictionary = [];
var customListCount = document.getElementById("custom-list-count");
var customList = document.getElementById("custom-list");
var customListSeparator = "\n";
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
		updatePattern();
		resetFindBTN();
		patternID = encryptPattern();
		patternIDContainer.value = patternID;
		patternWrite();
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
		else if (url.removeBefore("?", 1, true).startsWith("custom")) {
			importLanguageDictionary("custom");
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
	if (lang == "custom") {
		document.getElementById("custom-list-base").style.display = null;
		document.getElementById("lang-custom").style.background = "var(--hover-back2)";
	}
	else {
		var ld = document.createElement('i');
		ld.innerHTML = "Loading...";
		document.getElementById("lang-" + lang).appendChild(ld);
		var dict = document.createElement('script');
		dict.src = "./word-dictionaries/" + lang + "-words.js";
		dict.onload = function() {document.getElementById("lang-" + lang).lastChild.remove()};
		document.body.appendChild(dict);
	}
}

function setLanguage(event) {
	var element = event.srcElement || event.target;
	var lang = element.children[0].innerHTML.toLowerCase();
	for (var i=0; i < element.parentNode.children.length; i++) {
		element.parentNode.children[i].style.background = null;
	}
	document.getElementById("custom-list-base").style.display = "none";
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
	else if (lang == "custom") {
		importLanguageDictionary(lang);
	}
	resetFindBTN();
}

function addRule(e) {
	var full = false;
	if (e.target || e.srcElement) {
		var o = (e.target || e.srcElement).parentNode;
	}
	else {
		o = document.getElementById("rule-" + e.type);
		full = true;
	}
	var rule = document.createElement('div');
	console.log(e);
	rule.style.cssText = "--back: " + getComputedStyle(o).getPropertyValue('--back');
	rule.classList = "pattern-block outlined-pattern-block";
	rule.innerHTML = o.innerHTML.replace("<div class=\"add-pattern\" onclick=\"addRule(event)\" style=\"opacity: 0;\"><img src=\"../static-0/files/images/icons/add.svg\"></div>", "");
	var deleteX = document.createElement('img');
	deleteX.src = "../static-0/files/images/icons/x.svg";
	deleteX.className = "rule-delete";
	deleteX.addEventListener('click', function(event) {removeRule(event)})
	rule.prepend(deleteX);
	rule.children[1].className = o.id;
	rule.id = "r-" + patternContainer.children.length;
	var i = 1;
	for (const c of rule.children) {
		if (c.tagName == "INPUT") {
			c.addEventListener('input', function() {setTimeout(function() {updatePattern();patternID = encryptPattern();patternIDContainer.value = patternID;patternWrite()}, 1)});
			if (full) {c.value = e["val" + i]};
			i++;
		}
	}
	if (full && e.logic == "invert") {rule.style.outline = "2px solid #FF1616"};
	patternContainer.appendChild(rule);
	if (full == false) {updatePattern();patternContainer.scrollTo(0, 100000)};
}

function removeRule(e) {
	var o = (e.target || e.srcElement).parentNode;
	patternContainer.children[o.id.substring(2, o.id.length)].remove();
	updatePattern();
	patternID = encryptPattern();
	patternIDContainer.value = patternID;
	patternWrite();
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
			if (patternContainer.children[i].children[3].type == "number") {
				p.val1 = parseInt(patternContainer.children[i].children[3].value);
			}
			else {
				p.val1 = patternContainer.children[i].children[3].value.toLowerCase();
			}
		}
		else if (p.type == "charnis") {
			if (patternContainer.children[i].children[2].type == "number") {
				p.val1 = parseInt(patternContainer.children[i].children[2].value);
			}
			else {
				p.val1 = patternContainer.children[i].children[2].value.toLowerCase();
			}
			if (patternContainer.children[i].children[4].type == "number") {
				p.val2 = parseInt(patternContainer.children[i].children[4].value);
			}
			else {
				p.val2 = patternContainer.children[i].children[4].value.toLowerCase();
			}
		}
		else if (p.type == "charisfoundntimes") {
			if (patternContainer.children[i].children[1].type == "number") {
				p.val1 = parseInt(patternContainer.children[i].children[1].value);
			}
			else {
				p.val1 = patternContainer.children[i].children[1].value.toLowerCase();
			}
			if (patternContainer.children[i].children[3].type == "number") {
				p.val2 = parseInt(patternContainer.children[i].children[3].value);
			}
			else {
				p.val2 = patternContainer.children[i].children[3].value.toLowerCase();
			}
		}
		pattern.push(p);
	}
	patternID = encryptPattern();
	patternIDContainer.value = patternID;
	patternWrite();
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
			window.scrollTo(0, e.getBoundingClientRect().top + (window.innerHeight / 2) - 50);
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
		else if (lang == "german") {dict = germanDictionary}
		else if (lang == "custom") {dict = customDictionary};
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
	if (patternContainer.children.length > 0 && confirm("Clear all rules? (you cannot undo)")) {
		//patternContainer.style.background = "#500000"
		patternContainer.innerHTML = "";
		pattern = [];
		patternID = "";
		patternID = encryptPattern();
		patternIDContainer.value = patternID;
		patternWrite();
	}
}

function showAllWords() {
	if (confirm("WARNING: Showing all words may cause your device to freeze or crash!")) {
		findWords(true);
	}
}

//----------PATTERN ID
function loadPattern() {
	if (patternLoad.textContent == "Copy ID") {
		var cancel = false;
		for (const e of patternContainer.getElementsByTagName('input')) {
			if (e.value.length == 0) {
				window.scrollTo(0, e.getBoundingClientRect().top + (window.innerHeight / 2) - 50);
				e.style.background = "#B90000";
				e.style.boxShadow = "0px 0px 10px 1px #F22";
				cancel = true;
			}
			else {
				e.style.background = null;
				e.style.boxShadow = null;
			}
		}
		if (cancel == true) {patternContainer.style.background = "#500000"}
		else {patternContainer.style.background = null;navigator.clipboard.writeText(patternIDContainer.value)};
	}
	else {
		if (patternContainer.children.length > 0 && confirm("This will overwrite your current pattern!") == false) {
			return;
		}
		patternID = patternIDContainer.value;
		pattern = decryptPattern(patternID);
		patternContainer.innerHTML = "";
		for (const p of pattern) {
			addRule(p);
		}
		patternWrite();
	}
}

function patternWrite() {
	if (patternIDContainer.value == patternID) {
		patternLoad.innerHTML = "Copy ID";
	}
	else {
		patternLoad.innerHTML = "Load Pattern";
	}
}

function encryptPattern() {
	var pt = "";
	if (pattern.length > 0) {
		for (const p of pattern) {
			//Types: BCDFHIJKMNOPQR, FreeUse=TV abcdefghijkmnpqrstvwxz
			pt += et(p.type);
			//Logic: Invert=L, FreeUse=l
			if (p.logic == "invert") {pt += "L"};
			var l1 = false;
			var l2 = false;
			//Values: val1=?, val2=a?, val3=e?
			//Long Value: Y
			if (!(p.val1 == undefined)) {
				if (p.val1.toString().length > 1) {
					pt += "Y" + p.val1.toString().toLowerCase() + "Y";
					l1 = true;
				}
				else if (p.val1.toString().length == 0) {
					pt += "U";
				}
				else {
					pt += p.val1.toString().toLowerCase();
				}
			}
			if (!(p.val2 == undefined)) {
				if (p.val2.toString().length > 1) {
					if (l1) {
						pt += p.val2.toString().toLowerCase() + "Y";
					}
					else {
						pt += "Y" + p.val2.toString().toLowerCase() + "Y";
					}
					l2 = true;
				}
				else if (p.val2.toString().length == 0) {
					pt += "U";
				}
				else {
					pt += p.val2.toString().toLowerCase();
				}	
			}
			if (!(p.val3 == undefined)) {
				if (p.val3.toString().length > 1) {
					if (l2) {
						pt += p.val3.toString().toLowerCase() + "Y";
					}
					else {
						pt += "Y" + p.val3.toString().toLowerCase() + "Y";
					}
				}
				else if (p.val3.toString().length == 0) {
					pt += "U";
				}
				else {
					pt += p.val3.toString().toLowerCase();
				}	
			}
		}
		//Lengthen: GSWXZ 
		if (pt.endsWith("Y")) {pt = pt.substr(0, pt.length-1)};
		return pl(pt);
	}
	else {
		return pt;
	}
}

function decryptPattern(pt) {
	pt = pt.replace(/G/g, "").replace(/S/g, "").replace(/W/g, "").replace(/X/g, "").replace(/Z/g, "");
	var pts = [];
	var ptn = {logic:"none"};
	//---------
	var lasts = "";
	var inVal = false;
	var fl = 0;
	var steps = [];
	var i = 0;
	for (const c of pt.split("")) {
		lasts += c;
		fl++;
		if (i == (pt.length-1)) {
			steps.push(lasts);
			var v = lasts.substring(1, lasts.length);
			if (v.isNumber()) {v = parseInt(v)};
			if (ptn.val1) {ptn.val2 = v}
			else if (ptn.val2) {ptn.val3 = v}
			else {ptn.val1 = v;ptn.type = et(lasts.substr(0,1))};
			pts.push(ptn);
			ptn = {logic:"none"};
		}
		else if (inVal && c == "Y") {
			steps.push(lasts);
			var v = lasts.replace(/Y/g,"").substring(1, lasts.length-1);
			if (v.isNumber()) {v = parseInt(v)};
			if (ptn.val1) {ptn.val2 = v}
			else if (ptn.val2) {ptn.val3 = v}
			else {ptn.val1 = v;ptn.type = et(lasts.substr(0,1))};
			inVal = false;
			lasts = "";
			fl = 0;
		}
		else if (c == "Y") {
			if (fl > 2) {
				steps.push(lasts);
				var v = lasts.substring(1, lasts.length-1);
				if (v.isNumber()) {v = parseInt(v)};
				if (ptn.val1) {ptn.val2 = v}
				else if (ptn.val2) {ptn.val3 = v}
				else {ptn.val1 = v;ptn.type = et(lasts.substr(0,1))};
				lasts = c;
			}
			else {
				lasts = lasts.replace(/Y/g,"");
			}
			fl = 0;
			inVal = true;
		}
		else if (!(inVal) && fl > 2) {
			steps.push(lasts);
			var v = lasts.substring(1, lasts.length-1);
			if (v.isNumber()) {v = parseInt(v)};
			if (ptn.val1) {ptn.val2 = v}
			else if (ptn.val2) {ptn.val3 = v}
			else {ptn.val1 = v;ptn.type = et(lasts.substr(0,1))};
			fl = 1;
			lasts = c;
		}
		else if (!(i == 0) && !(inVal) && fl > 2 && ptps.includes(c)) {
			steps.push(lasts);
			var v = lasts.substring(1, lasts.length-2);
			if (v.isNumber()) {v = parseInt(v)};
			if (ptn.val1) {ptn.val2 = v}
			else if (ptn.val2) {ptn.val3 = v}
			else {ptn.val1 = v;ptn.type = et(lasts.substr(0,1))};
			pts.push(ptn);
			ptn = {logic:"none"};
			inVal = false;
			lasts = c;
		}
		else if (c == "L") {
			ptn.logic = "invert";
			// lasts = lasts.replace("L","");
			fl = 1;
		}
		else if (!(i == 0) && !(inVal) && fl > 2 && ptps.includes(c)) {
			if (ptn.val1) {pts.push(ptn);ptn = {logic:"none"};fl = 0;lasts = c};
		}
		i++;
	}
	ptn = {logic:"none"};
	pts = [];
	i = 0;
	for (const s of steps) {
		if (ptps.includes(s.substr(0,1))) {
			if (ptps.includes(s.substr(1,1)) && pts.length > 0) {
				var v = s.substr(0, 1).replace("U","");
				if (v.isNumber()) {v = parseInt(v)};
				if (!(ptn.val2 == undefined)) {ptn.val3 = v}
				else {ptn.val2 = v};
			}
			else {
				if (!(i == 0)) {pts.push(ptn)};
				var l = "none";
				if (s.indexOf("L") > -1) {l = "invert"};
				var v = "";
				if (!(l == "none")) {
					v = s.substring(2, s.length-1).replace("U","");
					if (v.isNumber()) {v = parseInt(v)};
				}
				else {
					v = s.substring(1, s.length-1).replace("U","");
					if (v.isNumber()) {v = parseInt(v)};
				}
				ptn = {type:et(s.substr(0,1)),logic:l,val1:v};
			}
		}
		else if (i == (steps.length-1)) {
			var l = "none";
			if (s.indexOf("L") > -1) {l = "invert"};
			var v = "";
			if (!(l == "none")) {
				v = s.substring(2, s.length-1).replace("U","");
				if (v.isNumber()) {v = parseInt(v)};
			}
			else {
				v = s.substring(1, s.length-1).replace("U","");
				if (v.isNumber()) {v = parseInt(v)};
			}
			ptn = {type:et(s.substr(0,1)),logic:l,val1:v};
			pts.push(ptn);
		}
		else if (s.startsWith("Y")) {
			var v = s.substring(2, s.length-1).replace("U","");
			if (v.isNumber()) {v = parseInt(v)};
			if (!(ptn.val2 == undefined)) {ptn.val3 = v}
			else {ptn.val2 = v};
		}
		i++;
	}
	return pts;
}

function et(t) {
	//---------- CHARACTER RULES ----------
	if (t == "contains") {return "B"}
	else if (t == "startswith") {return "C"}
	else if (t == "endswith") {return "D"}
	else if (t == "charnis") {return "F"}
	else if (t == "charisfoundntimes") {return "H"}
	else if (t == "hasnvowels") {return "I"}
	else if (t == "haslessthannvowels") {return "J"}
	else if (t == "hasmorethannvowels") {return "K"}
	else if (t == "hasnconsonants") {return "M"}
	else if (t == "haslessthannconsonants") {return "N"}
	else if (t == "hasmorethannconsonants") {return "O"}
	//---------- LENGTH RULES ----------
	else if (t == "lengthis") {return "P"}
	else if (t == "lengthislessthan") {return "Q"}
	else if (t == "lengthismorethan") {return "R"}
	// REVERSE
	//---------- CHARACTER RULES ----------
	else if (t == "B") {return "contains"}
	else if (t == "C") {return "startswith"}
	else if (t == "D") {return "endswith"}
	else if (t == "F") {return "charnis"}
	else if (t == "H") {return "charisfoundntimes"}
	else if (t == "I") {return "hasnvowels"}
	else if (t == "J") {return "haslessthannvowels"}
	else if (t == "K") {return "hasmorethannvowels"}
	else if (t == "M") {return "hasnconsonants"}
	else if (t == "N") {return "haslessthannconsonants"}
	else if (t == "O") {return "hasmorethannconsonants"}
	//---------- LENGTH RULES ----------
	else if (t == "P") {return "lengthis"}
	else if (t == "Q") {return "lengthislessthan"}
	else if (t == "R") {return "lengthismorethan"}
}

function pl(ptrn) {
	while (ptrn.length < 40) {
		var r = randomNumber(0, ptrn.length);
		var r2 = randomNumber(1, 5);
		var c = "";
		if (r2 == 1) {c = "G"}
		else if (r2 == 2) {c = "S"}
		else if (r2 == 3) {c = "W"}
		else if (r2 == 4) {c = "X"}
		else if (r2 == 5) {c = "Z"}
		ptrn = ptrn.slice(0, r) + c + ptrn.slice(r);
	}
	return ptrn;
}

function customListInput() {
	var cd = customList.value.split(customListSeparator);
	customDictionary = [];
	for (const word of cd) {if (word.length > 0) {customDictionary.push(word.trim())}};
	customListCount.innerHTML = "Word List (" + customDictionary.length.toLocaleString() + "):";
}

function setCustomSeparator(e) {
	var element = e.target || e.srcElement;
	if (element.innerHTML.indexOf("<input") > -1) {
		customListSeparator = element.children[0].value;
	}
	else if (element.tagName == "INPUT") {
		customListSeparator = element.value;
	}
	else if (element.textContent.trim() == "Spaces") {
		customListSeparator = " ";
	}
	else if (element.textContent.trim() == "Commas") {
		customListSeparator = ",";
	}
	else {
		customListSeparator = "\n";
	}
	customListInput();
	for (const s of document.getElementById("custom-list-separators").children) {
		s.style.background = null;
	}
	if (element.tagName == "INPUT") {
		element.parentNode.style.background = "var(--hover-back2)";
	}
	else {
		element.style.background = "var(--hover-back2)";
	}
}

function customSeparatorInput(e) {
	var element = e.target || e.srcElement;
	customListSeparator = element.value;
	customListInput();
}