import "./Navbar.css";

import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faExclamation, faGear, faHouse, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useToggle} from "../../hooks/useToggle";

export default function Navbar() {
  const {status: navbarToggle, toggleStatus: navbarToggleFunction} = useToggle()

  return (
    <>
      <div onClick={navbarToggleFunction} className={navbarToggle ? "Navbar-link Navbar-link-small" : "Navbar-link"}>
        <FontAwesomeIcon icon={navbarToggle ? faXmark : faBars}/>
      </div>
      {navbarToggle && <>
        <div className="Navbar">
          <Link to="/" className={navbarToggle ? "Navbar-link Navbar-link-small" : "Navbar-link"}>
            <FontAwesomeIcon icon={faHouse}/>
          </Link>
          <Link to="/about" className={navbarToggle ? "Navbar-link Navbar-link-small" : "Navbar-link"}>
            <FontAwesomeIcon icon={faExclamation}/>
          </Link>
          <Link to="/settings" className={navbarToggle ? "Navbar-link Navbar-link-small" : "Navbar-link"}>
            <FontAwesomeIcon icon={faGear}/>
          </Link>
        </div>
      </>}
    </>
  );
}
