import Cookies from "js-cookie";
import React, { useState } from "react";
import "./App.css";
import AppContent from "./components/AppContent";
import Login from "./components/Login";

function App() {
  // State to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = (token, username) => {
    // TODO: implement authenticate login token here

    // TODO: perform additional setup here
    sessionStorage.clear();

    // TODO: Authenticaed login
    // Assuming successful authentication sets isAuthenticated to true
    setIsAuthenticated(true);
    Cookies.set("username", username, { sameSite: 'strict' });
  };

  // Function to handle logout
  const handleLogout = () => {
    // TODO: Perform logout actions, such as clearing the token
    Cookies.remove("username");
    sessionStorage.clear();

    // TODO: logout
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
