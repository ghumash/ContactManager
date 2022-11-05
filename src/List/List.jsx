import "./List.css";
import Caption from "./Caption/Caption";
import ListHeader from "./ListHeader/ListHeader";
import ListItem from "./ListItem/ListItem";
import Popup from "./Popup/Popup";
import ListBtnSection from "./ListBtnSection/ListBtnSection";

import Swal from "sweetalert2";

import { list } from "../const";
import { useState } from "react";

export default function List() {
  const [contacts, setContacts] = useState([...list]);
  const [popupStatus, setPopupStatus] = useState();
  const [checkAll, setCheckAll] = useState(false);
  const [checkedIdArr, setCheckedIdArr] = useState([]);
  const checkedIdCopy = [...checkedIdArr];
  const [itemRowInlineStyle, setTtemRowInlineStyle] = useState(false);

  const onCheck = (e, id) => {
    const { name } = e.target;

    if (name === "checkAll") {
      if (e.target.checked) {
        setCheckAll(true);
        setTtemRowInlineStyle(false);
        contacts.map((contact) => {
          if (!checkedIdCopy.includes(contact.id)) {
            checkedIdCopy.push(contact.id);
          }
        });
        setCheckedIdArr(checkedIdCopy);
      } else {
        setCheckAll(false);
        setCheckedIdArr([]);
        setTtemRowInlineStyle(false);
      }
    } else if (name === "checkItem") {
      if (e.target.checked) {
        checkedIdCopy.push(id);
        setCheckedIdArr(checkedIdCopy);
        setTtemRowInlineStyle(true);
        if (checkedIdCopy.length === contacts.length) {
          setCheckAll(true);
        }
      } else {
        setTtemRowInlineStyle(false);
        setCheckAll(false);
        setCheckedIdArr(checkedIdCopy.filter((checkedId) => checkedId !== id));
      }
    }
  };

  const onDeleteChecked = () => {
    if (checkedIdArr.length !== 0) {
      Swal.fire({
        text: `Do you want to delete these contacts?`,
        icon: "warning",
        iconColor: "rgb(126,231,135)",
        showCancelButton: true,
        confirmButtonColor: "#6e40c9",
        cancelButtonColor: "#FA87AA",
        confirmButtonText: "Yes, delete these contacts!",
      }).then((result) => {
        if (result.isConfirmed) {
          setContacts(
            contacts.filter((contact) => !checkedIdArr.includes(contact.id))
          );
          setCheckedIdArr([]);
          Swal.fire({
            icon: "success",
            iconColor: "rgb(126,231,135)",
            text: "Contacts has been deleted!",
            confirmButtonColor: "#6e40c9",
          });
        }
      });
    }
  };

  const onDelete = (id, firstName, lastName) => {
    Swal.fire({
      text: `Do you want delete "${firstName} ${lastName}" Contact?`,
      icon: "warning",
      iconColor: "rgb(126,231,135)",
      showCancelButton: true,
      confirmButtonColor: "#6e40c9",
      cancelButtonColor: "#FA87AA",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setContacts(contacts.filter((contact) => contact.id !== id));
        Swal.fire({
          icon: "success",
          confirmButtonColor: "#6e40c9",
          text: `Contact "${firstName} ${lastName}" has been deleted.`,
        });
      }
    });
  };

  const onEdit = (id, firstName, lastName, phone, email, profession) => {
    setPopupStatus(
      <Popup
        title={"Edit Contact"}
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
        title={"Add Contact"}
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
    <div className="List">
      {popupStatus ? popupStatus : null}

      <div className="Caption">
        <Caption />
      </div>

      <div className="ListBtnSection">
        <ListBtnSection
          onAdd={onAdd}
          onDeleteChecked={onDeleteChecked}
          checkedIdArr={checkedIdArr}
        />
      </div>

      <div className="ListHeader">
        <ListHeader onCheck={onCheck} checkAll={checkAll} />
      </div>

      <div className="ListItem">
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
              checkedIdArr={checkedIdArr}
              itemRowInlineStyle={itemRowInlineStyle}
              onDelete={onDelete}
              onEdit={onEdit}
              onCheck={onCheck}
            />
          );
        })}
      </div>
    </div>
  );
}
