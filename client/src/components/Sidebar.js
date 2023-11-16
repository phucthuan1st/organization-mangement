import "bootstrap/dist/css/bootstrap.css";
import "./Sidebar.css";
import React, { useState } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('main-dashboard');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <a
            className={`list-group-item list-group-item-action py-2 ripple ${activeItem === 'main-dashboard' ? 'active' : ''}`}
            onClick={() => handleItemClick('main-dashboard')}
          >
            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>Main dashboard</span>
          </a>

          <a
            className={`list-group-item list-group-item-action py-2 ripple ${activeItem === 'employees-information' ? 'active' : ''}`}
            onClick={() => handleItemClick('employees-information')}
          >
            <i className="fas fa-chart-area fa-fw me-3"></i>
            <span>Employees Information</span>
          </a>

          <a
            className={`list-group-item list-group-item-action py-2 ripple ${activeItem === 'candidates-information' ? 'active' : ''}`}
            onClick={() => handleItemClick('candidates-information')}
          >
            <i className="fas fa-lock fa-fw me-3"></i>
            <span>Candidates Information</span>
          </a>

          <a
            className={`list-group-item list-group-item-action py-2 ripple ${activeItem === 'event-calendar' ? 'active' : ''}`}
            onClick={() => handleItemClick('event-calendar')}
          >
            <i className="fas fa-chart-line fa-fw me-3"></i>
            <span>Event calendar</span>
          </a>

          <a
            className={`list-group-item list-group-item-action py-2 ripple ${activeItem === 'form' ? 'active' : ''}`}
            onClick={() => handleItemClick('form')}
          >
            <i className="fas fa-chart-pie fa-fw me-3"></i>
            <span>Form</span>
          </a>

          <a
            className={`list-group-item list-group-item-action py-2 ripple ${activeItem === 'document-template' ? 'active' : ''}`}
            onClick={() => handleItemClick('document-template')}
          >
            <i className="fas fa-chart-bar fa-fw me-3"></i>
            <span>Document template</span>
          </a>

          <a
            className={`list-group-item list-group-item-action py-2 ripple ${activeItem === 'organization-resource' ? 'active' : ''}`}
            onClick={() => handleItemClick('organization-resource')}
          >
            <i className="fas fa-globe fa-fw me-3"></i>
            <span>Organization resource (Drive) (Experimental)</span>
          </a>

          <a
            className={`list-group-item list-group-item-action py-2 ripple ${activeItem === 'logout' ? 'active' : ''}`}
            onClick={() => handleItemClick('logout')}
          >
            <i className="fas fa-money-bill fa-fw me-3"></i>
            <span>Log out</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

const Topbar = () => {
  return (
    <nav
      id="main-navbar"
      className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <a className="navbar-brand" href="#">
          <img
            src="http://www.chemistry.hcmus.edu.vn/images/logo%20KHTN_REMAKE%201.png"
            height="45"
            alt="Go to Dashboard"
            loading="lazy"
          />
        </a>
        <form className="d-none d-md-flex input-group w-auto my-auto">
          <input
            autoComplete="off"
            type="search"
            className="form-control rounded"
            placeholder='Search (ctrl + "/" to focus)'
            style={{ minWidth: "225px" }}
          />
          <span className="input-group-text border-0">
            <i className="fas fa-search"></i>
          </span>
        </form>
        <ul className="navbar-nav ms-auto d-flex flex-row">
          <li className="nav-item dropdown">
            <a
              className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bell"></i>
              <span className="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Some news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link me-3 me-lg-0" href="#">
              <i className="fas fa-fill-drip"></i>
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdown"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="united kingdom flag m-0"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  <i className="united kingdom flag"></i>English
                  <i className="fa fa-check text-success ms-2"></i>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              {/* Add the rest of the language options */}
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                className="rounded-circle"
                height="22"
                alt="Avatar"
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  My profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
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

const SideNavBar = () => {
  return (
    <div>
      //
      <Sidebar />
      <Topbar />
    </div>
  );
};

export default SideNavBar;
