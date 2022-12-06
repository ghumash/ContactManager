import "./App.css";
import Navbar from "../pages/Navbar/Navbar";
import Settings from "../pages/Settings/Settings";
import { cardView, inlineAdd, inlineEdit } from "../js/config";
import axios from "../js/axiosInstance";
import { localData } from "../js/localData";

import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { popupInfo } from "../js/utils";

export default function App() {
  const localCardView = JSON.parse(localStorage.getItem("localView")) || cardView;
  const localEdit = JSON.parse(localStorage.getItem("localEdit")) || inlineAdd;
  const localAdd = JSON.parse(localStorage.getItem("localAdd")) || inlineEdit;

  const [contacts, setContacts] = useState([]);
  const [cardViewState, setCardViewState] = useState(localCardView);
  const [inlineEditState, setInlineEditState] = useState(localEdit);
  const [inlineAddState, setInlineAddState] = useState(localAdd);

  useEffect(() => {
    localStorage.setItem("localView", cardViewState);
    localStorage.setItem("localEdit", inlineEditState);
    localStorage.setItem("localAdd", inlineAddState);
  }, [cardViewState, inlineEditState, inlineAddState]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = () => {
    axios
      .get("contacts")
      .then((res) => setContacts(res.data))
      .catch(() => {
        popupInfo("error", "Data from server not received!");
        setContacts([...localData]);
      });
  };

  const List = lazy(() => import("../pages/List/List"));
  const About = lazy(() => import("../pages/About/About"));

  return (
    <div className="App">
      <div className="ListNavbar">
        <Navbar />
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
                  contacts={contacts}
                  setContacts={setContacts}
                />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
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
          <Route
            path="*"
            element={
              <Suspense fallback={<div>...Loading</div>}>
                <List />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
