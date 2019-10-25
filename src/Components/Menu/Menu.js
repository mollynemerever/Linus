import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      expandedMenu: "60px"
    };
  }

  expandMenu = () => {
    this.setState({ expandedMenu: "175px" });
  };

  collapseMenu = () => {
    this.setState({ expandedMenu: "60px" });
  };

  render() {
    return (
      <div
        className="menu-component"
        onMouseEnter={this.expandMenu}
        onMouseOut={this.collapseMenu}
        style={{ width: this.state.expandedMenu }}
      >
        <nav>
          {" "}
          <span className="company-title">Linus</span>
          <div className="menu-items">
            <ul>
              <li>
                <span className="fas fa-user-circle fa-sm fa-fw" />
                <a
                  href="https://www.getlinus.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Accounts{" "}
                </a>
              </li>
              <li>
                <span className="fas fa-file-invoice-dollar fa-sm fa-fw" />
                <a
                  href="https://www.getlinus.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Ledger{" "}
                </a>
              </li>
              <li>
                <span className="fas fa-piggy-bank fa-sm fa-fw" />
                <a
                  href="https://www.getlinus.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Finance{" "}
                </a>
              </li>
              <li>
                <span className="fas fa-book-open fa-sm fa-fw" />
                <a
                  href="https://www.getlinus.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Learn{" "}
                </a>
              </li>
              <li>
                <span className="fas fa-store fa-sm fa-fw" />
                <a
                  href="https://www.getlinus.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Marketplace{" "}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
