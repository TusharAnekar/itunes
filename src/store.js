import { applyMiddleware, createStore } from "redux";
import songReducer from "./reducers/songReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const store = createStore(
  songReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
