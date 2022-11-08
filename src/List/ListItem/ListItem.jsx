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
  inlineEditState,
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

  const inlineItem = (
    <>
      <div className={!cardViewState ? "ListItem-item" : "ListItem-card-item"}>
        {avatar}
        {firstName} {lastName}
      </div>
      <div className={!cardViewState ? "ListItem-item" : "ListItem-card-item"}>
        {cardViewState ? (
          <p className="ListItem-carView-subtitle">Email</p>
        ) : null}
        <a href={`mailto:${{ email }}`}>{email}</a>
      </div>
      <div className={!cardViewState ? "ListItem-item" : "ListItem-card-item"}>
        {cardViewState ? (
          <p className="ListItem-carView-subtitle">Phone</p>
        ) : null}
        <a href={`tel:${{ phone }}`}>{phone}</a>
      </div>
      <div className={!cardViewState ? "ListItem-item" : "ListItem-card-item"}>
        {cardViewState ? (
          <p className="ListItem-carView-subtitle">Profession</p>
        ) : null}
        {profession}
      </div>
    </>
  );

  const inlineEditHandler = () => {};

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
        </label>Ку
      </div>
      {inlineItem}
      <div className={!cardViewState ? "ListItem-item" : "ListItem-card-item"}>
        <div className="ListItem-icon-group">
          <FontAwesomeIcon
            icon={faUserPen}
            onClick={() => {
              if (!inlineEditState) {
                onEdit(id, firstName, lastName, phone, email, profession);
              } else {
                inlineEditHandler();
              }
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
