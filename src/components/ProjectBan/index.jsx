import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";//*(@)|==>styles;

const ProjectBan = ({ num, bg, title, top}) => { return ( <>

<div className="projectContainer"><p>Project{num}</p>
  <div 
    className="img-project-container">
      <img src={bg} className="background-image" style={{top}}/>
  </div>
</div>
<h2>{title} <Link className="linkView" to="/project1">View</Link></h2>
  

</> ) }; export { ProjectBan };