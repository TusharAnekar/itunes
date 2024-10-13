import axios from "axios";

export const FETCH_SONGS_REQUEST = "FETCH_SONGS_REQUEST";
export const FETCH_SONGS_SUCCESS = "FETCH_SONGS_SUCCESS";
export const FETCH_SONGS_FAILURE = "FETCH_SONGS_FAILURE";

export const fetchSongs = (query) => async (dispatch) => {
  dispatch({ type: FETCH_SONGS_REQUEST });
  try {
    const response = await axios.get(
      `https://itunes.apple.com/search?term=${query}&entity=song`
    );
    dispatch({ type: FETCH_SONGS_SUCCESS, payload: response.data.results });
  } catch (error) {
    dispatch({ type: FETCH_SONGS_FAILURE, error: error.message });
  }
};
