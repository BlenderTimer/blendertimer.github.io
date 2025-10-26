//----------Variables
var playerDataShort = document.getElementById('player-data-short');
var playerDataLong = document.getElementById('player-data-long');
var inputBoxTitle = document.getElementById('input-box-title');
var inputBox = document.getElementById('input-box');
var inputBox2 = document.getElementById('input-box2');
var outputBox = document.getElementById('output-box');
var modeSwitch = document.getElementById('mode-switch');
var convertBTN = document.getElementById('convert-btn');
var inputMenu = document.getElementById('input-menu');
var outputMenu = document.getElementById('output-menu');
var mode = "to";
var morseCode = {"A":"• —","B":"— • • •","C":"— • — •","D":"— • •","E":"•","F":"• • — •","G":"— — •","H":"• • • •","I":"• •","J":"• — — —","K":"— • —","L":"• — • •","M":"— —","N":"— •","O":"— — —","P":"• — — •","Q":"— — • —","R":"• — •","S":"• • •","T":"—","U":"• • —","V":"• • • —","W":"• — —","X":"— • • —","Y":"— • — —","Z":"— — • •","Á":"• — — • —","Ä":"• — • —","É":"• • — • •","Ñ":"— — • — —","Ö":"— — — •","Ü":"• • — —","0":"— — — — —","1":"• — — — —","2":"• • — — —","3":"• • • — —","4":"• • • • —","5":"• • • • •","6":"— • • • •","7":"— — • • •","8":"— — — • •","9":"— — — — •",",":"— — • • — —",".":"• — • — • —","?":"• • — — • •","\"":"• — • • — •",":":"— — — • • •","'":"• — — — — •","-":"— • • • • —","/":"— • • — •","(":"— • — — •",")":"— • — — • —"," ":"       "};
var morseCodeList = Object.getOwnPropertyNames(morseCode);
var morseCodePlaying = false;
var morseCodePlayer = "";
var morseCodePlayerPosition = 0;
var lastShort = -1;
var lastLong = -1;
var pause3 = 0;
var easyTypeEnabled = true;
//----------Functions
//Load
if (modeSwitch.children[0].classList.length > 0) {
	setMode("to");
}
else {
	setMode("from");
}
setTimeout(function() {inputMenu.children[0].children[0].src = "../static-0/files/images/icons/play.svg"}, 10);
setInterval(function() {
	if (morseCodePlaying == true) {
		if (morseCodePlayerPosition < document.getElementById(morseCodePlayer).value.length) {
			document.getElementById(morseCodePlayer).focus();
			document.getElementById(morseCodePlayer).setSelectionRange(morseCodePlayerPosition, morseCodePlayerPosition+1);
			var c = document.getElementById(morseCodePlayer).value.substr(morseCodePlayerPosition, 1);
			if (c == "•") {
				if ((lastShort+1) > 4) {lastShort = -1};
				playerDataShort.children[lastShort+1].play();
				lastShort++;
				pause3 = 3;
			}
			else if (c == "—") {
				if (pause3 == 0) {
					if ((lastLong+1) > 4) {lastLong = -1};
					playerDataLong.children[lastLong+1].play();
					lastLong++;
				}
				pause3 += 1;
			}
			else {
				pause3 = 3;
			}
			if (pause3 == 3) {morseCodePlayerPosition += 1;pause3 = 0};
		}
		else {
			if (!(morseCodePlayer == "")) {
				document.getElementById(morseCodePlayer).focus();
				document.getElementById(morseCodePlayer).setSelectionRange(0, 0);
				document.getElementById(morseCodePlayer.removeAfter("-")+"menu").children[0].children[0].src = "../static-0/files/images/icons/play.svg";
			}
			morseCodePlayer = "";
			morseCodePlaying = false;
			morseCodePlayerPosition = 0;
		}
	}
}, 60);
//----------
function setMode(e) {
	if (e == "to") {
		mode = "to";
		inputBoxTitle.innerHTML = "English text:";
		outputBox.style.fontWeight = "bold";
		outputBox.style.fontFamily = "math";
		modeSwitch.children[0].className = "mode-switch-selected";
		modeSwitch.children[1].classList.remove("mode-switch-selected");
		inputMenu.children[0].style.transform = "scaleX(0)";
		inputMenu.children[0].style.opacity = 0;
		outputMenu.children[0].style.transform = null;
		outputMenu.children[0].style.opacity = 1;
		inputBox2.style.display = "none";
		inputBox.style.fontWeight = null;
		inputBox.style.fontFamily = null;
		inputBox.placeholder = "Enter text here!";
		history.replaceState({}, 'Morse Code Translator - BlenderTimer Web Tools', window.location.href.removeAfter("?", -1));
	}
	else if (e == "from") {
		mode = "from";
		inputBoxTitle.innerHTML = "Morse Code:";
		outputBox.style.fontWeight = null;
		outputBox.style.fontFamily = null;
		modeSwitch.children[0].classList.remove("mode-switch-selected");
		modeSwitch.children[1].className = "mode-switch-selected";
		inputMenu.children[0].style.transform = null;
		inputMenu.children[0].style.opacity = 1;
		outputMenu.children[0].style.transform = "scaleX(0)";
		outputMenu.children[0].style.opacity = 0;
		if (easyTypeEnabled == true) {
			inputBox2.style.display = null;
			inputBox.style.fontWeight = null;
			inputBox.style.fontFamily = null;
			inputBox.placeholder = "Enter text here!";
			easyType();
		}
		else {
			inputBox2.style.display = "none";
			inputBox.style.fontWeight = "bold";
			inputBox.style.fontFamily = "math";
			inputBox.placeholder = "";
		}
		history.replaceState({}, 'Morse Code Translator - BlenderTimer Web Tools', window.location.href.removeAfter("?", -1)+"?to-english")
	}
	else {
		if ((e.srcElement || e.target).textContent == "To English") {setMode("from")}
		else {setMode("to")};
	}
	morseCodePlayer = "";
	morseCodePlaying = false;
	morseCodePlayerPosition = 0;
}

