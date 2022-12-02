import "./Search.css";
import { options } from "../../js/utils";

export default function Search() {
  const handleOptionChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="search-box">
      <input type="text" name="" id="" placeholder="Search" />
      <select className="select" onChange={handleOptionChange}>
        {options.map((option) => (
          <option className="selectOption" key={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
