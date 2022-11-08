import "./ListBtnSection.css";

export default function ListBtnSection({
  onAdd,
  onCheck,
  onDeleteChecked,
  checkedIdArr,
  checkAll,
  cardViewState,
}) {
  return (
    <div className="ListBtnSection">
      <div className="ListBtnSection-container">
        <div>
          {cardViewState ? (
            <label className="checkbox ListBtnSection-checkAll">
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
          ) : null}

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
        </div>

        <button
          className="ListBtnSection-add-button"
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
