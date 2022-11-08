import Caption from "../Caption/Caption";
import "./Settings.css";

export default function Settings({
  cardViewState,
  inlineEditState,
  setCardViewState,
  setInlineEditState,
}) {
  const cardViewHandler = () => {
    if (!cardViewState) {
      setCardViewState(true);
    } else {
      setCardViewState(false);
    }
  };

  const inlineEdithandler = () => {
    if (!inlineEditState) {
      setInlineEditState(true);
    } else {
      setInlineEditState(false);
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
        </div>
      </div>
    </>
  );
}
