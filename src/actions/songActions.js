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
    console.log(response);
    const {
      data: { results },
      status,
    } = response;
    if (status === 200) {
      dispatch({ type: FETCH_SONGS_SUCCESS, payload: results });
    } else {
      dispatch({
        type: FETCH_SONGS_FAILURE,
        error: "Error while fetching data",
      });
    }
  } catch (error) {
    dispatch({ type: FETCH_SONGS_FAILURE, error: error.message });
  }
};
