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
        <p>Default Currency </p>
        <small>
          {" "}
          This is the default currency that all of your valuations will be
          traslated to.{" "}
        </small>
        <select
          value={this.state.currency}
          onChange={this.handleCurrencyChange}
        >
          <option value="USD"> USD </option>
          <option value="CAD"> CAD </option>
        </select>
        <hr />
        <p> Accounting Methodology </p>
        <small>
          {" "}
          This is the methodology in which your tax and accounting documentation
          will be prepared.{" "}
        </small>
        <select
          value={this.state.accountingMethod}
          onChange={this.handleAccountingChange}
        >
          <option value="FIFO"> FIFO </option>
          <option value="LIFO"> LIFO </option>
        </select>
      </div>
    );
  }
}
