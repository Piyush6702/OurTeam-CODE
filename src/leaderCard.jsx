import React from "react";
import "./leaderCard.css";
import LeaderCardItem from "./leaderCardItem";
import Media from 'react-media';
import profile_img from "./assets/fae_pic.jpg";

function LeaderCard(){
    return <div className ="cards">
        <h1>Founders</h1>
        <p id="tag">leaders</p>
        <div className="cards_container">
            <div className="cards_wrapper">
                <ul className="cards_items">
                    
                <LeaderCardItem
                      src={profile_img}
                      name="Ritesh Rai"
                      post="Founder"
                    />
                <LeaderCardItem
                      src={profile_img}
                      name="Samarth Agarwal"
                      post="Founder"
                    />
                 <LeaderCardItem
                      src={profile_img}
                      name="Rajat Saxena"
                      post="Founder"
                    />
                </ul>

            </div>
        </div>
        

    </div>
}
  


export default LeaderCard;

