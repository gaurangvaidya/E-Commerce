import React from "react";

import "./App.scss";
import Topbar from "./Components/Topbar/topbar.component";

import Routing from "./routing.component";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store,persistor } from "./Redux/store";

import { PersistGate } from "redux-persist/integration/react";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate persistor={persistor}>
        <div className="main-container">
          <Topbar />
          <div className="main-content">
            <Routing />
          </div>
        </div>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
