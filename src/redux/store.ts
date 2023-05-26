import { createStore } from "redux";
import { gameReducer } from "../redux/gameReducer";

const store = createStore(gameReducer);

export default store;
