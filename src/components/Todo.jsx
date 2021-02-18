import { useDispatch, useSelector } from "react-redux";
import { showTodo, hideTodo, hideOnProgress, hideDone } from "../actions";

const Todo = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const show = () => {
    dispatch(showTodo());
    dispatch(hideOnProgress());
    dispatch(hideDone());
  };

  const hide = () => {
    dispatch(hideTodo());
  };

  return (
    <>
      <div className="board">
        <div className="header">
          <h3>Todo (0)</h3>
          <button className="btn" onClick={show}>
            +
          </button>
        </div>

        {todo ? (
          <div className="input-new-item hide-input">
            <input type="text" />
            <button>✓</button>
            <button onClick={hide}>✕</button>
          </div>
        ) : (
          ""
        )}

        {/* <div className="item">
          <span>Test 1</span>
          <button className="btn">-</button>
        </div>
        <div className="item">
          <span>Test 2</span>
          <button className="btn">-</button>
        </div> */}
      </div>
    </>
  );
};

export default Todo;
