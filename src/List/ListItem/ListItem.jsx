import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faMinus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ListItem({
  id,
  avatar,
  firstName,
  lastName,
  email,
  phone,
  profession,
  onDelete,
}) {
  const [iconSelector, setIconSelector] = useState();

  const defaultIcons = (
    <>
      <FontAwesomeIcon icon={faUserPen} />
      <FontAwesomeIcon
        icon={faMinus}
        onClick={() => {
          setIconSelector(areYouSure);
        }}
      />
    </>
  );

  const areYouSure = (
    <>
      <FontAwesomeIcon
        icon={faCheck}
        onClick={() => {
          onDelete(id);
        }}
      />
      <FontAwesomeIcon
        icon={faMinus}
        onClick={() => {
          setIconSelector();
        }}
      />
    </>
  );

  return (
    <div className="ListItem-row">
      <div className="ListItem-item">
        <label className="checkbox">
          <input type="checkbox" />
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
          {!iconSelector ? defaultIcons : iconSelector}
        </div>
      </div>
    </div>
  );
}
