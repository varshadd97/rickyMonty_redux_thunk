/** @format */

import { combineReducers } from "redux";
import episodeReducer from "./episodeReducer";
import paginationReducer from "./pageReducer";
const rootReducer = combineReducers({
  episodeReducer,
  paginationReducer,
});

export default rootReducer;
