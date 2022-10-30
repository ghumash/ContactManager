import "./List.css";
import { list } from "../const";
import Caption from "./Caption/Caption";
import ListHeader from "./ListHeader/ListHeader";
import ListItem from "./ListItem/ListItem";

import Swal from "sweetalert2";

import { useState } from "react";
import EditPopup from "./EditPopup/EditPopup";

export default function List() {
  const [contacts, setContacts] = useState([...list]);
  const [editPopupStatus, setEditPopupStatus] = useState();

  const EditPopupComponent = (
    <EditPopup
      EditPopupMask={EditPopupMask}
      setEditPopupStatus={setEditPopupStatus}
    />
  );

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

  const onEdit = (id, firstName, lastName) => {
    setEditPopupStatus(EditPopupComponent);
  };

  function EditPopupMask(e) {
    if (e.target.className === "EditPopup-mask") {
      e.target.hidden = true;
    }
  }

  return (
    <div className="List-container">
      {editPopupStatus ? editPopupStatus : null}

      <Caption />

      <div className="ListHeader">
        <ListHeader />
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
              editPopupStatus={editPopupStatus}
              setEditPopupStatus={setEditPopupStatus}
            />
          );
        })}
      </div>
    </div>
  );
}
