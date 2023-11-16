import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header-section/Header";
import Auth from "./components/authorization-section/Auth";
import Login from "./components/authorization-section/Login";
import Signup from "./components/authorization-section/Signup";
import Navbar from "./components/Navbar";
// import AdvancedCalendar from "./components/schedule-section/AdvancedCalendar/AdvancedCalendar";
// import StaffProfile from "./components/staff-profile-section/StaffProfile";

import {
  Home,
  AdvancedCalendar,
  Note,
  Medication,
  OpenShifts,
  Miscellaneous,
  StaffProfile,
  Maintenance
} from "./components/pages/routeIndex";

function App() {
  const [token, setToken] = useState("");

  function updateToken(newToken) {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <main className="main">
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/auth" element={<Auth updateToken={updateToken} />} />
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<AdvancedCalendar />} />
          <Route path="/note" element={<Note />} />
          <Route path="/medication" element={<Medication />} />
          <Route path="/openshifts" element={<OpenShifts />} />
          <Route path="/profile" element={<StaffProfile />} />
          <Route path="/miscellaneous" element={<Miscellaneous />} />
          <Route path="/maintenance" element={<Maintenance />} />
        </Routes>

        {token ? <Auth updateToken={updateToken} /> : <Home token={token} />}
      </Router>
    </main>
  );
}

// <!-- Schedule (Main), Notes,
// Open shifts, Profile, Miscellaneous, Maintenance -->

export default App;
