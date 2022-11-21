import "./List.css";
import Caption from "../components/Caption/Caption";
import ListHeader from "./ListHeader/ListHeader";
import ListItem from "./ListItem/ListItem";
import PopupContact from "./PopupContact/PopupContact";
import ListBtnSection from "./ListBtnSection/ListBtnSection";
import InlineContact from "./InlineContact/InlineContact";

import {list} from "../js/local_data";
import {popupConfirm, popupInfo} from "../js/utils";

import {useState} from "react";

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
      popupConfirm("Do you want to delete these contacts?", "Yes, delete these contacts!")
        .then((result) => {
          if (result.isConfirmed) {
            setContacts(
              contacts.filter((contact) => !checkedIdArr.includes(contact.id))
            );
            setCheckedIdArr([]);
            setCheckAll(false);
            popupInfo("success", "Contacts has been deleted!")
          }
        });
    }
  };

  const onDelete = (id, firstName, lastName) => {
    popupConfirm(`Do you want delete "${firstName} ${lastName}" Contact?`, "Yes, delete it!")
      .then((result) => {
        if (result.isConfirmed) {
          setContacts(contacts.filter((contact) => contact.id !== id));
          popupInfo("success", `Contact "${firstName} ${lastName}" has been deleted.`)
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

  const onPopupContactAdd = () => {
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

  const onInlineContactEdit = (id, firstName, lastName, phone, email, profession) => {
    setInlineContactStatus(
      <InlineContact
        title={"Edit Contact"}
        button={"Save"}
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        email={email}
        profession={profession}
      />
    );
  };

  return (
    <>
      <div className="ListCaption">
        <Caption title={"Contacts"}/>
      </div>
      {inlineAddState &&
        <div className="InlineAdd">
          <InlineContact
            title={"Add Contact"}
            button={"Add"}
            firstName={""}
            lastName={""}
            phone={""}
            email={""}
            profession={""}
            contacts={contacts}
            setContacts={setContacts}
            setInlineContactStatus={setInlineContactStatus}
          />
        </div>
      }

      <div className="List">
        {popupContactStatus ? popupContactStatus : null}
        <div className="ListBtnSection-container">
          <ListBtnSection
            onPopupContactAdd={onPopupContactAdd}
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
              <div className="InlineEditItem" key={contact.id}>
                <InlineContact
                  button={"Save"}
                  id={contact.id}
                  contact={contact}
                  firstName={contact.firstName}
                  lastName={contact.lastName}
                  phone={contact.phone}
                  email={contact.email}
                  profession={contact.profession}
                  contacts={contacts}
                  setContacts={setContacts}
                  setInlineContactStatus={setInlineContactStatus}
                />
              </div>
              : (
                <ListItem
                  key={contact.id}
                  id={contact.id}
                  contact={contact}
                  setNewContact={setNewContact}
                  cardViewState={cardViewState}
                  inlineEditState={inlineEditState}
                  checkedIdArr={checkedIdArr}
                  onDelete={onDelete}
                  onPopupContactEdit={onPopupContactEdit}
                  onInlineContactEdit={onInlineContactEdit}
                  onCheck={onCheck}
                />
              );
          })}
        </div>
      </div>
    </>
  );
}
