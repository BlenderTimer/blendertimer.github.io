function closePopup(e) {
	let element = e.target || e.srcElement;
	if (element.id == "popup-exit" || element.id == "popup-base") {
		let base = document.getElementById("popup-base");
		let popup = document.getElementById("popup");
		base.style.opacity = "0";
		base.style.pointerEvents = "none";
		popup.style.transform = "scale(0)";
	}
}

function viewThumbnail(e) {
	let base = document.getElementById("popup-base");
	let popup = document.getElementById("popup");
	let el = e.target || e.srcElement;
	if (popup.children.length == 1) {
		popup.innerHTML += "<img id=\"full-thumbnail\" src=\"" + el.children[0].src.replace("small", "large") + "\" alt=\"Thumbnail\">";
	}
	base.style.opacity = null;
	base.style.pointerEvents = null;
	popup.style.transform = null;
}

function dateToString(date) {
	let day = parseInt(date.substring(0, date.indexOf("-")));
	let month = parseInt(date.substring(date.indexOf("-")+1, date.lastIndexOf("-")));
	let year = parseInt(date.substring(date.lastIndexOf("-")+1, date.length));
	if (month == 1) {return "January " + day + ", " + year}
	else if (month == 2) {return "February " + day + ", " + year}
	else if (month == 3) {return "March " + day + ", " + year}
	else if (month == 4) {return "April " + day + ", " + year}
	else if (month == 5) {return "May " + day + ", " + year}
	else if (month == 6) {return "June " + day + ", " + year}
	else if (month == 7) {return "July " + day + ", " + year}
	else if (month == 8) {return "August " + day + ", " + year}
	else if (month == 9) {return "September " + day + ", " + year}
	else if (month == 10) {return "October " + day + ", " + year}
	else if (month == 11) {return "November " + day + ", " + year}
	else if (month == 12) {return "December " + day + ", " + year}
}