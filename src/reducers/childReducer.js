/*
 * src/reducers/childReducer.js
 */
// const initialState = {
//   itemId: 1
// };
export const childReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case "SET_ACTION_TYPE":
      newState = Object.assign({}, { itemId: action.itemId }); // to access itemId in mapStateToProps
      return newState;

    //define more cases as your project builds.
    default:
      return state;
  }
};
