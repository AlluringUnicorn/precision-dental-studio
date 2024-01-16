const video = document.getElementById('about_video');
console.log(video);

const button = document.querySelector('.play-btn');
console.log(button);

const svg = document.querySelector('.play-svg');
console.log(svg);

button.addEventListener('click', function () {
  if (!button.active) {
    video.play();
    button.active = true;
    
    svg.style.display = "none";

  } else {
    video.pause();
    button.active = false;
    
    svg.style.display = "block";
  }
});