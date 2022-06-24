import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Login } from "../components/Login";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
beforeEach(() => {
  localStorage.removeItem("users");
  localStorage.removeItem("user");
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  );
});
describe("Testing the Login/Sigup page", () => {
  it("Renders Login Fields  ", () => {
    const loginId = screen.getByTestId("loginId");
    expect(loginId).toBeInTheDocument();

    const loginPass = screen.getByTestId("loginPass");
    expect(loginPass).toBeInTheDocument();

    const loginBtn = screen.getByTestId("loginBtn");
    expect(loginBtn).toBeInTheDocument();
  });
  it("Login Works", () => {
    const loginId = screen.getByTestId("loginId");
    const loginPass = screen.getByTestId("loginPass");
    const loginBtn = screen.getByTestId("loginBtn");
    screen.debug(undefined, 50000); //(variable name, liine limit)
    userEvent.type(loginId, "ak");
    userEvent.type(loginPass, "1234");
    fireEvent.click(loginBtn);
    const currUsername = JSON.parse(localStorage.getItem("user")).username;
    expect(currUsername).toBe("ak");
  });
});
