import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Dashboard = ({ onLogout }) => {
  return (
    <div className="Dashboard">
      <Topbar onLogoutPressed={onLogout} />
      <Sidebar onLogoutPressed={onLogout} />
    </div>
  );
};

export default Dashboard;
