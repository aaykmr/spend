import React from "react";
import { useContext } from "react";

export const Login = () => {
  return (
    <div className="post">
      <h1>Login</h1>
      <input
        type="text"
        id="loginId"
        data-testid="loginId"
        placeholder="Username"
      />
      <input
        type="password"
        id="loginPass"
        data-testid="loginPass"
        placeholder="Password"
      />
      <button className="btn btn-primary">Submit</button>
    </div>
  );
};
