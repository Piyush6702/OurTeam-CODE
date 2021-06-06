import React from "react";
import Header from "./components/header";

import WorkWithUs from "./components/WorkWithUs";

import Members from "./components/Members";
import "./App.css";

function App() {
  const operatingdiv = "Operating Member";
  const assistancediv = "Assistance Team";
  return (
    <div className="teamDiv">
      <header>
        <Header />
      </header>
      <div className="member operatingdiv">
        <h2>
          Operating Team
          <hr className="mid-hr" />
        </h2>
        <Members post={operatingdiv} />
      </div>
      <div className="member assitancediv">
        <h2>
          Assistance Team
          <hr className="mid-hr" />
        </h2>
        <Members post={assistancediv} />
      </div>
      <WorkWithUs />
    </div>
  );
}
export default App;
