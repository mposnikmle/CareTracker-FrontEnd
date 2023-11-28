import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header-section/Header";
import Auth from "./components/authorization-section/Auth";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import Login from "./components/authorization-section/Login";
import Signup from "./components/authorization-section/Signup";

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
import { MedicationRecord } from "./components/medication-section/MedicationRecord";

function App() {
  const [token, setToken] = useState("");
  // setting roles and role states for prop
  const [role, setRole] = useState(
    "DSP",
    "CEO",
    "House Manager",
    "Program Manager",
    "Training Dept"
  );

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

  if (role === "DSP") {
    return (
      <div>
        <Header />;
        <div id="wrapper">
          <main className="main">
            <UserProps>
              {({ user, updateUser }) => (
                <>
                  <Router>
                    {token ? (
                      <div>
                        <Navbar />
                        <Routes>
                          <Route
                            path="/auth"
                            element={<Auth updateToken={updateToken} />}
                          />
                          <Route
                            path="/signup"
                            element={<Signup updateToken={updateToken} />}
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
                          {/* <Route
                          path="/medication"
                          element={<MedicationRecord />}
                        /> */}
                          <Route path="/openshifts" element={<OpenShifts />} />
                          <Route path="/profile" element={<StaffProfile />} />
                          <Route
                            path="/miscellaneous"
                            element={<Miscellaneous />}
                          />
                          <Route
                            path="/maintenance"
                            element={<Maintenance />}
                          />
                          <Route path="*" element={<IncorrectPage />} />
                        </Routes>
                      </div>
                    ) : (
                      <Routes>
                        <Route
                          path="*"
                          element={<Auth updateToken={updateToken} />}
                        />
                        <Route
                          path="/signup"
                          element={<Signup updateToken={updateToken} />}
                        />
                      </Routes>
                    )}
                  </Router>
                </>
              )}
            </UserProps>
          </main>
        </div>
      </div>
    );
  }

  if (role === "CEO") {
    return (
      <div>
        <Header />;
        <div id="wrapper">
          <main className="main">
            <UserProps>
              {({ user, updateUser }) => (
                <>
                  <Router>
                    {token ? (
                      <div>
                        {/* <Navbar /> */}
                        <Routes>
                          <Route
                            path="/auth"
                            element={<Auth updateToken={updateToken} />}
                          />
                          <Route
                            path="/signup"
                            element={<Signup updateToken={updateToken} />}
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
                          <Route
                            path="/medication"
                            element={<MedicationRecord />}
                          />
                          <Route path="/openshifts" element={<OpenShifts />} />
                          <Route path="/profile" element={<StaffProfile />} />
                          <Route
                            path="/miscellaneous"
                            element={<Miscellaneous />}
                          />
                          <Route
                            path="/maintenance"
                            element={<Maintenance />}
                          />
                          <Route path="*" element={<IncorrectPage />} />
                        </Routes>
                      </div>
                    ) : (
                      <Routes>
                        <Route
                          path="*"
                          element={<Auth updateToken={updateToken} />}
                        />
                        <Route
                          path="/signup"
                          element={<Signup updateToken={updateToken} />}
                        />
                      </Routes>
                    )}
                  </Router>
                </>
              )}
            </UserProps>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />;
      <div id="wrapper">
        <main className="main">
          <UserProps>
            {({ user, updateUser }) => (
              <>
                <Router>
                  {token ? (
                    <div>
                      <Navbar />
                      <Routes>
                        <Route
                          path="/auth"
                          element={<Auth updateToken={updateToken} />}
                        />
                        <Route
                          path="/signup"
                          element={<Signup updateToken={updateToken} />}
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
                        <Route
                          path="/medication"
                          element={<MedicationRecord />}
                        />
                        <Route path="/openshifts" element={<OpenShifts />} />
                        <Route path="/profile" element={<StaffProfile />} />
                        <Route
                          path="/miscellaneous"
                          element={<Miscellaneous />}
                        />
                        <Route path="/maintenance" element={<Maintenance />} />
                        <Route path="*" element={<IncorrectPage />} />
                      </Routes>
                    </div>
                  ) : (
                    <Routes>
                      <Route
                        path="*"
                        element={<Auth updateToken={updateToken} />}
                      />
                      <Route
                        path="/signup"
                        element={<Signup updateToken={updateToken} />}
                      />
                    </Routes>
                  )}
                </Router>
              </>
            )}
          </UserProps>
        </main>
      </div>
    </div>
  );
}
export default App;
