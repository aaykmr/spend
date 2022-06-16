import React, { Component } from "react";
import { connect } from "react-redux";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.credit = 0;
    this.debit = 0;
    this.total = 0;
  }

  componentDidUpdate() {
    console.log("Update");
  }
  calculate() {
    this.credit = 0;
    this.debit = 0;
    this.total = 0;
    this.props.user.transactions.forEach((ele) => {
      switch (ele.type) {
        case "debit":
          this.debit += ele.amount;
          this.total -= ele.amount;
          break;
        case "credit":
          this.credit += ele.amount;
          this.total += ele.amount;
          break;
      }
    });
  }

  render() {
    this.calculate();
    console.log("first");
    return (
      <div className="row p-4">
        <div className="card col d-flex flex-column justify-content-center align-items-center bg-transparent border-success p-4 m-2">
          <h3>Credit</h3>
          <h2 className="text-success">{this.credit}</h2>
        </div>
        <div className="card col d-flex flex-column justify-content-center align-items-center bg-transparent border-danger p-4 m-2">
          <h3>Debit</h3>
          <h2 className="text-danger">{this.debit}</h2>
        </div>
        <div className="card col d-flex flex-column justify-content-center align-items-center bg-transparent border-primary p-4 m-2">
          <h3>Balance</h3>
          <h2 className="text-primary">{this.total}</h2>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.users,
});

export default connect(mapStateToProps)(Dashboard);
