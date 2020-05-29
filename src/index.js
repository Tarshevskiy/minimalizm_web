import "./index.css";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state from "./database/state";
import { rerenderEntireTree } from "./render";
import { BrowserRouter } from "react-router-dom";

// let rerenderEntireTree = (state) => {
//   ReactDOM.render(
//     <BrowserRouter>
//       <App state={state} />
//     </BrowserRouter>
//   );
// };
rerenderEntireTree(state)

serviceWorker.unregister();
