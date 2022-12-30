var webToolBlocks = document.getElementsByClassName("web-tool-block");

function determineLayout() {
	if (window.innerWidth < 500) {
		for (var i=0; i < webToolBlocks.length; i++) {
  			webToolBlocks[i].style.width = "100%";
		}
	}
	else if (window.innerWidth < 830) {
		for (var i=0; i < webToolBlocks.length; i++) {
  			webToolBlocks[i].style.width = "calc(50% - 20px)";
		}
	}
	else if (window.innerWidth < 1100) {
		for (var i=0; i < webToolBlocks.length; i++) {
  			webToolBlocks[i].style.width = "calc(33.33333% - 20px)";
		}
	}
	else if (window.innerWidth < 1700) {
		for (var i=0; i < webToolBlocks.length; i++) {
  			webToolBlocks[i].style.width = "calc(25% - 20px)";
		}
	}
	else if (window.innerWidth < 2100) {
		for (var i=0; i < webToolBlocks.length; i++) {
  			webToolBlocks[i].style.width = "calc(20% - 20px)";
		}
	}
	else {
		for (var i=0; i < webToolBlocks.length; i++) {
  			webToolBlocks[i].style.width = "calc(16.66666% - 20px)";
		}
	}
}