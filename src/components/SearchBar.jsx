import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSongs } from "../actions/songActions";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  function handleInput(event) {
    setQuery(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    if (query.trim()) {
      dispatch(fetchSongs(query));
    }
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for songs..."
        value={query}
        onChange={(event) => handleInput(event)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
