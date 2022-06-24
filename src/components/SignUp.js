import React, { useState } from "react";
import { useContext } from "react";
import { getData, setNewUser } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

export const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [passV, setPassV] = useState();
  const dispatch = useDispatch();
  let users = useSelector((state) => state.users);
  function handleSubmit(e) {
    e.preventDefault();
    let flag = true;
    if (name === "" || username === "" || pass === "") {
      toast.error("All fields must be filled");
      flag = false;
    }
    users.forEach((ele) => {
      if (flag) {
        if (ele.username === username) {
          flag = false;
          toast.error("Username has already been taken");
          return;
        }

        if (pass !== passV) {
          flag = false;
          toast.error("Passwords do not match");
          return;
        }
      }
    });
    if (flag) {
      let newuser = {
        username: username,
        password: pass,
        name: name,
        transactions: [],
      };
      users.push(newuser);
      dispatch(setNewUser(users));
      toast.success("Signed Up Successfully. Please login to continue");
    }
  }

  return (
    <div className="post" data-testid="signUpCard">
      <h1>Sign Up </h1>
      <input
        type="text"
        id="nameId"
        data-testid="nameId"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        id="signId"
        data-testid="signId"
        placeholder="Choose Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        id="signPass"
        data-testid="signPass"
        placeholder="Choose Password"
        onChange={(e) => setPass(e.target.value)}
      />
      <input
        type="password"
        id="signPassConfirm"
        data-testid="signPassConfirm"
        placeholder="Repeat Password"
        onChange={(e) => setPassV(e.target.value)}
      />
      <button
        className="btn btn-primary"
        data-testid="signBtn"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </button>
    </div>
  );
};
