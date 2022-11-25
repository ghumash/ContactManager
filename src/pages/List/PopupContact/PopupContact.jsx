import "./PopupContact.css";
import {isEmpty, popupInfo} from "../../../js/utils";

import {useState} from "react";
import axios from "../../../js/axiosInstance";

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

  const saveButtonHandle = async () => {
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
          setPopupContactStatus(null);
        })
        .catch((error) => {
          popupInfo("error", `Something went wrong! "${error}"`)
        })
    } else {
      popupInfo("warning", "Please fill in all fields")
    }
  };

  const addButtonHandle = async () => {
    if (isEmpty(newContact)) {
      await axios.post("contacts", newContact)
        .then(response => {
          popupInfo("success", "Contact Added!")
          setContacts([...contacts, response.data]);
          setPopupContactStatus(null);
        })
        .catch((error) => {
          popupInfo("error", `Something went wrong! "${error}"`)
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
