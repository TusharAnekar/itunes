import { useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectSongs,
} from "../selectors/songSelector";

export const SongList = () => {
  //   const {
  //     loading = false,
  //     songs = [],
  //     error = "",
  //   } = useSelector((state) => state || {});

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const songs = useSelector(selectSongs);

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
