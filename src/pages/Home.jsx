import   React from "react";
import { VideoIntro       } from "../components/VideoIntro";
import { BannerHorizontal } from "../components/BannerHorizontal";
import { info             } from "../components/Dataset";
import { ProjectBan       } from "../components/ProjectBan";
import { Our              } from "../components/Our";
import { WeAre            } from "../components/WeAre";
import { Footer           } from "../components/Footer";
import "./index.scss";//*(@)|==>styles;

/* bgProjects */
import ban1 from "@components/ProjectBan/dataProjects/pro1/ban1.jpeg";
import ban2 from "@components/ProjectBan/dataProjects/pro1/ban2.jpg";
import ban3 from "@components/ProjectBan/dataProjects/pro1/ban3.jpg";
import ban4 from "@components/ProjectBan/dataProjects/pro1/ban4.png";
import ban5 from "@components/ProjectBan/dataProjects/pro1/ban5.jpg";
import ban6 from "@components/ProjectBan/dataProjects/pro1/ban6.jpeg";

const Home =()=> { return ( <> 

<VideoIntro/>
<BannerHorizontal props={info}/>

<div className="wrapper">
  <ProjectBan num="1" bg={ban1} title="CapitanejoK12" top="-50px"/>
  <ProjectBan num="2" bg={ban2} title="CapitanejoK8"  top="-50px"/>
  <ProjectBan num="3" bg={ban3} title="CapitanejoK12" top="-40px"/>
  <ProjectBan num="2" bg={ban4} title="Desvío K15"    top="-70px"/>
  <ProjectBan num="2" bg={ban5} title="CapitanejoK12" top="0px"  />
  <ProjectBan num="2" bg={ban6} title="CapitanejoK12" top="0px"  />
</div>

<Our/>

<WeAre/>

<Footer/>





{/*<h1>Biografia</h1>
<h1>equipo</h1> */}

</> ); }; export { Home };