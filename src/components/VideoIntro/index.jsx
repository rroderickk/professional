import React from "react";
import video from "./voladura_08.09.17_Trim_Slomo.mp4";
import ReactPlayer from "react-player";
import "./VideIntro.scss";//*(@)|==>styles;


const VideoIntro =()=> { return (<>
<div className="player-wrapper" style={{backgroundColor:"transparent"}}>
<h1 className="title">Watch out!, Professionals in the area. We are VOLMINEX.</h1>
<ReactPlayer 
  className='react-player' 
  url={video} 
  playing loop 
  controls={true}
  muted 
  width="100%"
  height="100vp"
>
</ReactPlayer>
</div>
</>) }; export { VideoIntro };