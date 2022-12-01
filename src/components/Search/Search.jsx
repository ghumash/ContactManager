import { useState } from "react";
import "./Search.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { options } from "../../js/utils";

export default function Search() {
  const [select, setSelect] = useState("");

  const handleOptionChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="search-box">
      <input type="text" name="" id="" placeholder="Search" />
      <select className="select" onChange={handleOptionChange}>
        {options.map((option) => (
          <option className="selectOption" key={option.label}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
