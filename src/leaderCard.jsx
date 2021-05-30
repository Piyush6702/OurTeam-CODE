import React from "react";
import Media from 'react-media';
import profile_img from "./assets/fae_pic.jpg";
import "./leaderCard.css"
import LeaderCardItem from "./leaderCardItem"

function LeaderCard(){
return <div className="leader">
<h1>Founders</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ex mol</p>
<div className="leader_cont ">

        <LeaderCardItem
         src={profile_img}
        name="Ritesh Rai"
        post="Founder"
        facebook="#"
        linkedn="#"
        mail="#"
        />
                <LeaderCardItem
         src={profile_img}
        name="Samarth agarwal"
        post="Founder"
        facebook="#"
        linkedn="#"
        mail="#"
        />

                <LeaderCardItem
         src={profile_img}
        name="Rajat Saxena"
        post="Founder"
        facebook="#"
        linkedn="#"
        mail="#"
        />
</div>
</div>
}

export default LeaderCard;
