const onProgressReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_ON_PROGRESS":
      return true;
    case "HIDE_ON_PROGRESS":
      return false;
    default:
      return state;
  }
};

export default onProgressReducer;
