import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SongList } from "./components/SongList";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <SongList />
    </div>
  );
}

export default App;
