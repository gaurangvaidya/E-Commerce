import React from "react";

import "./App.scss";
import Topbar from "./Components/Topbar/topbar.component";

import Routing from "./routing.component";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="main-container">
          <Topbar />
          <div className="main-content">
            <Routing />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
