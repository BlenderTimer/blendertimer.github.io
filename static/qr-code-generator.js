//----------Variables
const urlInput = document.getElementById('url-input');
const generateBTN = document.getElementById('generate-btn');
const qrContainer = document.getElementById('qr-container');
const qrInfo = document.getElementById('qr-info');
const optimizationList = document.getElementById('optimization-list');

let qrText = "https://blendertimer.com";
let currentQR = null;
let qrSVG = "";
let correctionLevel = QRCode.CorrectLevel.L;
let qrImageWidth = 512;
let qrImageHeight = 512;
let showSVG = false;

let errors = [];
let drawingInfo = [];
let lastErrorsDrawn = [];
let lastInfoDrawn = [];
let infoWasDrawn = true;

let backgroundEnabled = true;
let padding = 1.5;
let backgroundRounding = 1.5;
let backgroundColor = "#ffffff";

let primaryColor = "#000000";
let positionStroke = true;
let positionRounding = 1.2;
let positionInnerRounding = 0.4;

let moduleRounding = 0.4;
let fullRounding = false;

let logoEnabled = false;
const logoImage = document.getElementById('logo-image');
let logoImageSize = {width:0,height:0};
let logoSVG = "";
let logoSVGSize = {width:0,height:0};
let logoSpace = 0.25;
let logoSize = 0.20;
//----------Functions
//Load
generateQRCode(true);
//----------
function generateQRCode(onload) {
	errors = [];
	drawingInfo = [];
	if (!(onload == true)) {
		qrText = urlInput.value;
		if (!qrText) {urlInput.style.outline = "2px solid #ff1b1b";errors.push("No URL provided!");drawOptimizations();return};
	}
	else {urlInput.style.removeProperty('outline')};
	generateBTN.innerHTML = "Generating...";
	qrContainer.innerHTML = '<div id="qrcode"></div>';
	try {currentQR = new QRCode(document.getElementById('qrcode'), {text: qrText, correctLevel: correctionLevel})}
	catch {urlInput.style.outline = "2px solid #ff1b1b";errors.push("The text is too long or too complex for a QR code.");drawOptimizations();generateBTN.innerHTML = "Generate QR Code";return};
	drawQRCode();
	qrInfo.children[0].innerHTML = `Type: ${currentQR._oQRCode.typeNumber} of 40 (${currentQR._oQRCode.moduleCount}x${currentQR._oQRCode.moduleCount} of 177x177)`;
	generateBTN.innerHTML = "Generate QR Code";
	urlInput.style.removeProperty('outline');
}

function drawQRCode() {
	drawingInfo = [];
	if (currentQR._oQRCode.moduleCount >= 40) {drawingInfo.push({text:"Your QR code is very complex! Try to shorten the length of the URL.", type:"warning"})}
	if ((currentQR._oQRCode.moduleCount*5) > qrImageWidth) {drawingInfo.push({text:"The resolution of your image is very low for the complexity of the QR code.", type:"warning"})}
	if (contrastRatio(backgroundColor, primaryColor) < 5) {drawingInfo.push({text:"Your QR code has poor contrast which can prevent it from scanning well. Consider choosing better contrasting colors.", type:"warning"})}
	let newModules = removeLogoSpaceModules(currentQR._oQRCode.modules.map(row => [...row]));
	qrSVG = getQRSVG(newModules);
	qrContainer.innerHTML = "";
	if (showSVG == true) {qrContainer.innerHTML = qrSVG};
	qrContainer.innerHTML += '<canvas id="qr-canvas"></canvas>';
	drawQRCanvas(newModules);
	if (qrText.startsWith("https://www.") || qrText.startsWith("http://www.")) {drawingInfo.push({text:"Your URL contains \"www.\". You may be able to achieve a simpler QR code by omitting it.", type:"warning"})};
	if (qrText.startsWith("https://www.youtube.com") || qrText.startsWith("http://www.youtube.com") || qrText.startsWith("https://youtube.com") || qrText.startsWith("http://youtube.com")) {
		if (qrText.indexOf("/shorts/") > -1) {drawingInfo.push({text:`Your using a youtube.com URL which could be shortened to "https://youtu.be/${qrText.substring(qrText.lastIndexOf("/")+1, qrText.length-1)}"`, type:"warning"})}
		else if (qrText.indexOf("/watch?v=") > -1) {drawingInfo.push({text:`Your using a youtube.com URL which could be shortened to "https://youtu.be/${qrText.substring(qrText.lastIndexOf("/watch?v=")+9, qrText.length-1)}"`, type:"warning"})};
	}
	if (logoImageSize.width.round(1) != logoImageSize.height.round(1)) {drawingInfo.push({text:"Your logo image is not square! This may cause rendering issues.", type:"warning"})};
	if (logoEnabled == true && (correctionLevel == QRCode.CorrectLevel.L || correctionLevel == QRCode.CorrectLevel.M)) {drawingInfo.push({text:"QR codes with logos should have an error correction level of Q or H.", type:"warning"})};
	if (logoEnabled == true && logoSpace < logoSize) {drawingInfo.push({text:"Your logo space is smaller than your logo. This may cause your logo to intersect with the QR code.", type:"warning"})};
	drawOptimizations();
}

