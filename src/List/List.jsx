import "./List.css";
import Caption from "../components/Caption/Caption";
import ListHeader from "./ListHeader/ListHeader";
import ListItem from "./ListItem/ListItem";
import Popup from "./Popup/Popup";
import ListBtnSection from "./ListBtnSection/ListBtnSection";

import {list} from "../js/const";
import {useState} from "react";

import Swal from "sweetalert2";
import {v4 as uuidv4} from "uuid";

export default function List({
                               cardViewState,
                               inlineEditState,
                               inlineAddState,
                             }) {
  const [contacts, setContacts] = useState([...list]);
  const [popupStatus, setPopupStatus] = useState();
  const [checkAll, setCheckAll] = useState(false);
  const [checkedIdArr, setCheckedIdArr] = useState([]);
  const checkedIdCopy = [...checkedIdArr];
  const [itemRowInlineStyle, setTtemRowInlineStyle] = useState(false);

  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [professionInput, setProfessionInput] = useState("");

  const newContact = {
    id: uuidv4(),
    firstName: firstNameInput,
    lastName: lastNameInput,
    email: emailInput,
    phone: phoneInput,
    profession: professionInput,
  };

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

  const isEmpty = () => {
    switch ("") {
      case firstNameInput:
      case lastNameInput:
      case phoneInput:
      case emailInput:
      case professionInput:
        return false;
      default:
        return true;
    }
  };

  const addButtonHandle = () => {
    if (isEmpty()) {
      setContacts([...contacts, newContact]);
      setFirstNameInput("")
      setLastNameInput("")
      setPhoneInput("")
      setEmailInput("")
      setProfessionInput("")
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

  const inlineAdd = (
    <div className="inlineAdd">
      <input
        type="text"
        className="InlineAdd-item"
        value={firstNameInput}
        placeholder="First Name"
        onChange={(e) => {
          setFirstNameInput(e.target.value);
        }}
      />
      <input
        type="text"
        className="InlineAdd-item"
        value={lastNameInput}
        placeholder="Last Name"
        onChange={(e) => {
          setLastNameInput(e.target.value);
        }}
      />
      <input
        type="text"
        className="InlineAdd-item"
        value={emailInput}
        placeholder="Email"
        onChange={(e) => {
          setEmailInput(e.target.value);
        }}
      />
      <input
        type="text"
        className="InlineAdd-item"
        value={phoneInput}
        placeholder="Phone"
        onChange={(e) => {
          setPhoneInput(e.target.value);
        }}
      />
      <input
        type="text"
        className="InlineAdd-item"
        value={professionInput}
        placeholder="Profession"
        onChange={(e) => {
          setProfessionInput(e.target.value);
        }}
      />
      <button
        type="button"
        className="InlineAdd-item"
        onClick={addButtonHandle}
      >
        Add
      </button>
    </div>
  );

  return (
    <>
      <div className="ListCaption">
        <Caption title={"Contacts"}/>
      </div>
      {inlineAddState && inlineAdd}
      <div className="List">
        {popupStatus ? popupStatus : null}
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
            return (
              <ListItem
                key={contact.id}
                id={contact.id}
                contacts={contacts}
                setContacts={setContacts}
                avatar={contact.avatar}
                firstName={contact.firstName}
                lastName={contact.lastName}
                email={contact.email}
                phone={contact.phone}
                profession={contact.profession}
                cardViewState={cardViewState}
                inlineEditState={inlineEditState}
                checkedIdArr={checkedIdArr}
                onDelete={onDelete}
                onEdit={onEdit}
                onCheck={onCheck}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
