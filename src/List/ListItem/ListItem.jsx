import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function ListItem({
  id,
  avatar,
  firstName,
  lastName,
  email,
  phone,
  profession,
}) {
  return (
    <tr className="ListItem-row">
      <td className="ListItem-item">
        <input type="checkbox" />
      </td>
      <td className="ListItem-item">
        {avatar}
        {firstName} {lastName}
      </td>
      <td className="ListItem-item">{email}</td>
      <td className="ListItem-item">{phone}</td>
      <td className="ListItem-item">{profession}</td>
      <td className="ListItem-item">
        <div className="ListItem-icon-group">
          <FontAwesomeIcon icon={faTrash} />
          <FontAwesomeIcon icon={faEdit} />
        </div>
      </td>
    </tr>
  );
}
