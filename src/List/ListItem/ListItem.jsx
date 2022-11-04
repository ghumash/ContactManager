import "./ListItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function ListItem({
  id,
  avatar,
  firstName,
  lastName,
  email,
  phone,
  profession,
  checkedIdArr,
  onDelete,
  onEdit,
  onCheck,
}) {
  return (
    <div className="ListItem-row">
      <div className="ListItem-item">
        <label className="checkbox">
          <input
            type="checkbox"
            name="checkItem"
            checked={checkedIdArr.includes(id)}
            onChange={(e) => {
              onCheck(e, id);
            }}
          />
          <span></span>
        </label>
      </div>
      <div className="ListItem-item">
        {avatar}
        {firstName} {lastName}
      </div>
      <div className="ListItem-item">{email}</div>
      <div className="ListItem-item">{phone}</div>
      <div className="ListItem-item">{profession}</div>
      <div className="ListItem-item">
        <div className="ListItem-icon-group">
          <FontAwesomeIcon
            icon={faUserPen}
            onClick={() => {
              onEdit(id, firstName, lastName, phone, email, profession);
            }}
          />
          <FontAwesomeIcon
            icon={faMinus}
            onClick={() => {
              onDelete(id, firstName, lastName);
            }}
          />
        </div>
      </div>
    </div>
  );
}
