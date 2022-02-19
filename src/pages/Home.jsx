import React from "react";
import { VideoIntro } from "../components/VideoIntro";
import { BannerHorizontal } from "../components/BannerHorizontal";
import { info } from "../components/Dataset";
const Home =()=> { return ( <> 

<VideoIntro/>
<BannerHorizontal props={info}/>

<h1 style={{marginTop:"990px"}}>OurProjects</h1>
<h1>Biografia</h1>
<h1>equipo</h1>
</>); }; export { Home };