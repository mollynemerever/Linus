import React from "react";

const Menu = () => {
  return (
    <div>
      <nav>
        {" "}
        Menu component
        <a
          href="https://www.getlinus.io"
          target="_blank"
          rel="noopener noreferrer"
          class="fas fa-user-circle"
        >
          {" "}
          Accounts{" "}
        </a>
        <a
          href="https://www.getlinus.io"
          target="_blank"
          rel="noopener noreferrer"
          class="fas fa-file-invoice-dollar"
        >
          {" "}
          Ledger{" "}
        </a>
        <a
          href="https://www.getlinus.io"
          target="_blank"
          rel="noopener noreferrer"
          class="fas fa-piggy-bank"
        >
          {" "}
          Finance{" "}
        </a>
        <a
          href="https://www.getlinus.io"
          target="_blank"
          rel="noopener noreferrer"
          class="fas fa-book-open"
        >
          {" "}
          Learn{" "}
        </a>
        <a
          href="https://www.getlinus.io"
          target="_blank"
          rel="noopener noreferrer"
          class="fas fa-store"
        >
          {" "}
          Marketplace{" "}
        </a>
      </nav>
    </div>
  );
};

export default Menu;
