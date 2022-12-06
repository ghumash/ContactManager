import Caption from "../../shared/Caption/Caption";
import "./Settings.css";

import SettingItem from "../../shared/SettingItem/SettingItem";
import {popupInfo} from "../../js/utils";

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
        popupInfo("warning", "During Inline Edit you can't enable the Card View option first disable Inline Edit")
      }
    } else {
      setCardViewState(false);
    }
  };

  const inlineEditHandler = () => {
    if (!inlineEditState) {
      setInlineEditState(true);
      if (cardViewState) {
        setInlineEditState(false);
        popupInfo("warning", "During Card View you can't enable the Inline Edit option first disable Card View")
      }
    } else {
      setInlineEditState(false);
    }
  };

  const inlineAddHandler = () => {
    if (!inlineAddState) {
      setInlineAddState(true);
    } else {
      setInlineAddState(false);
    }
  };

  return (
    <>
      <div className="ListCaption">
        <Caption title={"Settings"} />
      </div>
      <div className="Settings">
        <div className="Settings-container">
          <SettingItem text="Card View" checked={cardViewState} onChange={cardViewHandler}/>
          <SettingItem text="Inline Edit" checked={inlineEditState} onChange={inlineEditHandler}/>
          <SettingItem text="Inline Add" checked={inlineAddState} onChange={inlineAddHandler}/>
        </div>
      </div>
    </>
  );
}
