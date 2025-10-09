//----------Variables
var elements = [
	{name:"Hydrogen",n:"H",number:1},
	{name:"Helium",n:"He",number:2},
	{name:"Lithium",n:"Li",number:3},
	{name:"Beryllium",n:"Be",number:4},
	{name:"Boron",n:"B",number:5},
	{name:"Carbon",n:"C",number:6},
	{name:"Nitrogen",n:"N",number:7},
	{name:"Oxygen",n:"O",number:8},
	{name:"Fluorine",n:"F",number:9},
	{name:"Neon",n:"Ne",number:10},
	{name:"Sodium",n:"Na",number:11},
	{name:"Magnesium",n:"Mg",number:12},
	{name:"Aluminum",n:"Al",number:13},
	{name:"Silicon",n:"Si",number:14},
	{name:"Phosphorus",n:"P",number:15},
	{name:"Sulfur",n:"S",number:16},
	{name:"Chlorine",n:"Cl",number:17},
	{name:"Argon",n:"Ar",number:18},
	{name:"Potassium",n:"K",number:19},
	{name:"Calcium",n:"Ca",number:20},
	{name:"Scandium",n:"Sc",number:21},
	{name:"Titanium",n:"Ti",number:22},
	{name:"Vanadium",n:"V",number:23},
	{name:"Chromium",n:"Cr",number:24},
	{name:"Manganese",n:"Mn",number:25},
	{name:"Iron",n:"Fe",number:26},
	{name:"Cobalt",n:"Co",number:27},
	{name:"Nickel",n:"Ni",number:28},
	{name:"Copper",n:"Cu",number:29},
	{name:"Zinc",n:"Zn",number:30},
	{name:"Gallium",n:"Ga",number:31},
	{name:"Germanium",n:"Ge",number:32},
	{name:"Arsenic",n:"As",number:33},
	{name:"Selenium",n:"Se",number:34},
	{name:"Bromine",n:"Br",number:35},
	{name:"Krypton",n:"Kr",number:36},
	{name:"Rubidium",n:"Zn",number:37},
	{name:"Strontium",n:"Sr",number:38},
	{name:"Yttrium",n:"Y",number:39},
	{name:"Zirconium",n:"Zr",number:40},
	{name:"Niobium",n:"Nb",number:41},
	{name:"Molybdenum",n:"Mo",number:42},
	{name:"Technetium",n:"Tc",number:43},
	{name:"Ruthenium",n:"Ru",number:44},
	{name:"Rhodium",n:"Rh",number:45},
	{name:"Palladium",n:"Pd",number:46},
	{name:"Silver",n:"Ag",number:47},
	{name:"Cadmium",n:"Cd",number:48},
	{name:"Indium",n:"In",number:49},
	{name:"Tin",n:"Sn",number:50},
	{name:"Antimony",n:"Sb",number:51},
	{name:"Tellurium",n:"Te",number:52},
	{name:"Iodine",n:"I",number:53},
	{name:"Xenon",n:"Xe",number:54},
	{name:"Caesium",n:"Cs",number:55},
	{name:"Barium",n:"Ba",number:56},
	{name:"Lanthanum",n:"La",number:57},
	{name:"Cerium",n:"Ce",number:58},
	{name:"Praseodymium",n:"Pr",number:59},
	{name:"Neodymium",n:"Nd",number:60},
	{name:"Promethium",n:"Pm",number:61},
	{name:"Samarium",n:"Sm",number:62},
	{name:"Europium",n:"Eu",number:63},
	{name:"Gadolinium",n:"Gd",number:64},
	{name:"Terbium",n:"Tb",number:65},
	{name:"Dysprosium",n:"Dy",number:66},
	{name:"Holmium",n:"Ho",number:67},
	{name:"Erbium",n:"Er",number:68},
	{name:"Thulium",n:"Tm",number:69},
	{name:"Ytterbium",n:"Yb",number:70},
	{name:"Lutetium",n:"Lu",number:71},
	{name:"Hafnium",n:"Hf",number:72},
	{name:"Tantalum",n:"Ta",number:73},
	{name:"Tungsten",n:"W",number:74},
	{name:"Rhenium",n:"Re",number:75},
	{name:"Osmium",n:"Os",number:76},
	{name:"Iridium",n:"Ir",number:77},
	{name:"Platinum",n:"Pt",number:78},
	{name:"Gold",n:"Au",number:79},
	{name:"Mercury",n:"Hg",number:80},
	{name:"Thallium",n:"Tl",number:81},
	{name:"Lead",n:"Pb",number:82},
	{name:"Bismuth",n:"Bi",number:83},
	{name:"Polonium",n:"Po",number:84},
	{name:"Astatine",n:"At",number:85},
	{name:"Radon",n:"Rn",number:86},
	{name:"Francium",n:"Fr",number:87},
	{name:"Radium",n:"Ra",number:88},
	{name:"Actinium",n:"Ac",number:89},
	{name:"Thorium",n:"Th",number:90},
	{name:"Protactinium",n:"Pa",number:91},
	{name:"Uranium",n:"U",number:92},
	{name:"Neptunium",n:"Np",number:93},
	{name:"Plutonium",n:"Pu",number:94},
	{name:"Americium",n:"Am",number:95},
	{name:"Curium",n:"Cm",number:96},
	{name:"Berkelium",n:"Bk",number:97},
	{name:"Californium",n:"Cf",number:98},
	{name:"Einsteinium",n:"Es",number:99},
	{name:"Fermium",n:"Fm",number:100},
	{name:"Mendelevium",n:"Md",number:101},
	{name:"Nobelium",n:"No",number:102},
	{name:"Lawrencium",n:"Lr",number:103},
	{name:"Rutherfordium",n:"Rf",number:104},
	{name:"Dubnium",n:"Db",number:105},
	{name:"Seaborgium",n:"Sg",number:106},
	{name:"Bohrium",n:"Bh",number:107},
	{name:"Hassium",n:"Hs",number:108},
	{name:"Meitnerium",n:"Mt",number:109},
	{name:"Dermstadtium",n:"Ds",number:110},
	{name:"Roentgenium",n:"Rg",number:111},
	{name:"Copernicium",n:"Cn",number:112},
	{name:"Nihonium",n:"Nh",number:113},
	{name:"Flerovium",n:"Fl",number:114},
	{name:"Moscovium",n:"Mc",number:115},
	{name:"Livermorium",n:"Lv",number:116},
	{name:"Tennessine",n:"Ts",number:117},
	{name:"Oganesson",n:"Og",number:118},
];
var inputBox = document.getElementById('input-box');
var toolOutput = document.getElementById('tool-output');
var findBTN = document.getElementById('find-btn');
var periodicTable = document.getElementById('periodic-table').children[0];
var runWithAllOptions = false;
var f49Dhtml = "";
var f49Dhtml2 = "";
//----------Functions
window.addEventListener('resize', determineOutputLayouts());
//Load
determineOutputLayouts()
//----------
function findWord(input) {
	if (!(input)) {findBTN.innerHTML = "Finding word..."};
	var results = [];
	if (input) {words = splitWord(input)}
	else {words = splitWord(inputBox.value.toLowerCase())};
	for (var i=0; i < words.length; i++) {
		if (isLetter(words[i].substring(0,1)) == true) {
			var f = attemptSpelling(words[i]);
			results.push(f);
		}
		else {
			results.push([words[i]]);
		}
	}
	var output = [];
	var s = Date.now();
	var outputLimit = 20;
	if (runWithAllOptions == true) {outputLimit = 1000000000000}
	else if (input) {outputLimit = 50};
	function eachStep(string_so_far, array_index) {
		if (output.length < outputLimit && array_index < results.length) {
			for (var i = 0; i < results[array_index].length; i++) {
				if (output.length > outputLimit) {break};
				var string_for_this_step = string_so_far + results[array_index][i];
				var string_returned = eachStep(string_for_this_step, array_index+1, results);
				if (output.length < outputLimit && string_returned !== "") {
					output.push(string_returned.replace(/ /g, "-=∞=-{0}-=∞=-"));
				}
			}
			return "";
		}
		else {
			return string_so_far;
		}
	}
	eachStep("", 0);
	var combinations = 1;
	if (!(input)) {for (var i=0; i < results.length; i++) {combinations = combinations * results[i].length}};
	var decodedOutput = [];
	for (var i=0; i < output.length; i++) {
		var t = output[i].split("");
		var last = "";
		var num = "";
		var els = [];
		var str = "";
		var first = true;
		for (var n=0; n < t.length; n++) {
			if (last.endsWith("-=∞=-{")) {
				if (t[n] == "}") {
					str = str.substr(0, str.length-6);
					if (num == -1) {
						str += "[?]";
						els.push({name:"[?]",n:"[?]",number:-1});
					}
					else if (num == 0) {
						str += " ";
						els.push({name:" ",n:" ",number:0});
					}
					else {
						str += elements[parseInt(num)-1].n;
						els.push(elements[parseInt(num)-1]);
					}
					num = "";
					first = false;
					last = t[n];
				}
				else {
					num += t[n];
				}
			}
			else {
				if (last.startsWith("}-=∞=-") || first == true) {
					str += t[n];
				}
				last += t[n];
			}
		}
		decodedOutput.push({text:str,elements:els});
	}
	decodedOutput.sort((a, b) => (a.elements.length > b.elements.length) ? 1 : -1);
	if (input) {
		var error = false;
		var list = "<span><b class=\"word\">" + input.toProperCase() + "</b><p>, spelled as </p>";
		var spellings = "";
		var eles = "";
		for (var i=0; i < decodedOutput.length; i++) {
			if (decodedOutput[i].text.length == input.length && decodedOutput[i].text.indexOf("[?]") == -1) {
				if (i == 0) {
					spellings += "<b>\"" + decodedOutput[i].text + "\"</b>";
					eles += "<i>\"" + elList(decodedOutput[i].elements) + "\"</i>";
				}
				else if (i == (decodedOutput.length-1) && decodedOutput.length == 2) {
					spellings += "<p> or </p><b>\"" + decodedOutput[i].text + "\"</b>";
					eles += "<p> or </p><i>\"" + elList(decodedOutput[i].elements) + "\"</i>";
				}
				else if (i == (decodedOutput.length-1)) {
					spellings += "<p>, or </p><b>\"" + decodedOutput[i].text + "\"</b>";
					eles += "<p>, or </p><i>\"" + elList(decodedOutput[i].elements) + "\"</i>";
				}
				else {
					spellings += "<p>, </p><b>\"" + decodedOutput[i].text + "\"</b>";
					eles += "<p>, </p><i>\"" + elList(decodedOutput[i].elements) + "\"</i>";
				}
			}
			else {
				error = true;
				break;
			}
		}
		if (error == false) {
			return {html:list + spellings + "<p> from the elements </p>" + eles + "</span>",html2:list + spellings + "</span>"};
		}
	}
	else {
		while (toolOutput.lastChild) {toolOutput.lastChild.remove()};
		var error = false;
		for (var i=0; i < decodedOutput.length; i++) {
			if (decodedOutput[i].text.length < inputBox.value.length || decodedOutput[i].text.indexOf("[?]") > -1) {
				addResult(decodedOutput[i], true);
				error = true;
			}
			else {
				addResult(decodedOutput[i]);
			}
		}
		determineOutputLayouts();
		selectElements();
		var lag = Date.now() - s;
		if (output.length < combinations) {
			var rerunText = document.createElement('span');
			var t = ((lag/(outputLimit/combinations))/1000);
			if ((t*(t/2)) >= 10) {
				rerunText.innerHTML = "<b>...</b><p>Showing " + outputLimit + " of " + combinations + " possible spellings</p><i>To show all spellings, re-run the tool using the button below. (WARNING: Loading all " + combinations + " spellings will likely cause your device to freeze and/or crash, est. re-run " + t.round(1).toString() + " seconds)</i>";
			}
			else {
				rerunText.innerHTML = "<b>...</b><p>Showing " + outputLimit + " of " + combinations + " possible spellings</p><i>To show all spellings, re-run the tool using the button below. (WARNING: Loading all " + combinations + " spellings may cause your device to freeze and/or crash, est. re-run " + t.round(1).toString() + " seconds)</i>";
			}
			rerunText.id = "rerun-text";
			var rerun = document.createElement('button');
			rerun.innerHTML = "Re-run";
			rerun.id = "rerun";
			rerun.addEventListener('click', function() {runWithAllOptions = true; findWord()});
			toolOutput.appendChild(rerunText);
			toolOutput.appendChild(rerun);
		}
		if (error == false) {
			findBTN.innerHTML = "Word found!"
			findBTN.style.background = null;
			findBTN.style.border = null;
		}
		else {
			findBTN.innerHTML = "Word not found!"
			findBTN.style.background = "#DF0600";
			findBTN.style.border = "2px solid #FF4F41";
		}
	}
	runWithAllOptions = false;
}

