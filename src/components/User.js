import React from "react";
import { connect } from "react-redux";
import { setUsername } from "../actions";

export function User({ username, updateStateHandleOnChange }) {
  const handleInputUserName = e => {
    updateStateHandleOnChange(e.target.value);
  };
  return (
    <div>
      Username:
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={e => handleInputUserName(e)}
      />
      <h1>Username: {username}</h1>
    </div>
  );
}

const mapStateToProps = state => ({
  username: state.user.username
});

const mapDispatchToProps = dispatch => ({
  updateStateHandleOnChange: username => dispatch(setUsername(username))
});

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;
