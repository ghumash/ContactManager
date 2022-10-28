import "./ListHeader.css";

export default function ListHeader() {
  return (
    <tr className="">
      <th>
        <input type="checkbox" />
      </th>
      <th>NAME</th>
      <th>EMAIL</th>
      <th>PHONE</th>
      <th>PROFESSION</th>
    </tr>
  );
}
