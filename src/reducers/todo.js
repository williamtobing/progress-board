export const todoReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_TODO":
      return true;
    case "HIDE_TODO":
      return false;
    default:
      return state;
  }
};

export const todoVisibilityReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_TODO_VISIBILITY":
      return true;
    case "HIDE_TODO_VISIBILITY":
      return false;
    default:
      return state;
  }
};

export const todoEditReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_TODO_EDIT":
      return true;
    case "HIDE_TODO_EDIT":
      return false;
    default:
      return state;
  }
};

export const todoItemReducer = (state = "", action) => {
  switch (action.type) {
    case "INPUT_TODO_ITEM":
      return action.payload;
    default:
      return state;
  }
};
