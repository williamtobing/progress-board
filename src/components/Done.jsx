import { useDispatch, useSelector } from "react-redux";
import {
  showDone,
  hideDone,
  hideTodo,
  hideOnProgress,
  hideDoneVisibility,
  inputDoneItem,
  showDoneVisibility,
  showDoneEdit,
  hideDoneEdit,
} from "../actions";

const Done = () => {
  const done = useSelector((state) => state.done);
  const doneItem = useSelector((state) => state.doneItem);
  const doneVisibility = useSelector((state) => state.doneVisibility);
  const doneEdit = useSelector((state) => state.doneEdit);
  const dispatch = useDispatch();

  const showInput = () => {
    dispatch(showDone());
    dispatch(hideTodo());
    dispatch(hideOnProgress());
  };

  const hideInput = () => {
    dispatch(hideDone());
  };

  const hideItem = () => {
    dispatch(hideDoneVisibility());
    dispatch(inputDoneItem(""));
  };

  const handleChange = (e) => {
    dispatch(inputDoneItem(e.target.value));
  };

  const handleCheck = () => {
    if (doneItem === "") {
      alert("FILL IN DONE INPUT");
    } else {
      dispatch(showDoneVisibility());
      dispatch(hideDone());
    }
  };

  return (
    <>
      <div className="board">
        <div className="header">
          <h3>Done ({doneVisibility ? "1" : "0"})</h3>
          <button className="btn" onClick={showInput}>
            +
          </button>
        </div>

        {done ? (
          <div className="input-new-item">
            {doneVisibility ? (
              <input type="text" value="" />
            ) : (
              <input type="text" onChange={handleChange} />
            )}
            <button onClick={handleCheck}>✓</button>
            <button onClick={hideInput}>✕</button>
          </div>
        ) : (
          ""
        )}

        {doneVisibility ? (
          <div className="item">
            {doneEdit ? (
              <>
                <input type="text" value={doneItem} onChange={handleChange} />
                <button onClick={() => dispatch(hideDoneEdit())}>OK</button>
              </>
            ) : (
              <>
                <span>{doneItem}</span>
                <div>
                  <button
                    className="btn"
                    onClick={() => dispatch(showDoneEdit())}
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

export default Done;
