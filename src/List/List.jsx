import "./List.css";
import { list } from "../const";
import ListHeader from "./ListHeader/ListHeader";
import ListItem from "./ListItem/ListItem";

export default function List() {
  return (
    <table className="List-container">
      <ListHeader />
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
          />
        );
      })}
    </table>
  );
}