function getQRSVG(modules) {
	let svg = "";
	let bgPad = padding;
	if (backgroundEnabled == true) {
		svg = `<svg viewbox="0 0 ${modules.length + (bgPad*2)} ${modules.length + (bgPad*2)}" xmlns="http://www.w3.org/2000/svg" width="${modules.length + (bgPad*2)}" height="${modules.length + (bgPad*2)}">${svgRect(0, 0, modules.length+(padding*2), modules.length+(padding*2), backgroundColor, backgroundRounding)}`;
	}
	else {
		bgPad = 0;
		svg = `<svg viewbox="0 0 ${modules.length + (bgPad*2)} ${modules.length + (bgPad*2)}" xmlns="http://www.w3.org/2000/svg" width="${modules.length + (bgPad*2)}" height="${modules.length + (bgPad*2)}">`;
	}
	for (let y=0; y < modules.length; y++) {
		for (let x=0; x < modules.length; x++) {
			if (modules[y][x]) {
				let posX = x+bgPad;
				let posY = y+bgPad;
				// Top-left position pattern
				if (y < 7 && x < 7) {
					if (positionStroke) {continue};
					// OUTER: Top-left corner, top-right corner, bottom-left corner, bottom-right corner
					if (y == 0 && x == 0) {svg += svgRect(posX, posY, 1, 1, primaryColor, positionRounding, 0, 0, 0)}
					else if (y == 0 && x == 6) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, positionRounding, 0, 0)}
					else if (y == 6 && x == 0) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, 0, 0, positionRounding)}
					else if (y == 6 && x == 6) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, 0, positionRounding, 0)}
					// INNER: Top-left corner, top-right corner, bottom-left corner, bottom-right corner
					else if (y == 2 && x == 2) {svg += svgRect(posX, posY, 1, 1, primaryColor, positionInnerRounding, 0, 0, 0)}
					else if (y == 2 && x == 4) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, positionInnerRounding, 0, 0)}
					else if (y == 4 && x == 2) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, 0, 0, positionInnerRounding)}
					else if (y == 4 && x == 4) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, 0, positionInnerRounding, 0)}
					else {svg += svgRect(posX, posY, 1, 1, primaryColor)};
				}
				// OUTER: Top-right position pattern
				else if (y < 7 && (modules.length - x) <= 7) {
					if (positionStroke) {continue};
					// Top-left corner, top-right corner, bottom-left corner, bottom-right corner
					if (y == 0 && x == (modules.length - 7)) {svg += svgRect(posX, posY, 1, 1, primaryColor, positionRounding, 0, 0, 0)}
					else if (y == 0 && x == (modules.length - 1)) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, positionRounding, 0, 0)}
					else if (y == 6 && x == (modules.length - 7)) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, 0, 0, positionRounding)}
					else if (y == 6 && x == (modules.length - 1)) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, 0, positionRounding, 0)}
					// INNER: Top-left corner, top-right corner, bottom-left corner, bottom-right corner
					else if (y == 2 && x == (modules.length - 5)) {svg += svgRect(posX, posY, 1, 1, primaryColor, positionInnerRounding, 0, 0, 0)}
					else if (y == 2 && x == (modules.length - 3)) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, positionInnerRounding, 0, 0)}
					else if (y == 4 && x == (modules.length - 5)) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, 0, 0, positionInnerRounding)}
					else if (y == 4 && x == (modules.length - 3)) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, 0, positionInnerRounding, 0)}
					else {svg += svgRect(posX, posY, 1, 1, primaryColor)};
				}
				// OUTER: Bottom-left position pattern
				else if ((modules.length - y) <= 7 && x < 7) {
					if (positionStroke) {continue};
					// Top-left corner, top-right corner, bottom-left corner, bottom-right corner
					if (y == (modules.length - 7) && x == 0) {svg += svgRect(posX, posY, 1, 1, primaryColor, positionRounding, 0, 0, 0)}
					else if (y == (modules.length - 7) && x == 6) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, positionRounding, 0, 0)}
					else if (y == (modules.length - 1) && x == 0) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, 0, 0, positionRounding)}
					else if (y == (modules.length - 1) && x == 6) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, 0, positionRounding, 0)}
					// INNER: Top-left corner, top-right corner, bottom-left corner, bottom-right corner
					else if (y == (modules.length - 5) && x == 2) {svg += svgRect(posX, posY, 1, 1, primaryColor, positionInnerRounding, 0, 0, 0)}
					else if (y == (modules.length - 5) && x == 4) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, positionInnerRounding, 0, 0)}
					else if (y == (modules.length - 3) && x == 2) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, 0, 0, positionInnerRounding)}
					else if (y == (modules.length - 3) && x == 4) {svg += svgRect(posX, posY, 1, 1, primaryColor, 0, 0, positionInnerRounding, 0)}
					else {svg += svgRect(posX, posY, 1, 1, primaryColor)};
				}
				else {
					let modRound = [moduleRounding, moduleRounding, moduleRounding, moduleRounding];
					if (fullRounding == false && moduleRounding > 0) {modRound = getRounding(x, y, modules, moduleRounding)};
					svg += svgRect(posX, posY, 1, 1, primaryColor, modRound[0], modRound[1], modRound[2], modRound[3]);
				}
			}
		}
	}
	// Draw position patterns
	if (positionStroke) {
		// Top-left position pattern
		svg += svgStrokeRect(0.5+bgPad, 0.5+bgPad, 6, 6, primaryColor, 1, positionRounding);
		svg += svgRect(2+bgPad, 2+bgPad, 3, 3, primaryColor, positionInnerRounding);
		// Top-Right position pattern
		svg += svgStrokeRect(0.5+bgPad, (modules.length-6.5)+bgPad, 6, 6, primaryColor, 1, positionRounding);
		svg += svgRect(2+bgPad, (modules.length-5)+bgPad, 3, 3, primaryColor, positionInnerRounding);
		// Bottom-left position pattern
		svg += svgStrokeRect((modules.length-6.5)+bgPad, 0.5+bgPad, 6, 6, primaryColor, 1, positionRounding);
		svg += svgRect((modules.length-5)+bgPad, 2+bgPad, 3, 3, primaryColor, positionInnerRounding);
	}

	// Draw logo
	if (!(logoEnabled == false || logoSize == 0)) {
		let lSize = modules.length*logoSize;
		let lCenter = (modules.length+bgPad+bgPad)/2;
		try {svg += scaleSVG(logoSVG, getOriginalSVGSize(logoSVG), lSize, lCenter, lCenter)} catch {};
	}
	svg += `</svg>`;
	return svg;
}

