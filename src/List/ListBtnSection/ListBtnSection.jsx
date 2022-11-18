import "./ListBtnSection.css";

export default function ListBtnSection({
   onPopupContactAdd, onCheck, onDeleteChecked, checkedIdArr, checkAll, cardViewState,
}) {
  return (<div className="ListBtnSection">
    {cardViewState ? (<div className="ListBtnSection-cardView-btn-group">
      <label className="checkbox ListBtnSection-checkAll">
        <input
          name="checkAll"
          type="checkbox"
          checked={checkAll}
          onChange={onCheck}
        />
        <span></span>
      </label>
      <button
        type="button"
        className={checkedIdArr.length !== 0 ? "ListBtnSection-delete-checked-button" : "ListBtnSection-delete-checked-button-disable"}
        onClick={onDeleteChecked}>
        Delete Checked
      </button>
    </div>) : (<button
      type="button"
      className={checkedIdArr.length !== 0 ? "ListBtnSection-delete-checked-button" : "ListBtnSection-delete-checked-button-disable"}
      onClick={onDeleteChecked}>
      Delete Checked
    </button>)}
    <button className="ListBtnSection-add-button" onClick={onPopupContactAdd}>
      Add
    </button>
  </div>);
}
