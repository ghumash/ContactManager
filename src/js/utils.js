import Swal from "sweetalert2";
import axios from "./axiosInstance";

export function isEmpty(newContact) {
  switch ("") {
    case newContact.firstName:
    case newContact.lastName:
    case newContact.phone:
    case newContact.email:
    case newContact.profession:
      return false;
    default:
      return true;
  }
};

export function popupInfo(icon, text) {
  return Swal.fire({
    icon: icon,
    iconColor: "var(--color-4)",
    text: text,
    confirmButtonColor: "var(--color-12)",
  });
}

export function popupConfirm(text, confirmButtonText) {
  return Swal.fire({
    text: text,
    icon: "warning",
    iconColor: "var(--color-4)",
    showCancelButton: true,
    confirmButtonColor: "var(--color-12)",
    cancelButtonColor: "var(--color-10)",
    confirmButtonText: confirmButtonText,
  })
}

export async function saveContactHandler(contacts, setContacts, contact, editedContact, contactStatus) {
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
        contactStatus(null);
      })
      .catch((error) => {
        popupInfo("error", `Something went wrong! "${error}"`)
      })
  } else {
    popupInfo("warning", "Please fill in all fields")
  }
}

export async function addContactHandler(contacts, setContacts, newContact, contactStatus) {
  if (isEmpty(newContact)) {
    await axios.post("contacts", newContact)
      .then(response => {
        popupInfo("success", "Contact Added!")
        setContacts([...contacts, response.data]);
        contactStatus(null);
      })
      .catch((error) => {
        popupInfo("error", `Something went wrong! "${error}"`)
      })
  } else {
    popupInfo("warning", "Please fill in all fields")
  }
};

export function resetInputsHandler(objState) {
  objState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    profession: ""
  })
}

export function listItemConfirmButtonHandler(
  button, contacts,
  setContacts, contact,
  editedContact, newContact,
  contactStatus, objState
) {
  if (button === "Save") {
    saveContactHandler(contacts, setContacts, contact, editedContact, contactStatus)
  } else if (button === "Add") {
    addContactHandler(contacts, setContacts, newContact, contactStatus)
    resetInputsHandler(objState)
  }
}










