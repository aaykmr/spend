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
    const loginCard = screen.getByTestId("loginCard");
    expect(loginCard).toBeInTheDocument();
  });
  it("Renders Sign Up Card ", () => {
    const signUpCard = screen.getByTestId("signUpCard");
    expect(signUpCard).toBeInTheDocument();
  });
});
