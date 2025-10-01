//----------Variables
var inputBox = document.getElementById('input-box');
var chars = 0;
var charList = [];
var letters = 0;
var letterList = [];
var words = 0;
var wordList = [];
var sents = 0;
var sentList = [];
var paras = 0;
var paraList = [];
var lines = 0;
var lineList = [];
var readtime = 0;
var syllables = 0;
var readlevel = 0;
var charsUI = document.getElementById('chars').children[1];
var lettersUI = document.getElementById('letters').children[1];
var wordsUI = document.getElementById('words').children[1];
var sentsUI = document.getElementById('sents').children[1];
var parasUI = document.getElementById('paras').children[1];
var linesUI = document.getElementById('lines').children[1];
var readtimeUI = document.getElementById('readtime').children[1];
var readlevelUI = document.getElementById('readlevel').children[1];
// ----- Frequency Vars -----
var frequencyMax = 100;
var charsLoaded = false;
var totalChars = 0;
var charsSorted = [];
var charsearch = document.getElementById('charsearch');
var cf = document.getElementById('cf-container');
var cff = document.getElementById('cf-footer');
var wordsLoaded = false;
var totalWords = 0;
var wordsSorted = [];
var wordsearch = document.getElementById('wordsearch');
var wf = document.getElementById('wf-container');
var wff = document.getElementById('wf-footer');
//----------Functions
//Load

//----------
function analyze() {
	var text = inputBox.value;
	charList = text.toLowerCase().split("");
	chars = charList.length;
	letterList = charList.filter(c => /\p{L}/u.test(c));
	letters = letterList.length;
	wordList = text.split(/[ —\n]/).filter(function (i) {return i != ""});
	words = wordList.length;
	if (/[A-Z]/.test(text)) {
		sentList = text.split(/(?<=[.?!])\s+(?=[A-Z])/);
	}
	else {
		sentList = text.split(/(?<=[.?!])\s+|\n+/).filter(function (i) {return i != ""});
	}
	sents = sentList.length;
	lineList = text.split("\n");
	lines = lineList.length;
	paraList = lineList.filter(function (i) {return i != ""});
	paras = paraList.length;
	if (text.length == 0) {chars=0;charList=[];words=0;wordList=[];sents=0;sentList=[];paras=0;paraList=[];lines=0;lineList=[]};
	readtime = Math.round((words / 238) * 60);
	charsUI.innerHTML = chars.toLocaleString();
	lettersUI.innerHTML = letters.toLocaleString();
	wordsUI.innerHTML = words.toLocaleString();
	sentsUI.innerHTML = sents.toLocaleString();
	parasUI.innerHTML = paras.toLocaleString();
	linesUI.innerHTML = lines.toLocaleString();
	if (readtime <= 60) {
		readtimeUI.innerHTML = readtime + "<i> sec</i>";
	}
	else if (readtime > 60) {
		readtimeUI.innerHTML = new Date(1000 * readtime).toISOString().substr(11, 8).replace(/^[0:]+/, "");
	}
	syllables = 0;
	for (const w of wordList) {syllables += countSyllables(w)};
	syllables = syllables;
	readlevel = 0.39 * (words / sents) + 11.8 * (syllables / words) - 15.59 || 0;
	// console.log(206.835 - 1.015 * (words / sents) - 84.6 * (syllables / words)); // Flesch-Kincaid
	if (readlevel < 1) {
		readlevelUI.innerHTML = "<1st<i> grade</i>";
	}
	else if (Math.round(readlevel) == 1) {
		readlevelUI.innerHTML = "1st<i> grade</i>";
	}
	else if (Math.round(readlevel) == 2) {
		readlevelUI.innerHTML = "2nd<i> grade</i>";
	}
	else if (Math.round(readlevel) == 3) {
		readlevelUI.innerHTML = "3rd<i> grade</i>";
	}
	else if (Math.round(readlevel) == 4) {
		readlevelUI.innerHTML = "4th<i> grade</i>";
	}
	else if (Math.round(readlevel) == 5) {
		readlevelUI.innerHTML = "5th<i> grade</i>";
	}
	else if (Math.round(readlevel) == 6) {
		readlevelUI.innerHTML = "6th<i> grade</i>";
	}
	else if (Math.round(readlevel) == 7) {
		readlevelUI.innerHTML = "7th<i> grade</i>";
	}
	else if (Math.round(readlevel) == 8) {
		readlevelUI.innerHTML = "8th<i> grade</i>";
	}
	else if (Math.round(readlevel) == 9) {
		readlevelUI.innerHTML = "9th<i> grade</i>";
	}
	else if (Math.round(readlevel) == 10) {
		readlevelUI.innerHTML = "10th<i> grade</i>";
	}
	else if (Math.round(readlevel) == 11) {
		readlevelUI.innerHTML = "11th<i> grade</i>";
	}
	else if (Math.round(readlevel) == 12) {
		readlevelUI.innerHTML = "12th<i> grade</i>";
	}
	else if (readlevel > 12 && readlevel <= 15) {
		readlevelUI.innerHTML = "12th+<i> grade</i>";
	}
	else if (readlevel > 15 && readlevel <= 20) {
		readlevelUI.innerHTML = "University";
	}
	else if (readlevel > 20) {
		readlevelUI.innerHTML = "Professional";
	}
	// ----- Frequencies -----
	charsLoaded = false;
	searchChars();
	wordsLoaded = false;
	searchWords();
}

