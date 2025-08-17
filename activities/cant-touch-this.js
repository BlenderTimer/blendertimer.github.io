//----------Objects
const ctt = document.getElementById("ctt-canvas");
const c = ctt.getContext("2d");
var button = {x:0, y:0, width:0, height:0, type:0, text:"CLICK ME!!!", aggro:0, basesize:0};
var cur = {x:0, y:0};
var buttonMoves = 0;
var sinceLastText = 0;
var lastAggro = 0;
var lastText = "CLICK ME!!!";
var coolTexts = ["Haha", "can't get me", "la la la", "you're terrible at this", "this is too easy", "should I make this harder?", "imagine struggling...", "I am the \"close ad\" button", "tehehehe", "c'mon, stop being so bad", "you got this!", "oops, missed again", "close, but no", "so sloooow", "I thought humans were smart", "404: skill not found", "are you even trying?", "not today", "pathetic", "this is fun...for me", "achievement unlocked: failure", "missed by *that* much", "nope nope nope", "keep dreaming", "oof, embarrassing", "are you sweating yet?", "spoiler: you lose", "look behind you!", "skill issue detected", "lol nope", "alt+F4 to win", "still downloading...your skill", "new high score: 0", "you almost had me!", "so close!", "is that all you got?", "oops, missed!", "I'm too fast for you", "so predictable", "try harder, human", "I see you struggling", "you'll never catch me", "slowpoke", "click denied", "is this frustrating yet?", "are you even trying?", "haha, missed!", "yawn...boring", "not even close", "nearly there...just kidding", "air-click champion", "good effort...not really", "predictable move", "ha! denied again", "I am the ultimate waste of time"];
var angryTexts = ["STOP IT!!", "you're annoying", "STOP MOVING ME!", "get outta here", "MUAHAHAHAHA", "I SAID NO!", "hands OFF me!", "GRRRRRRR", "this is harassment", "back off, pest!", "seriously, QUIT IT", "ENOUGH ALREADY!", "STOP OR ELSE!!", "I'M REPORTING YOU", "AAARGHHHH", "I WILL FIND YOUR IP", "that's it, I'm calling my lawyer", "I AM ERROR", "NO ESCAPE NOW", "DELETING DESKTOP...1%", "I AM UNSTOPPABLE!", "YOUR DEFEAT IS INEVITABLE", "CLICK AND REGRET IT", "BACK AWAY NOW!", "ENOUGH!", "LEAVE ME ALONE!", "NOT FUNNY ANYMORE", "KNOCK IT OFF!", "STOP IT RIGHT NOW"];
var lastCoolTexts = [];
var lastAngryTexts = [];
var firstMove = 0;
var fails = 0;
var cl = false;
var pt = 0n;
var failed = false;
var ch = "yes";
//----------Load
setCanvasSize()
button.basesize = Math.max(ctt.width / 5, 120);
button.width = button.basesize;
var w = 11;
var esc = 0;
c.font = "bold " + w + "pt sans-serif";
while (esc < 20 && c.measureText(button.text).width < (button.width * 0.8)) {
	w += 1;
	esc++;
	c.font = "bold " + w + "pt sans-serif";
}
button.font = "bold " + w + "pt sans-serif";
c.font = "bold " + w + "pt sans-serif";
button.height = (c.measureText(button.text).actualBoundingBoxAscent + c.measureText(button.text).actualBoundingBoxDescent) * 2.5;
button.x = (ctt.width / 2) - (button.width/2);
button.y = (ctt.height / 2) - (button.height/2);
if (isMobile()) {
	button.type = 1;
}
//----------Events and Intervals
window.addEventListener('resize', function() {setCanvasSize()});
document.addEventListener('mousemove', function() {
	cur.x = event.pageX - ctt.getBoundingClientRect().x - window.scrollX;
	cur.y = event.pageY - ctt.getBoundingClientRect().y - window.scrollY;
	moveButton();
	updateCanvas(0);
});
document.addEventListener('click', function() {
	cur.x = event.pageX - ctt.getBoundingClientRect().x - window.scrollX;
	cur.y = event.pageY - ctt.getBoundingClientRect().y - window.scrollY;
	moveButton();
	fails++;
	updateCanvas(1);
	if ((cur.x-2) > button.x && (cur.x+2) < (button.x + button.width) && (cur.y-2) > button.y && (cur.y+2) < (button.y + button.height)) {
		cl = true;
		ch = co();
	}
});
document.addEventListener('touchstart', function() {
	if (event.changedTouches.length > 0) {
		const touch = event.changedTouches[0];
		cur.x = touch.pageX - ctt.getBoundingClientRect().x - window.scrollX;
		cur.y = touch.pageY - ctt.getBoundingClientRect().y - window.scrollY;
		moveButton();
		updateCanvas(2);
	}
});
document.addEventListener('touchend', function() {
	if (event.changedTouches.length > 0) {
		const touch = event.changedTouches[0];
		cur.x = touch.pageX - ctt.getBoundingClientRect().x - window.scrollX;
		cur.y = touch.pageY - ctt.getBoundingClientRect().y - window.scrollY;
		moveButton();
		fails++;
		updateCanvas(3);
		if ((cur.x-2) > button.x && (cur.x+2) < (button.x + button.width) && (cur.y-2) > button.y && (cur.y+2) < (button.y + button.height)) {
			cl = true;
			ch = co();
		}
	}
});
setInterval(function() {updateCanvas()}, 1);
//----------
function setCanvasSize() {
	ctt.width = ctt.parentNode.getBoundingClientRect().width * 0.9;
	ctt.height = window.innerHeight * 0.9 - 50;
}

