import "./ListItem.css";

export default function ListItem({
  id,
  avatar,
  firstName,
  lastName,
  email,
  phone,
  profession,
}) {
  return (
    <div className="ListItem-container">
      <input type="checkbox" />
      <div>{avatar}</div>
      <div>
        {firstName}
        {lastName}
      </div>
      <div>{email}</div>
      <div>{phone}</div>
      <div>{profession}</div>
    </div>
  );
}
