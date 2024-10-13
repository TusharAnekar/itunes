import {
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
} from "../actions/songActions";

const initialState = {
  loading: false,
  songs: [],
  error: "",
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS_REQUEST:
      return { ...state, loading: true };
    case FETCH_SONGS_SUCCESS:
      return { ...state, loading: false, songs: action.payload };
    case FETCH_SONGS_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      break;
  }
};

export default songReducer;
