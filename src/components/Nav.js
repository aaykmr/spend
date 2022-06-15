import React from "react";
import { Link } from "react-router-dom";
import cash from "../images/cash.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action";

const Nav = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.users.name);
  function handleLogout() {
    dispatch(logout());
  }
  return (
    <div className="navbar navbar-dark d-flex justify-content-between bg-danger p-3">
      <img src={cash} alt="logo" width="50px"></img>

      <h3>Hello, {name}</h3>
      <Link to="/">
        <button
          className="btn btn-outline-light"
          onClick={(e) => {
            handleLogout();
          }}
        >
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Nav;
