function copyVideoLink(event) {
	var element = event.srcElement || event.target;
	navigator.clipboard.writeText(element.parentNode.children[0].textContent);
}