export const onProgressReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_ON_PROGRESS":
      return true;
    case "HIDE_ON_PROGRESS":
      return false;
    default:
      return state;
  }
};

export const onProgressVisibilityReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_ON_PROGRESS_VISIBILITY":
      return true;
    case "HIDE_ON_PROGRESS_VISIBILITY":
      return false;
    default:
      return state;
  }
};

export const onProgressEditReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_ON_PROGRESS_EDIT":
      return true;
    case "HIDE_ON_PROGRESS_EDIT":
      return false;
    default:
      return state;
  }
};

export const onProgressItemReducer = (state = "", action) => {
  switch (action.type) {
    case "INPUT_ON_PROGRESS_ITEM":
      return action.payload;
    default:
      return state;
  }
};
