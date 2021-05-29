import activity_img from './assets/mem_pic.jpg'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import "./member.css"

const member = ({ name, im, post, mail, fb_link, lnkdin_link }) => {
    return (
          <div className='cardm'>
            <div className='imgem'>
                <img height='180px' src={activity_img} alt='Image 1'/>
            </div>
            <div className='titlem'>
                <h4>{name}</h4>
            </div>
            <div className='desm'>
                <p className='detailsm'>{post}</p>
            </div>
            <div style={{padding:'0px 0px 5px 0px'}} className='desm'>
                <a className='icnm'><FaFacebook /></a>
                <a className='icnm'><FaLinkedinIn /></a>
                <a className='icnm'><ImMail4 /></a>
            </div>
        </div>
     
    )
}

export default member
