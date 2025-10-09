//----------Variables
var nav = document.getElementById('navigator');
var sections = document.getElementsByClassName('title');
var barMapTooltips = document.getElementsByClassName('bar-map-tooltip');
//Load
nav.style.transition = "0s";
positionNavigator();
setTimeout(function() {nav.style.transition = null}, 1)
//----------Event Listeners
window.addEventListener('scroll', positionNavigator);
window.addEventListener('resize', positionNavigator);
function btjs(t) {
	if (t == "cursor") {
		var curOver = cursorInfo('eo');
		for (const tooltip of barMapTooltips) {
			if (tooltip.parentNode == curOver.parentNode.parentNode) {
				var l = curOver.offsetLeft + (curOver.offsetWidth/2) - 85;
				if ((l + 150) > curOver.parentNode.parentNode.offsetWidth) {
					tooltip.style.left = (curOver.parentNode.parentNode.offsetWidth - 150) + "px";
				}
				else if (l < 0) {
					tooltip.style.left = "0px";
				}
				else {
					tooltip.style.left = (curOver.offsetLeft + (curOver.offsetWidth/2) - 85) + "px";
				}
				tooltip.style.bottom = (curOver.parentNode.parentNode.offsetHeight - (curOver.offsetTop - 7)) + "px";
				tooltip.children[0].innerHTML = curOver.style.getPropertyValue("--n");
				tooltip.children[1].innerHTML = curOver.style.getPropertyValue("--w");
				tooltip.children[2].innerHTML = curOver.parentNode.className.removeBefore(" ", 1).replace(/-/g, " ");
				tooltip.style.display = "flex";
			}
			else {
				tooltip.style.display = "none";
			}
		}
	}
}
//----------Functions
function positionNavigator() {
	if (nav.offsetWidth < (window.innerWidth/2) && nav.parentNode.getBoundingClientRect().top <= 60) {
		nav.style.position = "fixed";
		nav.style.top = "60px";
		nav.style.maxHeight = null;
	}
	else if (nav.offsetWidth >= (window.innerWidth/2) && nav.parentNode.getBoundingClientRect().top <= 50) {
		nav.style.position = "fixed";
		nav.style.top = "50px";
		nav.style.maxHeight = null;
	}
	else {
		nav.style.position = "relative";
		nav.style.top = null;
		nav.style.maxHeight = "calc(100vh - " + (10+nav.parentNode.getBoundingClientRect().top) + "px)";
	}
}

function navigateTo(e) {
	var element = e.target || e.srcElement;
	for (const s of sections) {
		if (s.textContent.replace(":","").toLowerCase() == element.textContent.toLowerCase()) {
			window.scrollTo({top:s.offsetTop - 60, behavior:'smooth'});
			break;
		}
	}
}

function scrollToNote(noteID) {
	window.scrollTo({top:document.getElementById(noteID).offsetTop - 60, behavior:'smooth'});
}

function cdbs() {
	return document.getElementsByClassName("data-block").length + document.getElementsByClassName("bar-map-section").length;
}