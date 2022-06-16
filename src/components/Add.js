import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, updateUser, setFilter } from "../redux/action";
import { store } from "../redux/store/store";
import { toast } from "react-hot-toast";
import uuid from "react-uuid";

const Add = () => {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [add, setAdd] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  //console.log(user);
  function handleType(type) {
    setType(type);
  }
  function handleSubmit(e) {
    console.log(amount);
    if (
      type === "" ||
      title === "" ||
      amount === null ||
      amount === 0 ||
      isNaN(amount)
    ) {
      toast.error("All fields must be filled");
      return;
    }
    user.transactions.push({
      title: title,
      amount: amount,
      type: type,
      created: Date.now(),
      id: uuid(),
    });
    let newdata = {
      ...user,
    };
    dispatch(updateUser(user));
    dispatch(setUser(user));
    toast.success("Transaction added");
    setAdd(false);
    setType("");
    setTitle("");
    setAmount(0);
  }
  let form = (
    <div className="d-flex column">
      <button
        className={
          type == "debit"
            ? "btn btn-success m-2"
            : "btn btn-outline-success m-2"
        }
        onClick={(e) => handleType("debit")}
      >
        Debit
      </button>
      <button
        className={
          type == "credit"
            ? "btn btn-success m-2"
            : "btn btn-outline-success m-2"
        }
        onClick={(e) => handleType("credit")}
      >
        Credit
      </button>
      <input
        className="input m-2"
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <input
        className="input m-2"
        type="number"
        placeholder="Amount"
        onChange={(e) => {
          setAmount(parseInt(e.target.value));
        }}
      ></input>
      <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
        Submit
      </button>
    </div>
  );
  return (
    <div
      className={
        add
          ? "card bg-transparent border-primary text-center fs-6 p-2 add"
          : "card bg-primary border-primary text-center fs-3 p-2 add"
      }
    >
      <span
        onClick={(e) => {
          add ? setAdd(false) : setAdd(true);
        }}
      >
        &#x271A; Add a transaction
      </span>
      {add ? form : ""}
    </div>
  );
};

export default Add;
