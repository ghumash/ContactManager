import "./ListHeader.css";

export default function ListHeader() {
  return (
    <tr className="ListHeader-row">
      <th className="ListHeader-item">
        <label className="checkbox">
          <input type="checkbox" />
          <span></span>
        </label>
      </th>
      <th className="ListHeader-item">NAME</th>
      <th className="ListHeader-item">EMAIL</th>
      <th className="ListHeader-item">PHONE</th>
      <th className="ListHeader-item">PROFESSION</th>
      <th className="ListHeader-item"></th>
    </tr>
  );
}
