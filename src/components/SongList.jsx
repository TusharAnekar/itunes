import { useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectSongs,
} from "../selectors/songSelector";

export const SongList = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const songs = useSelector(selectSongs);

  if (loading) return <p className="text-center p-2">Loading...</p>;
  if (error) return <p className="text-center p-2">Error: {error}</p>;
  if (songs.length === 0)
    return (
      <p className="text-center p-2">No songs found. Try another search.</p>
    );

  return (
    <ul className="p-2 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-2">
      {songs?.map((song) => (
        <li key={song.trackId} className="border bg-gray-300 rounded-lg p-2">
          <img
            src={song.artworkUrl100}
            alt={song.trackName}
            className="rounded-lg"
          />
          <p>
            {song.trackName} by {song.artistName}
          </p>
        </li>
      ))}
    </ul>
  );
};
