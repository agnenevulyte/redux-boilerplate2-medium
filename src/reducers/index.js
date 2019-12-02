/*
 * src/reducers/index.js
 */

import { combineReducers } from "redux";
import { childReducer } from "./childReducer";

//import and add more child reducers as your project builds.
export default combineReducers({
  childReducer
});
