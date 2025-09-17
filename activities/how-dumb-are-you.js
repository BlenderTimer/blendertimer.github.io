//----------Variables
var dumb = 0; // less = better, 0-10
var trick = 0; // less = better, 0-10

var math = 0; // less = better, 0-10
var geog = 0; // less = better, 0-10
var scie = 0; // less = better, 0-10
var chem = 0; // less = better, 0-10
var lang = 0; // less = better, 0-10
var hist = 0; // less = better, 0-10
var geom = 0; // less = better, 0-10
//----------Functions
//Load

//----------
function getResult() {
	var error = false;
	const q = document.getElementsByClassName("question");
	dumb = 0;
	trick = 0;
	math = 0;
	geog = 0;
	scie = 0;
	chem = 0;
	lang = 0;
	hist = 0;
	geom = 0;
	// What is the next prime number after 97?
	var answer = getQuestionAnswer(q[0].id);
	if (answer == 101) {math = adjust(math, -3); dumb = adjust(dumb, -1)}
	else if (answer == 98 || answer == 103 || answer == 99 || answer == 102 || answer == 107 || answer == 100) {math = adjust(math, 3); dumb = adjust(dumb, 1)}
	else {error = true};

	// What country has the largest area (including water)?
	answer = getQuestionAnswer(q[1].id, "str");
	if (answer == "russia") {geog = adjust(geog, -3); dumb = adjust(dumb, -2)}
	else if (answer == "canada" || answer == "china" || answer == "india" || answer == "brazil") {geog = adjust(geog, 6); dumb = adjust(dumb, 4)}
	else {error = true};

	// What is 20% of 500?
	answer = getQuestionAnswer(q[2].id);
	if (answer == 100) {math = adjust(math, -2); dumb = adjust(dumb, -1)}
	else if (answer == 20 || answer == 25 || answer == 50 || answer == 75 || answer == 90 || answer == 250) {math = adjust(math, 8); dumb = adjust(dumb, 5)}
	else {error = true};

	// The ocean accounts for 71% of the Earth's mass.
	answer = getQuestionAnswer(q[3].id, "str");
	if (answer == "false") {scie = adjust(scie, -3); trick = adjust(trick, -5); dumb = adjust(dumb, -3)}
	else if (answer == "true") {scie = adjust(scie, 3); trick = adjust(trick, 5); dumb = adjust(dumb, 3)}
	else {error = true};

	// What is the fraction form of 0.75?
	answer = getQuestionAnswer(q[4].id, "str");
	if (answer == "¾") {math = adjust(math, -2); dumb = adjust(dumb, -1)}
	else if (answer == "⅓" || answer == "½" || answer == "⅔" || answer == "⅘" || answer == "⅚" || answer == "⅞") {math = adjust(math, 5); dumb = adjust(dumb, 5)}
	else {error = true};

	// How many wheels does a bicycle have?
	answer = getQuestionAnswer(q[5].id);
	if (answer == 2) {dumb = adjust(dumb, -1)}
	else if (answer == 0 || answer == 1 || answer == 3 || answer == 4 || answer == 5 || answer == 6) {dumb = adjust(dumb, 9)}
	else {error = true};

	// Which is the only country that is also a continent?
	answer = getQuestionAnswer(q[6].id, "str");
	if (answer == "australia") {geog = adjust(geog, -5); dumb = adjust(dumb, -4)}
	else if (answer == "the-united-states") {geog = adjust(geog, 6); dumb = adjust(dumb, 4)}
	else if (answer == "africa") {geog = adjust(geog, 8); dumb = adjust(dumb, 6)}
	else {error = true};

	// What is the opposite of a synonym?
	answer = getQuestionAnswer(q[7].id, "str");
	if (answer == "antonym") {lang = adjust(lang, -5); dumb = adjust(dumb, -3)}
	else if (answer == "acronym") {lang = adjust(lang, 4); dumb = adjust(dumb, 2)}
	else if (answer == "pseudonym" || answer == "homonym") {lang = adjust(lang, 5); dumb = adjust(dumb, 3)}
	else {error = true};

	// Which is the deepest ocean?
	answer = getQuestionAnswer(q[8].id, "str");
	if (answer == "pacific") {scie = adjust(scie, -3); geog = adjust(geog, -4); dumb = adjust(dumb, -3)}
	else if (answer == "atlantic" || answer == "indian" || answer == "southern" || answer == "arctic") {scie = adjust(scie, 4); geog = adjust(geog, 5); dumb = adjust(dumb, 4)}
	else {error = true};

	// What chemical element has the symbol "W"?
	answer = getQuestionAnswer(q[9].id, "str");
	if (answer == "tungsten") {scie = adjust(scie, -3); chem = adjust(chem, -3); dumb = adjust(dumb, -3)}
	else if (answer == "copper" || answer == "aluminum" || answer == "silver") {scie = adjust(scie, 4); chem = adjust(chem, 4); dumb = adjust(dumb, 4)}
	else if (answer == "titanium") {scie = adjust(scie, 3); chem = adjust(chem, 3); dumb = adjust(dumb, 3)}
	else {error = true};

	// Roughly what is the freezing point of water in Celsius?
	answer = getQuestionAnswer(q[10].id);
	if (answer == 0) {scie = adjust(scie, -1); chem = adjust(chem, -1); dumb = adjust(dumb, -1)}
	else if (answer == 1 || answer == 45 || answer == 98 || answer == 100) {scie = adjust(scie, 6); chem = adjust(chem, 8); dumb = adjust(dumb, 5)}
	else if (answer == -32 || answer == 32) {scie = adjust(scie, 7); chem = adjust(chem, 8); dumb = adjust(dumb, 6)}
	else {error = true};

	// A farmer has 20 sheep, and all but 5 run away. How many are left?
	answer = getQuestionAnswer(q[11].id);
	if (answer == 5) {math = adjust(math, -3); trick = adjust(trick, -5); dumb = adjust(dumb, -4)}
	else if (answer == 3 || answer == 0 || answer == 8 || answer == 20 || answer == 10) {math = adjust(math, 3); trick = adjust(trick, 6); dumb = adjust(dumb, 5)}
	else if (answer == 15) {math = adjust(math, 3); trick = adjust(trick, 8); dumb = adjust(dumb, 6)}
	else {error = true};

	// What's the term for a number that can only be divided by 1 and itself?
	answer = getQuestionAnswer(q[12].id, "str");
	if (answer == "prime") {math = adjust(math, -4); dumb = adjust(dumb, -3)}
	else if (answer == "even" || answer == "odd" || answer == "composite") {math = adjust(math, 4); dumb = adjust(dumb, 3)}
	else {error = true};

	// The pyramids of Giza are located in which country?
	answer = getQuestionAnswer(q[13].id, "str");
	if (answer == "egypt") {geog = adjust(geog, -3); dumb = adjust(dumb, -3)}
	else if (answer == "türkiye" || answer == "saudi-arabia" || answer == "iran") {geog = adjust(geog, 5); dumb = adjust(dumb, 5)}
	else {error = true};

	// Which of these planets is closest to the Sun?
	answer = getQuestionAnswer(q[14].id, "str");
	if (answer == "earth") {scie = adjust(scie, -3); dumb = adjust(dumb, -3)}
	else if (answer == "saturn" || answer == "mars") {scie = adjust(scie, 7); dumb = adjust(dumb, 5)}
	else if (answer == "neptune") {scie = adjust(scie, 9); trick = adjust(trick, 2); dumb = adjust(dumb, 9)}
	else {error = true};

	// What is 5 ÷ 0.2?
	answer = getQuestionAnswer(q[15].id);
	if (answer == 25) {math = adjust(math, -5); dumb = adjust(dumb, -4)}
	else if (answer == 20 || answer == 50 || answer == 120 || answer == 45 || answer == 35 || answer == 1) {math = adjust(math, 6); dumb = adjust(dumb, 4)}
	else {error = true};

	// Mount Everest is located in which mountain range?
	answer = getQuestionAnswer(q[16].id, "str");
	if (answer == "himalayas") {geog = adjust(geog, -4); dumb = adjust(dumb, -3)}
	else if (answer == "alps" || answer == "andes") {geog = adjust(geog, 6); dumb = adjust(dumb, 5)}
	else {error = true};

	// In what year did the Titanic sink?
	answer = getQuestionAnswer(q[17].id);
	if (answer == 1912) {hist = adjust(hist, -5); dumb = adjust(dumb, -4)}
	else if (answer == 1898 || answer == 1902 || answer == 1906 || answer == 1908) {hist = adjust(hist, 4); dumb = adjust(dumb, 1)}
	else {error = true};

	// What chemical element makes up diamonds?
	answer = getQuestionAnswer(q[18].id, "str");
	if (answer == "carbon") {scie = adjust(scie, -4); chem = adjust(chem, -4); dumb = adjust(dumb, -5)}
	else if (answer == "silicon" || answer == "hassium" || answer == "uranium" || answer == "cobalt") {scie = adjust(scie, 4); chem = adjust(chem, 4); dumb = adjust(dumb, 4)}
	else {error = true};

	// Which organ in the human body produces insulin?
	answer = getQuestionAnswer(q[19].id, "str");
	if (answer == "pancreas") {scie = adjust(scie, -5); dumb = adjust(dumb, -6)}
	else if (answer == "liver" || answer == "stomach" || answer == "spleen") {scie = adjust(scie, 4); dumb = adjust(dumb, 3)}
	else {error = true};

	// Dihydrogen dioxide is commonly known as water.
	answer = getQuestionAnswer(q[20].id, "str");
	if (answer == "false") {scie = adjust(scie, -4); trick = adjust(trick, -5); dumb = adjust(dumb, -5)}
	else if (answer == "true") {scie = adjust(scie, 4); trick = adjust(trick, 8); dumb = adjust(dumb, 6)}
	else {error = true};

	// In the sentence “the train stopped suddenly,” which word is the adverb?
	answer = getQuestionAnswer(q[21].id, "str");
	if (answer == "suddenly") {lang = adjust(lang, -4); dumb = adjust(dumb, -4)}
	else if (answer == "the" || answer == "train") {lang = adjust(lang, 7); dumb = adjust(dumb, 5)}
	else if (answer == "stopped") {lang = adjust(lang, 9); dumb = adjust(dumb, 7)}
	else {error = true};

	// A square is also a rectangle.
	answer = getQuestionAnswer(q[22].id, "str");
	if (answer == "true") {geom = adjust(geom, -2); trick = adjust(trick, -1); dumb = adjust(dumb, -3)}
	else if (answer == "false") {geom = adjust(geom, 5); trick = adjust(trick, 2); dumb = adjust(dumb, 6)}
	else {error = true};

	// Roughly how many times does the Earth orbit the Sun in 1 year?
	answer = getQuestionAnswer(q[23].id);
	if (answer == 1) {scie = adjust(scie, -2); dumb = adjust(dumb, -2)}
	else if (answer == 10 || answer == 2 || answer == 31 || answer == 52) {scie = adjust(scie, 6); dumb = adjust(dumb, 7)}
	else if (answer == 24 || answer == 365) {scie = adjust(scie, 7); dumb = adjust(dumb, 9)}
	else {error = true};

	// Humans have only 5 senses.
	answer = getQuestionAnswer(q[24].id, "str");
	if (answer == "false") {scie = adjust(scie, -4); trick = adjust(trick, -1); dumb = adjust(dumb, -3)}
	else if (answer == "true") {scie = adjust(scie, 5); trick = adjust(trick, 2); dumb = adjust(dumb, 5)}
	else {error = true};
	
	//----------
	dumb = mapRange(dumb, -1077, 4665, 0, 10);
	trick = mapRange(trick, -377, 1173, 0, 10);
	math = mapRange(math, -259, 971, 0, 10);
	geog = mapRange(geog, -307, 1194, 0, 10);
	scie = mapRange(scie, -434, 1887, 0, 10);
	chem = mapRange(chem, -92, 640, 0, 10);
	lang = mapRange(lang, -189, 854, 0, 10);
	hist = mapRange(hist, -125, 64, 0, 10);
	geom = mapRange(geom, -8, 125, 0, 10);
	// console.log("dumb = " + dumb)
	// console.log("trick = " + trick)
	// console.log("math = " + math)
	// console.log("geog = " + geog)
	// console.log("scie = " + scie)
	// console.log("chem = " + chem)
	// console.log("lang = " + lang)
	// console.log("hist = " + hist)
	// console.log("geom = " + geom)
	if (error == true) {
		result.style.background = "var(--theme1)";
		result.style.border = "3px solid var(--theme4)";
		result.style.boxShadow = "0px 0px 20px var(--theme1)";
		document.getElementById("finish").style.background = null;
		document.getElementById("finish").style.borderColor = null;
		result.style.transform = "scaleY(0)";
		setTimeout(function() {
			result.style.transform = null;
			result.children[1].innerHTML = "Really Dumb";
			result.children[2].innerHTML = "Apparently so dumb that you didn't even answer all the questions...";
		}, 200);
	}
	else {
		result.style.background = "var(--theme1)";
		result.style.border = "3px solid var(--theme4)";
		result.style.boxShadow = "0px 0px 20px var(--theme1)";
		document.getElementById("finish").style.background = null;
		document.getElementById("finish").style.borderColor = null;
		result.style.transform = "scaleY(0)";
		var d = "";
		var r = "";
		if (dumb > 9) {d = "possibly the dumbest person on Earth"}
		else if (dumb > 7.8) {d = "horrendously dumb"}
		else if (dumb > 7) {d = "unbelievably dumb"}
		else if (dumb > 5.5) {d = "extremely dumb"}
		else if (dumb > 4.8) {d = "really dumb"}
		else if (dumb > 4) {d = "kinda dumb"}
		else if (dumb > 2.5) {d = "about average"}
		else if (dumb > 1.6) {d = "slightly smarter than most people"}
		else if (dumb > 1) {d = "fairly smart"}
		else {d = "incredibly smart"};
		if (trick > 8) {r = "and extremely easy to trick."}
		else if (trick > 5) {r = "and quite easy to trick."}
		else if (trick > 3) {r = "and somewhat easy to trick."}
		else if (trick > 0) {r = "and difficult to trick."}
		else {r = "and nearly impossible to trick."}
		// var best = Math.min(scie, math, geog, lang, chem);
		// var firstbestdone = false;
		// if (best < 3 && dumb <= 4) {
		// 	if (best == scie) {
		// 		r = "You seem to excel in science";
		// 		best = Math.min(math, geog, lang, chem);
		// 		firstbestdone = true;
		// 	}
		// 	else if (best == math) {
		// 		r = "You seem to excel in math";
		// 		best = Math.min(scie, geog, lang, chem);
		// 		firstbestdone = true;
		// 	}
		// 	else if (best == geog) {
		// 		r = "You seem to excel in geography";
		// 		best = Math.min(scie, math, lang, chem);
		// 		firstbestdone = true;
		// 	}
		// 	else if (best == lang) {
		// 		r = "You seem to excel in language";
		// 		best = Math.min(scie, math, geog, chem);
		// 		firstbestdone = true;
		// 	}
		// 	else if (best == chem) {
		// 		r = "You seem to excel in chemistry";
		// 		best = Math.min(scie, math, geog, lang);
		// 		firstbestdone = true;
		// 	}
		// }
		// if (firstbestdone == true && best < 3 && dumb <= 4) {
		// 	if (best == scie) {
		// 		if (r.endsWith("science")) {
		// 			if (best == math) {r+=" and math"}
		// 			else if (best == geog) {r+=" and geography"}
		// 			else if (best == lang) {r+=" and language"}
		// 			else if (best == chem) {r+=" and chemistry"}
		// 		}
		// 		else {
		// 			r += " and science";
		// 		}
		// 	}
		// 	else if (best == math) {
		// 		if (r.endsWith("math")) {
		// 			if (best == scie) {r+=" and science"}
		// 			else if (best == geog) {r+=" and geography"}
		// 			else if (best == lang) {r+=" and language"}
		// 			else if (best == chem) {r+=" and chemistry"}
		// 		}
		// 		else {
		// 			r += " and math";
		// 		}
		// 	}
		// 	else if (best == geog) {
		// 		if (r.endsWith("geography")) {
		// 			if (best == math) {r+=" and math"}
		// 			else if (best == scie) {r+=" and science"}
		// 			else if (best == lang) {r+=" and language"}
		// 			else if (best == chem) {r+=" and chemistry"}
		// 		}
		// 		else {
		// 			r += " and geography";
		// 		}
		// 	}
		// 	else if (best == lang) {
		// 		if (r.endsWith("language")) {
		// 			if (best == math) {r+=" and math"}
		// 			else if (best == geog) {r+=" and geography"}
		// 			else if (best == scie) {r+=" and science"}
		// 			else if (best == chem) {r+=" and chemistry"}
		// 		}
		// 		else {
		// 			r += " and language";
		// 		}
		// 	}
		// 	else if (best == chem) {
		// 		if (r.endsWith("chemistry")) {
		// 			if (best == math) {r+=" and math"}
		// 			else if (best == geog) {r+=" and geography"}
		// 			else if (best == lang) {r+=" and language"}
		// 			else if (best == scie) {r+=" and science"}
		// 		}
		// 		else {
		// 			r += " and chemistry";
		// 		}
		// 	}
		// }
		setTimeout(function() {
			result.style.transform = null;
			result.children[1].innerHTML = d;
			result.children[2].innerHTML = r;
		}, 200);
	}
}
function adjust(num, adj) {
	return num += adj*adj*adj;
}

function setQuestionExplain(event) {
	var element = event.target || event.srcElement;
	var q = element.parentNode.innerHTML;
	var explain = document.getElementById("popup-text");
	if (q.indexOf("How many wheels does a bicycle have?") > -1) {
		explain.innerHTML = "This does not include a broken bicycle or a bicycle with training wheels...";
	}
	else if (q.indexOf("What's the term for a number that can only be divided by 1 and itself?") > -1) {
		explain.innerHTML = "This refers to whole numbers which can be divided into another whole number. This does not include decimals.";
	}
}

function mapRange(value, oldMin, oldMax, newMin, newMax) {
	return (value - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin;
}