import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { Login } from "../components/Login";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
beforeEach(() => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
});
describe("Testing the Login/Sigup page", () => {
  it("Renders Login Card  ", () => {
    const loginId = screen.getByTestId("loginId");
    expect(loginId).toBeInTheDocument();

    const loginPass = screen.getByTestId("loginPass");
    expect(loginPass).toBeInTheDocument();

    const loginBtn = screen.getByTestId("loginBtn");
    expect(loginBtn).toBeInTheDocument();

    userEvent.type(loginId, "ak");
    userEvent.type(loginPass, "1234");
    console.log(loginBtn);
    // fireEvent.click(loginBtn);
  });
  it("Renders Sign Up Card ", () => {
    const nameId = screen.getByTestId("nameId");
    expect(nameId).toBeInTheDocument();

    const signId = screen.getByTestId("signId");
    expect(signId).toBeInTheDocument();

    const signPass = screen.getByTestId("signPass");
    expect(signPass).toBeInTheDocument();

    const signPassConfirm = screen.getByTestId("signPassConfirm");
    expect(signPassConfirm).toBeInTheDocument();
  });
});
