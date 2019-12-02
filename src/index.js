import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combineReducers from "./reducers";
import "./index.css";
import App from "./App";

// initialStore  neccessary for the first time page loads
// the keys (child, user) should be the same as in combineReducers
let initialStore = {
  child: { itemId: 9999 },
  // foo: 123,
  user: { username: "no name" }
};

const store = createStore(
  combineReducers,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// const store = createStore(combineReducers, initialStore);
// const finalCreateStore = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )(createStore)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
