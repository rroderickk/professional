import { MediaPlayer } from "./MediaPlayer.js";
import { AutoPlay } from "./Plugins/AutoPlay.js";

const video = document.querySelector("video");
const button = document.querySelector("button");
const buttonReload = document.getElementById("controls");
const buttonUnmute = document.getElementById("unmute");

const player = new MediaPlayer({ element: video, plugins: [new AutoPlay()]});

button.onclick =()=> player.togglePlay();
buttonReload.onclick =()=> {
  // player.media.controls!==true? player.media.controls=true : player.media.controls=false;
  player.media.controls = !player.media.controls;
};

buttonUnmute.onclick =()=> {
  player.media.muted = !player.media.muted
}
