import "./ListBtnSection.css";

export default function ListBtnSection({
  onAdd,
  onDeleteChecked,
  checkedIdArr,
}) {
  return (
    <div className="ListBtnSection-container">
      <button
        type="button"
        className={
          checkedIdArr.length !== 0
            ? "ListBtnSection-delete-checked-button"
            : "ListBtnSection-delete-checked-button-disable"
        }
        onClick={onDeleteChecked}
      >
        Delete Checked
      </button>
      <button
        className="ListBtnSection-add-button"
        onClick={() => {
          onAdd();
        }}
      >
        Add
      </button>
    </div>
  );
}
