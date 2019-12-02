import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combineReducers from "./reducers";
import "./index.css";
import App from "./App";

// initialStore  neccessary for the first time page loads
// the keys (child) should be the same as in combineReducers
let initialStore = {
  child: { itemId: 9999 }
};

const store = createStore(combineReducers, initialStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
