import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header
      className="navBar sm:px-16 px-8 py-4 max-w-5xl
    mx-auto"
    >
      {/* Trying to style a home button that looks as though it floats
        the initials CT represent Care Tracker */}
      <NavLink to="/">
        <p className="logo">
          Care <br></br>Tracker
        </p>
      </NavLink>

      {/* Building out the Nav Bar "About" Section */}
      <nav>
        <NavLink
          to="/schedule"
          //   Destructured callback that changes from blue to
          //   black depending on activity status (doesnt work ATM)
          className={({ isActive }) =>
            isActive ? "text-danger" : "text-success"
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
            isActive ? "text-blue-500" : "text-black"
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
            isActive ? "text-blue-500" : "text-black"
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
            isActive ? "text-blue-500" : "text-black"
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
            isActive ? "text-blue-500" : "text-black"
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
            isActive ? "text-blue-500" : "text-black"
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
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Maintenance
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
