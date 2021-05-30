import React from "react";
import "./Header.css";
import header_img from "./assets/header.svg";
import Media from 'react-media';

function Header(){
 return <div  className="banner">
       <div className="content">
         <h2>Club Of DEvelopers</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus amet, porro unde nihil blanditiis harum corporis accusantium magnam nesciunt ad totam dignissimos maiores distinctio assumenda iusto, ab in beatae impedit.</p>
     </div>
     <img src={header_img} className="image"/>
     

</div>

    
}
export default Header;