import React from "react";
import { VideoIntro } from "../components/VideoIntro";
import { BannerHorizontal } from "../components/BannerHorizontal";
import { info, info2 } from "../components/Dataset";
const Home =()=> { return ( <> 

<VideoIntro/>
<BannerHorizontal  props={info}  color={"var(--crynsom)"} height=""/>

<BannerHorizontal  props={info2} color={"black"}          height="80px"/>

{/* <BannerHorizontal  props={info2} color={"var(--syan)"}    height=""/> */}

<h1 style={{marginTop:"990px"}}>OurProjects</h1>
<h1>Biografia</h1>
<h1>equipo</h1>
</>); }; export { Home };