import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faExclamation,
  faGear,
  faHouse,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useToggle } from "../../hooks/useToggle";

export default function Navbar() {
  const { status: navbarToggle, toggleStatus: navbarToggleFunction } =
    useToggle();

  return (
    <>
      <div className="Navbar swal2-show">
        <div className="Navbar-link" onClick={navbarToggleFunction}>
          <FontAwesomeIcon icon={navbarToggle ? faXmark : faBars} />
        </div>
        {navbarToggle && (
          <div className="swal2-show">
            <NavLink
              title="Home"
              to="/"
              className="Navbar-link"
              onClick={navbarToggleFunction}
            >
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
            <NavLink
              title="About"
              to="/about"
              className="Navbar-link"
              onClick={navbarToggleFunction}
            >
              <FontAwesomeIcon icon={faExclamation} />
            </NavLink>
            <NavLink
              title="Settings"
              to="/settings"
              className="Navbar-link"
              onClick={navbarToggleFunction}
            >
              <FontAwesomeIcon icon={faGear} />
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}
