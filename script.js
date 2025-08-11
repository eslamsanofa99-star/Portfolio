
let videos = document.querySelectorAll('.video-slider iframe');
let index = 0;

function showVideo(i) {
    videos.forEach((video, idx) => {
        video.style.display = idx === i ? 'block' : 'none';
    });
}

function nextVideo() {
    index = (index + 1) % videos.length;
    showVideo(index);
}

setInterval(nextVideo, 5000);
showVideo(index);
