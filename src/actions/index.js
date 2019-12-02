/*
 * src/actions/index.js
 */

// not limited to only one argument
export const setActionTemplate = itemId => ({
  type: "SET_ACTION_TYPE",
  itemId: itemId
});

// Redux also suggest defining constants for your action types.
export const setActionTypes = {
  SET_ACTION_TYPE: "SET_ACTION_TYPE"
};
