import { combineReducers } from "redux";

import todoReducer from "./todo";
import onProgressReducer from "./onProgress";
import doneReducer from "./done";

const allReducers = combineReducers({
  todo: todoReducer,
  onProgress: onProgressReducer,
  done: doneReducer,
});

export default allReducers;
