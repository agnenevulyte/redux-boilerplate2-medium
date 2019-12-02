/*
 * src/actions/index.js
 */

import { setActionTypes } from "./constants";
// not limited to only one argument
export const setActionTemplate = itemId => ({
  type: setActionTypes.SET_ACTION_TYPE,
  itemId
});
