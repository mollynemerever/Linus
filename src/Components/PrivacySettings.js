import React, { Component } from "react";
import "../App.css";

export default class PrivacySettings extends Component {
  constructor() {
    super();
    this.state = {
      profilePrivacy: true,
      searchPrivacy: false
    };
  }

  //initialize state 1 true & 1 false for sake of demonstrating that check
  //depends upon state

  updateProfilePrivacy = () => {
    console.log("inside update profile privacy");
    this.setState({ profilePrivacy: !this.state.profilePrivacy });
  };

  updateSearchPrivacy = () => {
    console.log("inside update search privacy");
    this.setState({ searchPrivacy: !this.state.searchPrivacy });
  };
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
        <label class="switch">
          <input
            type="checkbox"
            onClick={this.updateProfilePrivacy}
            checked={this.state.profilePrivacy}
          />
          <span class="slider round" />
        </label>
        <p> Search Privacy </p>
        <small>
          {" "}
          This is the methodology in which your tax and accounting documentation
          will be prepared.{" "}
        </small>
        <label class="switch">
          <input
            type="checkbox"
            class="checkbox"
            onClick={this.updateSearchPrivacy}
            checked={this.state.searchPrivacy}
          />
          <span class="slider round" />
        </label>
      </div>
    );
  }
}
