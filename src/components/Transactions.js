import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../redux/store/store";
import { getData, setFilter } from "../redux/action";
import TransactionList from "./TransactionList";

const Transactions = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.users.transactions);
  const [type, setType] = useState("all");
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-2 w-100">
      <h2>Transactions</h2>
      <nav aria-label="Page navigation example w-100">
        <ul className="pagination">
          <li
            className="page-item"
            onClick={(e) => {
              setType("all");
            }}
          >
            <a className="page-link" href="#">
              All
            </a>
          </li>
          <li
            className="page-item"
            onClick={(e) => {
              setType("debit");
            }}
          >
            <a className="page-link" href="#">
              Debit
            </a>
          </li>
          <li
            className="page-item"
            onClick={(e) => {
              setType("credit");
            }}
          >
            <a className="page-link" href="#">
              Credit
            </a>
          </li>
        </ul>
      </nav>
      <TransactionList transactions={transactions} type={type} />
    </div>
  );
};

export default Transactions;
