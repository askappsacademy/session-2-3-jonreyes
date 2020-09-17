// array defined to map the video urls to the video elements in index.html file
const videoArray = [
    "https://player.vimeo.com/video/35055590?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=147673",
    "https://player.vimeo.com/video/163662857?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=147673",
    "https://player.vimeo.com/video/60735314?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=147673",
    "https://player.vimeo.com/video/81229520?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=147673",
    "https://player.vimeo.com/video/229651971?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=147673"
];

// task 1 - declare a var to target video play list element
let videoList = document.getElementById('videoList').children;

// task 2 - write a function setVideos where it loops through the video play list elements in index.html file then apply click event handler to pass url from videoArray to another function
let setVideos = (v)=>{
  for(let i=0; i<v.length;i++){
    v[i].onclick = ()=>{
      url = videoArray[i]
      loadVideo(url);
    }
  }
}

// task 3 - write a function loadVideo where it takes an url as a parameter to render the video as an iframe in the video container element
let loadVideo = (url)=>{
  let video = document.getElementById('video');
  let videoPlayer = document.createElement('iframe');
  videoPlayer.height = video.getBoundingClientRect().height;
  videoPlayer.width = video.getBoundingClientRect().width;
  videoPlayer.src = url;
  if(video.children.length==0){
    video.appendChild(videoPlayer)
  } else {
    prev = video.children[0].src;
    cur = videoPlayer.src;
    if(prev!=cur){
      video.removeChild(video.children[0]);
      video.appendChild(videoPlayer);
    }
  }
}

// task 4 - call setVideos function to pass in the above video play list element
setVideos(videoList);