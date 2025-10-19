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
var speaktime = 0;
var syllables = 0;
var readlevel = 0;
var fleschscore = 0;
var charsUI = document.getElementById('chars').children[1];
var lettersUI = document.getElementById('letters').children[1];
var wordsUI = document.getElementById('words').children[1];
var sentsUI = document.getElementById('sents').children[1];
var parasUI = document.getElementById('paras').children[1];
var linesUI = document.getElementById('lines').children[1];
var readtimeUI = document.getElementById('readtime').children[1];
var speaktimeUI = document.getElementById('speaktime').children[1];
var freTable = document.getElementById('fre-table').children[0];
var formula = document.getElementById('formula');
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
window.addEventListener('resize', drawFlesch);
//Load
drawFlesch();
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
		sentList = text.split(/(?<=[.?!])\s+(?=[A-Z])|\n/);
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
	speaktime = Math.round((words / 140) * 60);
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
	if (speaktime <= 60) {
		speaktimeUI.innerHTML = speaktime + "<i> sec</i>";
	}
	else if (speaktime > 60) {
		speaktimeUI.innerHTML = new Date(1000 * speaktime).toISOString().substr(11, 8).replace(/^[0:]+/, "");
	}
	syllables = 0;
	for (const w of wordList) {syllables += countSyllables(w)};
	readlevel = 0.39 * (words / sents) + 11.8 * (syllables / words) - 15.59 || 0;
	// if (readlevel < 1) {
	// 	readlevelUI.innerHTML = "<1st<i> grade</i>";
	// }
	// else if (Math.round(readlevel) == 1) {
	// 	readlevelUI.innerHTML = "1st<i> grade</i>";
	// }
	// else if (Math.round(readlevel) == 2) {
	// 	readlevelUI.innerHTML = "2nd<i> grade</i>";
	// }
	// else if (Math.round(readlevel) == 3) {
	// 	readlevelUI.innerHTML = "3rd<i> grade</i>";
	// }
	// else if (Math.round(readlevel) == 4) {
	// 	readlevelUI.innerHTML = "4th<i> grade</i>";
	// }
	// else if (Math.round(readlevel) == 5) {
	// 	readlevelUI.innerHTML = "5th<i> grade</i>";
	// }
	// else if (Math.round(readlevel) == 6) {
	// 	readlevelUI.innerHTML = "6th<i> grade</i>";
	// }
	// else if (Math.round(readlevel) == 7) {
	// 	readlevelUI.innerHTML = "7th<i> grade</i>";
	// }
	// else if (Math.round(readlevel) == 8) {
	// 	readlevelUI.innerHTML = "8th<i> grade</i>";
	// }
	// else if (Math.round(readlevel) == 9) {
	// 	readlevelUI.innerHTML = "9th<i> grade</i>";
	// }
	// else if (Math.round(readlevel) == 10) {
	// 	readlevelUI.innerHTML = "10th<i> grade</i>";
	// }
	// else if (Math.round(readlevel) == 11) {
	// 	readlevelUI.innerHTML = "11th<i> grade</i>";
	// }
	// else if (Math.round(readlevel) == 12) {
	// 	readlevelUI.innerHTML = "12th<i> grade</i>";
	// }
	// else if (readlevel > 12 && readlevel <= 15) {
	// 	readlevelUI.innerHTML = "12th+<i> grade</i>";
	// }
	// else if (readlevel > 15 && readlevel <= 20) {
	// 	readlevelUI.innerHTML = "University";
	// }
	// else if (readlevel > 20) {
	// 	readlevelUI.innerHTML = "Professional";
	// }
	fleschscore = 206.835 - 1.015 * (words / sents) - 84.6 * (syllables / words) || 0;
	drawFlesch();
	if (text.length == 0) {
		for (var i=0; i < freTable.children.length; i++) {
			freTable.children[i].style.background = null;
		}
	}
	else if (fleschscore < 10) {
		for (var i=0; i < freTable.children.length; i++) {
			if (i == 8) {freTable.children[i].style.background = "var(--closer-back)"}
			else {freTable.children[i].style.background = null}
		}
	}
	else if (fleschscore <= 30) {
		for (var i=0; i < freTable.children.length; i++) {
			if (i == 7) {freTable.children[i].style.background = "var(--closer-back)"}
			else {freTable.children[i].style.background = null}
		}
	}
	else if (fleschscore <= 50) {
		for (var i=0; i < freTable.children.length; i++) {
			if (i == 6) {freTable.children[i].style.background = "var(--closer-back)"}
			else {freTable.children[i].style.background = null}
		}
	}
	else if (fleschscore <= 60) {
		for (var i=0; i < freTable.children.length; i++) {
			if (i == 5) {freTable.children[i].style.background = "var(--closer-back)"}
			else {freTable.children[i].style.background = null}
		}
	}
	else if (fleschscore <= 70) {
		for (var i=0; i < freTable.children.length; i++) {
			if (i == 4) {freTable.children[i].style.background = "var(--closer-back)"}
			else {freTable.children[i].style.background = null}
		}
	}
	else if (fleschscore <= 80) {
		for (var i=0; i < freTable.children.length; i++) {
			if (i == 3) {freTable.children[i].style.background = "var(--closer-back)"}
			else {freTable.children[i].style.background = null}
		}
	}
	else if (fleschscore <= 90) {
		for (var i=0; i < freTable.children.length; i++) {
			if (i == 2) {freTable.children[i].style.background = "var(--closer-back)"}
			else {freTable.children[i].style.background = null}
		}
	}
	else {
		for (var i=0; i < freTable.children.length; i++) {
			if (i == 1) {freTable.children[i].style.background = "var(--closer-back)"}
			else {freTable.children[i].style.background = null}
		}
	}
	formula.children[4].innerHTML = words;
	formula.children[6].innerHTML = sents;
	formula.children[10].innerHTML = syllables;
	formula.children[12].innerHTML = words;
	formula.children[14].innerHTML = fleschscore.round(1);
	// ----- Frequencies -----
	charsLoaded = false;
	searchChars();
	wordsLoaded = false;
	searchWords();
}