function drawQRCanvas(modules) {
	let canvas = document.getElementById('qr-canvas');
	canvas.width = qrImageWidth;
	canvas.height = qrImageHeight;
	let c = canvas.getContext('2d');
	let w = canvas.width;
	let h = canvas.height;
	c.clearRect(0, 0, w, h);
	let s = w / (modules.length+(padding*2));
	let bgPad = padding;
	if (backgroundEnabled == true) {
		c.fillStyle = backgroundColor;
		canvasRect(c, 0, 0, w, h, true, Math.round(backgroundRounding*s));
	}
	else {
		s = w / modules.length;
		bgPad = 0;
	}
	c.fillStyle = primaryColor;
	let mSize = Math.ceil(s);
	let mRound = Math.round(moduleRounding*s);
	let poRound = Math.round(positionRounding*s);
	let piRound = Math.round(positionInnerRounding*s);
	for (let y=0; y < modules.length; y++) {
		for (let x=0; x < modules.length; x++) {
			if (modules[y][x]) {
				let posX = Math.round((x+bgPad)*s);
				let posY = Math.round((y+bgPad)*s);
				// Top-left position pattern
				if (y < 7 && x < 7) {
					if (positionStroke) {continue};
					// OUTER: Top-left corner, top-right corner, bottom-left corner, bottom-right corner
					if (y == 0 && x == 0) {canvasRect(c, posX, posY, mSize, mSize, true, poRound, 0, 0, 0)}
					else if (y == 0 && x == 6) {canvasRect(c, posX, posY, mSize, mSize, true, 0, poRound, 0, 0)}
					else if (y == 6 && x == 0) {canvasRect(c, posX, posY, mSize, mSize, true, 0, 0, 0, poRound)}
					else if (y == 6 && x == 6) {canvasRect(c, posX, posY, mSize, mSize, true, 0, 0, poRound, 0)}
					// INNER: Top-left corner, top-right corner, bottom-left corner, bottom-right corner
					else if (y == 2 && x == 2) {canvasRect(c, posX, posY, mSize, mSize, true, piRound, 0, 0, 0)}
					else if (y == 2 && x == 4) {canvasRect(c, posX, posY, mSize, mSize, true, 0, piRound, 0, 0)}
					else if (y == 4 && x == 2) {canvasRect(c, posX, posY, mSize, mSize, true, 0, 0, 0, piRound)}
					else if (y == 4 && x == 4) {canvasRect(c, posX, posY, mSize, mSize, true, 0, 0, piRound, 0)}
					else {canvasRect(c, posX, posY, mSize, mSize, true)};
				}
				// OUTER: Top-right position pattern
				else if (y < 7 && (modules.length - x) <= 7) {
					if (positionStroke) {continue};
					// Top-left corner, top-right corner, bottom-left corner, bottom-right corner
					if (y == 0 && x == (modules.length - 7)) {canvasRect(c, posX, posY, mSize, mSize, true, poRound, 0, 0, 0)}
					else if (y == 0 && x == (modules.length - 1)) {canvasRect(c, posX, posY, mSize, mSize, true, 0, poRound, 0, 0)}
					else if (y == 6 && x == (modules.length - 7)) {canvasRect(c, posX, posY, mSize, mSize, true, 0, 0, 0, poRound)}
					else if (y == 6 && x == (modules.length - 1)) {canvasRect(c, posX, posY, mSize, mSize, true, 0, 0, poRound, 0)}
					// INNER: Top-left corner, top-right corner, bottom-left corner, bottom-right corner
					else if (y == 2 && x == (modules.length - 5)) {canvasRect(c, posX, posY, mSize, mSize, true, piRound, 0, 0, 0)}
					else if (y == 2 && x == (modules.length - 3)) {canvasRect(c, posX, posY, mSize, mSize, true, 0, piRound, 0, 0)}
					else if (y == 4 && x == (modules.length - 5)) {canvasRect(c, posX, posY, mSize, mSize, true, 0, 0, 0, piRound)}
					else if (y == 4 && x == (modules.length - 3)) {canvasRect(c, posX, posY, mSize, mSize, true, 0, 0, piRound, 0)}
					else {canvasRect(c, posX, posY, mSize, mSize, true)};
				}
				// OUTER: Bottom-left position pattern
				else if ((modules.length - y) <= 7 && x < 7) {
					if (positionStroke) {continue};
					// Top-left corner, top-right corner, bottom-left corner, bottom-right corner
					if (y == (modules.length - 7) && x == 0) {canvasRect(c, posX, posY, mSize, mSize, true, poRound, 0, 0, 0)}
					else if (y == (modules.length - 7) && x == 6) {canvasRect(c, posX, posY, mSize, mSize, true, 0, poRound, 0, 0)}
					else if (y == (modules.length - 1) && x == 0) {canvasRect(c, posX, posY, mSize, mSize, true, 0, 0, 0, poRound)}
					else if (y == (modules.length - 1) && x == 6) {canvasRect(c, posX, posY, mSize, mSize, true, 0, 0, poRound, 0)}
					// INNER: Top-left corner, top-right corner, bottom-left corner, bottom-right corner
					else if (y == (modules.length - 5) && x == 2) {canvasRect(c, posX, posY, mSize, mSize, true, piRound, 0, 0, 0)}
					else if (y == (modules.length - 5) && x == 4) {canvasRect(c, posX, posY, mSize, mSize, true, 0, piRound, 0, 0)}
					else if (y == (modules.length - 3) && x == 2) {canvasRect(c, posX, posY, mSize, mSize, true, 0, 0, 0, piRound)}
					else if (y == (modules.length - 3) && x == 4) {canvasRect(c, posX, posY, mSize, mSize, true, 0, 0, piRound, 0)}
					else {canvasRect(c, posX, posY, mSize, mSize, true)};
				}
				else {
					let modRound = [mRound, mRound, mRound, mRound];
					if (fullRounding == false && moduleRounding > 0) {modRound = getRounding(x, y, modules, mRound)};
					canvasRect(c, posX, posY, mSize, mSize, true, modRound[0], modRound[1], modRound[2], modRound[3]);
				}
			}
		}
	}
	// Draw position patterns
	c.strokeStyle = primaryColor;
	c.lineWidth = Math.ceil(1*s);
	c.lineJoin = "miter";
	c.lineCap = "miter";
	if (positionStroke) {
		// Top-left position pattern
		canvasRect(c, Math.round((0.5+bgPad)*s), Math.round((0.5+bgPad)*s), Math.round(6*s), Math.round(6*s), false, poRound);
		canvasRect(c, Math.round((2+bgPad)*s), Math.round((2+bgPad)*s), Math.round(3*s), Math.round(3*s), true, piRound);
		// Top-Right position pattern
		canvasRect(c, Math.round((0.5+bgPad)*s), Math.round(((modules.length-6.5)+bgPad)*s), Math.round(6*s), Math.round(6*s), false, poRound);
		canvasRect(c, Math.round((2+bgPad)*s), Math.round(((modules.length-5)+bgPad)*s), Math.round(3*s), Math.round(3*s), true, piRound);
		// Bottom-left position pattern
		canvasRect(c, Math.round(((modules.length-6.5)+bgPad)*s), Math.round((0.5+bgPad)*s), Math.round(6*s), Math.round(6*s), false, poRound);
		canvasRect(c, Math.round(((modules.length-5)+bgPad)*s), Math.round((2+bgPad)*s), Math.round(3*s), Math.round(3*s), true, piRound);
	}

	// Draw logo
	if (!(logoEnabled == false || logoSize == 0)) {
		let lSize = (modules.length*logoSize)*s;
		let lCenter = ((modules.length+bgPad+bgPad)/2)*s;
		c.drawImage(logoImage, lCenter-(lSize/2), lCenter-(lSize/2), lSize, lSize);
	}

	// DEBUG - Visualize logo space
	// c.fillStyle = "#f005";
	// let ld = (modules.length/2)-((modules.length*logoSpace)/2);
	// let lw = modules.length*logoSpace;
	// canvasRect(c, (ld+bgPad)*s, (ld+bgPad)*s, lw*s, lw*s, true);
	// c.lineWidth = 2;
	// c.strokeStyle = "#f0f";
	// let ld2 = Math.floor(ld);
	// let lw2 = Math.ceil(ld+lw)-ld2;
	// canvasRect(c, (ld2+bgPad)*s, (ld2+bgPad)*s, lw2*s, lw2*s, false);
}