function elList(els) {
	var e = "";
	for (var i=0; i < els.length; i++) {
		if (i > 0 && i < (els.length-1)) {
			e += ", " + els[i].name;
		}
		else if (i > 0) {
			if (els.length == 2) {
				e += " and " + els[i].name;
			}
			else {
				e += ", and " + els[i].name;
			}
		}
		else {
			e += els[i].name;
		}
	}
	return e;
}

function splitWord(word) {
	var t = word.split("");
	var words = [];
	var w = "";
	var lastNotLetter = false;
	for (i=0; i < word.length; i++) {
		if (isLetter(t[i]) == false) {
			if (lastNotLetter == true) {
				words[words.length-1] = words[words.length-1] + t[i];
			}
			else {
				words.push(w);
				words.push(t[i]);
			}
			w = "";
			lastNotLetter = true;
		}
		else {
			w += t[i];
			lastNotLetter = false;
		}
	}
	if (w.length > 0) {words.push(w)};
	return words;
}

function attemptSpelling(word) {
	var t = word.split("");
	// word = "";
	// var nonLetters = [];
	// for (var i=0; i < t.length; i++) {
	// 	if (isLetter(t[i]) == false) {
	// 		nonLetters.push({char:t[i],pos:i});
	// 	}
	// 	else {
	// 		word += t[i];
	// 	}
	// }
	var findings = [];
	var findingsElements = [];
	for (var i=0; i < word.length; i++) {
		for (var p=0; p < elements.length; p++) {
			var e = elements[p];
			var findingsChanged = 0;
			for (var f=0; f < findings.length; f++) {
				if (word.startsWith(findings[f].toLowerCase() + e.n.toLowerCase()) && !(findings.indexOf(findings[f] + e.n) > -1)) {
					findings[f] = findings[f] + e.n;
					findingsElements[f] = findingsElements[f] + "}-=∞=--=∞=-{" + e.number.toString();
					findingsChanged += 1;
				}
			}
			if (findingsChanged == 0) {
				if (word.startsWith(e.n.toLowerCase()) && !(findings.indexOf(e.n) > -1)) {
					findings.push(e.n);
					findingsElements.push("-=∞=-{" + e.number.toString());
				}
			}
		}
	}
	var validFindings = [];
	var validFindingsElements = [];
	var longest = 0;
	for (var i=0; i < findings.length; i++) {
		if (findings[i].length > longest) {longest = findings[i].length};
	}
	for (var i=0; i < findings.length; i++) {
		findingsElements[i] = findingsElements[i] + "}-=∞=-";
		if (findings[i].length == longest && word.toLowerCase().startsWith(findings[i].toLowerCase()) && !(validFindings.indexOf(findings[i]) > -1)) {
			validFindings.push(findings[i]);
			validFindingsElements.push(findingsElements[i]);
		}
	}
	if (validFindings.length == 0) {
		validFindings = ["[?]"];
		validFindingsElements = ["-=∞=-{-1}-=∞=-"];
	}
	else {
		for (var i=0; i < validFindings.length; i++) {
			if (validFindings[i].length < word.length) {
				validFindings[i] = validFindings[i] + "[?]";
				validFindingsElements[i] = validFindingsElements[i] + "-=∞=-{-1}-=∞=-";
			}
		}
	}
	return validFindingsElements;
	// var validFindingsWithExtras = [];
	// for (var i=0; i < findings.length; i++) {
	// 	if (findings[i].toLowerCase() == word.toLowerCase() && !(validFindings.indexOf(findings[i]) > -1)) {
	// 		validFindings.push(findings[i]);
	// 		validFindingsWithExtras.push(findings[i]);
	// 		for (var n=0; n < nonLetters.length; n++) {
	// 			var v = validFindingsWithExtras[validFindingsWithExtras.length-1];
	// 			validFindingsWithExtras[validFindingsWithExtras.length-1] = v.substring(0, nonLetters[n].pos) + nonLetters[n].char + v.substring(nonLetters[n].pos);
	// 		}
	// 	}
	// }
	// return {results:validFindingsWithExtras,originalResults:validFindings};
}

