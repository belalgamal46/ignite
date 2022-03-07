import { combineReducers } from "redux";
//Reducers
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

const rootReducers = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducers;