function removeLogoSpaceModules(modules) {
	if (logoEnabled == false || logoSpace == 0) {return modules};
	let dist = Math.floor((modules.length/2)-((modules.length*logoSpace)/2));
	let space = Math.ceil(((modules.length/2)-((modules.length*logoSpace)/2))+(modules.length*logoSpace))-dist;
	for (let y=0; y < modules.length; y++) {
		for (let x=0; x < modules.length; x++) {
			if (modules[y][x]) {
				if (x >= dist && x < (dist+space) && y >= dist && y < (dist+space)) {
					modules[y][x] = false;
				}
			}
		}
	}
	return modules;
}

function svgRect(x, y, width, height, fill = "black", tl = 0, tr, br, bl) {
	if (tr === undefined) tr = tl;
	if (br === undefined) br = tl;
	if (bl === undefined) bl = tl;
	tl = Math.max(0, tl);
	tr = Math.max(0, tr);
	br = Math.max(0, br);
	bl = Math.max(0, bl);

	// Normalize radii per edge (CSS border-radius rules)
	const scalePair = (a, b, max) => {
		const sum = a + b;
		return sum > max && sum > 0 ? [a * max / sum, b * max / sum] : [a, b];
	};

	// Horizontal edges
	[tl, tr] = scalePair(tl, tr, width);
	[bl, br] = scalePair(bl, br, width);

	// Vertical edges
	[tl, bl] = scalePair(tl, bl, height);
	[tr, br] = scalePair(tr, br, height);

	const d = [
		`M ${x + tl} ${y}`,
		`H ${x + width - tr}`,
		tr ? `A ${tr} ${tr} 0 0 1 ${x + width} ${y + tr}` : "",
		`V ${y + height - br}`,
		br ? `A ${br} ${br} 0 0 1 ${x + width - br} ${y + height}` : "",
		`H ${x + bl}`,
		bl ? `A ${bl} ${bl} 0 0 1 ${x} ${y + height - bl}` : "",
		`V ${y + tl}`,
		tl ? `A ${tl} ${tl} 0 0 1 ${x + tl} ${y}` : "",
		"Z"
	].filter(Boolean).join(" ");

	return `<path d="${d}" fill="${fill}" />`;
}

