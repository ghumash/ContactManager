import Caption from "../Caption/Caption";
import "./Settings.css";

export default function Settings() {
  return (
    <div className="Settings">
      <Caption title={"Settings"} />
      <div className="Settings-container">
        <div className="Settings-item">
          <div>Inline Edit</div>
          <input type="checkbox" class="switch" />
        </div>
        <div className="Settings-item">
          <div>Inline Edit</div>
          <input type="checkbox" class="switch" />
        </div>
        <div className="Settings-item">
          <div>Inline Edit</div>
          <input type="checkbox" class="switch" />
        </div>
      </div>
    </div>
  );
}
