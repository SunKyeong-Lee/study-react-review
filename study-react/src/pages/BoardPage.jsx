import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BoardPage = (props) => {
  // 받아온 props값 확인
  // name - RootIndex에서 컴포넌트에 직접 넣어준 props 값
  // outletname - Board에서 Outlet에 넣어준 props 값
  const { name, outletname } = props;

  // 주소를 통해 전달해준 params 값을 가져와서 사용할 수 있다
  // params 안에 객체 형태로 들어가있기 때문에, 구조화 할당을 통해서 사용가능
  // const params = useParams();
  // console.log(params); // BoardPage1 > { id: 1 }
  const { page, id } = useParams();

  // 5개의 데이터를 가지고 있는 배열 작성
  // 그 중에서 동일한 id를 가지고 있는 내용만 출력
  // 자바스크립트의 배열의 메소드 사용 > 1개의 값을 찾기 위해 배열의 find 메소드 사용
  const [memos, setMemos] = useState([
    { id: 1, title: "첫번째 메모" },
    { id: 2, title: "두번째 메모" },
    { id: 3, title: "세번째 메모" },
    { id: 4, title: "네번째 메모" },
    { id: 5, title: "다섯번째 메모" },
  ]);

  // 객체의 값을 돌려줄 경우에는 값을 다른 변수에 넣고 확인
  // 배열의 객체 요소를 꺼내서 하나씩 비교하여 참인 요소를 return
  // 현재 id와 같은 메모를 변수에 저장
  const memo = memos.find((m) => m.id == id);

  // useNavigate를 통해서 자바스크립트를 통해 주소 이동
  const navigate = useNavigate();

  return (
    <div>
      <h3>BoardPage</h3>
      <p>{memo ? memo.title : "값이 없는 페이지입니다"}</p>
      <button onClick={() => {navigate(-1);}}>뒤로 가기</button>
      <button onClick={() => {navigate("/board");}}>게시판 목록으로 이동</button>
    </div>
  );
};

export default BoardPage;
