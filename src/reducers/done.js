const doneReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_DONE":
      return true;
    case "HIDE_DONE":
      return false;
    default:
      return state;
  }
};

export default doneReducer;
