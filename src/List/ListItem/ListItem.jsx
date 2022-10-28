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

  const iconMinus = (
    <FontAwesomeIcon
      icon={faMinus}
      onClick={() => {
        setIconSelector(areYouSure);
      }}
    />
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
    <tr className="ListItem-row">
      <td className="ListItem-item">
        <label className="checkbox">
          <input type="checkbox" />
          <span></span>
        </label>
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
          <FontAwesomeIcon icon={faUserPen} />
          {!iconSelector ? iconMinus : iconSelector}
        </div>
      </td>
    </tr>
  );
}
