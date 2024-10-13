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
    <form
      onSubmit={handleSearch}
      className="flex justify-center gap-2 p-2 border-b"
    >
      <input
        type="text"
        placeholder="Search for songs..."
        value={query}
        onChange={(event) => handleInput(event)}
        className="border border-black rounded-lg p-1"
      />
      <button
        type="submit"
        className="px-2 py-1 bg-green-500 rounded-lg text-white font-semibold"
      >
        Search
      </button>
    </form>
  );
};
