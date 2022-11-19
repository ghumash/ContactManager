import "./ListItem.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faUserPen} from "@fortawesome/free-solid-svg-icons";

export default function ListItem({
                                   id,
                                   contact,
                                   setNewContact,
                                   cardViewState,
                                   inlineEditState,
                                   checkedIdArr,
                                   onDelete,
                                   onPopupContactEdit,
                                   onInlineContactEdit,
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

  const editItemHandler = () => {
    setNewContact({
      id: contact.id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      phone: contact.phone,
      email: contact.email,
      profession: contact.profession,
    })
    if (!inlineEditState) {
      onPopupContactEdit(id, contact.firstName, contact.lastName, contact.phone, contact.email, contact.profession);
    } else {
      if (!cardViewState) {
        onInlineContactEdit(id, contact.firstName, contact.lastName, contact.phone, contact.email, contact.profession);
      }
    }
  }

  console.log(contact.phone)

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

      <div className={!cardViewState ? "ListItem-item row-item-2 row-item" : "ListItem-card-item"}>
        {contact.avatar}
        {contact.firstName} {contact.lastName}
      </div>
      <div className={!cardViewState ? "ListItem-item row-item-3 row-item" : "ListItem-card-item"}>
        {cardViewState ? (<p className="ListItem-carView-subtitle">Email</p>) : null}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
      <div className={!cardViewState ? "ListItem-item row-item-4 row-item" : "ListItem-card-item"}>
        {cardViewState ? (<p className="ListItem-carView-subtitle">Phone</p>) : null}
        {contact.phone.map((phoneItem) => {
          return <a href={`tel:${phoneItem}`} key={phoneItem}>{phoneItem} <br/></a>
        })}
      </div>
      <div className={!cardViewState ? "ListItem-item row-item-5 row-item" : "ListItem-card-item"}>
        {cardViewState ? (<p className="ListItem-carView-subtitle">Profession</p>) : null}
        {contact.profession}
      </div>
      <div className={!cardViewState ? "ListItem-item row-item-6 row-item" : "ListItem-card-item"}>
        <div className="ListItem-icon-group">
          <FontAwesomeIcon
            icon={faUserPen}
            onClick={editItemHandler}
          />
          <FontAwesomeIcon
            icon={faMinus}
            onClick={() => {
              onDelete(contact.id, contact.firstName, contact.lastName);
            }}
          />
        </div>
      </div>
    </div>);
}
