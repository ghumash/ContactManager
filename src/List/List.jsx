import "./List.css";
import { list } from "../const";
import Caption from "../Caption/Caption";
import ListHeader from "./ListHeader/ListHeader";
import ListItem from "./ListItem/ListItem";

export default function List() {
  return (
    <table className="List-container">
      <Caption />

      <thead>
        <ListHeader />
      </thead>

      <tbody>
        {list.map((item) => {
          return (
            <ListItem
              key={item.id}
              id={item.id}
              avatar={item.avatar}
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              phone={item.phone}
              profession={item.profession}
            />
          );
        })}
      </tbody>
    </table>
  );
}
