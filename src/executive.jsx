import React from "react";
import Media from 'react-media';
import profile_img from "./assets/fae_pic.jpg";
import "./executive.css"
import ExecutiveItem from "./executiveItem"

function Executives(){
return <div><div className="exe"><h1>Executives</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ex mol</p>
<div class="grid1">
<ExecutiveItem
         src={profile_img}
         name="Monal Jain"
         post="Executive"/>
 <ExecutiveItem
         src={profile_img}
         name="Vipin Gautam"
         post="Executive"/>
<ExecutiveItem
         src={profile_img}
         name="Tanu Agarwal"
         post="Executive"/>

</div>
</div>
</div>

}

export default Executives;