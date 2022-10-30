import { useState } from "react";
import "./Popup.css";

import { v4 as uuidv4 } from "uuid";

export default function Popup({
  id,
  firstName,
  lastName,
  phone,
  email,
  profession,
  contacts,
  setContacts,
  setPopupStatus,
}) {
  const [firstNameInput, setFirstNameInput] = useState(firstName);
  const [lastNameInput, setLastNameInput] = useState(lastName);
  const [phoneInput, setPhoneInput] = useState(phone);
  const [emailInput, setEmailInput] = useState(email);
  const [professionInput, setProfessionInput] = useState(profession);

  const changedContacts = contacts.map((contact) => {
    if (contact.id !== id) {
      return contact;
    }
    return {
      id: uuidv4(),
      firstName: firstNameInput,
      lastName: lastNameInput,
      email: emailInput,
      phone: phoneInput,
      profession: professionInput,
    };
  });

  return (
    <div
      className="Popup-mask"
      onClick={(e) => {
        if (e.target.className === "Popup-mask") {
          setPopupStatus(null);
        }
      }}
    >
      <form className="Popup-container">
        <h1>
          {firstName} {lastName}
        </h1>
        <label className="Popup-item">
          <p>First Name</p>
          <input
            className="Popup-input"
            type="text"
            value={firstNameInput}
            onChange={(e) => {
              setFirstNameInput(e.target.value);
            }}
          />
        </label>
        <label className="Popup-item">
          <p>Last Name</p>
          <input
            className="Popup-input"
            type="text"
            value={lastNameInput}
            onChange={(e) => {
              setLastNameInput(e.target.value);
            }}
          />
        </label>
        <label className="Popup-item">
          <p>Email</p>
          <input
            className="Popup-input"
            type="text"
            value={emailInput}
            onChange={(e) => {
              setEmailInput(e.target.value);
            }}
          />
        </label>
        <label className="Popup-item">
          <p>Phone</p>
          <input
            className="Popup-input"
            type="text"
            value={phoneInput}
            onChange={(e) => {
              setPhoneInput(e.target.value);
            }}
          />
        </label>
        <label className="Popup-item">
          <p>Profession</p>
          <input
            className="Popup-input"
            type="text"
            value={professionInput}
            onChange={(e) => {
              setProfessionInput(e.target.value);
            }}
          />
        </label>
        <div className="Popup-btn-group">
          <button
            className="Popup-btn"
            type="button"
            onClick={(e) => {
              setContacts([...changedContacts]);
              setPopupStatus(null);
            }}
          >
            Save
          </button>
          <button
            className="Popup-btn"
            type="button"
            onClick={() => {
              setPopupStatus(null);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
