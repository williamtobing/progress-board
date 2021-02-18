const todoReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_TODO":
      return true;
    case "HIDE_TODO":
      return false;
    default:
      return state;
  }
};

export default todoReducer;
