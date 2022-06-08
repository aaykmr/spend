import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import User from "./Name";
import Navbar from "./Navbar";
import Price from "./Price";
import Signup from "./Signup";

const Routee = () => {
  return (
    <div>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/user/:id" element={<User />}></Route>
        </Routes>
      </>
    </div>
  );
};

export default Routee;
