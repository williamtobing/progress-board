import { useDispatch, useSelector } from "react-redux";
import {
  showTodo,
  hideTodo,
  hideOnProgress,
  hideDone,
  inputTodoItem,
  showTodoVisibility,
  hideTodoVisibility,
  showTodoEdit,
  hideTodoEdit,
} from "../actions";

const Todo = () => {
  const todo = useSelector((state) => state.todo);
  const todoItem = useSelector((state) => state.todoItem);
  const todoVisibility = useSelector((state) => state.todoVisibility);
  const todoEdit = useSelector((state) => state.todoEdit);
  const dispatch = useDispatch();

  const showInput = () => {
    dispatch(showTodo());
    dispatch(hideOnProgress());
    dispatch(hideDone());
  };

  const hideInput = () => {
    dispatch(hideTodo());
  };

  const hideItem = () => {
    dispatch(hideTodoVisibility());
    dispatch(inputTodoItem(""));
  };

  const handleChange = (e) => {
    dispatch(inputTodoItem(e.target.value));
  };

  const handleCheck = () => {
    if (todoItem === "") {
      alert("FILL IN TODO INPUT");
    } else {
      dispatch(showTodoVisibility());
      dispatch(hideTodo());
    }
  };

  return (
    <>
      <div className="board">
        <div className="header">
          <h3>Todo ({todoVisibility ? "1" : "0"})</h3>
          <button className="btn" onClick={showInput}>
            +
          </button>
        </div>

        {todo ? (
          <div className="input-new-item">
            {todoVisibility ? (
              <input type="text" value="" onChange={(e) => e.target.value} />
            ) : (
              <input type="text" onChange={handleChange} />
            )}
            <button onClick={handleCheck}>✓</button>
            <button onClick={hideInput}>✕</button>
          </div>
        ) : (
          ""
        )}

        {todoVisibility ? (
          <div className="item">
            {todoEdit ? (
              <>
                <input type="text" value={todoItem} onChange={handleChange} />
                <button onClick={() => dispatch(hideTodoEdit())}>OK</button>
              </>
            ) : (
              <>
                <span>{todoItem}</span>
                <div>
                  <button
                    className="btn"
                    onClick={() => dispatch(showTodoEdit())}
                  >
                    Edit
                  </button>
                  <button className="btn" onClick={hideItem}>
                    -
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Todo;
