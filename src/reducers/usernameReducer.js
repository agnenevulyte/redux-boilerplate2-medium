export const usernameReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        // username is exactly as in setUsername action username
        username: action.username
      };
    default:
      return state;
  }
};
