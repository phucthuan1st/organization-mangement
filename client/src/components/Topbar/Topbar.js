import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";

const Topbar = ({ itemChanged }) => {
  return (
    <nav
      id="main-navbar"
      className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
    >
      <div className="container-fluid">
        {/* Logo on the left */}
        <div className="navbar-brand">
          <img
            src="http://www.chemistry.hcmus.edu.vn/images/logo%20KHTN_REMAKE%201.png"
            height="50"
            alt="Go to Dashboard"
            loading="lazy"
          />
        </div>

        {/* Notification button and User button as dropdown items on the right */}
        <ul className="navbar-nav ms-auto d-flex flex-row">
          {/* Notification dropdown */}
          <li className="nav-item dropdown">
            <button
              className="nav-link me-3 me-lg-0 dropdown-toggle btn"
              type="button"
              id="notificationDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faBell} />
              {/* You can add a badge for notifications here if needed */}
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="notificationDropdown"
            >
              <li>
                <button className="dropdown-item" type="button">
                  Some news
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Another news
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </li>
            </ul>
          </li>

          {/* User dropdown */}
          <li className="nav-item dropdown">
            <button
              className="nav-link me-3 me-lg-0 dropdown-toggle btn"
              type="button"
              id="userDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="userDropdown"
            >
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => itemChanged("employees_information")}
                >
                  My profile
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Settings
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => itemChanged("log_out")}
                  type="button"
                >
                  Logout
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
