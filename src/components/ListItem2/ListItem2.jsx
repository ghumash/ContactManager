import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faUserPen} from "@fortawesome/free-solid-svg-icons";

export default function Data({
                               state, firstName, lastName, email, phone, profession, id,
                               contacts,
                               setContacts,
                               cardViewState,
                               inlineEditState,
                               checkedIdArr,
                               onDelete,
                               onEdit,
                               onCheck
                             }) {

  const [firstNameValue, setFirstNameValue] = useState(firstName);
  const [lastNameValue, setLastNameValue] = useState(lastName);
  const [phoneValue, setPhoneValue] = useState(phone);
  const [emailValue, setEmailValue] = useState(email);
  const [professionValue, setProfessionValue] = useState(profession);

  const newContact = {
    id: uuidv4(),
    firstName: firstNameValue,
    lastName: lastNameValue,
    email: phoneValue,
    phone: emailValue,
    profession: professionValue,
  };

  const dinamicState = <>
    <input
      type="text"
      value={firstNameValue}
      onChange={(e) => {
        setFirstNameValue(e.target.value);
      }}
    />
    <input
      type="text"
      value={lastNameValue}
      onChange={(e) => {
        setLastNameValue(e.target.value);
      }}
    />
    <input
      type="text"
      value={phoneValue}
      onChange={(e) => {
        setPhoneValue(e.target.value);
      }}
    />
    <input
      type="text"
      value={emailValue}
      onChange={(e) => {
        setEmailValue(e.target.value);
      }}
    />
    <input
      type="text"
      value={professionValue}
      onChange={(e) => {
        setProfessionValue(e.target.value);
      }}
    />
    <button type="button"></button>
    <button type="button"></button>
  </>

  const staticState = <>
    <label className="checkbox">
      <input
        type="checkbox"
        name="checkItem"
        checked={checkedIdArr.includes(id)}
        onChange={(e) => {
          onCheck(e, id);
        }}
      />
      <span></span>
    </label>
    <div>{firstNameValue} {lastNameValue}</div>
    <div>
      <a href={`mailto:${emailValue}`}>{emailValue}</a>
    </div>
    <div>
      <a href={`tel:${phoneValue}`}>{phoneValue}</a>
    </div>
    <div>{professionValue}</div>
    <div>
      <button></button>
      <button></button>
    </div>
  </>

  switch (state) {
    case "dinamicState":
      return dinamicState
    case "staticState":
      return staticState
  }
}