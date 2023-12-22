import React from "react";

const ActivityDetails = ({ activity }) => {
  return (
    <div className="activity-details">
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
    </div>
  );
};

export default ActivityDetails;