function svgStrokeRect(x, y, width, height, stroke = "black", strokeWidth = 1, tl = 0, tr, br, bl) {
	if (tr === undefined) tr = tl;
	if (br === undefined) br = tl;
	if (bl === undefined) bl = tl;
	tl = Math.max(0, tl);
	tr = Math.max(0, tr);
	br = Math.max(0, br);
	bl = Math.max(0, bl);

	// Normalize radii per edge (CSS border-radius rules)
	const scalePair = (a, b, max) => {
		const sum = a + b;
		return sum > max && sum > 0 ? [a * max / sum, b * max / sum] : [a, b];
	};

	// Horizontal edges
	[tl, tr] = scalePair(tl, tr, width);
	[bl, br] = scalePair(bl, br, width);

	// Vertical edges
	[tl, bl] = scalePair(tl, bl, height);
	[tr, br] = scalePair(tr, br, height);

	const d = [
		`M ${x + tl} ${y}`,
		`H ${x + width - tr}`,
		tr ? `A ${tr} ${tr} 0 0 1 ${x + width} ${y + tr}` : "",
		`V ${y + height - br}`,
		br ? `A ${br} ${br} 0 0 1 ${x + width - br} ${y + height}` : "",
		`H ${x + bl}`,
		bl ? `A ${bl} ${bl} 0 0 1 ${x} ${y + height - bl}` : "",
		`V ${y + tl}`,
		tl ? `A ${tl} ${tl} 0 0 1 ${x + tl} ${y}` : "",
		"Z"
	].filter(Boolean).join(" ");

	return `<path d="${d}" style="fill:none;stroke:${stroke};stroke-width:${strokeWidth}" />`;
}

