//----------Variables
var bgPlate = document.getElementById('background-plate');
//----------LOAD----------
document.getElementById('content-main').style.opacity = "1";
window.onscroll = function() {
	if (bgPlate && !(bgPlate == undefined)) {
		bgPlate.style.backgroundPosition = "0px " + (document.scrollingElement.scrollTop * -0.15) + "px";
	}
}