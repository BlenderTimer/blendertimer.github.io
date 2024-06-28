var submitAVideoIdea = document.getElementById('submitavideoidea');
var channelMilestones = document.getElementById('channel-milestones');
var funDemos = document.getElementById('fun-demos');
var welcomeText = document.getElementById('welcome-text-main');
var latestContent = document.getElementById('latest-content');
var latestVideo = document.getElementById('latest-video-video');
var latestShort = document.getElementById('latest-video-short');
var videoFound = false;
var shortFound = false;
for (var i=videos.length-1; i > 0; i-=1) {
    if (videos[i].type = "short" && shortFound == false) {
        document.getElementById("latest-video-short").src = "https://www.youtube.com/embed/" + videos[i].youtubeID;
        shortFound = true;
    }
    else if (videoFound == false) {
        document.getElementById("latest-video-video").src = "https://www.youtube.com/embed/" + videos[i].youtubeID;
        videoFound = true;
    }
    if (videoFound == true && shortFound == true) {break};
}
function determineLayout() {
    if (window.innerWidth < 350) {
        submitAVideoIdea.style.width = "100%";
        channelMilestones.style.width = "100%";
        funDemos.style.width = "100%";
        welcomeText.style.fontSize = "17pt";
        latestVideo.style.width = "100%";
        latestVideo.style.marginBottom = "30px";
        latestShort.style.width = "100%";
        latestContent.style.flexWrap = "wrap";
        latestContent.style.height = "auto";
    }
	else if (window.innerWidth < 600) {
		submitAVideoIdea.style.width = "100%";
		channelMilestones.style.width = "100%";
		funDemos.style.width = "100%";
        welcomeText.style.fontSize = "6.5vw";
        latestVideo.style.width = "100%";
        latestVideo.style.marginBottom = "30px";
        latestShort.style.width = "80%";
        latestContent.style.flexWrap = "wrap";
        latestContent.style.height = "auto";
	}
	else if (window.innerWidth < 800){
		submitAVideoIdea.style.width = "calc(50% - 20px)";
		channelMilestones.style.width = "calc(50% - 20px)";
		funDemos.style.width = "calc(50% - 20px)";
        welcomeText.style.fontSize = "30pt";
        latestVideo.style.width = "100%";
        latestVideo.style.marginBottom = "30px";
        latestShort.style.width = "50%";
        latestContent.style.flexWrap = "wrap";
        latestContent.style.height = "auto";
	}
    else if (window.innerWidth < 900){
        submitAVideoIdea.style.width = "calc(50% - 20px)";
        channelMilestones.style.width = "calc(50% - 20px)";
        funDemos.style.width = "calc(50% - 20px)";
        welcomeText.style.fontSize = "30pt";
        latestVideo.style.width = "100%";
        latestVideo.style.marginBottom = "30px";
        latestShort.style.width = "50%";
        latestContent.style.flexWrap = "wrap";
        latestContent.style.height = "auto";
    }
	else {
		submitAVideoIdea.style.width = "calc(33.33% - 20px)";
		channelMilestones.style.width = "calc(33.33% - 20px)";
		funDemos.style.width = "calc(33.33% - 20px)";
        welcomeText.style.fontSize = "30pt";
        latestVideo.style.width = "auto";
        latestVideo.style.marginBottom = "0px";
        latestShort.style.width = "auto";
        latestContent.style.flexWrap = "nowrap";
        latestContent.style.height = "30vw";
	}
}

// $.get(
//         "https://www.googleapis.com/youtube/v3/search",{
//         part: 'snippet',
//         maxResults: 10,
//         channelId: 'UCFMTkXP-dTa3cBh8XxVKBGQ',
//         order: 'date',
//         type: 'video',
//         key: 'AIzaSyDsaGX5mhvqCpI3jWMFFGMmmmB5IUEyUrk'},
//         function(data) {
//         $.each( data.items, function(i, item) {
//             if (videoFound == false) {
//                 if (item.snippet.title.toString().indexOf("#shorts") < 0) {
//                     document.getElementById("latest-video-video").src = "https://www.youtube.com/embed/" + item.id.videoId;
//                     videoFound = true;
//                 };
//             };
//         });
//         $.each( data.items, function(i, item) {
//             if (shortFound == false) {
//                 if (item.snippet.title.toString().indexOf("#shorts") > -1) {
//                     document.getElementById("latest-video-short").src = "https://www.youtube.com/embed/" + item.id.videoId;
//                     shortFound = true;
//                 };
//             };
//         });
//     }
// );