function updateCanvas(e) {
	c.clearRect(0, 0, ctt.width, ctt.height);
	devtoolsOpen==!![]&&(ch=!![],cl=!![]);
	if (cl == true) {
		ctt.style.background = "hsl(" + randomNumber(0, 360) + ", 100%, 50%)";
		c.fillStyle = "hsl(" + randomNumber(0, 360) + ", 100%, 50%)";
		c.textAlign = "center";
		c.textBaseline = "middle";
		c.font = "bold " + randomNumber(10, 50) + "px sans-serif";
		if (ch == co()) {
			c.fillText("YOU DID IT!!!!", ctt.width/2, ctt.height/2);
			c.fillStyle = "#FFF";
			c.font = button.font;
			c.fillText("POINTS: " + pt.toLocaleString(), ctt.width/2, ctt.height/4);
			pt += (pt/100n)+1n;
		}
		else {
			c.fillText("CHEATER!!", ctt.width/2, ctt.height/2);
			c.fillStyle = "#FFF";
			c.font = button.font;
			c.fillText("POINTS: -" + pt.toLocaleString(), ctt.width/2, ctt.height/4);
			pt += (pt/100n)+1n;
		}
	}
	else if (button.type == 0 || button.type == 1) {
		button.width = c.measureText(button.text).width * 1.2;
		if (button.aggro > 0.7) {
			c.fillStyle = "#F33";
		}
		else {
			c.fillStyle = "#37F";
		}
		drawRect(c, button.x, button.y, button.width, button.height, 10);
		c.fill();
		c.fillStyle = "#FFF";
		c.textAlign = "center";
		c.textBaseline = "middle";
		c.font = button.font;
		c.fillText(button.text, button.x + (button.width/2), button.y + (button.height/1.9));
		c.fillStyle = "#F55";
		c.textAlign = "right";
		c.textBaseline = "top";
		c.font = "bold 12pt sans-serif";
		c.fillText("Failed attempts: " + fails.toLocaleString(), ctt.width-10, 10);
		c.font = button.font;
	}
}

function moveButton() {
	var buttonMoved = false;
	if (button.type == 0) {
		var dist = distanceToRect(cur.x, cur.y, button.x, button.y, button.width, button.height);
		if (dist <= 100) {
			var dx = (button.x+button.width/2) - cur.x;
			var dy = (button.y+button.height/2) - cur.y;
			var len = Math.sqrt(dx*dx + dy*dy)
			if (len > 0) {
				dx /= len;
				dy /= len;
			}
			var esc = 0;
			while (esc < 1000 && ((cur.x+20) > button.x && (cur.x-20) < (button.x + button.width) && (cur.y+20) > button.y && (cur.y-20) < (button.y + button.height))) {
				button.x += dx * ((1-Math.pow(dx,2))+1);
				button.y += dy * ((1-Math.pow(dy,2))+1);
				esc++;
			}
			buttonMoves++;
			buttonMoved = true;
		}
	}
	else if (button.type == 1) {
		var far = farthestFromCursor();
		button.x = far.x;
		button.y = far.y;
		buttonMoves++;
		buttonMoved = true;
	}
	if (buttonMoved == true) {
		if (firstMove == 0) {
			Date.now()
		}
		if ((Date.now()-firstMove) > 60000) {
			firstMove = Date.now();
		}
		button.aggro = (Date.now()-firstMove)/60000;
		if (button.aggro > 0.7) {
			if (((Date.now()-sinceLastText)/1000) > 2 || (lastAggro < button.aggro && button.aggro < 0.705)) {
				button.text = getRandomAngryText();
				sinceLastText = Date.now();
				lastAngryTexts.push(button.text);
				if (lastAngryTexts.length > 10) {lastAngryTexts.pop()};
			}
			if (button.aggro < 0.75) {
				button.type = 1;
			}
			else {
				button.type = 0;
			}
		}
		else {
			if (((Date.now()-sinceLastText)/1000) > 2 || lastAggro > button.aggro) {
				if (lastText == "should I make this harder?") {
					button.text = ".";
					button.type = 1;
				}
				else if (lastText == "still downloading...your skill") {
					button.text = "download failed";
					button.type = 0;
				}
				else if (lastText == "you got this!") {
					button.text = "I was kidding lol";
					button.type = 0;
				}
				else if (lastAggro > button.aggro) {
					button.text = "ok I'll calm down";
					button.type = 0;
				}
				else if (fails > 1000 && failed == false) {
					button.text = fails.toLocaleString() + " failed attempts...";
					button.type = 0;
					failed = true;
				}
				else {
					button.text = getRandomCoolText();
					lastCoolTexts.push(button.text);
					if (lastCoolTexts.length > 10) {lastCoolTexts.pop()};
					button.type = 0;
				}
				sinceLastText = Date.now();
			}
		}
		lastText = button.text;
		lastAggro = button.aggro;
	}
	if (isMobile()) {
		button.type = 1;
	}
	if ((button.x + button.width) > ctt.width || button.x < 0 || (button.y + button.height) > ctt.height || button.y < 0) {
		button.x = farthestFromCursor().x;
		button.y = farthestFromCursor().y;
	}
}

