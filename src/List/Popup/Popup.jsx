import "./Popup.css";

export default function Popup({ setPopupStatus, firstName, lastName }) {
  return (
    <div
      className="Popup-mask"
      onClick={(e) => {
        if (e.target.className === "Popup-mask") {
          setPopupStatus(null);
        }
      }}
    >
      <form className="Popup-container">
        <h1>
          {firstName} {lastName}
        </h1>
        <label className="Popup-item">
          <p>First Name</p>
          <input className="Popup-input" type="text" />
        </label>
        <label className="Popup-item">
          <p>Last Name</p>
          <input className="Popup-input" type="text" />
        </label>
        <label className="Popup-item">
          <p>Email</p>
          <input className="Popup-input" type="text" />
        </label>
        <label className="Popup-item">
          <p>Phone</p>
          <input className="Popup-input" type="text" />
        </label>
        <label className="Popup-item">
          <p>Profession</p>
          <input className="Popup-input" type="text" />
        </label>
        <div className="Popup-btn-group">
          <button className="Popup-btn" type="submit">
            Save
          </button>
          <button
            className="Popup-btn"
            type="button"
            onClick={() => {
              setPopupStatus(null);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
