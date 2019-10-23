import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      expandedMenu: false
    };
  }

  expandMenu = () => {
    this.setState({ expandedMenu: true });
  };

  collapseMenu = () => {
    this.setState({ expandedMenu: false });
  };

  render() {
    return (
      <div
        className="menu-component"
        onMouseEnter={this.expandMenu}
        onMouseOut={this.collapseMenu}
      >
        <nav>
          {" "}
          Linus
          <div className="menu-items">
            <ul>
              <li>
                <span class="fas fa-user-circle fa-sm fa-fw" />
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
                <span class="fas fa-file-invoice-dollar fa-sm fa-fw" />
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
                <span class="fas fa-piggy-bank fa-sm fa-fw" />
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
                <span class="fas fa-book-open fa-sm fa-fw" />
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
                <span class="fas fa-store fa-sm fa-fw" />
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
