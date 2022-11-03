import "./ListHeader.css";

export default function ListHeader({ onAdd, onCheck }) {
  return (
    <div className="ListHeader-row">
      <div className="ListHeader-item">
        <label className="checkbox">
          <input
            name="checkAll"
            type="checkbox"
            onChange={(e) => {
              onCheck(e);
            }}
          />
          <span></span>
        </label>
      </div>
      <div className="ListHeader-item">NAME</div>
      <div className="ListHeader-item">EMAIL</div>
      <div className="ListHeader-item">PHONE</div>
      <div className="ListHeader-item">PROFESSION</div>
      <div className="ListHeader-item">
        <button
          className="ListHeader-add-button"
          onClick={() => {
            onAdd();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
