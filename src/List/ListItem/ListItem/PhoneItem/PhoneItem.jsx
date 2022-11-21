import {useState} from "react";

export default function PhoneItem({phoneItem}) {
  const [phoneInputValue, setPhoneInput] = useState(phoneItem);

  return (
    <input
      className="InlineContact-item"
      placeholder="Phone"
      type="text"
      value={phoneInputValue}
      onChange={(e) => {
        setPhoneInput(e.target.value)
      }}
    />
  );
}