function getEnglish(char) {
	for (var i=0; i < morseCodeList.length; i++) {
		if (morseCode[morseCodeList[i]] == char) {
			return morseCodeList[i];
		}
	}
	return "{ERROR}";
}

function convert() {
	convertBTN.innerHTML = "Translating...";
	if (mode == "from") {
		var text = inputBox.value.replace(/       /g,"$~.~$").replace(/   /g,"$~_~$");
		if (easyTypeEnabled == true) {
			text = inputBox2.value.replace(/       /g,"$~.~$").replace(/   /g,"$~_~$");
		}
		var t = text.split("");
		var translated = "";
		var currentChar = "";
		for (var i=0; i < t.length; i++) {
			var c = t[i];
			currentChar += c;
			if (currentChar.endsWith("$~.~$")) {
				translated += getEnglish(currentChar.replace(/\$~\.~\$/g,"").replace(/\$~\_~\$/g,"").trim()) + " ";
				currentChar = "";
			}
			else if (currentChar.endsWith("$~_~$")) {
				translated += getEnglish(currentChar.replace(/\$~\_~\$/g,"").replace(/\$~\.~\$/g,"").trim());
				currentChar = "";
			}
			else if (i == (t.length-1)) {
				translated += getEnglish(currentChar.replace(/\$~\_~\$/g,"").replace(/\$~\.~\$/g,"").trim());
			}
		}
		if (translated.length == 0) {translated = getEnglish(currentChar.trim())};
		outputBox.value = translated;
	}
	else {
		var t = inputBox.value.split("");
		var translated = "";
		for (var i=0; i < t.length; i++) {
			var c = "";
			var cid = morseCodeList.indexOf(t[i].toUpperCase());
			if (i > 0 && !(t[i-1] == " ") && !(t[i] == " ") && !(t[i-1] == "\n")) {
				translated += "   ";
			}
			if (cid > -1) {
				c = morseCode[morseCodeList[cid]];
			}
			translated += c;
		}
		outputBox.value = translated.replace(/          /g, "       ");
	}
	convertBTN.innerHTML = "Translate!";
}

