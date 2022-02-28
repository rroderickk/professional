import React from "react";
import "./index.scss";

const Services =(props)=> { return ( <>
<div className="main-services-container">
<p>Our Services</p>
<div className="wrapping">
  <div className="our-services-container">
    <img src={props.ban1} alt="service1"/>
  </div>
  <div className="our-services-container">
    <img src={props.ban2} alt="service2"/>
  </div>
  <div className="our-services-container">
    <img src={props.ban4} alt="service2"/>
  </div>
  <div className="our-services-container">
    <img src={props.ban3} alt="service2"/>
  </div>
  <div className="our-services-container">
    <img src={props.ban5} alt="service2"/>
  </div>
  <div className="our-services-container">
    <img src={props.ban6} alt="service2"/>
  </div>
  <div className="our-services-container">
    <img src={props.ban7} alt="service2"/>
  </div>
</div>
</div>
</>) }; export { Services };
