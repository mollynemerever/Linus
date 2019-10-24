import React, { Component } from "react";
import "../App.css";

export default class PrivacySettings extends Component {
  render() {
    return (
      <div className="privacy-settings">
        {" "}
        <header>Privacy Settings </header>
        <p>Make Profile Private </p>
        <small>
          {" "}
          Your profile with your wallet info will not be public or searchable.{" "}
        </small>
        <select>
          <option value="USD"> USD </option>
          <option value="CAD"> CAD </option>
        </select>
        <p> Search Privacy </p>
        <small>
          {" "}
          This is the methodology in which your tax and accounting documentation
          will be prepared.{" "}
        </small>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round" />
        </label>
      </div>
    );
  }
}
