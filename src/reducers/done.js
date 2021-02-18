export const doneReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_DONE":
      return true;
    case "HIDE_DONE":
      return false;
    default:
      return state;
  }
};

export const doneVisibilityReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_DONE_VISIBILITY":
      return true;
    case "HIDE_DONE_VISIBILITY":
      return false;
    default:
      return state;
  }
};

export const doneEditReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_DONE_EDIT":
      return true;
    case "HIDE_DONE_EDIT":
      return false;
    default:
      return state;
  }
};

export const doneItemReducer = (state = "", action) => {
  switch (action.type) {
    case "INPUT_DONE_ITEM":
      return action.payload;
    default:
      return state;
  }
};
