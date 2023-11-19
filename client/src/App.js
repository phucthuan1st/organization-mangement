import React, { useState } from "react";
import "./App.css";
import AppContent from "./components/AppContent";
import Login from "./components/Login";

function App() {
  // State to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = (token) => {
    // TODO: implement authenticate login token here
    // Assuming successful authentication sets isAuthenticated to true
    setIsAuthenticated(true);
    // perform additional setup here
  };

  // Function to handle logout
  const handleLogout = (token) => {
    // TODO: Perform logout actions, such as clearing the token
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        // If authenticated, display the dashboard
        <AppContent onLogout={handleLogout} />
      ) : (
        // If not authenticated, display the login section
        <Login onAuthentication={handleAuthentication} />
      )}
    </div>
  );
}

export default App;
