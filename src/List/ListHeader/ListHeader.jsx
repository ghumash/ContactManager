import "./ListHeader.css";

export default function ListHeader({ onCheck, checkAll }) {
  return (
    <div className="ListHeader-row">
      <div className="ListHeader-item">
        <label className="checkbox">
          <input
            name="checkAll"
            type="checkbox"
            checked={checkAll}
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
      <div className="ListHeader-item"></div>
    </div>
  );
}
