import "./PopupContact.css";
import {listItemConfirmButtonHandler} from "../../../js/utils";

import {useState} from "react";

export default function PopupContact({
                                       title,
                                       button,
                                       contact,
                                       contacts,
                                       setContacts,
                                       setPopupContactStatus,
                                     }) {
  const [editedContact, setEditedContact] = useState(contact)
  const [newContact, setNewContact] = useState(contact)

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
            value={button === "Add" ? newContact.firstName : editedContact.firstName}
            onChange={(e) => {
              if (button === "Add") {
                setNewContact({...newContact, firstName: e.target.value});
              } else {
                setEditedContact({...editedContact, firstName: e.target.value});
              }
            }}
          />
        </label>
        <label className="PopupContact-item">
          <h3>Last Name</h3>
          <input
            className="PopupContact-input"
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
        </label>
        <label className="PopupContact-item">
          <h3>Email</h3>
          <input
            className="PopupContact-input"
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
        </label>
        <label className="PopupContact-item">
          <h3>Phone</h3>
          <input
            className="PopupContact-input"
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
        </label>
        <label className="PopupContact-item">
          <h3>Profession</h3>
          <input
            className="PopupContact-input"
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
        </label>
        <div className="PopupContact-btn-group">
          <button
            className="PopupContact-btn"
            type="button"
            onClick={() => {
              listItemConfirmButtonHandler(
                button, contacts,
                setContacts, contact,
                editedContact, newContact,
                setPopupContactStatus, setNewContact
              )
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
