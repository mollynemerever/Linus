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
    this.setState({ profilePrivacy: !this.state.profilePrivacy });
  };

  updateSearchPrivacy = () => {
    this.setState({ searchPrivacy: !this.state.searchPrivacy });
  };
  render() {
    return (
      <div className="privacy-settings">
        {" "}
        <header>Privacy Settings </header>
        <div className="card-top">
          <p>Make Profile Private </p>
          <small>
            {" "}
            Your profile with your wallet info will not be public or searchable.{" "}
          </small>
          <label className="switch">
            <input
              type="checkbox"
              onClick={this.updateProfilePrivacy}
              defaultChecked={this.state.profilePrivacy}
            />
            <span className="slider round" />
          </label>
        </div>
        <hr />
        <div className="card-bottom">
          <p> Search Privacy </p>
          <small>
            {" "}
            This is the methodology in which your tax and accounting
            documentation will be prepared.{" "}
          </small>
          <label className="switch">
            <input
              type="checkbox"
              className="checkbox"
              onClick={this.updateSearchPrivacy}
              defaultChecked={this.state.searchPrivacy}
            />
            <span className="slider round" />
          </label>
        </div>
      </div>
    );
  }
}
