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
  cardViewState,
  checkedIdArr,
  onDelete,
  onEdit,
  onCheck,
}) {
  const ListItemStyleHandler = () => {
    if (cardViewState) {
      return "ListItem-card";
    } else {
      if (checkedIdArr.includes(id)) {
        return "ListItem-row itemRowInlineStyle";
      } else {
        return "ListItem-row";
      }
    }
  };

  return (
    <div className={ListItemStyleHandler()}>
      <div className={!cardViewState ? "ListItem-item" : "ListItem-card-item"}>
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
      <div className={!cardViewState ? "ListItem-item" : "ListItem-card-item"}>
        {avatar}
        {firstName} {lastName}
      </div>
      <div className={!cardViewState ? "ListItem-item" : "ListItem-card-item"}>
        {cardViewState ? <p>Email</p> : null}
        {email}
      </div>
      <div className={!cardViewState ? "ListItem-item" : "ListItem-card-item"}>
      {cardViewState ? <p>Phone</p> : null}
        {phone}
      </div>
      <div className={!cardViewState ? "ListItem-item" : "ListItem-card-item"}>
      {cardViewState ? <p>Profession</p> : null}
        {profession}
      </div>
      <div className={!cardViewState ? "ListItem-item" : "ListItem-card-item"}>
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
