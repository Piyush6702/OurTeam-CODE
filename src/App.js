import React from "react";
import Header from "./header";
import LeaderCard from "./leaderCard";
import Executives from "./executive";
import Work from "./work";
import Members from './Members';
import Assistant from "./components/assistantItem"
import"./App.css";

function App() {
  return (
    <div>
    <header><Header/></header>
    <div className="leader"><LeaderCard/></div>
    <div className="executive"><Executives/></div>
    <div className="member">
      <h2>Members</h2>
      <Members/>
      </div>
    <div className="member">
      <h2>Assistants</h2>
      <Assistant/>
      </div>
    <Work/>
</div>
)
}
export default App;
