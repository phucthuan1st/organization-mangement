import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CandidateProfileList.css";
import profileList from "./mockUserData.json"; // as database

const CandidateProfileList = ({ onItemClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [profilesData, setProfilesData] = useState([]);

  // TODO: fetch data from server API
  useEffect(() => {
    // Simulate fetching data from an API (replace with your actual API endpoint)
    const fetchData = async () => {
      try {
        const data = profileList;
        setProfilesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
            <Link
              key={profile.userId}
              to={`/candidates_information/${profile.userId}`}
              className="profile-card"
              onClick={() => onItemClick(profile.userId)}
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidateProfileList;
