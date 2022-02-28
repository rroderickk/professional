import React from "react";
import "./index.scss";//*(@)|==>styles;

const styles = {
  fontFamily: "var(--lobster)",
  textShadow: "none",
  lineHeight: "40px",
  color: "white",
  paddingTop: "40px"
};

const Footer =()=> { return ( <>

<footer style={styles}>

  <p>Copyright © 2022 The Volminex Company ®, S.L. All rights reserved.</p>

</footer>

</> ) }; export {  Footer };