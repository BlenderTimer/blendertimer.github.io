var totalViews = document.getElementById("total-views");
var totalSubscribers = document.getElementById("total-subscribers");
var totalVideos = document.getElementById("total-videos");

$.get(
    "https://www.googleapis.com/youtube/v3/channels",{
    part: 'statistics',
    id: 'UCFMTkXP-dTa3cBh8XxVKBGQ',
    key: 'AIzaSyDsaGX5mhvqCpI3jWMFFGMmmmB5IUEyUrk'},
   	function(data) {
       	var viewC = 0;
       	var subC = 0;
       	var vidC = 0;
       	viewC = parseInt(data.items[0].statistics.viewCount);
       	subC = parseInt(data.items[0].statistics.subscriberCount);
       	vidC = parseInt(data.items[0].statistics.videoCount);
		totalViews.innerHTML = viewC.toLocaleString(navigator.language)
		totalSubscribers.innerHTML = subC.toLocaleString(navigator.language)
		totalVideos.innerHTML = vidC.toLocaleString(navigator.language)
	}
);