function canvasRect(ctx, x, y, width, height, fill = true, tl = 0, tr, br, bl) {
	if (tr === undefined) tr = tl;
	if (br === undefined) br = tl;
	if (bl === undefined) bl = tl;
	tl = Math.max(0, tl);
	tr = Math.max(0, tr);
	br = Math.max(0, br);
	bl = Math.max(0, bl);

	// Normalize radii per edge (CSS border-radius rules)
	const scalePair = (a, b, max) => {
		const sum = a + b;
		return sum > max && sum > 0 ? [a * max / sum, b * max / sum] : [a, b];
	};

	// Horizontal edges
	[tl, tr] = scalePair(tl, tr, width);
	[bl, br] = scalePair(bl, br, width);

	// Vertical edges
	[tl, bl] = scalePair(tl, bl, height);
	[tr, br] = scalePair(tr, br, height);

	ctx.beginPath();
	// Start top-left
	ctx.moveTo(x + tl, y);

	// Top edge + top-right corner
	ctx.lineTo(x + width - tr, y);
	if (tr) ctx.arc(x + width - tr, y + tr, tr, -Math.PI / 2, 0);

	// Right edge + bottom-right corner
	ctx.lineTo(x + width, y + height - br);
	if (br) ctx.arc(x + width - br, y + height - br, br, 0, Math.PI / 2);

	// Bottom edge + bottom-left corner
	ctx.lineTo(x + bl, y + height);
	if (bl) ctx.arc(x + bl, y + height - bl, bl, Math.PI / 2, Math.PI);

	// Left edge + top-left corner
	ctx.lineTo(x, y + tl);
	if (tl) ctx.arc(x + tl, y + tl, tl, Math.PI, Math.PI * 1.5);

	ctx.closePath();
	if (fill == true) {ctx.fill()}
	else {ctx.stroke()};
}

function getRounding(x, y, modules, rounding) {
	let t = false, r = false, b = false, l = false;
	if (modules[y-1] && modules[y-1][x]) {t = true}; // TOP
	if (modules[y][x+1]) {r = true}; // RIGHT
	if (modules[y+1] && modules[y+1][x]) {b = true}; // BOTTOM
	if (modules[y][x-1]) {l = true}; // LEFT
	let tl = 0, tr = 0, br = 0, bl = 0;
	if (t == false && l == false) {tl = rounding};
	if (t == false && r == false) {tr = rounding};
	if (b == false && l == false) {bl = rounding};
	if (b == false && r == false) {br = rounding};
	return [tl, tr, br, bl];
}

function checkQRLimitReached(text) {
	return new TextEncoder().encode(text).length > 2953;
}

function setErrorCorrection(e) {
	let el = e.target || e.srcElement;
	for (let i=0; i < el.parentNode.children.length; i++) {
		el.parentNode.children[i].style.removeProperty('background');
	}
	if (el.textContent.startsWith('L')) {correctionLevel = QRCode.CorrectLevel.L}
	else if (el.textContent.startsWith('M')) {correctionLevel = QRCode.CorrectLevel.M}
	else if (el.textContent.startsWith('Q')) {correctionLevel = QRCode.CorrectLevel.Q}
	else {correctionLevel = QRCode.CorrectLevel.H};
	el.style.background = "var(--pricol)";
	generateQRCode();
}

function tryGenerateQRCode(e) {
	setTimeout(function() {generateQRCode()}, 1);
}

function drawOptimizations() {
	if (errors.length == 0 && drawingInfo.length == 0) {drawingInfo = [{text:"No issues found! Always remember to scan your QR code to ensure that it is valid.",type:"good"}]};
	if (JSON.stringify(lastErrorsDrawn) == JSON.stringify(errors)) {
		if (infoWasDrawn == true && JSON.stringify(lastInfoDrawn) == JSON.stringify(drawingInfo)) {return}
		else if (infoWasDrawn == false) {return};
	}
	while (optimizationList.lastChild) {optimizationList.lastChild.remove()};
	for (let i=0; i < errors.length; i++) {
		let item = document.createElement('div');
		item.className = `optimization error`;
		item.innerHTML = `<img src="/static/images/icons/info-error.svg" alt="Error"><p>${errors[i]}</p>`
		optimizationList.appendChild(item);
	}
	lastErrorsDrawn = errors;
	infoWasDrawn = false;
	if (errors.length == 0) {
		for (let i=0; i < drawingInfo.length; i++) {
			let item = document.createElement('div');
			item.className = `optimization info-${drawingInfo[i].type}`;
			item.innerHTML = `<img src="/static/images/icons/info-${drawingInfo[i].type}.svg" alt="Checkmark"><p>${drawingInfo[i].text}</p>`
			optimizationList.appendChild(item);
		}
		lastInfoDrawn = drawingInfo;
		infoWasDrawn = true;
	}
}

