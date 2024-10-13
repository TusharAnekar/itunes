import { applyMiddleware, createStore } from "redux";
import songReducer from "./reducers/songReducer";
import { thunk } from "redux-thunk";

const store = createStore(songReducer, applyMiddleware(thunk));

export default store;
