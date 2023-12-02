import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ contentItems, activeItem, itemChanged }) => {
  return (
    <nav id="sidebarMenu" className="d-lg-block sidebar bg-white">
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          {contentItems.map((item) => (
            <Link
              key={item.id}
              to={`/${item.id}`} // Adjust the link path based on your route configuration
              className={`list-group-item list-group-item-action py-2 ripple not-selectable ${
                activeItem === item.id ? "active" : ""
              }`}
              onClick={() => itemChanged(item.id)}
            >
              <span>{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
