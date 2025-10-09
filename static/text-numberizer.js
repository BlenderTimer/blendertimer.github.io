//----------Variables
var textInput = document.getElementById('text-input');
var textOutput = document.getElementById('text-output');
//----------Functions
//Load
setInterval(function() {numberize()}, 2000);
//----------
function numberize() {
	setTimeout(function () {textOutput.value = textInput.value.replace(/A/g, 4).replace(/a/g, 4).replace(/B/g, 8).replace(/b/g, 8).replace(/E/g, 3).replace(/e/g, 3).replace(/G/g, 6).replace(/g/g, 6).replace(/I/g, 1).replace(/i/g, 1).replace(/L/g, 7).replace(/l/g, 7).replace(/O/g, 0).replace(/o/g, 0).replace(/Q/g, 9).replace(/q/g, 9).replace(/S/g, 5).replace(/s/g, 5).replace(/Z/g, 2).replace(/z/g, 2)}, 1);
}