function isLetter(l) {
	var l = l.toLowerCase();
	if (l=='a'||l=='b'||l=='c'||l=='d'||l=='e'||l=='f'||l=='g'||l=='h'||l=='i'||l=='j'||l=='k'||l=='l'||l=='m'||l=='n'||l=='o'||l=='p'||l=='q'||l=='r'||l=='s'||l=='t'||l=='u'||l=='v'||l=='w'||l=='x'||l=='y'||l=='z') {return true}
	else {return false};
}

function addResult(result, error) {
	var div = document.createElement('div');
	var b = document.createElement('b');
	b.innerHTML = result.text;
	div.appendChild(b);
	var span = document.createElement('span');
	span.id = "r";
	var ie = document.createElement('i');
	ie.innerHTML = "";
	for (var i=0; i < result.elements.length; i++) {
		var img = document.createElement('img');
		if (result.elements[i].number == -1) {
			img.src = "./periodic-table/-1Nothing.png";
			if (i > 0 && i < (result.elements.length-1)) {
				ie.innerHTML += ", [no valid element]";
			}
			else if (i > 0) {
				if (result.elements.length == 2) {
					ie.innerHTML += " and [no valid element]";
				}
				else {
					ie.innerHTML += ", and [no valid element]";
				}
			}
			else {
				ie.innerHTML += "[no valid element]";
			}
		}
		else if (result.elements[i].number == 0) {
			img.src = "./periodic-table/0Space.png";
		}
		else {
			img.src = "./periodic-table/" + result.elements[i].number.toString() + result.elements[i].n + ".png";
			if (i > 0 && i < (result.elements.length-1)) {
				ie.innerHTML += ", " + result.elements[i].name;
			}
			else if (i > 0) {
				if (result.elements.length == 2) {
					ie.innerHTML += " and " + result.elements[i].name;
				}
				else {
					ie.innerHTML += ", and " + result.elements[i].name;
				}
			}
			else {
				ie.innerHTML += result.elements[i].name;
			}
			span.id += "-" + result.elements[i].n;
		}
		span.appendChild(img);
	}
	if (error == true) {div.style.background = "#411"};
	span.addEventListener('click', function(event) {clickElements(event)});
	div.appendChild(span);
	div.appendChild(ie);
	toolOutput.appendChild(div);
}