function toggleControlGroup(e) {
	let el = e.target || e.srcElement;
	let toggleArrow = el.children.length-1;
	if (el.className == "checkbox group-checkbox") {return};
	if (el.parentNode.children[1].style.display == "none") {
		el.parentNode.children[1].style.removeProperty('display');
		el.style.background = "var(--wincol-lighter)";
		el.children[toggleArrow].style.transform = "rotate(-180deg)";
	}
	else {
		el.parentNode.children[1].style.display = "none";
		el.style.removeProperty('background');
		el.children[toggleArrow].style.removeProperty('transform');
	}
}

function adjustImageSize(e) {
	let el = e.target || e.srcElement;
	qrImageWidth = parseFloat(el.value);
	qrImageHeight = parseFloat(el.value);
	if (el.type == "number") {el.parentNode.children[0].value = qrImageWidth}
	else {el.parentNode.children[1].value = qrImageWidth};
	drawQRCode();
}

function toggleBackground(e) {
	let el = e.target || e.srcElement;
	if (backgroundEnabled == false) {backgroundEnabled = true;el.children[0].style.removeProperty('display')}
	else {backgroundEnabled = false;el.children[0].style.display = "none"};
	drawQRCode();
}

function adjustBackgroundColor(e) {
	let el = e.target || e.srcElement;
	backgroundColor = el.value;
	drawQRCode();
}

function adjustBackgroundRounding(e) {
	let el = e.target || e.srcElement;
	backgroundRounding = parseFloat(el.value);
	if (el.type == "number") {el.parentNode.children[0].value = backgroundRounding}
	else {el.parentNode.children[1].value = backgroundRounding};
	drawQRCode();
}

function adjustBackgroundPadding(e) {
	let el = e.target || e.srcElement;
	padding = parseFloat(el.value);
	if (el.type == "number") {el.parentNode.children[0].value = padding}
	else {el.parentNode.children[1].value = padding};
	drawQRCode();
}

function adjustPositionOuterRounding(e) {
	let el = e.target || e.srcElement;
	positionRounding = parseFloat(el.value);
	if (el.type == "number") {el.parentNode.children[0].value = positionRounding}
	else {el.parentNode.children[1].value = positionRounding};
	drawQRCode();
}

function adjustPositionInnerRounding(e) {
	let el = e.target || e.srcElement;
	positionInnerRounding = parseFloat(el.value);
	if (el.type == "number") {el.parentNode.children[0].value = positionInnerRounding}
	else {el.parentNode.children[1].value = positionInnerRounding};
	drawQRCode();
}

function togglePositionStroke(e) {
	let el = e.target || e.srcElement;
	if (positionStroke == false) {positionStroke = true;el.children[0].style.display = "none"}
	else {positionStroke = false;el.children[0].style.removeProperty('display')};
	drawQRCode();
}

function adjustModuleColor(e) {
	let el = e.target || e.srcElement;
	primaryColor = el.value;
	drawQRCode();
}

function adjustModuleRounding(e) {
	let el = e.target || e.srcElement;
	moduleRounding = parseFloat(el.value);
	if (el.type == "number") {el.parentNode.children[0].value = moduleRounding}
	else {el.parentNode.children[1].value = moduleRounding};
	drawQRCode();
}

function toggleFullRounding(e) {
	let el = e.target || e.srcElement;
	if (fullRounding == false) {fullRounding = true;el.children[0].style.removeProperty('display')}
	else {fullRounding = false;el.children[0].style.display = "none"};
	drawQRCode();
}

function toggleLogo(e) {
	let el = e.target || e.srcElement;
	if (logoEnabled == false) {logoEnabled = true;el.children[0].style.removeProperty('display')}
	else {logoEnabled = false;el.children[0].style.display = "none"};
	drawQRCode();
}

function setLogoImage(e) {
	let el = e.target || e.srcElement;
	let file = el.files[0];
	if (!file) {return};
	logoImage.src = URL.createObjectURL(file);
	if (file.type === "image/svg+xml") {
		handleSVG(file);
	}
	else {
		handleRaster(file);
	}
	logoImage.addEventListener('load', function() {drawQRCode()});
}