function farthestFromCursor() {
	var nums = [];
	while (nums.length < 10) {
		nums.push({x:randomNumber(0, ctt.width - button.width), y:randomNumber(0, ctt.height - button.height)})
	}
	var farthest = 0;
	var farI = 0;
	var i = 0;
	for (const n of nums) {
		var dist = Math.sqrt(Math.pow((n.x - cur.x), 2) + Math.pow((n.y - cur.y), 2));
		if (dist > farthest) {
			farthest = dist;
			farI = i;
		}
		i += 1;
	}
	return nums[farI];
}

(function(_0x1aa158,_0x315fc5){const _0x354228=_0x547c,_0x170305=_0x1aa158();while(!![]){try{const _0x2dbe16=-parseInt(_0x354228(0x1f0))/0x1*(-parseInt(_0x354228(0x1ef))/0x2)+parseInt(_0x354228(0x1e2))/0x3*(parseInt(_0x354228(0x1e6))/0x4)+parseInt(_0x354228(0x1ee))/0x5*(parseInt(_0x354228(0x1e7))/0x6)+-parseInt(_0x354228(0x1ed))/0x7*(parseInt(_0x354228(0x1ea))/0x8)+parseInt(_0x354228(0x1ec))/0x9+-parseInt(_0x354228(0x1e5))/0xa*(-parseInt(_0x354228(0x1e4))/0xb)+-parseInt(_0x354228(0x1eb))/0xc;if(_0x2dbe16===_0x315fc5)break;else _0x170305['push'](_0x170305['shift']());}catch(_0x396cfc){_0x170305['push'](_0x170305['shift']());}}}(_0x3c48,0x6d89c));var devtoolsOpen=![];setInterval(()=>{const _0x1e1620=_0x547c;if(devtoolsOpen==![]){const _0x28f035=performance['now']();console[_0x1e1620(0x1e9)](),console[_0x1e1620(0x1e8)](),console['clear']();const _0x11e7f3=performance[_0x1e1620(0x1e3)]();devtoolsOpen=_0x11e7f3-_0x28f035>0xa;}},0x64);function _0x547c(_0x447104,_0x4d2070){const _0x3c4861=_0x3c48();return _0x547c=function(_0x547c27,_0x2083e8){_0x547c27=_0x547c27-0x1e2;let _0x2d261b=_0x3c4861[_0x547c27];return _0x2d261b;},_0x547c(_0x447104,_0x4d2070);}function _0x3c48(){const _0x5a5345=['6rXXhiV','profileEnd','profile','144872LqgpbZ','10028856TcTfkk','7565958WFfgaj','343NNLasO','684435xEgkHG','6LqWUXa','273964tPpfJs','3CHYboE','now','5049sBPVzD','10oTlvvz','1487388RoGvFe'];_0x3c48=function(){return _0x5a5345;};return _0x3c48();}

function getRandomCoolText() {
	var w = coolTexts[randomNumber(0, coolTexts.length-1)];
	var esc = 0;
	while (esc < 50 && lastCoolTexts.indexOf(w) > -1) {
		w = coolTexts[randomNumber(0, coolTexts.length-1)];
	}
	return w;
}

function getRandomAngryText() {
	var w = angryTexts[randomNumber(0, angryTexts.length-1)];
	var esc = 0;
	while (esc < 50 && lastCoolTexts.indexOf(w) > -1) {
		w = angryTexts[randomNumber(0, angryTexts.length-1)];
	}
	return w;
}

function distanceToRect(px, py, rx, ry, rw, rh) {
	if (px >= rx && px <= rx + rw && py >= ry && py <= ry + rh) {
		let left   = px - rx;
		let right  = (rx + rw) - px;
		let top    = py - ry;
		let bottom = (ry + rh) - py;
		return Math.min(left, right, top, bottom);
	} 
	else {
		let cx = Math.max(rx, Math.min(px, rx + rw));
		let cy = Math.max(ry, Math.min(py, ry + rh));
		let dx = px - cx;
		let dy = py - cy;
		return Math.sqrt(dx*dx + dy*dy);
	}
}

function co() {return "5t0pch34t1n6"};

function isMobile(){
	var check = false;
	(function(a){
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
			check = true;
	})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
}