function copyText(el) {
	navigator.clipboard.writeText(document.getElementById(el).value);
}

function morsePlayer(el, setting) {
	var player = document.getElementById(el);
	if (setting == 1) {
		if (morseCodePlaying == false) {
			morseCodePlayer = el;
			setTimeout(function() {
				morseCodePlaying = true;
				document.getElementById(morseCodePlayer.removeAfter("-")+"menu").children[0].children[0].src = "../static-0/files/images/icons/pause.svg"
			}, 50);
		}
		else {
			morseCodePlaying = false;
			morseCodePlayer = el;
			document.getElementById(morseCodePlayer.removeAfter("-")+"menu").children[0].children[0].src = "../static-0/files/images/icons/play.svg";
		};
	}
	else {
		if (!(morseCodePlayer == "")) {
			document.getElementById(morseCodePlayer).focus();
			document.getElementById(morseCodePlayer).setSelectionRange(0, 0);
			document.getElementById(morseCodePlayer.removeAfter("-")+"menu").children[0].children[0].src = "../static-0/files/images/icons/play.svg";
		}
		morseCodePlayer = "";
		morseCodePlaying = false;
		morseCodePlayerPosition = 0;
	}
}

function toggleEasyType(e) {
	var el = e.target || e.srcElement;
	if (easyTypeEnabled == true) {
		easyTypeEnabled = false;
		el.src = "../static-0/files/images/icons/easytype-disabled.svg";
		inputBox2.style.display = "none";
		inputBox.style.fontWeight = "bold";
		inputBox.style.fontFamily = "math";
		inputBox.placeholder = "";
	}
	else {
		easyTypeEnabled = true;
		el.src = "../static-0/files/images/icons/easytype-enabled.svg";
		inputBox2.style.display = null;
		inputBox.style.fontWeight = null;
		inputBox.style.fontFamily = null;
		inputBox.placeholder = "Enter text here!";
	}
	easyType();
}

function easyType() {
	if (easyTypeEnabled == true && mode == "from") {
		setTimeout(function() {
			var sel = {start:inputBox.selectionStart,end:inputBox.selectionEnd};
			var t = inputBox.value.split("");
			var nt = "";
			for (var i=0; i < t.length; i++) {
				var c = t[i];
				var nextC = "";
				if (i < (t.length-1)) {nextC = t[i+1]} else {nextC = ""};
				var nextnextC = "";
				if (i < (t.length-2)) {nextnextC = t[i+2]} else {nextnextC = ""};
				if (c == ".") {
					if (nextC == " " && nextnextC == " ") {
						nt += "•       ";
						sel.start += 7;
						sel.end += 7;
						i+=2;
					}
					else if (nextC == " ") {
						nt += "•   ";
						sel.start += 3;
						sel.end += 3;
						i++;
					}
					else if (nextC == "") {
						nt += "•";
					}
					else {
						nt += "• ";
						sel.start += 1;
						sel.end += 1;
					}
				}
				else if (c == "-" || c == "_") {
					if (nextC == " " && nextnextC == " ") {
						nt += "—       ";
						sel.start += 7;
						sel.end += 7;
						i+=2;
					}
					else if (nextC == " ") {
						nt += "—   ";
						sel.start += 3;
						sel.end += 3;
						i++;
					}
					else if (nextC == "") {
						nt += "—";
					}
					else {
						nt += "— ";
						sel.start += 1;
						sel.end += 1;
					}
				}
				else if (c == "—" || c == "•") {
					nt += c;
					var b = i+1;
					var safe = 0;
					while (t[b] == " " && safe < 1000) {nt+=t[b];b++;safe++};
					i = b-1;
				}
				else if (c == " ") {
					nt += " ";
				}
				else {sel.start -= 1;sel.end -= 1};
			}
			if (nt.endsWith(" ") &&  !(nt.endsWith("       "))) {
				nt.substr(0, nt.length-1);
				sel.start -= 1;
				sel.end -= 1;
			}
			inputBox2.value = nt;
		}, 1);
	}
}

function autoTranslate() {
	setTimeout(function() {convert()}, 1);
}