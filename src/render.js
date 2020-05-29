import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import state from "./database/state";
import { addInfoWeather } from "./database/state";
import { BrowserRouter } from "react-router-dom";


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addInfoWeather={addInfoWeather} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

