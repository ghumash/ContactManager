import "./ListHeader.css";

export default function ListHeader() {
  return (
    <tr className="ListHeader-row">
      <th className="ListHeader-item">
        <input type="checkbox" />
      </th>
      <th className="ListHeader-item">NAME</th>
      <th className="ListHeader-item">EMAIL</th>
      <th className="ListHeader-item">PHONE</th>
      <th className="ListHeader-item">PROFESSION</th>
    </tr>
  );
}
