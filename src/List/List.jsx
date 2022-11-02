import "./List.css";
import { list } from "../const";
import Caption from "./Caption/Caption";
import ListHeader from "./ListHeader/ListHeader";
import ListItem from "./ListItem/ListItem";

import Swal from "sweetalert2";

import { useState } from "react";
import Popup from "./Popup/Popup";

export default function List() {
  const [contacts, setContacts] = useState([...list]);
  const [popupStatus, setPopupStatus] = useState();
  const [checkedIdArr, setCheckedIdArr] = useState([]);
  const [checkedInputArr, setCheckedInputArr] = useState([]);

  const checkedIdCopy = [...checkedIdArr];

  const onCheckedAll = () => {};

  const onChecked = (e, id) => {
    if (e.target.checked) {
      checkedIdCopy.push(id);
      checkedInputArr.push(e.target);
      setCheckedIdArr(checkedIdCopy);
      setCheckedInputArr(checkedInputArr);
    } else {
      setCheckedIdArr(checkedIdCopy.filter((checkedId) => checkedId !== id));
      setCheckedInputArr(
        checkedInputArr.filter((checkedInput) => checkedInput.checked)
      );
    }
  };

  const onDeleteChecked = () => {
    setContacts(
      contacts.filter((contact) => !checkedIdArr.includes(contact.id))
    );
    setCheckedIdArr([]);
    setCheckedInputArr([]);
  };

  const onDelete = (id, firstName, lastName) => {
    Swal.fire({
      text: `Do you want delete "${firstName} ${lastName}" Contact?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setContacts(contacts.filter((contact) => contact.id !== id));
        Swal.fire("Deleted!", "Contact has been deleted.", "success");
      }
    });
  };

  const onEdit = (id, firstName, lastName, phone, email, profession) => {
    setPopupStatus(
      <Popup
        button={"Save"}
        id={id}
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        email={email}
        profession={profession}
        contacts={contacts}
        setContacts={setContacts}
        setPopupStatus={setPopupStatus}
      />
    );
  };

  const onAdd = () => {
    setPopupStatus(
      <Popup
        button={"Add"}
        firstName={""}
        lastName={""}
        phone={""}
        email={""}
        profession={""}
        contacts={contacts}
        setContacts={setContacts}
        setPopupStatus={setPopupStatus}
      />
    );
  };

  return (
    <div className="List-container">
      {popupStatus ? popupStatus : null}

      <Caption />

      <div className="ListHeader">
        <ListHeader onAdd={onAdd} onCheckedAll={onCheckedAll} />
      </div>

      <div className="List">
        {contacts.map((contact) => {
          return (
            <ListItem
              key={contact.id}
              id={contact.id}
              avatar={contact.avatar}
              firstName={contact.firstName}
              lastName={contact.lastName}
              email={contact.email}
              phone={contact.phone}
              profession={contact.profession}
              onDelete={onDelete}
              onEdit={onEdit}
              onChecked={onChecked}
            />
          );
        })}
      </div>
      <button
        type="button"
        className="delete-checked-btn"
        onClick={onDeleteChecked}
      >
        Delete Checked
      </button>
    </div>
  );
}
