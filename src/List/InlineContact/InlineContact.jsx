import "./InlineContact.css";

import {isEmpty, popupInfo} from "../../js/utils";

import {useState} from "react";

import {v4 as uuidv4} from "uuid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import PhoneItem from "../ListItem/ListItem/PhoneItem/PhoneItem";

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

  const [changedPhone, setChangedPhone] = useState({})

  const newContact = {
    id: uuidv4(),
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
      const notChangedPhones = contact.phone.filter(phoneItem => phoneItem.id !== changedPhone.id)
      if(changedPhone) {
        return {
          ...newContact,
          phone: [notChangedPhones, changedPhone]
        }
      } else {
        return newContact
      }

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
      resetInputs()
      popupInfo("success", "Contact Added!")
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

  return (
    <form className="inlineContact">
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
      {phone ? phone.map((phoneItem) => {
          return <PhoneItem key={phoneItem.id} id={phoneItem.id} value={phoneItem.value}
                            setChangedPhone={setChangedPhone}/>
        }) :
        <input
          className="InlineContact-item"
          placeholder="Phone"
          type="text"
          value={phoneInput}
          onChange={(e) => {
            setPhoneInput(e.target.value);
          }}
        />
      }
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
    </form>
  )
}