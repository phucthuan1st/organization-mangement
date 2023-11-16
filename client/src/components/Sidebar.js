import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({onLogoutPressed}) => {
  const [activeLink, setActiveItem] = useState(0);

  const handleItemClick = (itemIndex) => {
    setActiveItem(itemIndex);
    if (itemIndex === sidebarItems.length - 1) {
      // Logout item clicked
      onLogoutPressed();
    }
  };

  const sidebarItems = [
    { text: "Main dashboard", link: "/main_dashboard" },
    { text: "Employees Information", link: "/employees_information" },
    { text: "Candidates Information", link: "/candidates_information" },
    { text: "Event calendar", link: "/event_calendar" },
    { text: "Form", link: "/form" },
    { text: "Document template", link: "/document_template" },
    {
      text: "Organization resource (Drive) (Experimental)",
      link: "/organization_resource",
    },
    { text: "Log out", link: "/log_out" },
  ];

  return (
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse bg-white"
    >
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href="#" //{item.link}
              className={`list-group-item list-group-item-action py-2 ripple not-selectable ${
                activeLink === index ? "active" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
