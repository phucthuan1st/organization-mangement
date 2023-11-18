import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";

const Topbar = ({onLogoutPressed}) => {
  return (
    <nav
      id="main-navbar"
      className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
    >
      <div className="container-fluid">
        {/* Logo on the left */}
        <a className="navbar-brand" href="#!">
          <img
            src="http://www.chemistry.hcmus.edu.vn/images/logo%20KHTN_REMAKE%201.png"
            height="50"
            alt="Go to Dashboard"
            loading="lazy"
          />
        </a>

        {/* Notification button and User button as dropdown items on the right */}
        <ul className="navbar-nav ms-auto d-flex flex-row">
          {/* Notification dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link me-3 me-lg-0 dropdown-toggle"
              href="#!"
              id="notificationDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faBell} />
              {/* You can add a badge for notifications here if needed */}
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="notificationDropdown"
            >
              <li>
                <a className="dropdown-item" href="#!">
                  Some news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Another news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Something else here
                </a>
              </li>
            </ul>
          </li>

          {/* User dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link me-3 me-lg-0 dropdown-toggle"
              href="#!"
              id="userDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faUser} />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="userDropdown"
            >
              <li>
                <a className="dropdown-item" href="#!">
                  My profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a 
                  className="dropdown-item" 
                  onClick={() => onLogoutPressed()}
                  href="#!">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
