import Board from "./Board";

const Boards = () => {
  const boardList = ["Todo (0)", "On Progress (0)", "Done (0)"];

  return (
    <>
      {boardList.map((board) => {
        return <Board board={board} />;
      })}
    </>
  );
};

export default Boards;