function resetFindBTN() {
	findBTN.innerHTML = "Find Word!"
	findBTN.style.background = null;
	findBTN.style.border = null;
	selectElements();
}

function checkEnter(e) {
	if (e.key == "Enter") {
		setTimeout(function() {findWord()}, 1);
	}
}

function determineOutputLayouts() {
	var w = toolOutput.getBoundingClientRect().width-36;
	var longest = 0;
	for (var i=0; i < toolOutput.children.length; i++) {
		if (!(toolOutput.children[i].id == "rerun") && !(toolOutput.children[i].id == "rerun-text")) {
			var l = toolOutput.children[i].children[1].children.length;
			if (l > longest) {longest = l};
		}
	}
	var width = ((w-((longest-1)*3))/longest).limit(28, 86);
	toolOutput.style.setProperty("--scaling", width.toString() + "px");
	if (width == 28) {toolOutput.style.setProperty("--justify", "flex-start")}
	else {toolOutput.style.setProperty("--justify", "center")};
}

function clickElements(e) {
	var element = e.target || e.srcElement;
	selectElements(element.id.substring(2, element.id.length).split("-"));
}

function selectElements(els) {
	for (var i=0; i < periodicTable.children.length; i++) {
		for (var n=0; n < periodicTable.children[i].children.length; n++) {
			if (els == null || els.indexOf(periodicTable.children[i].children[n].id.toProperCase()) > -1) {
				periodicTable.children[i].children[n].style.opacity = null;
			}
			else if (els) {
				periodicTable.children[i].children[n].style.opacity = "0.3";
			}
		}
	}
}

function getDictWords() {
	var html = "";
	var html2 = "";
	var added = 0;
	var s = Date.now()
	var t = 0;
	for (var i=0; i < englishDictionary.length; i++) {
		if (isLetter(englishDictionary[i].substr(0,1))) {
			var r = findWord(englishDictionary[i]);
			if (!(r == undefined)) {
				if (added == 0) {
					html += r.html;
					html2 += r.html2;
					added++;
				}
				else {
					html += "\n" + r.html;
					html2 += "\n" + r.html2;
					added++;
				}
			}
		}
		//if (added > 100) {f49Dhtml = html;f49Dhtml2 = html2;console.log(added);break};
		if (((i/1000) % 1) == 0) {t = ((Date.now()-s)/1000);s = Date.now();console.log(((i/466679)*100).round(1).toString() + "%|" + ((t*(466679-i))/1000/60).round(1).toString() + "min left")};
	}
	f49Dhtml = html;f49Dhtml2 = html2
}