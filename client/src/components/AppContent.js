import "bootstrap/dist/css/bootstrap.css";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./AppContent.css";

import CalendarTab from "./Calendar/Calendar";
import CandidatePersonalProfile from "./CandidateProfile/CandidatePersonalProfile";
import CandidateProfileList from "./CandidateProfile/CandidateProfileList";
import Dashboard from "./Dashboard/Dashboard";
import DocumentTab from "./Documents/DocumentList";
import PersonalProfile from "./EmployeeProfile/PersonalProfile";
import ProfileList from "./EmployeeProfile/ProfileList";
import Forms from "./Forms/Forms";
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
  const [selectedProfileId, setSelectedProfileId] = useState(null);

  const contentItems = [
    { id: ItemIds.MAIN_DASHBOARD, text: "Main dashboard" },
    { id: ItemIds.EMPLOYEES_INFORMATION, text: "Employees Information" },
    { id: ItemIds.CANDIDATES_INFORMATION, text: "Candidates Information" },
    { id: ItemIds.EVENT_CALENDAR, text: "Event calendar" },
    { id: ItemIds.FORMS, text: "Forms" },
    { id: ItemIds.DOCUMENTS, text: "Documents" },
    { id: ItemIds.ORGANIZATION_RESOURCE, text: "Organization resource (Drive) (Experimental)" },
  ];

  const ContentProvider = ({ itemId }) => {
    switch (itemId) {
      case ItemIds.MAIN_DASHBOARD:
        return <Dashboard />;
      case ItemIds.EMPLOYEES_INFORMATION:
        if (selectedProfileId) {
          return (
            <PersonalProfile
              id={selectedProfileId}
              itemChanged={itemChanged}
            />
          );
        } else {
          return <ProfileList onItemClick={onPersonalProfileChoosed} />;
        }
      case ItemIds.CANDIDATES_INFORMATION:
        if (selectedProfileId) {
          return (
            <CandidatePersonalProfile
              id={selectedProfileId}
              itemChanged={itemChanged}
            />
          );
        } else {
          return <CandidateProfileList onItemClick={onCandidateProfileChoosed} />;
        }

      case ItemIds.EVENT_CALENDAR:
        return (
          <CalendarTab />
        );
      case ItemIds.FORMS:
        return (
          <Forms />
        );

      case ItemIds.DOCUMENTS:
        return (
          <DocumentTab />
        );
      case ItemIds.MY_PROFILE:
        return (
          <PersonalProfile
            id={Cookies.get("username")}
            itemChanged={itemChanged}
          />
        );
      // Add other cases as needed
      default:
        return null;
    }
  };

  const itemChanged = (itemId) => {
    if (itemId !== ItemIds.PERSONAL_PROFILE) {
      sessionStorage.removeItem("selectedProfileId");
      setSelectedProfileId(null);
    }

    if (itemId !== activeItem) {
      setActiveItem(itemId);

      if (itemId === ItemIds.LOG_OUT) {
        setSelectedProfileId(null);
        setActiveItem(ItemIds.MAIN_DASHBOARD);
        onLogout();
      }
    }
  };

  const onPersonalProfileChoosed = (profileId) => {
    sessionStorage.setItem("selectedProfileId", profileId);
    setSelectedProfileId(profileId);
    setActiveItem(ItemIds.EMPLOYEES_INFORMATION);
  };

  const onCandidateProfileChoosed = (profileId) => {
    sessionStorage.setItem("selectedProfileId", profileId);
    setSelectedProfileId(profileId);
    setActiveItem(ItemIds.CANDIDATES_INFORMATION);
  };

  const onCalendarChoosed = (profileId) => {
    sessionStorage.setItem("selectedCalendar", profileId);
    setSelectedProfileId(profileId);
    setActiveItem(ItemIds.EVENT_CALENDAR);
  };
  const onDocumentChoosed = (profileId) => {
    sessionStorage.setItem("selectedDocuments", profileId);
    setSelectedProfileId(profileId);
    setActiveItem(ItemIds.EVENT_DOCUMENTS);
  };

  useEffect(() => {
    const pathSegments = window.location.pathname.split("/");
    const employeesInformationIndex = pathSegments.indexOf(ItemIds.EMPLOYEES_INFORMATION);

    if (employeesInformationIndex !== -1 && employeesInformationIndex < pathSegments.length - 1) {
      const id = pathSegments[employeesInformationIndex + 1];
      setSelectedProfileId(id);
      setActiveItem(ItemIds.EMPLOYEES_INFORMATION);
    }
  }, []);

  useEffect(() => {
    const pathSegments = window.location.pathname.split("/");
    const candidatesInformationIndex = pathSegments.indexOf(ItemIds.CANDIDATES_INFORMATION);

    if (candidatesInformationIndex !== -1 && candidatesInformationIndex < pathSegments.length - 1) {
      const id = pathSegments[candidatesInformationIndex + 1];
      setSelectedProfileId(id);
      setActiveItem(ItemIds.CANDIDATES_INFORMATION);
    }
  }, []);

  return (
    <Router>
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
            <Routes>
              {contentItems.map((item) => (
                <Route
                  key={item.id}
                  path={`/${item.id}/*`}
                  element={<ContentProvider itemId={item.id} />}
                />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AppContent;