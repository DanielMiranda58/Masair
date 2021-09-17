import React from "react";
import {Link} from "react-router-dom";

import "../styles/header.css";
import Logo from "../img/imagen-1.png";

const Header =() =>{

return ( 
       <header className="header_main">
           <div>
           <Link to={`/`}><img src={Logo} alt="imagen" /></Link> 
           </div>
           <ul className="ul-main">
               <li><Link to={`/Login`}>Billing</Link> </li>
               <li><Link to={`/`}>Parking</Link>  </li>
               <li><Link to={`/`}>Contact</Link>  </li>
               <li> <Link to={`/`}>Billing</Link> </li>
               
           </ul>
           
       </header>
    
    );
}
 export default Header;