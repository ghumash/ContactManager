import "./App.css";
import { list } from "../const";
import ListItem from "../List/ListItem/ListItem";
import Header from "../Header/Header";
import ListHeader from "../List/ListHeader/ListHeader";

export default function App() {
  return (
    <div className="App">
      <Header />
      <table>
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
    </div>
  );
}
