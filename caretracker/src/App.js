import "./App.css";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './components/header-section/Header';
import Auth from "./components/authorization-section/Auth";
import Navbar from "./components/Navbar";
import StaffProfile from './components/staff-profile-section/StaffProfile';
import {
  Home,
  Schedule,
  Note,
  Medication,
  OpenShifts,
  Profile,
  Miscellaneous,
  Maintenance
} from "./components/pages/routeIndex";

function App() {
  return (
    <main className="main">
    <Header/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/note" element={<Note />} />
          <Route path="/medication" element={<Medication />} />
          <Route path="/openshifts" element={<OpenShifts />} />
          <Route path="/profile" element={<StaffProfile />} />
          <Route path="/miscellaneous" element={<Miscellaneous />} />
          <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
      </Router>
    </main>

  );
}

// <!-- Schedule (Main), Notes,
// Open shifts, Profile, Miscellaneous, Maintenance -->

export default App;
