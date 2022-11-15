import "./PopupContact.css";

import {v4 as uuidv4} from "uuid";
import Swal from "sweetalert2";

import {useState} from "react";

export default function PopupContact({
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
                                setPopupContactStatus,
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
      setPopupContactStatus(null);
      Swal.fire({
        text: `Contact Saved!`,
        icon: "success",
        iconColor: "var(--color-4)",
        confirmButtonColor: "var(--color-12)",
      });
    } else {
      Swal.fire({
        text: `Please fill in all fields`,
        icon: "warning",
        iconColor: "var(--color-4)",
        confirmButtonColor: "var(--color-12)",
      });
    }
  };

  const addButtonHandle = () => {
    if (isEmpty()) {
      setContacts([...contacts, newContact]);
      setPopupContactStatus(null);
      Swal.fire({
        text: `Contact Added!`,
        icon: "success",
        iconColor: "var(--color-4)",
        confirmButtonColor: "var(--color-12)",
      });
    } else {
      Swal.fire({
        text: `Please fill in all fields`,
        icon: "warning",
        iconColor: "var(--color-4)",
        confirmButtonColor: "var(--color-12)",
      });
    }
  };

  return (
    <div
      className="PopupContact-mask"
      onClick={(e) => {
        if (e.target.className === "PopupContact-mask") {
          setPopupContactStatus(null);
        }
      }}
    >
      <form className="PopupContact-container swal2-show">
        <h1 className="PopupContact-title">{title}</h1>
        <label className="PopupContact-item">
          <h3>First Name</h3>
          <input
            className="PopupContact-input"
            type="text"
            value={firstNameInput}
            onChange={(e) => {
              setFirstNameInput(e.target.value);
            }}
          />
        </label>
        <label className="PopupContact-item">
          <h3>Last Name</h3>
          <input
            className="PopupContact-input"
            type="text"
            value={lastNameInput}
            onChange={(e) => {
              setLastNameInput(e.target.value);
            }}
          />
        </label>
        <label className="PopupContact-item">
          <h3>Email</h3>
          <input
            className="PopupContact-input"
            type="text"
            value={emailInput}
            onChange={(e) => {
              setEmailInput(e.target.value);
            }}
          />
        </label>
        <label className="PopupContact-item">
          <h3>Phone</h3>
          <input
            className="PopupContact-input"
            type="text"
            value={phoneInput}
            onChange={(e) => {
              setPhoneInput(e.target.value);
            }}
          />
        </label>
        <label className="PopupContact-item">
          <h3>Profession</h3>
          <input
            className="PopupContact-input"
            type="text"
            value={professionInput}
            onChange={(e) => {
              setProfessionInput(e.target.value);
            }}
          />
        </label>
        <div className="PopupContact-btn-group">
          <button
            className="PopupContact-btn"
            type="button"
            onClick={() => {
              switch (button) {
                case "Save":
                  saveButtonHandle();
                  break;
                case "Add":
                  addButtonHandle();
                  break;
                  default:
                  break
              }
            }}
          >
            {button}
          </button>
          <button
            className="PopupContact-btn"
            type="button"
            onClick={() => {
              setPopupContactStatus(null);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
