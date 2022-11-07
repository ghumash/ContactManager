import "./App.css";
import List from "../List/List";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Settings from "../Settings/Settings";
import { cardView } from "../js/config";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [cardViewState, setCardViewState] = useState(cardView);

  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="Content">
        <Routes>
          <Route path="/" element={<List cardViewState={cardViewState} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/settings"
            element={
              <Settings
                cardViewState={cardViewState}
                setCardViewState={setCardViewState}
              />
            }
          />
          <Route path="*" element={<List />} />
        </Routes>
      </div>
    </div>
  );
}
