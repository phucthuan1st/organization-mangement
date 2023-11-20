import "bootstrap/dist/css/bootstrap.css";
import Cookies from "js-cookie";
import { React, useState } from "react";
import "./AppContent.css";
import Dashboard from "./Dashboard/Dashboard";
import PersonalProfile from "./EmployeeProfile/PersonalProfile";
import ProfileList from "./EmployeeProfile/ProfileList";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

// Define item IDs as constants
const ItemIds = {
  MAIN_DASHBOARD: "main_dashboard",
  MY_PROFILE: "my_profile",
  EMPLOYEES_INFORMATION: "employees_information",
  CANDIDATES_INFORMATION: "candidates_information",
  EVENT_CALENDAR: "event_calendar",
  FORMS: "forms",
  DOCUMENTS: "documents",
  ORGANIZATION_RESOURCE: "organization_resource",
  LOG_OUT: "log_out",
};

const AppContent = ({ onLogout }) => {
  const [activeItem, setActiveItem] = useState("main_dashboard");

  const contentItems = [
    { id: ItemIds.MAIN_DASHBOARD, text: "Main dashboard" },
    { id: ItemIds.EMPLOYEES_INFORMATION, text: "Employees Information" },
    { id: ItemIds.CANDIDATES_INFORMATION, text: "Candidates Information" },
    { id: ItemIds.EVENT_CALENDAR, text: "Event calendar" },
    { id: ItemIds.FORMS, text: "Forms" },
    { id: ItemIds.DOCUMENTS, text: "Documents" },
    {
      id: "organization_resource",
      text: "Organization resource (Drive) (Experimental)",
    },
    { id: ItemIds.LOG_OUT, text: "Log out" },
  ];

  const ContentProvider = ({ itemId }) => {
    switch (itemId) {
      case ItemIds.MAIN_DASHBOARD:
        return <Dashboard />;
      case ItemIds.EMPLOYEES_INFORMATION:
        return <ProfileList />;
      case ItemIds.MY_PROFILE:
        return <PersonalProfile id={Cookies.get("username")} />;
      // Add other cases as needed
      default:
        return null;
    }
  };

  const itemChanged = (itemId) => {
    if (itemId !== ItemIds.EMPLOYEES_INFORMATION) {
      sessionStorage.removeItem("selectedProfileId");
    }

    if (itemId !== activeItem) {
      setActiveItem(itemId);

      if (itemId === ItemIds.LOG_OUT) {
        onLogout();
      }
    }
  };

  const onProfileChoosed = (profile) => {
    sessionStorage.setItem("selectedProfileId", profile.userId);
  };

  return (
    <div className="app-content">
      <div className="flex-container top-10-flex">
        <Topbar ItemIds={ItemIds} itemChanged={itemChanged} />
      </div>
      <div className="flex-container bottom-90-flex">
        <div className="flex-container bottom-left-15-flex">
          <Sidebar
            ItemIds={ItemIds}
            contentItems={contentItems}
            activeItem={activeItem}
            itemChanged={itemChanged}
          />
        </div>
        <div className="flex-container bottom-right-85-flex">
          {/* TODO: PUT OTHERS COMPONENTS HERE */}
          <ContentProvider itemId={activeItem} />
        </div>
      </div>
    </div>
  );
};

export default AppContent;
