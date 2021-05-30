import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";


function LeaderCardItem(props){
return <div className="main_cot">
    <div className="img_cot" style={{height:235, width:220}}>
    <img 
    src={props.src}
    alt="profile-pic"
    className="cards_item_img"
    /></div >
    <p className="cards_item_text" style={{fontSize:20}}>{props.name}</p>
        <p className="cards_item_text_founder" style={{fontSize:15}}>{props.post}</p>
   <div style={{padding:'0px 0px 5px 0px'}} className='des'>
                <a className='icn' href={props.facebook}><FaFacebook /></a>
                <a className='icn' href={props.linkedn}><FaLinkedinIn /></a>
                <a className='icn' href={props.mail}><ImMail4 /></a>
    </div>
   
   
</div>

};

export default LeaderCardItem;
