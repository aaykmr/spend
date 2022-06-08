import React from "react";
import styles from "../styles/signin.module.css";
import { useContext } from "react";
import { Theme } from "../App";

export const Signup = () => {
  const theme = useContext(Theme);
  return (
    <div className={styles.post}>
      <h1>SignUp </h1>
      <input
        type="text"
        id="signId"
        data-testid="signId"
        placeholder="Choose Username"
      />
      <br></br>
      <input
        type="password"
        id="signPass"
        data-testid="signPass"
        placeholder="Choose Password"
      />
      <br></br>
      <input
        type="password"
        id="signPassConfirm"
        placeholder="Repeat Password"
      />
    </div>
  );
};
