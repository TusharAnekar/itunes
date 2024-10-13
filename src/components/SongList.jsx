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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (songs.length === 0) return <p>No songs found. Try another search.</p>;

  return (
    <ul>
      {songs?.map((song) => (
        <li key={song.trackId}>
          <img src={song.artworkUrl100} alt={song.trackName} />
          <p>
            {song.trackName} by {song.artistName}
          </p>
        </li>
      ))}
    </ul>
  );
};
