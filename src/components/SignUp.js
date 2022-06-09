import React from "react";
import { useContext } from "react";

export const Signup = () => {
  return (
    <div className="post">
      <h1>Sign Up </h1>
      <input
        type="text"
        id="signId"
        data-testid="signId"
        placeholder="Choose Username"
      />
      <input
        type="password"
        id="signPass"
        data-testid="signPass"
        placeholder="Choose Password"
      />

      <input
        type="password"
        id="signPassConfirm"
        data-testid="signPassConfirm"
        placeholder="Repeat Password"
      />
      <button className="btn btn-primary">Submit</button>
    </div>
  );
};
