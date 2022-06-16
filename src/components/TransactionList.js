import React, { useEffect } from "react";

const TransactionList = ({ transactions, type }) => {
  transactions = transactions
    ? transactions.filter((ele) => {
        if (type === "all") {
          return true;
        } else return ele.type === type;
      })
    : [];

  return (
    <>
      {transactions.map((ele) => {
        return (
          <div
            className=" d-flex justify-content-center align-items-center tlist border border-2 border-primary rounded m-2"
            key={ele.id}
          >
            <span className="m-2">{ele.title}</span>
            <span className="m-2">{ele.amount}</span>
            <span className="m-2">{new Date(ele.created).toDateString()}</span>
          </div>
        );
      })}
    </>
  );
};

export default TransactionList;
