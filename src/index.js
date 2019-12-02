import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combineReducers from "./reducers";
import "./index.css";
import App from "./App";

let initialStore = {
  itemId: 1
};

const store = createStore(combineReducers, initialStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
