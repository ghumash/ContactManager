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
      <td>
        <input type="checkbox" />
      </td>
      <td>{avatar}</td>
      <td>
        {firstName} {lastName}
      </td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{profession}</td>
      <td className="ListItem-row-group">
        <FontAwesomeIcon icon={faTrash} />
        <FontAwesomeIcon icon={faEdit} />
      </td>
    </tr>
  );
}
