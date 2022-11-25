import "./InlineContact.css";

import {isEmpty, popupInfo} from "../../../js/utils";

import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import axios from "../../../js/axiosInstance";

export default function InlineContact({
                                        contact, button, contacts, setContacts, setInlineContactStatus,
                                      }) {
  const [editedContact, setEditedContact] = useState(contact)
  const [newContact, setNewContact] = useState(contact)

  const saveButtonHandler = async () => {
    if (isEmpty(editedContact)) {
      await axios.put(`contacts/${contact.id}`, editedContact)
        .then(response => {
          popupInfo("success", "Contact Saved!")
          const changeContacts = contacts.map((contactItem) => {
            if (contactItem.id !== contact.id) {
              return contactItem;
            } else {
              return response.data
            }
          });
          setContacts([...changeContacts]);
          setInlineContactStatus(null);
        })
        .catch((error) => {
          popupInfo("error", `Something went wrong! "${error}"`)
        })
    } else {
      popupInfo("warning", "Please fill in all fields")
    }
  };

  const resetInputs = () => {
    setNewContact({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      profession: ""
    })
  }

  const addButtonHandler = async () => {
    if (isEmpty(newContact)) {
      await axios.post("contacts", newContact)
        .then(response => {
          popupInfo("success", "Contact Added!")
          setContacts([...contacts, response.data]);
          setInlineContactStatus(null);
          resetInputs()
        })
        .catch((error) => {
          popupInfo("error", `Something went wrong! "${error}"`)
        })
    } else {
      popupInfo("warning", "Please fill in all fields")
    }
  };

  const checkButtonHandler = () => {
    switch (button) {
      case "Save":
        saveButtonHandler();
        break;
      case "Add":
        addButtonHandler();
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