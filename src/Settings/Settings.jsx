import Caption from "../Caption/Caption";
import "./Settings.css";

import Swal from "sweetalert2";

export default function Settings({
  cardViewState,
  inlineEditState,
  inlineAddState,
  setCardViewState,
  setInlineEditState,
  setInlineAddState,
}) {
  const cardViewHandler = () => {
    if (!cardViewState) {
      setCardViewState(true);
      if (inlineEditState) {
        setCardViewState(false);
        Swal.fire({
          text: `During Inline Edit you can't enable the Card View option first disable Inline Edit`,
          icon: "warning",
          iconColor: "var(--color-4)",
          confirmButtonColor: "var(--color-12)",
        });
      }
    } else {
      setCardViewState(false);
    }
  };

  const inlineEdithandler = () => {
    if (!inlineEditState) {
      setInlineEditState(true);
      if (cardViewState) {
        setInlineEditState(false);
        Swal.fire({
          text: `During Card View you can't enable the Inline Edit option first disable Card View`,
          icon: "warning",
          iconColor: "var(--color-4)",
          confirmButtonColor: "var(--color-12)",
        });
      }
    } else {
      setInlineEditState(false);
    }
  };

  const inlineAddhandler = () => {
    if (!inlineAddState) {
      setInlineAddState(true);
    } else {
      setInlineAddState(false);
    }
  };

  return (
    <>
      <Caption title={"Settings"} />
      <div className="Settings">
        <div className="Settings-container">
          <div className="Settings-item">
            <div>Card View</div>
            <input
              type="checkbox"
              className="switch"
              checked={cardViewState}
              onChange={cardViewHandler}
            />
          </div>
          <div className="Settings-item">
            <div>Inline Edit</div>
            <input
              type="checkbox"
              className="switch"
              checked={inlineEditState}
              onChange={inlineEdithandler}
            />
          </div>
          <div className="Settings-item">
            <div>Inline Add</div>
            <input
              type="checkbox"
              className="switch"
              checked={inlineAddState}
              onChange={inlineAddhandler}
            />
          </div>
        </div>
      </div>
    </>
  );
}
