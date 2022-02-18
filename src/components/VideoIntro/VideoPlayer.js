const video=document.querySelector("video");
const button=document.querySelector("button");

class MediaPlayer {
  constructor(config) {
    const {element}=config;
  this.media=element;
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
};


const player = new MediaPlayer({element: video})
  button.onclick =()=> video.paused? player.play() : player.pause();
export { player };