import { useDispatch, useSelector } from "react-redux";
import { showDone, hideDone, hideTodo, hideOnProgress } from "../actions";

const Done = () => {
  const done = useSelector((state) => state.done);
  const dispatch = useDispatch();

  const show = () => {
    dispatch(showDone());
    dispatch(hideTodo());
    dispatch(hideOnProgress());
  };

  const hide = () => {
    dispatch(hideDone());
  };

  return (
    <>
      <div className="board">
        <div className="header">
          <h3>Done (0)</h3>
          <button className="btn" onClick={show}>
            +
          </button>
        </div>

        {done ? (
          <div className="input-new-item">
            <input type="text" />
            <button>✓</button>
            <button onClick={hide}>✕</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Done;
