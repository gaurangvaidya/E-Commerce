import React from "react";

import "./App.scss";
import Topbar from "./Components/Topbar/topbar.component";

import Routing from "./routing.component";

function App() {
  return (
    <div className="main-container">
      <Topbar/>
      <div className="main-content">
        <Routing />
      </div>
    </div>
  );
}

export default App;
