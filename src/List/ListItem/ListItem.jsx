import "./ListItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import { faUserPen, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ListItem({
  id,
  contacts,
  setContacts,
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
  const [inlineItemState, setInlineItemState] = useState(null);
  const [inlineItemEditState, setInlineItemEditState] = useState(true);

  const [firstNameInput, setFirstNameInput] = useState(firstName);
  const [lastNameInput, setLastNameInput] = useState(lastName);
  const [phoneInput, setPhoneInput] = useState(phone);
  const [emailInput, setEmailInput] = useState(email);
  const [professionInput, setProfessionInput] = useState(profession);

  const newContact = {
    id: uuidv4(),
    firstName: firstNameInput,
    lastName: lastNameInput,
    email: emailInput,
    phone: phoneInput,
    profession: professionInput,
  };

  const changedContacts = contacts.map((contact) => {
    if (contact.id !== id) {
      return contact;
    } else {
      return newContact;
    }
  });

  const inlineItemEdit = (
    <>
      <div className={!cardViewState ? "ListItem-item" : "ListItem-card-item"}>
        {avatar}
        <input
          type="text"
          className="ListItem-edit"
          defaultValue={firstNameInput}
          onChange={(e) => {
            setFirstNameInput(e.target.value);
          }}
        />
        <input
          type="text"
          className="ListItem-edit"
          defaultValue={lastNameInput}
          onChange={(e) => {
            setLastNameInput(e.target.value);
          }}
        />
      </div>
      <div className={!cardViewState ? "ListItem-item" : "ListItem-card-item"}>
        {cardViewState ? (
          <p className="ListItem-carView-subtitle">Email</p>
        ) : null}
        <input
          type="text"
          className="ListItem-edit"
          defaultValue={emailInput}
          onChange={(e) => {
            setEmailInput(e.target.value);
          }}
        />
      </div>
      <div className={!cardViewState ? "ListItem-item" : "ListItem-card-item"}>
        {cardViewState ? (
          <p className="ListItem-carView-subtitle">Phone</p>
        ) : null}
        <input
          type="text"
          className="ListItem-edit"
          defaultValue={phoneInput}
          onChange={(e) => {
            setPhoneInput(e.target.value);
          }}
        />
      </div>
      <div className={!cardViewState ? "ListItem-item" : "ListItem-card-item"}>
        {cardViewState ? (
          <p className="ListItem-carView-subtitle">Profession</p>
        ) : null}
        <input
          type="text"
          className="ListItem-edit"
          defaultValue={professionInput}
          onChange={(e) => {
            setProfessionInput(e.target.value);
          }}
        />
      </div>
    </>
  );

  const inlineItemView = (
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

  const inlineEditHandler = () => {
    if (inlineItemEditState) {
      setInlineItemState(inlineItemEdit);
      setInlineItemEditState(false);
    } else {
      setContacts([...changedContacts]);
      setInlineItemState(inlineItemView);
      setInlineItemEditState(true);
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

      {inlineItemState ? inlineItemState : inlineItemView}

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
