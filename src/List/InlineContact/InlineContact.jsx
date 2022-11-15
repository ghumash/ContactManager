export default function InlineContact() {
  return (
    <>
      <input
        type="text"
        value={firstNameInput}
        // placeholder="First Name"
        onChange={(e) => {
          setFirstNameInput(e.target.value);
        }}
      />
      <input
        type="text"
        value={lastNameInput}
        // placeholder="Last Name"
        onChange={(e) => {
          setLastNameInput(e.target.value);
        }}
      />
      <input
        type="text"
        value={emailInput}
        // placeholder="Email"
        onChange={(e) => {
          setEmailInput(e.target.value);
        }}
      />
      <input
        type="text"
        value={phoneInput}
        // placeholder="Phone"
        onChange={(e) => {
          setPhoneInput(e.target.value);
        }}
      />
      <input
        type="text"
        value={professionInput}
        // placeholder="Profession"
        onChange={(e) => {
          setProfessionInput(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={addButtonHandle}
      >
        Add
      </button>
    </>
  )
}