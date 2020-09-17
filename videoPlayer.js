// array defined to map the video urls to the video elements in index.html file
const videoArray = [
    "https://player.vimeo.com/video/35055590?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=147673",
    "https://player.vimeo.com/video/163662857?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=147673",
    "https://player.vimeo.com/video/60735314?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=147673",
    "https://player.vimeo.com/video/81229520?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=147673",
    "https://player.vimeo.com/video/229651971?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=147673"
];

// task 1 - declare a var to target video play list element
const videoList = document.getElementById('videoList');

// task 2 - write a function setVideos where it loops through the video play list elements in index.html file then apply click event handler to pass url from videoArray to another function
function setVideos(videoList) {
    var index = 0;

    videoList.childNodes.forEach(video => {
        if(video.nodeName == "DIV") {
            var videoUrl = videoArray[index];
            video.addEventListener("click", function(){ loadVideo(videoUrl); });
            index++
        }
      });
}

// task 3 - write a function loadVideo where it takes an url as a parameter to render the video as an iframe in the video container element
function loadVideo(url) {
    const video = document.getElementById('video');
    video.innerHTML = '<iframe src="' + url + '" width="800" height="450" frameborder="0" title="Hello" allow="autoplay; fullscreen" allowfullscreen></iframe>';
}

// task 4 - call setVideos function to pass in the above video play list element
setVideos(videoList);