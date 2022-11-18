import Caption from "../components/Caption/Caption";
import "./Settings.css";

import Swal from "sweetalert2";
import SettingItem from "../components/SettingItem/SettingItem";
import {popupInfo} from "../js/utils";

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

  const inlineEdithandler = () => {
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

  const inlineAddhandler = () => {
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
          <SettingItem text="Inline Edit" checked={inlineEditState} onChange={inlineEdithandler}/>
          <SettingItem text="Inline Add" checked={inlineAddState} onChange={inlineAddhandler}/>
        </div>
      </div>
    </>
  );
}
