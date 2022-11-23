import "./Navbar.css";

import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamation, faGear, faHouse,} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {


  return (
    <>
      <ul className="Navbar">
        <Link to="/" className="Navbar-link">
          <FontAwesomeIcon icon={faHouse}/>
        </Link>
        <Link to="/about" className="Navbar-link">
          <FontAwesomeIcon icon={faExclamation}/>
        </Link>
        <Link to="/settings" className="Navbar-link">
          <FontAwesomeIcon icon={faGear}/>
        </Link>
      </ul>
    </>
  );
}
