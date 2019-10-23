import React from "react";

const Menu = () => {
  return (
    <div className="menu-component">
      <nav>
        {" "}
        Linus
        <div>
          <ul>
            <li>
              <i class="fas fa-user-circle" />
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
              <i class="fas fa-file-invoice-dollar" />
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
              <i class="fas fa-piggy-bank" />
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
              <i class="fas fa-book-open" />
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
              <i class="fas fa-store" />
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
};

export default Menu;
