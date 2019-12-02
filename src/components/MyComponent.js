import React from "react";
import { connect } from "react-redux";
import { setActionTemplate } from "../actions";

//component
export function MyComponent({ itemId, updateStateHandleOnClick }) {
  // handleOnClick takes the id, because updateStateHandleOnClick takes an argument
  const handleOnClick = id => {
    updateStateHandleOnClick(id);
  };
  return (
    <div>
      <h1>My Component</h1>
      <p>
        <a onClick={() => handleOnClick(1)}>add1</a>
      </p>
      <p>
        <a onClick={() => handleOnClick(5)}>add5</a>
      </p>
      <p>Current item ID: {itemId}</p>
    </div>
  );
}

//redux configuration:
const mapStateToProps = state => ({
  itemId: state.child.itemId // child comes from combineReducers, itemId comes from childReducer
});
const mapDispatchToProps = dispatch => ({
  updateStateHandleOnClick: itemId => dispatch(setActionTemplate(itemId)) // name it so it makes sense.
});

export const MyComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);

export default MyComponentContainer;
