import { combineReducers } from "redux";
import {
  todoReducer,
  todoItemReducer,
  todoVisibilityReducer,
  todoEditReducer,
} from "./todo";
import {
  onProgressReducer,
  onProgressItemReducer,
  onProgressVisibilityReducer,
  onProgressEditReducer,
} from "./onProgress";
import {
  doneReducer,
  doneItemReducer,
  doneVisibilityReducer,
  doneEditReducer,
} from "./done";

const allReducers = combineReducers({
  todo: todoReducer,
  todoItem: todoItemReducer,
  todoVisibility: todoVisibilityReducer,
  todoEdit: todoEditReducer,
  onProgress: onProgressReducer,
  onProgressItem: onProgressItemReducer,
  onProgressVisibility: onProgressVisibilityReducer,
  onProgressEdit: onProgressEditReducer,
  done: doneReducer,
  doneItem: doneItemReducer,
  doneVisibility: doneVisibilityReducer,
  doneEdit: doneEditReducer,
});

export default allReducers;
