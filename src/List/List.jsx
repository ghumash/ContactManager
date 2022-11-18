import "./List.css";
import Caption from "../components/Caption/Caption";
import ListHeader from "./ListHeader/ListHeader";
import ListItem from "./ListItem/ListItem";
import PopupContact from "./PopupContact/PopupContact";
import ListBtnSection from "./ListBtnSection/ListBtnSection";
import InlineContact from "./InlineContact/InlineContact";

import {list} from "../js/const";
import {useState} from "react";

import Swal from "sweetalert2";

export default function List({
                               cardViewState,
                               inlineEditState,
                               inlineAddState,
                             }) {
  const [contacts, setContacts] = useState([...list]);
  const [popupContactStatus, setPopupContactStatus] = useState(null);
  const [inlineContactStatus, setInlineContactStatus] = useState(null);
  const [checkAll, setCheckAll] = useState(false);
  const [checkedIdArr, setCheckedIdArr] = useState([]);
  const checkedIdCopy = [...checkedIdArr];
  const [itemRowInlineStyle, setTtemRowInlineStyle] = useState(false);

  const [newContact, setNewContact] = useState({})


  const onCheck = (e, id) => {
    const {name} = e.target;
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
        iconColor: "var(--color-4)",
        showCancelButton: true,
        confirmButtonColor: "var(--color-12)",
        cancelButtonColor: "var(--color-10)",
        confirmButtonText: "Yes, delete these contacts!",
      }).then((result) => {
        if (result.isConfirmed) {
          setContacts(
            contacts.filter((contact) => !checkedIdArr.includes(contact.id))
          );
          setCheckedIdArr([]);
          setCheckAll(false);
          Swal.fire({
            icon: "success",
            iconColor: "var(--color-4)",
            text: "Contacts has been deleted!",
            confirmButtonColor: "var(--color-12)",
          });
        }
      });
    }
  };

  const onDelete = (id, firstName, lastName) => {
    Swal.fire({
      text: `Do you want delete "${firstName} ${lastName}" Contact?`,
      icon: "warning",
      iconColor: "var(--color-4)",
      showCancelButton: true,
      confirmButtonColor: "var(--color-12)",
      cancelButtonColor: "var(--color-10)",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setContacts(contacts.filter((contact) => contact.id !== id));
        Swal.fire({
          icon: "success",
          iconColor: "var(--color-4)",
          confirmButtonColor: "var(--color-12)",
          text: `Contact "${firstName} ${lastName}" has been deleted.`,
        });
      }
    });
  };

  const onPopupContactEdit = (id, firstName, lastName, phone, email, profession) => {
    setPopupContactStatus(
      <PopupContact
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
        setPopupContactStatus={setPopupContactStatus}
      />
    );
  };

  const onAdd = () => {
    setPopupContactStatus(
      <PopupContact
        title={"Add Contact"}
        button={"Add"}
        firstName={""}
        lastName={""}
        phone={""}
        email={""}
        profession={""}
        contacts={contacts}
        setContacts={setContacts}
        setPopupContactStatus={setPopupContactStatus}
      />
    );
  };

  return (
    <>
      <div className="ListCaption">
        <Caption title={"Contacts"}/>
      </div>
      <div className="List">
        {popupContactStatus ? popupContactStatus : null}
        <div className="ListBtnSection-container">
          <ListBtnSection
            onAdd={onAdd}
            onCheck={onCheck}
            onDeleteChecked={onDeleteChecked}
            checkedIdArr={checkedIdArr}
            checkAll={checkAll}
            cardViewState={cardViewState}
          />
        </div>
        {!cardViewState ? (
          <ListHeader onCheck={onCheck} checkAll={checkAll}/>
        ) : null}
        <div
          className={cardViewState ? "ListItem-cardView" : "ListItem-rowView"}
        >

          {contacts.map((contact) => {
            return inlineContactStatus && contact.id === newContact.id ?
              <InlineContact
                title={"Edit Contact"}
                button={"Save"}
                key={contact.id}
                id={contact.id}
                contacts={contacts}
                contact={contact}
                setContacts={setContacts}
                setNewContact={setNewContact}
                setInlineContactStatus={setInlineContactStatus}
              /> : (
                <ListItem
                  key={contact.id}
                  id={contact.id}
                  contact={contact}
                  setNewContact={setNewContact}
                  contacts={contacts}
                  setContacts={setContacts}
                  cardViewState={cardViewState}
                  inlineEditState={inlineEditState}
                  checkedIdArr={checkedIdArr}
                  onDelete={onDelete}
                  onPopupContactEdit={onPopupContactEdit}
                  setInlineContactStatus={setInlineContactStatus}
                  onCheck={onCheck}
                />
              );
          })}
        </div>
      </div>
    </>
  );
}
