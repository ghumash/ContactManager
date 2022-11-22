import "./App.css";
import Navbar from "../Navbar/Navbar";
import Settings from "../Settings/Settings";
import {cardView, inlineAdd, inlineEdit} from "../js/config";

import {Route, Routes} from "react-router-dom";
import {lazy, Suspense, useState} from "react";

export default function App() {
  const [cardViewState, setCardViewState] = useState(cardView);
  const [inlineEditState, setInlineEditState] = useState(inlineEdit);
  const [inlineAddState, setInlineAddState] = useState(inlineAdd);

  const List = lazy(() => import("../List/List"))
  const About = lazy(() => import("../About/About"))

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
                <About/>
              </Suspense>
            }
          />
          <Route
            path="/settings"
            element={
              <Settings
                cardViewState={cardViewState}
                inlineEditState={inlineEditState}
                inlineAddState={inlineAddState}
                setCardViewState={setCardViewState}
                setInlineEditState={setInlineEditState}
                setInlineAddState={setInlineAddState}
              />
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
