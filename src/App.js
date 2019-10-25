import React from "react";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import AccountSettings from "./Components/AccountSettings";
import PrivacySettings from "./Components/PrivacySettings";
import Header from "./Components/MainContentHeader";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="main-content">
        <Header />
        <AccountSettings />
        <PrivacySettings />
      </div>
    </div>
  );
}

export default App;
