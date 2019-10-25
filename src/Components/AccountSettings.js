import React, { Component } from "react";
import "../App.css";

export default class AccountSettings extends Component {
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
        <select style={{ color: "black" }}>
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
        <select>
          <option value="FIFO"> FIFO </option>
          <option value="LIFO"> LIFO </option>
        </select>
      </div>
    );
  }
}
