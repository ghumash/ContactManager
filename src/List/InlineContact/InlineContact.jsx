import "./InlineContact.css";

import {v4 as uuidv4} from "uuid";
import Swal from "sweetalert2";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faUserPen, faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";

import {useState} from "react";
import {isEmpty} from "../../js/utils";

export default function InlineContact({
  setNewContact,
  contact,
  button,
  id,
  contacts,
  setContacts,
  setInlineContactStatus,
}) {
  const [firstNameInput, setFirstNameInput] = useState(contact.firstName);
  const [lastNameInput, setLastNameInput] = useState(contact.lastName);
  const [phoneInput, setPhoneInput] = useState(contact.phone);
  const [emailInput, setEmailInput] = useState(contact.email);
  const [professionInput, setProfessionInput] = useState(contact.profession);

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
      Swal.fire({
        text: `Contact Saved!`,
        icon: "success",
        iconColor: "var(--color-4)",
        confirmButtonColor: "var(--color-12)",
      });
    } else {
      Swal.fire({
        text: `Please fill in all fields`,
        icon: "warning",
        iconColor: "var(--color-4)",
        confirmButtonColor: "var(--color-12)",
      });
    }
  };

  const addButtonHandle = () => {
    if (isEmpty(newContact)) {
      setContacts([...contacts, newContact]);
      setInlineContactStatus(null);
      Swal.fire({
        text: `Contact Added!`,
        icon: "success",
        iconColor: "var(--color-4)",
        confirmButtonColor: "var(--color-12)",
      });
    } else {
      Swal.fire({
        text: `Please fill in all fields`,
        icon: "warning",
        iconColor: "var(--color-4)",
        confirmButtonColor: "var(--color-12)",
      });
    }
  };

  return (
    <form className="inlineAdd">
      <input
        className="InlineAdd-item"
        type="text"
        value={firstNameInput}
        onChange={(e) => {
          setFirstNameInput(e.target.value);
        }}
      />
      <input
        className="InlineAdd-item"
        type="text"
        value={lastNameInput}
        onChange={(e) => {
          setLastNameInput(e.target.value);
        }}
      />
      <input
        className="InlineAdd-item"
        type="text"
        value={emailInput}
        onChange={(e) => {
          setEmailInput(e.target.value);
        }}
      />
      <input
        className="InlineAdd-item"
        type="text"
        value={phoneInput}
        onChange={(e) => {
          setPhoneInput(e.target.value);
        }}
      />
      <input
        className="InlineAdd-item"
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
            setInlineContactStatus(null);
          }}
        />
      </div>
    </form>
  )
}