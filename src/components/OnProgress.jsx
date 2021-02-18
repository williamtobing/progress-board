import { useDispatch, useSelector } from "react-redux";
import { showOnProgress, hideOnProgress, hideTodo, hideDone } from "../actions";

const OnProgress = () => {
  const onProgress = useSelector((state) => state.onProgress);
  const dispatch = useDispatch();

  const show = () => {
    dispatch(showOnProgress());
    dispatch(hideTodo());
    dispatch(hideDone());
  };

  const hide = () => {
    dispatch(hideOnProgress());
  };

  return (
    <>
      <div className="board">
        <div className="header">
          <h3>On Progress (0)</h3>
          <button className="btn" onClick={show}>
            +
          </button>
        </div>

        {onProgress ? (
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

export default OnProgress;
