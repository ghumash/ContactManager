import "./Navbar.css";

import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faExclamation, faGear, faHouse, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useToggle} from "../../hooks/useToggle";

export default function Navbar() {
  const {status: navbarToggle, toggleStatus: navbarToggleFunction} = useToggle()

  return (
    <>
      <div className="Navbar swal2-show">
        <div className="Navbar-link" onClick={navbarToggleFunction}>
          <FontAwesomeIcon icon={navbarToggle ? faXmark : faBars}/>
        </div>
        {navbarToggle &&
          <>
            <Link to="/" className="Navbar-link">
              <FontAwesomeIcon icon={faHouse}/>
            </Link>
            <Link to="/about" className="Navbar-link">
              <FontAwesomeIcon icon={faExclamation}/>
            </Link>
            <Link to="/settings" className="Navbar-link">
              <FontAwesomeIcon icon={faGear}/>
            </Link>
          </>
        }
      </div>
    </>
  );
}
