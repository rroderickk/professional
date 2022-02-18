import React from "react";
import { Header } from "../components/Header";

const styleLayout = {
  zIndex: 1,
  textAlign: "center", 
  backgroundColor: "#000",
  fontFamily: "Coolvetica",
  minHeight: "100vh" ,
  padding: "20px",
  boxSizing: "border-box",
  maxWidth: "100vp",
  textShadow: "1px 1px 1px crimson"/* rgba(0,0,0,0.004) */,
};

const Layout =({ children })=> { return  (<>  <Header/>
<div className="Layout" style={styleLayout}> {children} </div> </> );  }; export { Layout };