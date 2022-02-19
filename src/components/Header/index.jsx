import React from "react";
import { useState, useContext } from "react";
import logoright      from "../../../public/assets/logos/logotipo R1.png";
import logor          from "@assets/logos/logotipo R1.png"; 
import logomenu       from "@assets/icons/menu.svg";
import { AppContext } from "@context/AppContext";
import { SideBar }    from "@containers/SideBar";
import "./Header.scss"; //*(@)|==>styles;

const Header /**=========================================*/  =( )=> {
const [toggle, setToggle] = useState(false);
const {     state       } = useContext(AppContext);
const [toggleOrders, setToggleOrders] = useState(false);
const    handleToggle   =( )=> setToggle(!toggle);

return ( <> <div className="nav-body">
<img src={logoright} alt="menu" className="icon-menu"/>
<div className="navbar-left">
  <ul>
    <li> <a href="/">BIOGRAPHY </a> </li>  <li> <a href="/">BLASTINGS </a> </li> 
    <li> <a href="/">DESIGNS   </a> </li>  <li> <a href="/">PROJECTS  </a> </li>
    <li> <a href="/">CONTACT   </a> </li>  {/* <li> <a href="/">PROJECTS </a> </li> */}
  </ul>
</div>
<div className="navbar-right">
  <ul>
    <li className="navbar-email">rroderickk@gmail.com </li>
    <li className="navbar-asside">
      <img id="logomenu" src={logomenu} onClick={handleToggle} alt="menu"/>
                                            {toggle&&<SideBar/>}
    </li>
    <li className="navbar-asside">
      <img src={logor} alt="logor" id="logor"/> 
    </li>
  </ul>
</div>
</div>  </> ); 
}; export {Header};