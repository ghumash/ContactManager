import "./InlineContact.css";

import {isEmpty, popupInfo} from "../../../js/utils";

import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import axios from "../../../js/axiosInstance";

export default function InlineContact({
                                        contact, button, contacts, setContacts, setInlineContactStatus,
                                      }) {
  const {id, firstName, lastName, phone, email, profession} = contact

  const [editedContact, setEditedContact] = useState({
    firstName,
    lastName,
    phone,
    email,
    profession
  })

  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    profession: "",
  })

  const saveButtonHandle = async () => {
    if (isEmpty(editedContact)) {
      try {
        const response = await axios.put(`contacts/${id}`, editedContact)
        popupInfo("success", "Contact Saved!")
        const changeContacts = contacts.map((contact) => {
          if (contact.id !== id) {
            return contact;
          } else {
            return response.data
          }
        });
        setContacts([...changeContacts]);
        setInlineContactStatus(null);
      } catch (e) {
        popupInfo("error", `Something went wrong! "${e}"`)
      }
    } else {
      popupInfo("warning", "Please fill in all fields")
    }
  };

  const resetInputs = () => {
    setEditedContact({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      profession: ""
    })
    setNewContact({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      profession: ""
    })
  }

  const addButtonHandle = async () => {
    if (isEmpty(newContact)) {
      try {
        const response = await axios.post("contacts", newContact)
        popupInfo("success", "Contact Added!")
        setContacts([...contacts, response.data]);
        setInlineContactStatus(null);
        resetInputs()
      } catch (e) {
        popupInfo("error", `Something went wrong! "${e}"`)
      }
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
      value={button === "Add" ? newContact.firstName : editedContact.firstName}
      onChange={(e) => {
        if (button === "Add") {
          setNewContact({...newContact, firstName: e.target.value});
        } else {
          setEditedContact({...editedContact, firstName: e.target.value});
        }
      }}
    />
    <input
      className="InlineContact-item"
      placeholder="Last Name"
      type="text"
      value={button === "Add" ? newContact.lastName : editedContact.lastName}
      onChange={(e) => {
        if (button === "Add") {
          setNewContact({...newContact, lastName: e.target.value});
        } else {
          setEditedContact({...editedContact, lastName: e.target.value});
        }
      }}
    />
    <input
      className="InlineContact-item"
      placeholder="Email"
      type="text"
      value={button === "Add" ? newContact.email : editedContact.email}
      onChange={(e) => {
        if (button === "Add") {
          setNewContact({...newContact, email: e.target.value});
        } else {
          setEditedContact({...editedContact, email: e.target.value});
        }
      }}
    />
    <input
      className="InlineContact-item"
      placeholder="Phone"
      type="text"
      value={button === "Add" ? newContact.phone : editedContact.phone}
      onChange={(e) => {
        if (button === "Add") {
          setNewContact({...newContact, phone: e.target.value});
        } else {
          setEditedContact({...editedContact, phone: e.target.value});
        }
      }}
    />
    <input
      className="InlineContact-item"
      placeholder="Profession"
      type="text"
      value={button === "Add" ? newContact.profession : editedContact.profession}
      onChange={(e) => {
        if (button === "Add") {
          setNewContact({...newContact, profession: e.target.value});
        } else {
          setEditedContact({...editedContact, profession: e.target.value});
        }
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