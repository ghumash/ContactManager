import { useState } from "react";
import "./Popup.css";

import { v4 as uuidv4 } from "uuid";

export default function Popup({
  title,
  button,
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

  const isEmpty = () => {
    switch ("") {
      case firstNameInput:
      case lastNameInput:
      case phoneInput:
      case emailInput:
      case professionInput:
        return false;
      default:
        return true;
    }
  };

  const saveButtonHandle = () => {
    if (isEmpty()) {
      setContacts([...changedContacts]);
      setPopupStatus(null);
    } else {
      alert("Please fill in all fields");
    }
  };

  const addButtonHandle = () => {
    if (isEmpty()) {
      setContacts([...contacts, newContact]);
      setPopupStatus(null);
    } else {
      alert("Please fill in all fields");
    }
  };

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
        <h1 className="Popup-title">{title}</h1>
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
            onClick={() => {
              switch (button) {
                case "Save":
                  saveButtonHandle();
                  break;
                case "Add":
                  addButtonHandle();
                  break;
              }
            }}
          >
            {button}
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
