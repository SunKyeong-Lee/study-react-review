import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const boardlist = useSelector((state) => state.board);
  const navigate = useNavigate();

  const toBoardPage = (id) => {
    navigate("/board/" + id);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        {boardlist.map((board) => (
          <tr key={board.boardId}>
            <td>{board.boardId}</td>
            <td
              onClick={() => {
                toBoardPage(board.boardId);
              }}
            >
              {board.title}
            </td>
            <td>{board.userEmail}</td>
            <td>{board.view}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
