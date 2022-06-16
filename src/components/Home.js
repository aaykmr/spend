import React, { useState, useEffect } from "react";
import Transactions from "./Transactions";

import Add from "./Add";
import Dashboard from "./Dashboard";
const Home = () => {
  return (
    <div className="d-flex flex-column p-2 justify-content-center align-items-center">
      <Add />
      <Dashboard />
      <Transactions />
    </div>
  );
};

export default Home;
