const Todo = () => {
  return (
    <>
      <div className="board">
        <div className="header">
          <h3>Todo (2)</h3>
          <button className="btn">+</button>
        </div>
        <div className="input-new-item">
          <input type="text" />
          <button>✓</button>
          <button>✕</button>
        </div>
        <div className="item">
          <span>Test 1</span>
          <button className="btn">-</button>
        </div>
        <div className="item">
          <span>Test 2</span>
          <button className="btn">-</button>
        </div>
      </div>
    </>
  );
};

export default Todo;
