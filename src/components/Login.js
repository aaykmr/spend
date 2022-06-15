import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { getData, setUser } from "../redux/action";
import { toast } from "react-hot-toast";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  useEffect(() => {});
  function handleSubmit() {
    let flag = false;
    if (username === "" || pass === "") {
      flag = false;
      toast.error("All fields must be filled");
      return;
    }
    users.forEach((ele) => {
      if (ele.username === username && ele.password === pass) {
        flag = true;
        dispatch(setUser(ele));
        toast.success("Logged In");
      }
    });
    if (!flag) {
      toast.error("Username and Password do not match");
    }
  }
  return (
    <div className="post">
      <h1>Login</h1>
      <input
        type="text"
        id="loginId"
        data-testid="loginId"
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        id="loginPass"
        data-testid="loginPass"
        placeholder="Password"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <button
        className="btn btn-primary"
        onClick={(e) => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};
