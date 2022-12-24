import "./App.css";
import Navbar from "../pages/Navbar/Navbar";
import Loader from "../shared/Loader/Loader";
import Settings from "../pages/Settings/Settings";
import { cardView, inlineAdd, inlineEdit } from "../js/config";
import axios from "../js/axiosInstance";
import { localData } from "../js/localData";
import { SettingsContext } from "../context/context";

import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { popupInfo } from "../js/utils";

export default function App() {
  const localCardView =
    JSON.parse(localStorage.getItem("localView")) || cardView;
  const localEdit = JSON.parse(localStorage.getItem("localEdit")) || inlineAdd;
  const localAdd = JSON.parse(localStorage.getItem("localAdd")) || inlineEdit;

  const [contacts, setContacts] = useState([]);
  const [cardViewState, setCardViewState] = useState(localCardView);
  const [inlineEditState, setInlineEditState] = useState(localEdit);
  const [inlineAddState, setInlineAddState] = useState(localAdd);
  const [isLoading, setIsLoading] = useState(false);

  const states = {
    cardViewState,
    setCardViewState,
    inlineEditState,
    setInlineEditState,
    inlineAddState,
    setInlineAddState,
  };

  useEffect(() => {
    localStorage.setItem("localView", cardViewState);
    localStorage.setItem("localEdit", inlineEditState);
    localStorage.setItem("localAdd", inlineAddState);
  }, [cardViewState, inlineEditState, inlineAddState]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = () => {
    setIsLoading(true);
    axios
      .get("contacts.json")
      .then((res) => {
        console.log(res.data);

        const contacts = res.data
          ? Object.keys(res.data).map((key) => ({
              ...res.data[key],
              id: key,
            }))
          : [];
        setContacts(contacts);
      })
      .catch(() => {
        popupInfo("error", "Data from server not received!");
        setContacts([...localData]);
      })
      .finally(() => setIsLoading(false));
  };

  const List = lazy(() => import("../pages/List/List"));
  const About = lazy(() => import("../pages/About/About"));

  return (
    <div className="App">
      <div className="ListNavbar">
        <Navbar />
      </div>
      <div className="Content">
        <SettingsContext.Provider value={states}>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loader />}>
                  <List
                    isLoading={isLoading}
                    contacts={contacts}
                    setContacts={setContacts}
                  />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<Loader />}>
                  <About />
                </Suspense>
              }
            />
            <Route path="/settings" element={<Settings />} />
            <Route
              path="*"
              element={
                <Suspense fallback={<Loader />}>
                  <List />
                </Suspense>
              }
            />
          </Routes>
        </SettingsContext.Provider>
      </div>
    </div>
  );
}
