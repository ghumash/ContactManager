import "./EditPopup.css";

export default function EditPopup() {
  return (
    <div className="EditPopup-mask">
      <form className="EditPopup-container">
        <label className="EditPopup-item">
          <p>First Name</p>
          <input className="EditPopup-input" type="text" />
        </label>
        <label className="EditPopup-item">
          <p>Last Name</p>
          <input className="EditPopup-input" type="text" />
        </label>
        <label className="EditPopup-item">
          <p>Email</p>
          <input className="EditPopup-input" type="text" />
        </label>
        <label className="EditPopup-item">
          <p>Phone</p>
          <input className="EditPopup-input" type="text" />
        </label>
        <label className="EditPopup-item">
          <p>Profession</p>
          <input className="EditPopup-input" type="text" />
        </label>
        <div className="EditPopup-btn-group">
          <button className="EditPopup-btn" type="submit">Save</button>
          <button className="EditPopup-btn" type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
}
