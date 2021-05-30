import React from "react"
import profile_img from "./assets/fae_pic.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

function ExecutiveItem(props){
return <div className="exe_main_cot">
<div className="exe_cot" >
<img 
src={props.src}
alt="profile-pic"
className="cards_item_img1"

/></div >
<p className="exe_name" >{props.name}</p>
<div style={{padding:'0px 0px 5px 0px'}} className='des'>
            <a className='icn' href={props.facebook}><FaFacebook /></a>
            <a className='icn' href={props.linkedn}><FaLinkedinIn /></a>
            <a className='icn' href={props.mail}><ImMail4 /></a>
</div>

</div>

}

export default ExecutiveItem;