function searchChars() {
	var query = charsearch.value.trim().toLowerCase();
	if (charsLoaded == false) {
		totalChars = 0;
		charsSorted = [];
		for (var c of charList) {
			var i = charsSorted.findIndex(obj => obj.item === c);
			if (i > -1) {charsSorted[i].count++;totalChars++}
			else {charsSorted.push({item:c,count:1});totalChars++};
		}
		charsSorted.sort((a, b) => b.count - a.count || a.item.localeCompare(b.item));
	}
	var indMax = (((charsSorted.length+1).toLocaleString().length * 11) + 11) * 1.3;
	while (cf.lastChild) {cf.lastChild.remove()};
	var drawn = 0;
	for (var i=0; i < charsSorted.length; i++) {
		if (query.length > 0 && charsSorted[i].item == query) {
			if (drawn < frequencyMax) {
				cf.appendChild(buildFrequency(charsSorted[i], i, totalChars, indMax));
				drawn++;
			}
		}
		else if (query.length == 0) {
			if (drawn < frequencyMax) {
				cf.appendChild(buildFrequency(charsSorted[i], i, totalChars, indMax));
				drawn++;
			}
		}
	}
	cff.children[1].innerHTML = "Showing " + drawn + "/" + charsSorted.length.toLocaleString();
}

function searchWords() {
	var query = wordsearch.value.trim().toLowerCase();
	if (wordsLoaded == false) {
		totalWords = 0;
		wordsSorted = [];
		for (var w of wordList) {
			w = w.replace(/[^\p{L}\d'@#$%.-]|\.(?![\p{L}\d])|(?<![\p{L}\d])\./gu, "").toLowerCase();
			if (w.replace(/[^\p{L}\d]/u, "").length == 0 || w == "") {continue};
			var i = wordsSorted.findIndex(obj => obj.item === w);
			if (i > -1) {wordsSorted[i].count++;totalWords++}
			else {wordsSorted.push({item:w,count:1});totalWords++};
		}
		wordsSorted.sort((a, b) => b.count - a.count || a.item.localeCompare(b.item));
	}
	var indMax = (((wordsSorted.length+1).toLocaleString().length * 11) + 11) * 1.3;
	while (wf.lastChild) {wf.lastChild.remove()};
	var drawn = 0;
	for (var i=0; i < wordsSorted.length; i++) {
		if (wordsearch.value.endsWith(" ")) {
			if (wordsSorted[i].item == query) {
				if (drawn < frequencyMax) {
					wf.appendChild(buildFrequency(wordsSorted[i], i, totalWords, indMax));
					drawn++;
				}
			}
		}
		else {
			if (wordsSorted[i].item.startsWith(query)) {
				if (drawn < frequencyMax) {
					wf.appendChild(buildFrequency(wordsSorted[i], i, totalWords, indMax));
					drawn++;
				}
			}
		}
	}
	wff.children[1].innerHTML = "Showing " + drawn + "/" + wordsSorted.length.toLocaleString();
}

function buildFrequency(item, index, total, maxwidth) {
	var fr = document.createElement('div');
	fr.className = "fr";
	var i1 = document.createElement('i');
	i1.innerHTML = (index+1).toLocaleString() + ".";
	i1.style.width = maxwidth + "pt";
	var b1 = document.createElement('b');
	b1.innerHTML = item.item;
	b1.title = item.item;
	var b2 = document.createElement('b');
	b2.innerHTML = item.count.toLocaleString();
	var p1 = document.createElement('p');
	p1.innerHTML = ((item.count / total) * 100).round(1) + "%";
	fr.appendChild(i1);
	fr.appendChild(b1);
	fr.appendChild(b2);
	fr.appendChild(p1);
	return fr;
}

function downloadCSV(f) {
	var list = [];
	var total = 0;
	if (f == "chars") {list = charsSorted; total = totalChars}
	else if (f == "words") {list = wordsSorted; total = totalWords};
	var csvContent = "";
	for (const item of list) {csvContent += item.item + "," + item.count + "," + ((item.count / total) * 100).round(3) + "%\r\n"};
		csvContent = csvContent.replaceAll("\"", "\\\"")
	var encodedURI = new Blob([csvContent], {type: "text/csv"});
	var link = document.createElement("a");
	link.setAttribute("href", window.URL.createObjectURL(encodedURI));
	if (f == "chars") {link.setAttribute("download", "Character List.csv")}
	else if (f == "words") {link.setAttribute("download", "Word List.csv")};
	link.click();
	link.remove();
}

function analyzeAuto() {
	setTimeout(function() {analyze()}, 1);
}

function countSyllables(word) {
	word = word.toLowerCase().trim();
	if (!word) return 0;
	word = word.replace(/[^a-z]/g, "");

	const exceptions = {
		"business": 2,
		"colonel": 2,
	};
	if (exceptions[word] !== undefined) {
		return exceptions[word];
	}

	var groups = word.match(/[aeiouy]+/g) || [];
	var syllables = groups.length;

	if (word.endsWith("e")) {
		if (!word.endsWith("le") || word.length <= 2) {
			syllables--;
		}
	}

	if (word.endsWith("es") || word.endsWith("ed")) {
		if (word.length > 2 && !/[aeiouy]/.test(word[word.length - 3])) {
			syllables--;
		}
	}

	if (word.match(/[^aeiou]ia/) || word.match(/[^aeiou]io/)) {
		syllables++;
	}
	return Math.max(1, syllables);
}