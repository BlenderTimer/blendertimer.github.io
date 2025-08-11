//----------Variables
var estAge = 0;
var estAges = [];
//----------Functions
//Load

//----------
function getResult() {
	var error = false;
	const q = document.getElementsByClassName("question");
	const year = new Date().getFullYear();
	var yrfrcal = year-2025;
	estAge = 30; // Average age
	estAges = [];
	var minAge = 0;
	var maxAge = 100;
	// I've used a smartphone most of my life.
	var answer = getQuestionAnswer(q[0].id);
	if (answer == 1) {estAges.push(70)}
	else if (answer == 2) {estAges.push(60)}
	else if (answer == 3) {estAges.push(50)}
	else if (answer == 4) {estAges.push(32)}
	else if (answer == 5) {estAges.push(25)}
	else if (answer == 6) {estAges.push(18)}
	else if (answer == 7) {estAges.push(10)}
	else {error = true};
	// I often use a physical dictionary to look up a word.
	answer = getQuestionAnswer(q[1].id);
	if (answer == 1) {estAges.push(13)}
	else if (answer == 2) {estAges.push(18)}
	else if (answer == 3) {estAges.push(24)}
	else if (answer == 4) {estAges.push(30)}
	else if (answer == 5) {estAges.push(38)}
	else if (answer == 6) {estAges.push(50)}
	else if (answer == 7) {estAges.push(63)}
	else {error = true};
	// For special occasions, I prefer handwritten letters rather than email or text.
	answer = getQuestionAnswer(q[2].id);
	if (answer == 1) {estAges.push(13)}
	else if (answer == 2) {estAges.push(18)}
	else if (answer == 3) {estAges.push(25)}
	else if (answer == 4) {estAges.push(32)}
	else if (answer == 5) {estAges.push(40)}
	else if (answer == 6) {estAges.push(55)}
	else if (answer == 7) {estAges.push(70)}
	else {error = true};
	// I primarily used the internet for research in school.
	answer = getQuestionAnswer(q[3].id);
	if (answer == 1) {estAges.push(78)}
	else if (answer == 2) {estAges.push(67)}
	else if (answer == 3) {estAges.push(50)}
	else if (answer == 4) {estAges.push(40)}
	else if (answer == 5) {estAges.push(29)}
	else if (answer == 6) {estAges.push(22)}
	else if (answer == 7) {estAges.push(15)}
	else {error = true};
	// I grew up watching YouTube.
	answer = getQuestionAnswer(q[4].id);
	if (answer == 1) {estAges.push(67)}
	else if (answer == 2) {estAges.push(51)}
	else if (answer == 3) {estAges.push(40)}
	else if (answer == 4) {estAges.push(29)}
	else if (answer == 5) {estAges.push(22)}
	else if (answer == 6) {estAges.push(17)}
	else if (answer == 7) {estAges.push(12)}
	else {error = true};
	// I often use abbreviations (e.g. LOL, SMH, etc.) in real-world conversations.
	answer = getQuestionAnswer(q[5].id);
	if (answer == 1) {estAges.push(55)}
	else if (answer == 2) {estAges.push(38)}
	else if (answer == 3) {estAges.push(28)}
	else if (answer == 4) {estAges.push(20)}
	else if (answer == 5) {estAges.push(17)}
	else if (answer == 6) {estAges.push(14)}
	else if (answer == 7) {estAges.push(10)}
	else {error = true};

	estAge = (estAges.sumValues() / 6).round(0)+yrfrcal;

	// Have you ever regularly used a VHS player?
	var a0 = getQuestionAnswer(q[6].id, "str");
	if (a0 == "yes") {
		minAge = 16;
		if (estAge < 30) {
			estAge = (((estAge*2)+(30+yrfrcal))/3).round(0);
		}
	}
	else if (a0 == "no") {
		maxAge = 28;
		if (estAge > 30) {
			estAge = (((estAge*2)+(18+yrfrcal))/3).round(0);
			estAge = (estAge / 1.25).round(0);
		}
		else if (estAge > 40) {
			estAge = (estAge / 1.3).round(0);
		}
		else if (estAge > 20) {
			estAge = (estAge / 1.2).round(0);
		}
	}
	else {error = true};
	// Do you know what "sus" means?
	var a1 = getQuestionAnswer(q[7].id, "str");
	if (a1 == "yes") {
		maxAge = 35;
		estAge = (((estAge*2)+(18+yrfrcal))/3).round(0);
	}
	else if (a1 == "no") {
		minAge = 28;
		estAge = (((estAge*2)+(40+yrfrcal))/3).round(0);
	}
	else {error = true};
	// Have you ever owned a landline phone?
	var a2 = getQuestionAnswer(q[8].id, "str");
	if (a2 == "yes") {
		if (estAge < 35) {
			estAge = (estAge * 1.1).round(0);
		}
	}
	else if (a2 == "no") {
		if (estAge > 35) {
			estAge = (estAge / 1.25).round(0);
		}
		else if (estAge > 25) {
			estAge = (estAge / 1.1).round(0);
		}
	}
	else {error = true};
	// Were/are you homeschooled
	var a2 = getQuestionAnswer(q[9].id, "str");
	if (a2 == "yes") {
		if (estAge >= 20 && estAge <= 45) {
			estAge = (estAge / 1.2).round(0);
		}
	}
	else if (a2 == "no") {
		//
	}
	else {error = true};
	//----------
	// console.log(estAges);
	// console.log(minAge + " - " + maxAge)
	if (estAge < (minAge+yrfrcal)) {
		estAge = (minAge - Math.pow((minAge-estAge)/estAge, 3)).round(0);
	}
	else if (estAge > (maxAge+yrfrcal)) {
		estAge = (maxAge + Math.pow(1+((estAge-maxAge)/estAge), 6)).round(0);
	}
	if (estAge < 8) {
		estAge = 8;
	}
	else if (estAge > 110) {
		estAge = 110;
	}
	if (error == true) {
		result.style.background = "var(--base-back)";
		result.style.border = "3px solid var(--close-back)";
		result.style.boxShadow = "0px 0px 20px #0005";
		document.getElementById("finish").style.background = "#F44";
		document.getElementById("finish").style.borderColor = "#F88";
		document.getElementById("finish").textContent = "All Questions Must Be Answered"
		setTimeout(function() {
			if (document.getElementById("finish").textContent == "All Questions Must Be Answered") {
				document.getElementById("finish").textContent = "Estimate My Age!";
				document.getElementById("finish").style.background = null;
				document.getElementById("finish").style.borderColor = null;
			}
		}, 3000);
	}
	else {
		result.style.background = "var(--theme1)";
		result.style.border = "3px solid var(--theme4)";
		result.style.boxShadow = "0px 0px 20px var(--theme1)";
		document.getElementById("finish").style.background = null;
		document.getElementById("finish").style.borderColor = null;
		result.style.transform = "scaleY(0)";
		setTimeout(function() {
			result.style.transform = null;
			result.children[1].innerHTML = estAge.toString();
		}, 200);
	}
}