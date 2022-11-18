import "./ListHeader.css";

export default function ListHeader({ onCheck, checkAll }) {
  return (
    <div className="ListHeader">
      <div className="ListHeader-row">
        <div className="ListHeader-item">
          <label className="checkbox">
            <input
              name="checkAll"
              type="checkbox"
              checked={checkAll}
              onChange={onCheck}
            />
            <span></span>
          </label>
        </div>
        <div className="ListHeader-item row-item-2 row-item">NAME</div>
        <div className="ListHeader-item row-item-3 row-item">EMAIL</div>
        <div className="ListHeader-item row-item-4 row-item">PHONE</div>
        <div className="ListHeader-item row-item-5 row-item">PROFESSION</div>
        <div className="ListHeader-item row-item-6 row-item"></div>
      </div>
    </div>
  );
}
