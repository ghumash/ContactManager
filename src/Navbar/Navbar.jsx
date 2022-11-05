import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faExclamation,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <ul className="Navbar-container">
      <li>
        <a className="Navbar-link">
          <FontAwesomeIcon icon={faHouse} />
        </a>
      </li>
      <li>
        <a className="Navbar-link">
          <FontAwesomeIcon icon={faExclamation} />
        </a>
      </li>
      <li>
        <a className="Navbar-link">
          <FontAwesomeIcon icon={faGear} />
        </a>
      </li>
    </ul>
  );
}
