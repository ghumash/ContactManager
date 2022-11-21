import {useState} from "react";

export default function PhoneItem({id, value, setChangedPhone}) {
  const [phoneInputValue, setPhoneInput] = useState(value);

  return (
    <input
      className="InlineContact-item"
      placeholder="Phone"
      type="text"
      value={phoneInputValue}
      onChange={(e) => {
        setPhoneInput(e.target.value)
        setChangedPhone({
          id: id,
          value: phoneInputValue
        })
      }}
    />
  );
}
