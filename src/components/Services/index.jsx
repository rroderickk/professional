import React from "react";

const style={
  backgroundColor: "rgba(255, 239, 15)",
  height: "50px",
  position: "relative",
  width: "100vp",
  height: "auto",
  fontSize: "3rem",
  textShadow: "none",
  padding: "20px 0",
  margin: "-31px -20px",
  paddingBottom: "0px",
  lineHeight: "8rem",
};
const container={
  display: "flex",
  height: "auto",
  // outline: "1px solid black",
  flexDirection: "column",
  overflow: "hidden",
};

const Services =(props)=> { return ( <>
<div style={style}>
<p>Our Services</p>
  <div style={container} /*className="our-services-container"*/>
    <img src={props.ban1} alt="service1"/>
  </div>
  <div style={container} /*className="our-services-container"*/>
    <img src={props.ban2} alt="service2"/>
  </div>
  <div style={container} /*className="our-services-container"*/>
    <img src={props.ban4} alt="service2"/>
  </div>
  <div style={container} /*className="our-services-container"*/>
    <img src={props.ban3} alt="service2"/>
  </div>
  <div style={container} /*className="our-services-container"*/>
    <img src={props.ban5} alt="service2"/>
  </div>
  <div style={container} /*className="our-services-container"*/>
    <img src={props.ban6} alt="service2"/>
  </div>
  <div style={container} /*className="our-services-container"*/>
    <img src={props.ban7} alt="service2"/>
  </div>
</div>
</>) }; export { Services };
