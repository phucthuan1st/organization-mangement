import React, { useState, useEffect } from "react";
import { Calendar } from "react-calendar"; // Import your chosen calendar library
import "./Calendar.css"

const CalendarTab = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]); // Array to store events

  useEffect(() => {
    // Fetch events from your data source (API, database) based on selected date
    // Replace this with your actual event fetching logic
    setEvents([
      {
        title: "Meeting with John",
        date: new Date("2023-12-15"),
        hasEvent: true,
      },
      {
        title: "Project deadline",
        date: new Date("2023-12-20"),
        hasEvent: true,
      },
    ]);
  }, [selectedDate]);

  const handleDateChange = (date) => setSelectedDate(date);

  const filteredEvents = events.filter(
    (event) => event.date.getFullYear() === selectedDate.getFullYear() &&
      event.date.getMonth() === selectedDate.getMonth() &&
      event.date.getDate() === selectedDate.getDate()
  );

  return (
    <div className="calendar-tab">
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
      />
      <div className="event-list">
        <h3>Events for {selectedDate.toLocaleDateString()}:</h3>
        {filteredEvents.map((event) => (
          <div className="event-card" key={event.title}>
            <h4>{event.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarTab;