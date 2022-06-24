import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Signup } from "../components/SignUp";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  render(
    <Provider store={store}>
      <Signup />
    </Provider>
  );
});
describe("Testing the Login/Sigup page", () => {
  it("Renders SignUp Fields  ", () => {
    const nameId = screen.getByTestId("nameId");
    expect(nameId).toBeInTheDocument();
    const signId = screen.getByTestId("signId");
    expect(signId).toBeInTheDocument();
    const signPass = screen.getByTestId("signPass");
    expect(signPass).toBeInTheDocument();
    const signPassConfirm = screen.getByTestId("signPassConfirm");
    expect(signPassConfirm).toBeInTheDocument();
  });
  it("SignUp Works", () => {
    const nameId = screen.getByTestId("nameId");
    const signId = screen.getByTestId("signId");
    const signPass = screen.getByTestId("signPass");
    const signPassConfirm = screen.getByTestId("signPassConfirm");
    const signBtn = screen.getByTestId("signBtn");
    userEvent.type(nameId, "AKumar");
    userEvent.type(signId, "aay");
    userEvent.type(signPass, "1234");
    userEvent.type(signPassConfirm, "1234");
    console.log(JSON.parse(localStorage.getItem("users")));
    fireEvent.click(signBtn);
  });
});
