import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, updateUser, setFilter } from "../redux/action";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  let debit = 0;
  let credit = 0;
  let total = 0;
  user.transactions.forEach((ele) => {
    switch (ele.type) {
      case "debit":
        debit += ele.amount;
        total -= ele.amount;
        break;
      case "credit":
        credit += ele.amount;
        total += ele.amount;
        break;
    }
  });
  return (
    <div className="row p-4">
      <div className="card col d-flex flex-column justify-content-center align-items-center bg-transparent border-success p-4 m-2">
        <h3>Credit</h3>
        <h2 className="text-success">{credit}</h2>
      </div>
      <div className="card col d-flex flex-column justify-content-center align-items-center bg-transparent border-danger p-4 m-2">
        <h3>Debit</h3>
        <h2 className="text-danger">{debit}</h2>
      </div>
      <div className="card col d-flex flex-column justify-content-center align-items-center bg-transparent border-primary p-4 m-2">
        <h3>Balance</h3>
        <h2 className="text-primary">{total}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
