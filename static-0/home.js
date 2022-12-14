var submitAVideoIdea = document.getElementById('submitavideoidea');
var channelMilestones = document.getElementById('channel-milestones');
var funDemos = document.getElementById('fun-demos');
var latestContent = document.getElementById('latest-content');
var latestVideo = document.getElementById('latest-video-video');
var latestShort = document.getElementById('latest-video-short');
var videoFound = false;
var shortFound = false;

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

$.get(
        "https://www.googleapis.com/youtube/v3/search",{
        part: 'snippet',
        maxResults: 10,
        channelId: 'UCFMTkXP-dTa3cBh8XxVKBGQ',
        order: 'date',
        type: 'video',
        key: 'AIzaSyDsaGX5mhvqCpI3jWMFFGMmmmB5IUEyUrk'},
        function(data) {
        $.each( data.items, function(i, item) {
            if (videoFound == false) {
                if (item.snippet.title.toString().indexOf("#shorts") < 0) {
                    document.getElementById("latest-video-video").src = "https://www.youtube.com/embed/" + item.id.videoId;
                    videoFound = true;
                };
            };
        });
        $.each( data.items, function(i, item) {
            if (shortFound == false) {
                if (item.snippet.title.toString().indexOf("#shorts") > -1) {
                    document.getElementById("latest-video-short").src = "https://www.youtube.com/embed/" + item.id.videoId;
                    shortFound = true;
                };
            };
        });
    }
);
