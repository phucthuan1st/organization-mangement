// components/AppContent.js
import React from "react";
import "./AppContent.css";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

const AppContent = ({ onLogout }) => {
  return (
    <div className="app-content">
      <div className="top-10-flex">
        <Topbar onLogoutPressed={onLogout} />
      </div>
      <div className="bottom-90-flex">
        <div className="bottom-left-15-flex">
          <Sidebar onLogoutPressed={onLogout} />
        </div>
        <div className="bottom-right-85-flex">
          <h1>This is the content of the main components</h1>
        </div>
      </div>
    </div>
  );
};

export default AppContent;