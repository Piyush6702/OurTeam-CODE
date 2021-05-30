import React from "react";
import Media from 'react-media';
import profile_img from "./assets/fae_pic.jpg";
import "./executive.css"
import ExecutiveItem from "./executiveItem"

function Executives(){
return <div className="exe"><h1>Executives</h1>
<p exe_tag>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ex mol</p>
<div class="executives">
<ExecutiveItem
         src={profile_img}
         name="Monal Jain"
         facebook="#"
         linkedn="#"
         mail="#"
         />
 <ExecutiveItem
         src={profile_img}
         name="Vipin Gautam"
         facebook="#"
         linkedn="#"
         mail="#"
         />
<ExecutiveItem
         src={profile_img}
         name="Tanu Agarwal"
         facebook="#"
         linkedn="#"
         mail="#"
         />

</div>
</div>


}

export default Executives;