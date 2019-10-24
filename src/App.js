import React from "react";
import "./App.css";
import Menu from "./Components/Menu";
import AccountSettings from "./Components/AccountSettings";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="main-content">
        <AccountSettings />
      </div>
    </div>
  );
}

export default App;
