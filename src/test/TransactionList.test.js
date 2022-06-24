import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import json from "../users.json";
import TransactionList from "../components/TransactionList";

beforeEach(() => {
  render(
    <Provider store={store}>
      <TransactionList user={json[0]} type={"all"} />
    </Provider>
  );
});
describe("Testing the Login/Sigup page", () => {
  it("Renders Transaction list Fields  ", () => {
    const transactions = screen.getAllByTestId("transaction");
    expect(transactions.length).toBeGreaterThan(0);
  });
  it("Renders Delete transaction button", () => {
    const deleteTransactions = screen.getAllByTestId("transaction");
    expect(deleteTransactions.length).toBeGreaterThan(0);
  });
  it("Delete transaction button works", () => {
    let deleteTransactions = screen.getAllByTestId("deleteTransaction");
    const initialLength = deleteTransactions.length;
    fireEvent.click(deleteTransactions[0]);
    deleteTransactions = screen.getAllByTestId("deleteTransaction");
    expect(deleteTransactions.length).toBe(initialLength - 1);
  });
});
