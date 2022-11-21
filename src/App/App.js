import "./App.css";
import List from "../List/List";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Settings from "../Settings/Settings";
import {cardView, inlineEdit, inlineAdd} from "../js/config";

import {Routes, Route} from "react-router-dom";
import {useState, lazy, Suspense} from "react";

export default function App() {
  const [cardViewState, setCardViewState] = useState(cardView);
  const [inlineEditState, setInlineEditState] = useState(inlineEdit);
  const [inlineAddState, setInlineAddState] = useState(inlineAdd);

  const List = lazy(() => import("../List/List"))
  const About = lazy(() => import("../About/About"))
  const Settings = lazy(() => import("../Settings/Settings"))

  return (
    <div className="App">
      <div className="ListNavbar">
        <Navbar/>
      </div>
      <div className="Content">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>...Loading</div>}>
                <List
                  cardViewState={cardViewState}
                  inlineEditState={inlineEditState}
                  inlineAddState={inlineAddState}
                />
              </Suspense>
            }
          />
          <Route
            path='/about'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/settings"
            element={
              <Suspense fallback={<div>...Loading</div>}>
                <Settings
                  cardViewState={cardViewState}
                  inlineEditState={inlineEditState}
                  inlineAddState={inlineAddState}
                  setCardViewState={setCardViewState}
                  setInlineEditState={setInlineEditState}
                  setInlineAddState={setInlineAddState}
                />
              </Suspense>
            }
          />
          <Route path="*" element={
            <Suspense fallback={(<div>...Loading</div>)}>
              <List/>
            </Suspense>
          }/>
        </Routes>
      </div>
    </div>
  );
}
