import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Board = () => {
  const [boardlist, setBoardlist] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <h1>Board 페이지</h1>
      <Link to="/board/1">BoardPage 1로 이동</Link> <br />
      {
        // 값이 여러개 일 경우 배열을 가져와 map으로 출력
        // NavLink에 isActive 값을 화살표 함수로 가져와서 사용
        // isPending : 보류 중
        boardlist.map((boardid) => (
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "tomato", fontWeight: "bold" } : { color: "black" }
            }
            to={`/board/${boardid}`}
          >
            {boardid}{" "}
          </NavLink>
        ))
      }

      {/** BoardPage 출력 */}
      <Outlet outletname="아웃렛" />
    </div>
  );
};

export default Board;
