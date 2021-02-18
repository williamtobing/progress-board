// TODO
export const showTodo = () => {
  return {
    type: "SHOW_TODO",
  };
};

export const hideTodo = () => {
  return {
    type: "HIDE_TODO",
  };
};

export const showTodoEdit = () => {
  return {
    type: "SHOW_TODO_EDIT",
  };
};

export const hideTodoEdit = () => {
  return {
    type: "HIDE_TODO_EDIT",
  };
};

export const showTodoVisibility = () => {
  return {
    type: "SHOW_TODO_VISIBILITY",
  };
};

export const hideTodoVisibility = () => {
  return {
    type: "HIDE_TODO_VISIBILITY",
  };
};

export const inputTodoItem = (arg) => {
  return {
    type: "INPUT_TODO_ITEM",
    payload: arg,
  };
};

// ON PROGRESS
export const showOnProgress = () => {
  return {
    type: "SHOW_ON_PROGRESS",
  };
};

export const hideOnProgress = () => {
  return {
    type: "HIDE_ON_PROGRESS",
  };
};

export const showOnProgressEdit = () => {
  return {
    type: "SHOW_ON_PROGRESS_EDIT",
  };
};

export const hideOnProgressEdit = () => {
  return {
    type: "HIDE_ON_PROGRESS_EDIT",
  };
};

export const showOnProgressVisibility = () => {
  return {
    type: "SHOW_ON_PROGRESS_VISIBILITY",
  };
};

export const hideOnProgressVisibility = () => {
  return {
    type: "HIDE_ON_PROGRESS_VISIBILITY",
  };
};

export const inputOnProgressItem = (arg) => {
  return {
    type: "INPUT_ON_PROGRESS_ITEM",
    payload: arg,
  };
};

// DONE
export const showDone = () => {
  return {
    type: "SHOW_DONE",
  };
};

export const hideDone = () => {
  return {
    type: "HIDE_DONE",
  };
};

export const showDoneEdit = () => {
  return {
    type: "SHOW_DONE_EDIT",
  };
};

export const hideDoneEdit = () => {
  return {
    type: "HIDE_DONE_EDIT",
  };
};

export const showDoneVisibility = () => {
  return {
    type: "SHOW_DONE_VISIBILITY",
  };
};

export const hideDoneVisibility = () => {
  return {
    type: "HIDE_DONE_VISIBILITY",
  };
};

export const inputDoneItem = (arg) => {
  return {
    type: "INPUT_DONE_ITEM",
    payload: arg,
  };
};
