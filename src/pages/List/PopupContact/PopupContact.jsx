import "./PopupContact.css";

import {v4 as generateId} from "uuid";

import {useState} from "react";
import {isEmpty, popupInfo} from "../../../js/utils";
import axios from "../../../js/axiosInstance";

export default function PopupContact({
                                       title,
                                       button,
                                       contact,
                                       contacts,
                                       setContacts,
                                       setPopupContactStatus,
                                     }) {
  const {id, firstName, lastName, phone, email, profession} = contact

  const [firstNameInput, setFirstNameInput] = useState(firstName);
  const [lastNameInput, setLastNameInput] = useState(lastName);
  const [phoneInput, setPhoneInput] = useState(phone);
  const [emailInput, setEmailInput] = useState(email);
  const [professionInput, setProfessionInput] = useState(profession);

  const newContact = {
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
      return {id: id, ...newContact};
    }
  });

  const saveButtonHandle = async () => {
    if (isEmpty(newContact)) {
      await axios.put(`contacts/${id}`, {id: id, ...newContact})
        .then(() => {
          popupInfo("success", "Contact Saved!")
          setContacts([...changedContacts]);
          setPopupContactStatus(null);
        })
        .catch((e) => {
          popupInfo("error", `Something went wrong! "${e}"`)
        })
    } else {
      popupInfo("warning", "Please fill in all fields")
    }
  };

  const addButtonHandle = async () => {
    const post = {id: generateId(), ...newContact}
    if (isEmpty(newContact)) {
      await axios.post("contacts", post).then(() => {
        popupInfo("success", "Contact Added!")
        setContacts([...contacts, post]);
        setPopupContactStatus(null);
      }).catch((e) => {
        popupInfo("error", `Something went wrong! "${e}"`)
      })
    } else {
      popupInfo("warning", "Please fill in all fields")
    }
  };

  const popupConfirmButton = () => {
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
  }

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
            onClick={popupConfirmButton}
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
