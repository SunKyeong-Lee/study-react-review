// 초기값 작성
const initalState = {
  title: "제목이없습니다",
  pay: 5000,
};

// 리듀서 작성
// setTitle을 작성하여 payload로 값이 들어왔을 때, 그 값으로 title을 수정하는 case 작성
// pay를 수정하는 setPay를 작성하여 payload로 값이 들어왔을 때 pay값 수정
function book(state = initalState, action) {
  switch (action.type) {
    case "setTitle":
      return { ...state, title: action.payload };
    case "setPay":
      return { ...state, pay: action.payload };
    default:
      return state;
  }
}

// 액션함수 만들기
export const setTitle = (title) => ({ type: "setTitle", payload: title });
export const setPay = (pay) => ({ type: "setPay", payload: pay });

// 리듀서 내보내기
export default book;

// 리듀서 modules/index.js에 추가하기 !!
