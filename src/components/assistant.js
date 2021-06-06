import activity_img from '../assets/mem_pic.jpg'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import "../styles/member.css"

const assistant = ({ name, im, post, mail, fb_link, lnkdin_link }) => {
    return (
          <div className='cardm'>
            <div className='imgem'>
                <img  src={activity_img} alt='Image 1'/>
            </div>
            <div className='titlem'>
                <h4>{name}</h4>
            </div>

            <div style={{padding:'0px 0px 5px 0px'}} className='desm'>
                <a className='icnm'><FaFacebook /></a>
                <a className='icnm'><FaLinkedinIn /></a>
                <a className='icnm'><ImMail4 /></a>
            </div>
        </div>
     
    )
}

export default assistant;