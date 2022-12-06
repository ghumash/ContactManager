import "./List.css";
import Caption from "../../shared/Caption/Caption";
import ListHeader from "./ListHeader/ListHeader";
import ListItem from "./ListItem/ListItem";
import PopupContact from "./PopupContact/PopupContact";
import ListBtnSection from "./ListBtnSection/ListBtnSection";
import InlineContact from "./InlineContact/InlineContact";

import { popupConfirm, popupInfo } from "../../js/utils";
import axios from "../../js/axiosInstance";

import { useState } from "react";
import { contactLabel } from "../../js/const";

export default function List({
  contacts,
  setContacts,
  cardViewState,
  inlineEditState,
  inlineAddState,
}) {
  const [popupContactStatus, setPopupContactStatus] = useState(null);
  const [inlineContactStatus, setInlineContactStatus] = useState(null);
  const [checkAll, setCheckAll] = useState(false);
  const [checkedIdArr, setCheckedIdArr] = useState([]);
  const checkedIdCopy = [...checkedIdArr];
  const [newContact, setNewContact] = useState({});

  const [searchText, setSearchText] = useState("");
  const [select, setSelect] = useState("");

  const onCheck = (e, id) => {
    const { name } = e.target;
    if (name === "checkAll") {
      if (e.target.checked) {
        setCheckAll(true);
        const notCheckedContacts = contacts.filter(
          (contact) => !checkedIdCopy.includes(contact.id)
        );
        notCheckedContacts.map((contact) => checkedIdCopy.push(contact.id));
        setCheckedIdArr(checkedIdCopy);
      } else {
        setCheckAll(false);
        setCheckedIdArr([]);
      }
    } else if (name === "checkItem") {
      if (e.target.checked) {
        checkedIdCopy.push(id);
        setCheckedIdArr(checkedIdCopy);
        if (checkedIdCopy.length === contacts.length) {
          setCheckAll(true);
        }
      } else {
        setCheckAll(false);
        setCheckedIdArr(checkedIdCopy.filter((checkedId) => checkedId !== id));
      }
    }
  };

  const onDeleteChecked = async () => {
    if (checkedIdArr.length !== 0) {
      await popupConfirm(
        "Do you want to delete these contacts?",
        "Yes, delete these contacts!"
      ).then((result) => {
        if (result.isConfirmed) {
          checkedIdArr.map((id) => axios.delete(`contacts/${id}`));
          popupInfo("success", "Contacts has been deleted!");
          setContacts(
            contacts.filter((contact) => !checkedIdArr.includes(contact.id))
          );
          setCheckedIdArr([]);
          setCheckAll(false);
        }
      });
    }
  };

  const onPopupContactEdit = (contact) => {
    setPopupContactStatus(
      <PopupContact
        title={"Edit Contact"}
        button={"Save"}
        contact={contact}
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
        contacts={contacts}
        setContacts={setContacts}
        setPopupContactStatus={setPopupContactStatus}
        contact={{
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          profession: "",
        }}
      />
    );
  };

  const onInlineContactEdit = (contact) => {
    setInlineContactStatus(
      <InlineContact title={"Edit Contact"} button={"Save"} contact={contact} />
    );
  };

  const handleSearch = (contact) => {
    if (select !== "") {
      if (contact[contactLabel[select]].toLowerCase().includes(searchText)) {
        return contact;
      }
    } else {
      if (
        Object.keys(contact).some((key) =>
          contact[key].toLowerCase().includes(searchText)
        )
      ) {
        return contact;
      }
    }
  };

  return (
    <>
      <div className="ListCaption">
        <Caption title={"Contacts"} />
      </div>
      {inlineAddState && (
        <div className="InlineAdd">
          <InlineContact
            title={"Add Contact"}
            button={"Add"}
            contacts={contacts}
            setContacts={setContacts}
            setInlineContactStatus={setInlineContactStatus}
            contact={{
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              profession: "",
            }}
          />
        </div>
      )}

      <div className="List">
        {popupContactStatus ? popupContactStatus : null}
        <div className="ListBtnSection-container">
          <ListBtnSection
            setSelect={setSelect}
            setSearchText={setSearchText}
            onPopupContactAdd={onPopupContactAdd}
            onCheck={onCheck}
            onDeleteChecked={onDeleteChecked}
            checkedIdArr={checkedIdArr}
            checkAll={checkAll}
            cardViewState={cardViewState}
          />
        </div>
        {!cardViewState ? (
          <ListHeader onCheck={onCheck} checkAll={checkAll} />
        ) : null}
        <div
          className={cardViewState ? "ListItem-cardView" : "ListItem-rowView"}
        >
          {contacts.map((contact) => {
            if (handleSearch(contact)) {
              return inlineContactStatus && contact.id === newContact.id ? (
                <div className="InlineEditItem" key={contact.id}>
                  <InlineContact
                    button={"Save"}
                    contact={contact}
                    contacts={contacts}
                    setContacts={setContacts}
                    setInlineContactStatus={setInlineContactStatus}
                  />
                </div>
              ) : (
                <ListItem
                  key={contact.id}
                  id={contact.id}
                  contact={contact}
                  contacts={contacts}
                  setContacts={setContacts}
                  setNewContact={setNewContact}
                  cardViewState={cardViewState}
                  inlineEditState={inlineEditState}
                  checkedIdArr={checkedIdArr}
                  onPopupContactEdit={onPopupContactEdit}
                  onInlineContactEdit={onInlineContactEdit}
                  onCheck={onCheck}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
