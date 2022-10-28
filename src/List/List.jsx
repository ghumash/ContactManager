import "./List.css";
import { list } from "../const";
import Caption from "../Caption/Caption";
import ListHeader from "./ListHeader/ListHeader";
import ListItem from "./ListItem/ListItem";

import { useState, useEffect } from "react";

import swal from "sweetalert";

export default function List() {
  const [contacts, setContacts] = useState([...list]);

  const popup = (text) => {
    swal({
      title: text,
      text: false,
      icon: false,
      button: false,
    });
    setTimeout(() => {
      swal.close();
    }, 400);
  };

  const onDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <table className="List-container">
      <Caption />

      <thead>
        <ListHeader />
      </thead>

      <tbody>
        {contacts.map((contact) => {
          return (
            <ListItem
              key={contact.id}
              id={contact.id}
              avatar={contact.avatar}
              firstName={contact.firstName}
              lastName={contact.lastName}
              email={contact.email}
              phone={contact.phone}
              profession={contact.profession}
              onDelete={onDelete}
            />
          );
        })}
      </tbody>
    </table>
  );
}
