import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header-section/Header";
import Auth from "./components/authorization-section/Auth";
import Navbar from "./components/Navbar";

import {
  Home,
  AdvancedCalendar,
  Note,
  Medication,
  OpenShifts,
  Miscellaneous,
  StaffProfile,
  Maintenance,
  IncorrectPage
} from "./components/pages/routeIndex";
import UserProps from "./components/UserProps";

function App() {
  const [token, setToken] = useState("");

  function updateToken(newToken) {
    if (newToken) {
      setToken(newToken);
      localStorage.setItem("token", newToken);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <div>
      <Header />;
      <div id="wrapper">
        <main className="main">
          <UserProps>
            {({ user, updateUser }) => (
              <>
                <Router>
                  <Navbar />
                  <Routes>
                    <Route
                      path="/auth"
                      element={<Auth updateToken={updateToken} />}
                    />
                    <Route
                      path="/"
                      element={
                        <Home
                          user={user}
                          updateUser={updateUser}
                          token={updateToken}
                        />
                      }
                    />
                    <Route
                      path="/schedule"
                      element={<AdvancedCalendar token={token} />}
                    />
                    <Route path="/note" element={<Note />} />
                    <Route path="/medication" element={<Medication />} />
                    <Route path="/openshifts" element={<OpenShifts />} />
                    <Route path="/profile" element={<StaffProfile />} />
                    <Route path="/miscellaneous" element={<Miscellaneous />} />
                    <Route path="/maintenance" element={<Maintenance />} />
                    <Route path="*" element={<IncorrectPage />} />
                  </Routes>
                </Router>
                {/* THIS IS COMMENTED OUT BECAUSE IT IS CREATING DUPLICATES. WE NEED A SOLUTION */}
                {/* {token ? (
              <Home token={token} user={user} updateUser={updateUser} />
            ) : (
              <Auth updateToken={updateToken} />
            )} */}
              </>
            )}
          </UserProps>
        </main>
      </div>
    </div>
  );
}
export default App;
