const Board = ({ board }) => {
  return (
    <>
      <div className="board">
        <div className="header">
          <h3>{board}</h3>
          <button className="btn">+</button>
        </div>
      </div>
    </>
  );
};

export default Board;
