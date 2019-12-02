/*
 * src/reducers/childReducer.js
 */

export const childReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case "SET_ACTION_TYPE":
      newState = Object.assign({}, { someValue: action.itemId });
      return newState;

    //define more cases as your project builds.
    default:
      return state;
  }
};
