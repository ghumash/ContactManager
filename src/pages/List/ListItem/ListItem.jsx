import "./ListItem.css";
import { onDelete } from "../../../js/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { SettingsContext } from "../../../context/context";

export default function ListItem({
  id,
  contact,
  contacts,
  setContacts,
  setNewContact,
  checkedIdArr,
  onPopupContactEdit,
  onInlineContactEdit,
  onCheck,
}) {
  const { cardViewState, inlineEditState } = useContext(SettingsContext);

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

  const editItemHandler = () => {
    setNewContact({
      id: contact.id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      phone: contact.phone,
      email: contact.email,
      profession: contact.profession,
    });
    if (!inlineEditState) {
      onPopupContactEdit(contact);
    } else {
      if (!cardViewState) {
        onInlineContactEdit(contact);
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

      <div
        className={
          !cardViewState
            ? "ListItem-item row-item-2 row-item"
            : "ListItem-card-item"
        }
      >
        {contact.avatar}
        {contact.firstName} {contact.lastName}
      </div>
      <div
        className={
          !cardViewState
            ? "ListItem-item row-item-3 row-item"
            : "ListItem-card-item"
        }
      >
        {cardViewState ? (
          <p className="ListItem-carView-subtitle">Email</p>
        ) : null}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
      <div
        className={
          !cardViewState
            ? "ListItem-item row-item-4 row-item"
            : "ListItem-card-item"
        }
      >
        {cardViewState ? (
          <p className="ListItem-carView-subtitle">Phone</p>
        ) : null}
        <a href={`tel:${contact.phone}`}>{contact.phone} </a>
      </div>
      <div
        className={
          !cardViewState
            ? "ListItem-item row-item-5 row-item"
            : "ListItem-card-item"
        }
      >
        {cardViewState ? (
          <p className="ListItem-carView-subtitle">Profession</p>
        ) : null}
        {contact.profession}
      </div>
      <div
        className={
          !cardViewState
            ? "ListItem-item row-item-6 row-item"
            : "ListItem-card-item"
        }
      >
        <div className="ListItem-icon-group">
          <FontAwesomeIcon icon={faUserPen} onClick={editItemHandler} />
          <FontAwesomeIcon
            icon={faMinus}
            onClick={() => {
              onDelete(contact, contacts, setContacts);
            }}
          />
        </div>
      </div>
    </div>
  );
}
