import   React from "react";
import { VideoIntro       } from "../components/VideoIntro";
import { BannerHorizontal } from "../components/BannerHorizontal";
import { info             } from "../components/Dataset";
import { ProjectBan       } from "../components/ProjectBan";
import { Our              } from "../components/Our";
import { WeAre            } from "../components/WeAre";
import { Footer           } from "../components/Footer";
import { Services         } from "../components/Services";
import "./index.scss";//*(@)|==>styles;

/* bgProjects */
import ban1 from "@components/ProjectBan/dataProjects/pro1/ban1.jpeg";
import ban2 from "@components/ProjectBan/dataProjects/pro1/ban2.jpg";
import ban3 from "@components/ProjectBan/dataProjects/pro1/ban3.jpg";
import ban4 from "@components/ProjectBan/dataProjects/pro1/ban4.jpg";
import ban5 from "@components/ProjectBan/dataProjects/pro1/ban5.jpg";
import ban6 from "@components/ProjectBan/dataProjects/pro1/ban6.jpeg";
import ban7 from "@components/ProjectBan/dataProjects/pro1/ban7.jpg";

/* bgServices */
import serv1 from "@components/ProjectBan/dataProjects/pro1/serv1.png";
import serv2 from "@components/ProjectBan/dataProjects/pro1/serv2.png";
import serv3 from "@components/ProjectBan/dataProjects/pro1/serv3.jpg";
import serv4 from "@components/ProjectBan/dataProjects/pro1/serv4.png";
import serv5 from "@components/ProjectBan/dataProjects/pro1/serv5.jpg";
import serv6 from "@components/ProjectBan/dataProjects/pro1/serv6.jpg";
import serv7 from "@components/ProjectBan/dataProjects/pro1/serv7.png";

const Home =()=> { return ( <> 
<VideoIntro/>
<BannerHorizontal props={info}/>
<div className="projectBan-container">
  <div className="wrapper">
    <ProjectBan num="1" bg={ban1} title="Capitanejo K12" top="-50px"/>
  </div>
  <div className="wrapper">
    <ProjectBan num="2" bg={ban2} title="Capitanejo K8"  top="-50px"/>
  </div>
  <div className="wrapper">
    <ProjectBan num="3" bg={ban3} title="Capitanejo K12" top="-40px"/>
  </div>
  <div className="wrapper">
    <ProjectBan num="4" bg={ban4} title="Desvío K15"     top="-70px"/>
  </div>
  <div className="wrapper">
    <ProjectBan num="5" bg={ban5} title="Capitanejo K12" top="0px"  />
  </div>
  <div className="wrapper">
    <ProjectBan num="6" bg={ban6} title="Capitanejo K12" top="0px"  />
  </div>
  <div className="wrapper">
    <ProjectBan num="7" bg={ban7} title="Capitanejo K12" top="-60px"/>
  </div>
</div>
<Our/>
<Services ban1={serv1} ban2={serv2} ban3={serv3} ban4={serv4} ban5={serv5} ban6={serv6} ban7={serv7}/>
<WeAre/>
<Footer/>
</> ); }; export { Home };