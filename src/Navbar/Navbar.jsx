import "./Navbar.css";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faExclamation,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <ul className="Navbar">
        <li>
          <Link to="/" className="Navbar-link">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li>
          <Link to="/about" className="Navbar-link">
            <FontAwesomeIcon icon={faExclamation} />
          </Link>
        </li>
        <li>
          <Link to="/settings" className="Navbar-link">
            <FontAwesomeIcon icon={faGear} />
          </Link>
        </li>
      </ul>
    </>
  );
}
