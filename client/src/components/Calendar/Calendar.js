import React, { useState, useEffect } from "react";
import { Calendar } from "react-calendar";
import "./Calendar.css";

const CalendarTab = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]); // Array to store events

  useEffect(() => {
    // Fetch events from your data source (API, database) based on selected date
    // Replace this with your actual event fetching logic
    setEvents([
      {
        title: "Kiểm điểm đánh giá cuối năm",
        date: new Date("2023-12-24"),
        hasEvent: true,
      },
      {
        title: "Demo sản phẩm",
        date: new Date("2023-12-23"),
        hasEvent: true,
      },
    ]);
  }, [selectedDate]);

  const handleDateChange = (date) => setSelectedDate(date);

  const tileClassName = ({ date }) => {
    const hasEvent = events.some(
      (event) =>
        event.date.getFullYear() === date.getFullYear() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getDate() === date.getDate()
    );

    return hasEvent ? "has-event" : null;
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
            <div className="event-card" key={event.title}>
              <h4>{event.title}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CalendarTab;
