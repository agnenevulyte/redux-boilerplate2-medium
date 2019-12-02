/*
 * src/actions/index.js
 */

import { setActionTypes } from "./constants";
// not limited to only one argument
// we have a property like itemId, when we want to update the state
export const setActionTemplate = itemId => ({
  type: setActionTypes.SET_ACTION_TYPE,
  itemId
});

export const setUsername = str => ({
  type: setActionTypes.SET_USERNAME,
  username: str
});
