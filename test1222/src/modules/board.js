let boardId = 4;

const initialState = [
  {
    boardId: 1,
    userEmail: "znfnfn2140@gmail.com",
    title: "첫번째 게시물",
    content: "문자열만 들어갈 수 있는 공간입니다.",
    view: 0,
    like: 1,
  },
  {
    boardId: 2,
    userEmail: "znfnfn2140@gmail.com",
    title: "두번째 게시물",
    content: "문자열만 들어갈 수 있는 공간입니다. 반갑습니다",
    view: 0,
    like: 1,
  },
  {
    boardId: 3,
    userEmail: "znfnfn2140@gmail.com",
    title: "세번째 게시물",
    content: "문자열만 들어갈 수 있는 공간입니다. 안녕하세요.",
    view: 0,
    like: 1,
  },
];

function board(state = initialState, action) {
  switch (action.type) {
    case "modifyBoard":
      const modifyBoard = state.map((item) =>
        item.boardId == action.payload.boardId ? action.payload : board
      );
      return modifyBoard;
    case "deleteBoard":
      const newBoardList = state.filter(
        (item) => item.boardId != action.payload
      );
      return newBoardList;
    default:
      return state;
  }
}

export const deleteBoard = (id) => ({ type: "deleteBoard", payload: id });
export const modifyBoard = (board) => ({ type: "modifyBoard", payload: board });

export default board;
