import "./Caption.css";

export default function Caption({ title }) {
  return (
    <div className="Caption">
      <div className="Caption-container">{title}</div>
    </div>
  );
}
