import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, updateUser } from "../redux/action";

const TransactionList = ({ user, type }) => {
  const dispatch = useDispatch();
  let transactions = JSON.parse(JSON.stringify(user.transactions));
  transactions = transactions
    ? transactions.filter((ele) => {
        if (type === "all") {
          return true;
        } else return ele.type === type;
      })
    : [];
  function haveSameData(obj1, obj2) {
    const obj1Length = Object.keys(obj1).length;
    const obj2Length = Object.keys(obj2).length;

    if (obj1Length === obj2Length) {
      return Object.keys(obj1).every(
        (key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
      );
    }
    return false;
  }
  function handleDelete(ele) {
    let curr = user.transactions.find((e) => {
      haveSameData(ele, e);
      return haveSameData(e, ele);
    });
    user.transactions.splice(user.transactions.indexOf(curr), 1);
    dispatch(updateUser(user));
    dispatch(setUser(user));
  }

  return (
    <>
      {transactions.map((ele) => {
        return (
          <div
            className=" d-flex justify-content-between align-items-center tlist border border-2 border-primary rounded m-2"
            key={ele.id}
          >
            <span className="m-2">{ele.title}</span>
            <span className="m-2">{ele.amount}</span>
            <span className="m-2">{new Date(ele.created).toDateString()}</span>
            <button
              className="btn btn-outline-danger m-2"
              onClick={(e) => handleDelete(ele)}
            >
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TransactionList;
