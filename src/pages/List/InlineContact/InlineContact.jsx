import "./InlineContact.css";

import {isEmpty, popupInfo} from "../../../js/utils";

import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import axios from "../../../js/axiosInstance";
import {v4 as generateId} from "uuid";

export default function InlineContact({
                                        contact, button, contacts, setContacts, setInlineContactStatus,
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
    phone: phoneInput,
    email: emailInput,
    profession: professionInput,
  };

  const changeContacts = contacts.map((contact) => {
    if (contact.id !== id) {
      return contact;
    } else {
      return {id: id, ...newContact}
    }
  });

  const saveButtonHandle = async () => {
    if (isEmpty(newContact)) {
      await axios.put(`contacts/${id}`, {id: id, ...newContact}).then(() => {
        popupInfo("success", "Contact Saved!")
        setContacts([...changeContacts]);
        setInlineContactStatus(null);
      }).catch((e) => {
        popupInfo("error", `Something went wrong! "${e}"`)
      })
    } else {
      popupInfo("warning", "Please fill in all fields")
    }
  };

  const resetInputs = () => {
    setFirstNameInput("")
    setLastNameInput("")
    setEmailInput("")
    setProfessionInput("")
  }

  const addButtonHandle = async () => {
    const post = {id: generateId(), ...newContact}
    if (isEmpty(newContact)) {
      await axios.post("contacts", post).then(() => {
        popupInfo("success", "Contact Added!")
        setContacts([...contacts, post]);
        setInlineContactStatus(null);
        resetInputs()
      }).catch((e) => {
        popupInfo("error", `Something went wrong! "${e}"`)
      })
    } else {
      popupInfo("warning", "Please fill in all fields")
    }
  };

  const checkButtonHandler = () => {
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

  const xButtonHandler = () => {
    switch (button) {
      case "Save":
        setInlineContactStatus(null);
        break;
      case "Add":
        resetInputs()
        break;
      default:
        break
    }
  }

  return (<form className="inlineContact">
    <input
      className="InlineContact-item"
      placeholder="First Name"
      type="text"
      value={firstNameInput}
      onChange={(e) => {
        setFirstNameInput(e.target.value);
      }}
    />
    <input
      className="InlineContact-item"
      placeholder="Last Name"
      type="text"
      value={lastNameInput}
      onChange={(e) => {
        setLastNameInput(e.target.value);
      }}
    />
    <input
      className="InlineContact-item"
      placeholder="Email"
      type="text"
      value={emailInput}
      onChange={(e) => {
        setEmailInput(e.target.value);
      }}
    />
    <input
      className="InlineContact-item"
      placeholder="Phone"
      type="text"
      value={phoneInput}
      onChange={(e) => {
        setPhoneInput(e.target.value);
      }}
    />
    <input
      className="InlineContact-item"
      placeholder="Profession"
      type="text"
      value={professionInput}
      onChange={(e) => {
        setProfessionInput(e.target.value);
      }}
    />
    <div className="InlineContact-btn-group">
      <FontAwesomeIcon
        icon={faCheck}
        className="InlineContact-btn"
        type="button"
        onClick={checkButtonHandler}
      />
      <FontAwesomeIcon
        icon={faXmark}
        className="InlineContact-btn"
        type="button"
        onClick={xButtonHandler}
      />
    </div>
  </form>)
}