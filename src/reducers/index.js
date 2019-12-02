/*
 * src/reducers/index.js
 */

import { combineReducers } from "redux";
import { childReducer } from "./childReducer";

//import and add more child reducers as your project builds.
// then I use that child in my component in mapStateToProps
export default combineReducers({
  child: childReducer
});
