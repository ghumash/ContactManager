import "./App.css";
import List from "../List/List";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Settings from "../Settings/Settings";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="Content">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<List />} />
        </Routes>
      </div>
    </div>
  );
}
