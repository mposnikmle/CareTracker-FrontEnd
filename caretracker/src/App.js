import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header-section/Header";
import Auth from "./components/authorization-section/Auth";
import '@fortawesome/fontawesome-free/css/all.min.css';

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
  const [staff, setStaff] = useState("")
  // const [role, setRole] = useState("DSP");

  function updateToken(newToken, newStaff) {
    if (newToken) {
      setToken(newToken);
      setStaff(newStaff)
      localStorage.setItem("token", newToken);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  // if (role === "DSP") {
  //   return <h1>I'm an DSP</h1>;
  // }

  // if (role == "admin") {
  //   return <h1>I'm an admin</h1>;
  // }

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
                        <Route path="/schedule" element={<AdvancedCalendar token={token} />} />
                        <Route path="/note" element={<Note />} />
                        <Route path="/medication" element={<MedicationRecord />} />
                        <Route path="/openshifts" element={<OpenShifts />} />
                        <Route path="/profile" element={<StaffProfile token={token} staff={staff}/>} />
                        <Route path="/miscellaneous" element={<Miscellaneous />} />
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
