import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBoard } from "../modules/board";

const BoardPage = () => {
  const { id } = useParams();
  const boardlist = useSelector((state) => state.board);
  const dispatch = useDispatch();
  const board = boardlist.find((board) => board.boardId == id);
  const navigate = useNavigate();

  const toBoardWriteForm = () => {
    navigate("/board/modifyform", { state: board });
  }

  const onDelete = () => {
    dispatch(deleteBoard(board.boardId));
    navigate("/board");
  };

  return (
    <div className="board-page">
      <div>
        <div>{board.boardId}</div>
        <h3>{board.title}</h3>
        <div>
          <button onClick={toBoardWriteForm}>수정</button>
          <button onClick={onDelete}>삭제</button>
        </div>
      </div>
      <div>
        <div>작성자 : {board.userEmail}</div>
      </div>
      <div>
        <div>{board.content}</div>
      </div>
      <div>
        <div>조회수 : {board.view}</div>
        <div>좋아요 : {board.like}</div>
      </div>
    </div>
  );
};

export default BoardPage;
