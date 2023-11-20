import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  if (
    location.pathname === "/auth" ||
    location.pathname === "/login" ||
    location.pathname === "/signup"
  )
    return null;
  return (
    <header className="navBar">
      {/* Trying to style a home button that looks as though it floats
        the initials CT represent Care Tracker */}
      <NavLink to="/">
        <p className="logo">CareTracker</p>
      </NavLink>

      {/* Building out the Nav Bar "About" Section */}
      <nav>
        <NavLink
          to="/schedule"
          //   Destructured callback that changes from blue to
          //   black depending on activity status (doesnt work ATM)
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          Schedule
        </NavLink>
      </nav>

      {/* Building out the Nav Bar Note section */}
      <nav>
        <NavLink
          to="/note"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          Note
        </NavLink>
      </nav>

      {/* Building out the Nav Bar Medication section */}
      <nav>
        <NavLink
          to="/medication"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          Medication
        </NavLink>
      </nav>
      {/* Building out the Nav Bar Open Shifts section */}

      <nav>
        <NavLink
          to="/openshifts"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          Open Shifts
        </NavLink>
      </nav>

      {/* Building out the Nav Bar Profile section */}
      <nav>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          Profile
        </NavLink>
      </nav>
      {/* Building out the Nav Bar Miscellaneous section */}
      <nav>
        <NavLink
          to="/miscellaneous"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          Miscellaneous
        </NavLink>
      </nav>
      {/* Building out the Nav Bar Maintenance section */}
      <nav>
        <NavLink
          to="/maintenance"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          Maintenance
        </NavLink>
      </nav>
      {/* TEMPORARY */}
      <nav>
        <NavLink to="/auth"></NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
