import "./App.css";
import List from "../List/List";
import Navbar from "../Navbar/Navbar";

export default function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="Content">
        <List />
      </div>
    </div>
  );
}
