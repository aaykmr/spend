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
  function handleType(type) {
    setType(type);
  }
  function handleSubmit(e) {
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
        data-testid="debitBtn"
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
        data-testid="creditBtn"
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
        data-testid="title"
        className="input m-2"
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <input
        data-testid="amount"
        className="input m-2"
        type="number"
        placeholder="Amount"
        onChange={(e) => {
          setAmount(parseInt(e.target.value));
        }}
      ></input>
      <button
        data-testid="submitBtn"
        className="btn btn-primary"
        onClick={(e) => handleSubmit(e)}
      >
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
        data-testid="addBtn"
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