function handleSVG(file) {
	const reader = new FileReader();

	reader.onload = () => {
		const svgText = reader.result;

		// Show in <img>
		const blob = new Blob([svgText], { type: "image/svg+xml" });
		logoImage.src = URL.createObjectURL(blob);

		// Parse SVG
		const parser = new DOMParser();
		const doc = parser.parseFromString(svgText, "image/svg+xml");
		const svgEl = doc.documentElement;

		const innerSVG = svgEl.innerHTML;
		const viewBox = svgEl.getAttribute("viewBox");
		logoSVG = `<g${viewBox ? ` viewBox="${viewBox}"` : ""} overflow="hidden" preserveAspectRatio="xMidYMid meet">${innerSVG}</g>`;
		logoImageSize = getOriginalSVGSize(logoSVG);
		logoSVGSize = logoImageSize;
	};

	reader.readAsText(file);
}

function handleRaster(file) {
	const reader = new FileReader();

	reader.onload = () => {
		const dataURL = reader.result;
		logoImage.src = dataURL;
		logoSVG = `<image href="${dataURL}" x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />`;
		logoImageSize = {width:logoImage.naturalWidth,height:logoImage.naturalHeight};
		logoSVGSize = logoImageSize;
	};

	reader.readAsDataURL(file);
}

function scaleSVG(svg, originalSize, size, x, y) {
	const scale = getNewSVGLogoSize(originalSize, size);
	const cx = originalSize.width / 2;
	const cy = originalSize.height / 2;
	const scaledW = originalSize.width * scale;
	const scaledH = originalSize.height * scale;
	const tx = x + scaledW / 2;
	const ty = y + scaledH / 2;
	if (svg.startsWith("<image")) {
		const parser = new DOMParser();
		const doc = parser.parseFromString(svg, "image/svg+xml");
		const svgEl = doc.documentElement;
		svgEl.setAttribute('x', x-(scaledW/2));
		svgEl.setAttribute('y', y-(scaledH/2));
		svgEl.setAttribute('width', scaledW);
		svgEl.setAttribute('height', scaledH);
		return svgEl.outerHTML;
	}
	else {
		return `<g transform="translate(${x}, ${y}) scale(${scale}) translate(${-cx}, ${-cy})">${svg}</g>`;
	}
}

function getNewSVGLogoSize({width,height}, size) {
	const maxDim = Math.max(width, height);
	return size / maxDim;
}

function getOriginalSVGSize(svgEl) {
	if (svgEl.startsWith("<image")) {return logoImageSize};
	const parser = new DOMParser();
	const doc = parser.parseFromString(svgEl, "image/svg+xml");
	const svg = doc.documentElement;
	const viewBox = svg.getAttribute("viewBox");
	if (!viewBox) {return {width:1,height:1}};
	const [, , width, height] = viewBox.split(/\s+/).map(Number);
	return {width, height};
}

function adjustLogoSpace(e) {
	let el = e.target || e.srcElement;
	logoSpace = parseFloat(el.value) / 100;
	if (el.type == "number") {el.parentNode.children[0].value = parseFloat(el.value)}
	else {el.parentNode.children[1].value = parseFloat(el.value)};
	drawQRCode();
}

function adjustLogoSize(e) {
	let el = e.target || e.srcElement;
	logoSize = parseFloat(el.value) / 100;
	if (el.type == "number") {el.parentNode.children[0].value = parseFloat(el.value)}
	else {el.parentNode.children[1].value = parseFloat(el.value)};
	drawQRCode();
}

function downloadSVG() {
	const a = document.createElement('a');
	a.href = `data:text/plain;charset=utf-8,${encodeURIComponent(qrSVG)}`;
	a.download = "QR Code.svg";
	a.click();
	a.remove();
}

function downloadPNG() {
	const a = document.createElement('a');
	a.href = document.getElementById('qr-canvas').toDataURL("image/png").replace("image/png", "image/octet-stream");
	a.download = "QR Code.png";
	a.click();
	a.remove();
}

function copyQRCode() {
	document.getElementById('qr-canvas').toBlob(blob => navigator.clipboard.write([new ClipboardItem({'image/png': blob})]));
}

function hexToRgb(hex) {
	hex = hex.replace('#', '');
	if (hex.length === 3) {
		hex = hex.split('').map(c => c + c).join('');
	}
	const n = parseInt(hex, 16);
	return {
		r: (n >> 16) & 255,
		g: (n >> 8) & 255,
		b: n & 255
	};
}

function contrastRatio(hex1, hex2) {
	function toLinear(c) {
		c /= 255;
		return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
	}

	function luminance({ r, g, b }) {
		return (0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b));
	}

	const l1 = luminance(hexToRgb(hex1));
	const l2 = luminance(hexToRgb(hex2));

	const light = Math.max(l1, l2);
	const dark = Math.min(l1, l2);

	return (light + 0.05) / (dark + 0.05);
}