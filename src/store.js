import { applyMiddleware, createStore } from "redux";
import songReducer from "./reducers/songReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  songReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
