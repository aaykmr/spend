import React from "react";
import styles from "../styles/signin.module.css";
import { useContext } from "react";
import { Theme } from "../App";

export const Login = () => {
  let theme = useContext(Theme);
  console.log(theme);
  return (
    <div className={styles.post}>
      <h1>Login</h1>
      <input
        type="text"
        id="loginId"
        data-testid="loginId"
        placeholder="Username"
      />
      <br></br>
      <input
        type="password"
        id="loginPass"
        data-testid="loginPass"
        placeholder="Password"
      />
    </div>
  );
};
