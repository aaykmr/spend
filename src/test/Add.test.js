import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Add from "../components/Add";

import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import userEvent from "@testing-library/user-event";

beforeAll(() => {});
beforeEach(() => {
  render(
    <Provider store={store}>
      <Add />
    </Provider>
  );
});
describe("Testing the Add Component page", () => {
  it("Renders Add Button", () => {
    const addBtn = screen.getByTestId("addBtn");
    expect(addBtn).toBeInTheDocument();
    console.log(addBtn);
    fireEvent.click(addBtn);
  });
  it("Renders Debit Button", () => {
    const addBtn = screen.getByTestId("addBtn");
    fireEvent.click(addBtn);
    const debitBtn = screen.getByTestId("debitBtn");
    expect(debitBtn).toBeInTheDocument();
  });
  it("Renders Credit Button", () => {
    const addBtn = screen.getByTestId("addBtn");
    fireEvent.click(addBtn);
    const creditBtn = screen.getByTestId("creditBtn");
    expect(creditBtn).toBeInTheDocument();
  });
  it("Renders Title field", () => {
    const addBtn = screen.getByTestId("addBtn");
    fireEvent.click(addBtn);
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
  });
  it("Renders Amount Field", () => {
    const addBtn = screen.getByTestId("addBtn");
    fireEvent.click(addBtn);
    const amount = screen.getByTestId("amount");
    expect(amount).toBeInTheDocument();
  });
  it("Renders Submit button", () => {
    const addBtn = screen.getByTestId("addBtn");
    fireEvent.click(addBtn);
    const submitBtn = screen.getByTestId("submitBtn");
    expect(submitBtn).toBeInTheDocument();
  });
  it("Submit functionality tets", () => {
    const addBtn = screen.getByTestId("addBtn");
    fireEvent.click(addBtn);
    const debitBtn = screen.getByTestId("debitBtn");
    const creditBtn = screen.getByTestId("creditBtn");
    const title = screen.getByTestId("title");
    const amount = screen.getByTestId("amount");
    const submitBtn = screen.getByTestId("submitBtn");
    fireEvent.click(debitBtn);
    userEvent.type(title, "Test input");
    userEvent.type(amount, "10000");
    // fireEvent.click(submitBtn);
  });
});
