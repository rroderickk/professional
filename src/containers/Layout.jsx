import React from "react";
import { Header } from "../components/Header";

const styleLayout = {
  zIndex: 1,
  textAlign: "center", 
  backgroundColor: "#000",
  fontFamily: "Coolvetica",
  minHeight: "100%" ,
  padding: "20px", //!20
  maxWidth: "100%",
  minWidth: "100vp",  
  flexDirection: "column",
  textShadow: "1px 1px 1px crimson"/* rgba(0,0,0,0.004) */,
};

const Layout =({ children })=> { return  (<>  <Header/>
<div className="Layout" style={styleLayout}> {children} </div> </> );  }; export { Layout };