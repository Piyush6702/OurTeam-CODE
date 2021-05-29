import React from "react"
import profile_img from "./assets/fae_pic.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

function ExecutiveItem(props){
return <div className="main_cot">
<div className="img_cot" style={{height:220, width:200}}>
<img 
src={props.src}
alt="profile-pic"
className="cards_item_img"
/></div >
<p className="cards_item_text" >{props.name}</p>
    <p className="cards_item_text_founder "style={{fontSize:15}}>{props.post}</p>
<div style={{padding:'0px 0px 5px 0px'}} className='des'>
            <a className='icn' href="#"><FaFacebook /></a>
            <a className='icn' href="#"><FaLinkedinIn /></a>
            <a className='icn' href="#"><ImMail4 /></a>
</div>

</div>

}

export default ExecutiveItem;