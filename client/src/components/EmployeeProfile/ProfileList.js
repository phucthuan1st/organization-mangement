import React, { useState } from "react";
import "./ProfileList.css";
import profilesData from "./mockUserData.json";

const EmployeeProfileList = ({ onItemClick }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter profiles based on the search term
  const filteredProfiles = profilesData.filter((profile) =>
    profile.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="employeeProfileList">
      {/* Top Flex with Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search profiles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Bottom Flex with Card Collection */}
      <div className="card-frame">
        <div className="card-collection">
          {filteredProfiles.map((profile) => (
            <div
              key={profile.userId}
              className="profile-card"
              onClick={() => onItemClick(profile)}
            >
              <img
                src={profile.avatarUrl}
                alt="Avatar"
                className="profile-avatar"
              />
              <div className="profile-info">
                <h2 className="profile-name">{profile.fullName}</h2>
                <p className="profile-id">{`ID: ${profile.userId}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfileList;
