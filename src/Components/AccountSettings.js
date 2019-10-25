import React, { Component } from "react";
import "../App.css";

export default class AccountSettings extends Component {
  constructor() {
    super();
    this.state = {
      currency: "CAD",
      accountingMethod: "LIFO"
    };
  }

  handleAccountingChange = e => {
    e.preventDefault();
    this.setState({ accountingMethod: e.target.value });
  };

  handleCurrencyChange = e => {
    e.preventDefault();
    this.setState({ currency: e.target.value });
  };

  render() {
    return (
      <div className="account-settings">
        {" "}
        <header>Account Settings </header>
        <div className="card-content">
          <div className="test">
            <p>Default Currency </p>
            <small>
              {" "}
              This is the default currency that all of your valuations will be
              traslated to.{" "}
            </small>
            <div className="form">
              <select
                value={this.state.currency}
                onChange={this.handleCurrencyChange}
                aria-label="currency"
              >
                <option name="CAD" value="CAD">
                  {" "}
                  CAD{" "}
                </option>
                <option name="USD" value="USD">
                  {" "}
                  USD{" "}
                </option>
              </select>
            </div>
            <hr />
            <p> Accounting Methodology </p>
            <small>
              {" "}
              This is the methodology in which your tax and accounting
              documentation will be prepared.{" "}
            </small>
            <div className="form">
              <select
                value={this.state.accountingMethod}
                onChange={this.handleAccountingChange}
                aria-label="accounting method"
              >
                <option value="FIFO" name="FIFO">
                  {" "}
                  FIFO{" "}
                </option>
                <option value="LIFO" name="LIFO">
                  {" "}
                  LIFO{" "}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
