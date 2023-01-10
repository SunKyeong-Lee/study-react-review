import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { modifyBoard } from "../modules/board";

const BoardWriteFrom = () => {
  const location = useLocation();
  const [board, setBoard] = useState(location.state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onchange = (e) => {
    setBoard({
      ...board,
      [e.target.name]: e.target.value,
    });
  };

  const onModifyBoard = () => {
    dispatch(modifyBoard(board));
    navigate("/board/" + board.boardId);
  };

  return (
    <div className="modify-page">
      <div>
        <div>{board.boardId}</div>
        <input
          type="text"
          name="title"
          value={board.title}
          onChange={onchange}
        />
        <div>
          <button onClick={onModifyBoard}>수정 완료</button>
        </div>
      </div>
      <div>
        <div>작성자 : {board.userEmail}</div>
      </div>
      <textarea rows="10" name="content" onChange={onchange} value={board.content} />
    </div>
  );
};

export default BoardWriteFrom;