function drawFlesch() {
	var canvas = document.getElementById("fre-gauge");
	canvas.width = canvas.parentNode.getBoundingClientRect().width;
	canvas.height = 150;
	var mar = 40;
	var c = canvas.getContext('2d');
	c.clearRect(0, 0, canvas.width, canvas.height);
	c.font = "bold 24pt sans-serif";
	c.textAlign = "center";
	c.textBaseline = "middle";
	if (inputBox.value.length == 0) {
		c.fillStyle = "#FFF";
	}
	else if (fleschscore < 10) {
		c.fillStyle = "#F10";
	}
	else if (fleschscore <= 30) {
		c.fillStyle = "#F70";
	}
	else if (fleschscore <= 50) {
		c.fillStyle = "#FB0";
	}
	else if (fleschscore <= 60) {
		c.fillStyle = "#FF0";
	}
	else if (fleschscore <= 70) {
		c.fillStyle = "#8F0";
	}
	else if (fleschscore <= 80) {
		c.fillStyle = "#3F0";
	}
	else if (fleschscore <= 90) {
		c.fillStyle = "#0F0";
	}
	else {
		c.fillStyle = "#0F0";
	}
	c.fillText(fleschscore.round(1), canvas.width/2, 20);
	c.beginPath();
	drawRect(c, mar/2, 70, canvas.width-mar, 30, 5);
	var gr = c.createLinearGradient(mar, 0, canvas.width-mar, 0);
	gr.addColorStop(0.1, "#F00");
	gr.addColorStop(0.3, "#F60");
	gr.addColorStop(0.55, "#FF0");
	gr.addColorStop(0.7, "#7F0");
	gr.addColorStop(0.9, "#0F0");
	c.fillStyle = gr;
	c.fill();
	var canmax = canvas.width-(mar/2);
	var score = Math.max(Math.min(fleschscore*((canvas.width-mar)/100)+(mar/2), canmax), mar/2);
	c.fillStyle = "#FFF";
	// c.beginPath();
	// c.moveTo(score, 70);
	// c.lineTo(score, 100);
	// c.strokeStyle = "#3A3A3A";
	// c.lineWidth = 8;
	// c.stroke();
	c.clearRect(score-4, 70, 8, 100);
	c.beginPath();
	c.moveTo(canvas.width/2, 40);
	c.lineTo(canvas.width/2, 50);
	c.lineTo(score, 65);
	c.lineTo(score, 100);
	c.strokeStyle = "#FFF";
	c.lineWidth = 2;
	c.lineCap = "round";
	c.lineJoin = "round";
	c.stroke();
	var i = 0;
	var odd = false;
	var num = 2;
	var maxnum = 2;
	if (canvas.width < 400) {maxnum = 4; num = 4};
	while (i <= 100) {
		c.beginPath();
		var p = i*((canvas.width-mar)/100)+(mar/2);
		if (odd == false) {
			odd = true;
			c.moveTo(p, 105);
			c.lineTo(p, 120);
		}
		else {
			odd = false;
			c.moveTo(p, 105);
			c.lineTo(p, 113);
		};
		c.stroke();
		if (num == maxnum) {
			c.font = "bold 16px sans-serif";
			c.textBaseline = "top";
			c.fillText(i, p, 125);
			num = 0;
		}
		i += 5;
		num++;
	}
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

function eachLine(spt) {
	var easeList = [];
	for (var i=0; i < lineList.length; i++) {
		var line = lineList[i];
		if (spt) {line = line.substr(line.indexOf(spt) + 1)};
		var w = line.split(/[ —\n]/).filter(function (i) {return i != ""});
		var s = line.split(/(?<=[.?!])\s+(?=[A-Z])|\n/);
		var syl = 0;
		for (const ws of w) {syl += countSyllables(ws)};
		var es = 206.835 - 1.015 * (w.length / s.length) - 84.6 * (syl / w.length) || 0;
		easeList.push({line:lineList[i],ease:es,id:i+1});
	}
	easeList.sort((a, b) => a.ease - b.ease || a.id - b.id);
	var str = "";
	for (const item of easeList) {
		str += item.ease.round(1) + " | " + item.line + "\n";
	}
	inputBox.value = str;
}

// function chapters() {
// 	var allchapters = [];
// 	var chapter = "";
// 	var book = "[Gen";
// 	var chap = 1;
// 	var chaps = 0;
// 	for (var i=0; i < lineList.length; i++) {
// 		var line = lineList[i];
// 		if (!(line.startsWith(book) && parseInt(line.removeBefore("|", 1).removeAfter("|", -1)) == chap) || i == (lineList.length-1)) {
// 			if (i == (lineList.length-1)) {
// 				line = line.substr(line.indexOf("]") + 2);
// 				chapter = chapter + line + "\n";
// 			}
// 			chapter = chapter.substring(0, chapter.length-1);
// 			chaps++;
// 			var w = chapter.split(/[ —\n]/).filter(function (i) {return i != ""});
// 			var s = chapter.split(/(?<=[.?!])\s+(?=[A-Z])|\n/);
// 			var syl = 0;
// 			for (const ws of w) {syl += countSyllables(ws)};
// 			var es = 206.835 - 1.015 * (w.length / s.length) - 84.6 * (syl / w.length) || 0;
// 			allchapters.push({text:chapter,ease:es,id:chaps,ref:book.removeBefore("[", 1)+" "+chap});
// 			chapter = "";
// 			chap = parseInt(line.removeBefore("|", 1).removeAfter("|", -1));
// 			book = line.removeAfter("|", -1);
// 		}
// 		line = line.substr(line.indexOf("]") + 2);
// 		chapter = chapter + line + "\n";
// 	}
// 	allchapters.sort((a, b) => a.ease - b.ease || a.id - b.id);
// 	chaps = 0;
// 	var str = "";
// 	for (const item of allchapters) {
// 		chaps++;
// 		str += "-----[ id:" + chaps.toLocaleString() + " | EASE: " + item.ease.round(1) + " | CHAPTER: " + item.ref + " ]-----\n" + item.text + "\n\n";
// 	}
// 	inputBox.value = str;
// }