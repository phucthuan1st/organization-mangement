import { faArrowLeft, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "bootstrap/dist/css/bootstrap.css";
import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";
import "./CandidatePersonalProfile.css";
import ProfileData from "./mockUserData.json"; // as database

const CandidatePersonalProfile = ({ id, itemChanged }) => {
  const onReturnToList = () => {
    sessionStorage.removeItem("selectedProfileId");
    itemChanged("employees_information");
  }

  const profile = ProfileData.find(profile => profile.userId === id);

  if (!profile) {
    return null;
  }

  // Check if the id matches the username in the cookie
  const isUpdateButtonVisible = id === Cookies.get("username");

  return (
    <div className="PersonalProfile">
      <div className="row m-0 d-flex justify-content-center align-items-center h-100">
        <div className="col col-lg-6 mb-4 mb-lg-0 h-100 w-100">
          <div className="card h-100">
            <div className="row g-0 h-100">
              <div className="col-md-4 gradient-custom text-center text-white">
                <img
                  src={profile.avatarUrl}
                  alt="Avatar"
                  className="img-fluid my-5"
                  style={{ width: "80px", borderRadius: "50%" }}
                />
                <h5>{profile.fullName}</h5>
                <p>{profile.role}</p>
                <i className="far fa-edit mb-5" />
              </div>
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h6>Information</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>User ID</h6>
                      <p className="text-muted">{profile.userId}</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Email</h6>
                      <p className="text-muted">{profile.email}</p>
                    </div>
                  </div>
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Phone</h6>
                      <p className="text-muted">{profile.phoneNumber}</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Participate Date</h6>
                      <p className="text-muted">{profile.participateDate}</p>
                    </div>
                  </div>
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Live Place</h6>
                      <p className="text-muted">{profile.livePlace}</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Country From</h6>
                      <p className="text-muted">{profile.countryFrom}</p>
                    </div>
                  </div>
                  <h6>Projects</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Recent</h6>
                      <p className="text-muted">{profile.projects.recent}</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Most Viewed</h6>
                      <p className="text-muted">
                        {profile.projects.mostViewed}
                      </p>
                    </div>
                  </div>

                  <h6>Progress</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Progress</h6>
                      <p className="text-muted">{profile.progress}</p>
                    </div>
                  </div>
                </div>
                {/* Update Profile button */}
                {isUpdateButtonVisible && (
                  <button className="btn btn-primary btn-sm mt-auto">
                    <FontAwesomeIcon icon={faWrench} className="me-2" />
                    Update Profile
                  </button>
                )}

                {/* Return to List button */}
                <Link to="/employees_information" className="btn btn-secondary btn-sm mt-2" onClick={onReturnToList}>
                  <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                  Return to List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatePersonalProfile;
