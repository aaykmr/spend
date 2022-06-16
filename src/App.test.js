import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store/store";

test("renders Login Card  ", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const loginId = screen.getByTestId("loginId");
  expect(loginId).toBeInTheDocument();

  const loginPass = screen.getByTestId("loginPass");
  expect(loginPass).toBeInTheDocument();
});
test("renders Sign Up Card ", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const nameId = screen.getByTestId("nameId");
  expect(nameId).toBeInTheDocument();

  const signId = screen.getByTestId("signId");
  expect(signId).toBeInTheDocument();

  const signPass = screen.getByTestId("signPass");
  expect(signPass).toBeInTheDocument();

  const signPassConfirm = screen.getByTestId("signPassConfirm");
  expect(signPassConfirm).toBeInTheDocument();
});
