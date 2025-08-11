//----------Objects
const result = document.getElementById("result");
//----------
function setAgree(event) {
	var element = event.target || event.srcElement;
	var i = 0;
	for (const el of element.parentNode.children) {
		if (el == element) {
			el.style.background = window.getComputedStyle(el).getPropertyValue('border-color');
			element.parentNode.parentNode.id = getQuestionID(element.parentNode.parentNode.children[0].textContent) + "_" + i.toString();
		}
		else {
			el.style.background = null;
		}
		i++;
	}
}

function setYesNo(event) {
	var element = event.target || event.srcElement;
	for (const el of element.parentNode.children) {
		if (el == element) {
			el.style.background = window.getComputedStyle(el).getPropertyValue('border-color');
			element.parentNode.parentNode.id = getQuestionID(element.parentNode.parentNode.children[0].textContent) + "_" + element.textContent.toLowerCase();
		}
		else {
			el.style.background = null;
		}
	}
	document.getElementById("finish").style.background = null;
	document.getElementById("finish").style.borderColor = null;
}

function getQuestionID(q) {
	return q.toLowerCase().replace(/ /g, "-").replace(/\?/g, "").replace(/,/g, "").replace(/\./g, "").replace(/\'/g, "").replace(/\"/g, "");
}

function getQuestionAnswer(q, returnAs) {
	if (returnAs == "str" || returnAs == "string") {
		return q.substr(q.indexOf("_") + 1);
	}
	else {
		return parseInt(q.substr(q.indexOf("_") + 1));
	}
}