import React from "react";
import "./BannerHorizontal.scss"; //*(@)|==>styles;

const BannerHorizontal =({props, color, height})=> { return ( <>
<div className="BannerHorizontal-container">
  <div className="tree-column">
    <p>{props.direccionS}</p>
    <p>{props.direccion} </p>
    <p>{props.cell}      </p>
  </div>
  <div id="dos" className="tree-column">
    <p>{props.direccionV}</p>
    <p>{props.direccion} </p>
    <p>{props.correo}    </p>
  </div>
  <div id="tres" className="tree-column">
    <p>{props.social}   </p>
    <p>{props.github}   </p>
    <p>{props.linkedin} </p>
  </div>
  <div id="cuatro" className="tree-column">
    <p>{props.social}{props.batcat}    </p>
    <p>{props.twitter}{props.Instagram}</p>
    <p>{props.instagram}{props.Twitter}</p>
  </div>
</div>
<p id="granSize">{props.granSize}</p>
<p id="ourproject">{props.ourproject}</p>
</> ) }; export { BannerHorizontal };