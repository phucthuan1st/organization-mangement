import React, { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import ActivityDetails from "./ActivityDetails";
import "./Calendar.css";

const CalendarTab = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [events, setEvents] = useState([]); // Array to store events

  useEffect(() => {
    // Fetch events from your data source (API, database) based on selected date
    // Replace this with your actual event fetching logic
    setEvents([
      {
        title: "Kiểm điểm đánh giá cuối năm",
        date: new Date("2023-12-24"),
        description: "Thêm mô tả:",
      },
      {
        title: "Demo sản phẩm",
        date: new Date("2023-12-23"),
        description: "Demo sản phẩm của các thành viên trong chi bộ",
      },
    ]);
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Reset selected activity when the date changes
    setSelectedActivity(null);
  };

  const tileClassName = ({ date }) => {
    const hasEvent = events.some(
      (event) =>
        event.date.getFullYear() === date.getFullYear() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getDate() === date.getDate()
    );

    return hasEvent ? "has-event" : null;
  };

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
  };

  return (
    <div className="calendar-tab">
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
      />
      <div className="event-list">
        <h3>Events for {selectedDate.toLocaleDateString()}:</h3>
        {events
          .filter(
            (event) =>
              event.date.getFullYear() === selectedDate.getFullYear() &&
              event.date.getMonth() === selectedDate.getMonth() &&
              event.date.getDate() === selectedDate.getDate()
          )
          .map((event) => (
            <div
              key={event.title}
              className={`event-card ${tileClassName({
                date: event.date,
              })}`}
              onClick={() => handleActivityClick(event)}
            >
              <h4>{event.title}</h4>
            </div>
          ))}
      </div>
      {selectedActivity && <ActivityDetails activity={selectedActivity} />}
    </div>
  );
};

export default CalendarTab;
