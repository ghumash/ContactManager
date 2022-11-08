import Caption from "../Caption/Caption";
import "./Settings.css";

export default function Settings({ cardViewState, setCardViewState }) {
  const cardViewHandler = () => {
    if (!cardViewState) {
      setCardViewState(true);
    } else {
      setCardViewState(false);
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
            <input type="checkbox" className="switch" />
          </div>
          <div className="Settings-item">
            <div>Inline Edit</div>
            <input type="checkbox" className="switch" />
          </div>
        </div>
      </div>
    </>
  );
}
