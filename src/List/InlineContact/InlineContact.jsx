import "./InlineContact.css";

import {isEmpty, popupInfo} from "../../js/utils";

import {useState} from "react";

import {v4 as uuidv4} from "uuid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";

export default function InlineContact({
                                        firstName,
                                        lastName,
                                        phone,
                                        email,
                                        profession,
                                        button,
                                        id,
                                        contacts,
                                        setContacts,
                                        setInlineContactStatus,
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

  const changeContacts = contacts.map((contact) => {
    if (contact.id !== id) {
      return contact;
    } else {
      return newContact;
    }
  });

  const saveButtonHandle = () => {

    if (isEmpty(newContact)) {
      setContacts([...changeContacts]);
      setInlineContactStatus(null);
      popupInfo("success", "Contact Saved!")
    } else {
      popupInfo("warning", "Please fill in all fields")
    }
  };

  const addButtonHandle = () => {
    if (isEmpty(newContact)) {
      setContacts([...contacts, newContact]);
      setInlineContactStatus(null);
      setFirstNameInput("")
      setLastNameInput("")
      setPhoneInput("")
      setEmailInput("")
      setProfessionInput("")
      popupInfo("success", "Contact Added!")
    } else {
      popupInfo("warning", "Please fill in all fields")
    }
  };

  return (
    <form className="inlineContact">
      <input
        className="InlineContact-item"
        type="text"
        value={firstNameInput}
        onChange={(e) => {
          setFirstNameInput(e.target.value);
        }}
      />
      <input
        className="InlineContact-item"
        type="text"
        value={lastNameInput}
        onChange={(e) => {
          setLastNameInput(e.target.value);
        }}
      />
      <input
        className="InlineContact-item"
        type="text"
        value={emailInput}
        onChange={(e) => {
          setEmailInput(e.target.value);
        }}
      />
      <input
        className="InlineContact-item"
        type="text"
        value={phoneInput}
        onChange={(e) => {
          setPhoneInput(e.target.value);
        }}
      />
      <input
        className="InlineContact-item"
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
        />
        <FontAwesomeIcon
          icon={faXmark}
          className="InlineContact-btn"
          type="button"
          onClick={() => {
            switch (button) {
              case "Save":
                setInlineContactStatus(null);
                break;
              case "Add":
                setFirstNameInput("")
                setLastNameInput("")
                setPhoneInput("")
                setEmailInput("")
                setProfessionInput("")
                break;
              default:
                break
            }
          }}
        />
      </div>
    </form>
  )
}