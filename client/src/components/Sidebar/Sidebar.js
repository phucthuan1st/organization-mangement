import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ onLogoutPressed }) => {
  const [activeLink, setActiveItem] = useState("main_dashboard");

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    if (itemId === "log_out") {
      // Logout item clicked
      onLogoutPressed();
    }
  };

  const sidebarItems = [
    { id: "main_dashboard", text: "Main dashboard" },
    { id: "employees_information", text: "Employees Information" },
    { id: "candidates_information", text: "Candidates Information" },
    { id: "event_calendar", text: "Event calendar" },
    { id: "form", text: "Form" },
    { id: "document_template", text: "Document template" },
    {
      id: "organization_resource",
      text: "Organization resource (Drive) (Experimental)",
    },
    { id: "log_out", text: "Log out" },
  ];

  return (
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse bg-white"
    >
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              className={`list-group-item list-group-item-action py-2 ripple not-selectable ${
                activeLink === item.id ? "active" : ""
              }`}
              onClick={() => handleItemClick(item.id)}
            >
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
