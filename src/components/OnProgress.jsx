import { useDispatch, useSelector } from "react-redux";
import {
  showOnProgress,
  hideOnProgress,
  hideTodo,
  hideDone,
  hideOnProgressVisibility,
  inputOnProgressItem,
  showOnProgressVisibility,
  showOnProgressEdit,
  hideOnProgressEdit,
} from "../actions";

const OnProgress = () => {
  const onProgress = useSelector((state) => state.onProgress);
  const onProgressItem = useSelector((state) => state.onProgressItem);
  const onProgressVisibility = useSelector(
    (state) => state.onProgressVisibility
  );
  const onProgressEdit = useSelector((state) => state.onProgressEdit);
  const dispatch = useDispatch();

  const showInput = () => {
    dispatch(showOnProgress());
    dispatch(hideTodo());
    dispatch(hideDone());
  };

  const hideInput = () => {
    dispatch(hideOnProgress());
  };

  const hideItem = () => {
    dispatch(hideOnProgressVisibility());
    dispatch(inputOnProgressItem(""));
  };

  const handleChange = (e) => {
    dispatch(inputOnProgressItem(e.target.value));
  };

  const handleCheck = () => {
    if (onProgressItem === "") {
      alert("FILL IN ON PROGRESS INPUT");
    } else {
      dispatch(showOnProgressVisibility());
      dispatch(hideOnProgress());
    }
  };

  return (
    <>
      <div className="board">
        <div className="header">
          <h3>On Progress ({onProgressVisibility ? "1" : "0"})</h3>
          <button className="btn" onClick={showInput}>
            +
          </button>
        </div>

        {onProgress ? (
          <div className="input-new-item">
            {onProgressVisibility ? (
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

        {onProgressVisibility ? (
          <div className="item">
            {onProgressEdit ? (
              <>
                <input
                  type="text"
                  value={onProgressItem}
                  onChange={handleChange}
                />
                <button onClick={() => dispatch(hideOnProgressEdit())}>
                  OK
                </button>
              </>
            ) : (
              <>
                <span>{onProgressItem}</span>
                <div>
                  <button
                    className="btn"
                    onClick={() => dispatch(showOnProgressEdit())}
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

export default OnProgress;
