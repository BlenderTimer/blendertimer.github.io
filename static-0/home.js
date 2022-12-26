var submitAVideoIdea = document.getElementById('submitavideoidea');
var channelMilestones = document.getElementById('channel-milestones');
var funDemos = document.getElementById('fun-demos');

function determineLayout() {
	if (window.innerWidth < 600){
		submitAVideoIdea.style.width = "100%";
		channelMilestones.style.width = "100%";
		funDemos.style.width = "100%";
	}
	else if (window.innerWidth < 800){
		submitAVideoIdea.style.width = "calc(50% - 20px)";
		channelMilestones.style.width = "calc(50% - 20px)";
		funDemos.style.width = "calc(50% - 20px)";
	}
	else{
		submitAVideoIdea.style.width = "calc(33.33% - 20px)";
		channelMilestones.style.width = "calc(33.33% - 20px)";
		funDemos.style.width = "calc(33.33% - 20px)";
	}
}