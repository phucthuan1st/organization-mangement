// components/AppContent.js
import { React, useState } from "react";
import "./AppContent.css";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import Dashboard from "./Dashboard/Dashboard";

const AppContent = ({ onLogout }) => {
  const [activeItem, setActiveItem] = useState("main_dashboard");

  const contentItems = [
    { id: "main_dashboard", text: "Main dashboard" },
    { id: "employees_information", text: "Employees Information" },
    { id: "candidates_information", text: "Candidates Information" },
    { id: "event_calendar", text: "Event calendar" },
    { id: "forms", text: "Forms" },
    { id: "documents", text: "Documents" },
    {
      id: "organization_resource",
      text: "Organization resource (Drive) (Experimental)",
    },
    { id: "log_out", text: "Log out" },
  ];

  const ContentProvider = (itemId) => {
    if (itemId === "main_dashboard") {
      return <Dashboard />;
    }

    return <Dashboard />;
  };

  const itemChanged = (itemId) => {
    setActiveItem(itemId);
    if (itemId === "log_out") {
      onLogout();
    }
  };

  return (
    <div className="app-content">
      <div className="top-10-flex">
        <Topbar itemChanged={itemChanged} />
      </div>
      <div className="bottom-90-flex">
        <div className="bottom-left-15-flex">
          <Sidebar
            contentItems={contentItems}
            activeItem={activeItem}
            itemChanged={itemChanged}
          />
        </div>
        <div className="bottom-right-85-flex">
          {/* TODO: PUT OTHERS COMPONENTS HERE */}
          <ContentProvider />
        </div>
      </div>
    </div>
  );
};

export default AppContent;
