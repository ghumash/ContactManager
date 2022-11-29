import "./Navbar.css";

import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faExclamation, faGear, faHouse, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useToggle} from "../../hooks/useToggle";

export default function Navbar() {
  const {status: navbarToggle, toggleStatus: navbarToggleFunction} = useToggle()

  const activeStyle = {
    color: "green"
  };

  return (
    <>
      <div className="Navbar swal2-show">
        <div className="Navbar-link" onClick={navbarToggleFunction}>
          <FontAwesomeIcon icon={navbarToggle ? faXmark : faBars}/>
        </div>
        {navbarToggle &&
          <>
            <NavLink to="/" className="Navbar-link"
                     style={({ isActive }) => (isActive ? activeStyle : undefined)}
                     onClick={navbarToggleFunction}>
              <FontAwesomeIcon icon={faHouse}/>
            </NavLink>
            <NavLink to="/about" className="Navbar-link" onClick={navbarToggleFunction}>
              <FontAwesomeIcon icon={faExclamation}/>
            </NavLink>
            <NavLink to="/settings" className="Navbar-link" onClick={navbarToggleFunction}>
              <FontAwesomeIcon icon={faGear}/>
            </NavLink>
          </>
        }
      </div>
    </>
  );
}
