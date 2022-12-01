import { useState } from "react";
import "./Search.css"

export default function Search() {
  const [searchText, setSearchText] = useState("");

  return (
    <input className="Search" type="text" value={searchText}/>
  );
}
