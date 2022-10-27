import "./App.css";
import { list } from "../const";
import ListItem from "../ListItem/ListItem";
import Header from "../Header/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div>
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
      </div>
    </div>
  );
}
