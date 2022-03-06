function MediaPlayer(config) {
    this.media = config.element
  };
  MediaPlayer.prototype.play = function(){ this.media.play() };

  MediaPlayer.prototype.togglePlay = function(){
    if (this.media.paused) { this.play(); }
    else { this.media.pause(); }
};

const video = document.querySelector("video");
const player = new MediaPlayer({ element: video })
const button = document.querySelector("button");
button.onclick =()=> player.togglePlay();