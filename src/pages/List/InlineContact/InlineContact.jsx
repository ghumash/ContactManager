import "./InlineContact.css";
import {listItemConfirmButtonHandler, resetInputs} from "../../../js/utils";

import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";

export default function InlineContact({
                                        contact, button, contacts, setContacts, setInlineContactStatus
                                      }) {
  const [editedContact, setEditedContact] = useState(contact)
  const [newContact, setNewContact] = useState(contact)

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
          onClick={() => {
            listItemConfirmButtonHandler(
              button, contacts,
              setContacts, contact,
              editedContact, newContact,
              setInlineContactStatus, setNewContact)
          }}
        />
        <FontAwesomeIcon
          icon={faXmark}
          className="InlineContact-btn"
          type="button"
          onClick={() => {
            if (button === "Save") {
              setInlineContactStatus(null);
            } else if (button === "Add") {
              resetInputs(setNewContact)
            }
          }}
        />
      </div>
    </form>
  )
}