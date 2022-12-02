import "./Search.css";
import { options } from "../../js/utils";

export default function Search({ setSearchText, setSelect }) {
  const handlSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search"
        onChange={handlSearchInput}
      />
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
