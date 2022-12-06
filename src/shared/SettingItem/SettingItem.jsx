import "./SettingItem.css"

export default function SettingItem({text, checked, onChange}) {
  return (
    <div className="Settings-item">
      <div>{text}</div>
      <input
        type="checkbox"
        className="switch"
        checked={checked}
        onChange={onChange}
      />
    </div>
  )
}

