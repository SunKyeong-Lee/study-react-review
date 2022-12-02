// 이벤트 객체의 몇 가지 이벤트 확인
// 이벤트 객체 - 자바스크립트의 이벤트 객체
// 자바스크립트 형태 사용, node로 접근이 가능

import { useState } from "react";

const EventOBJ = () => {
  const [onMouse, setOnMouse] = useState(false);

  return (
    <div>
      <h1>EventOBJ 컴포넌트</h1>
      <p onMouseEnter={() => {setOnMouse(true)}}>
        마우스를 위로 올리세요 :: {onMouse ? "올라갔습니다" : "아직 올라가지 않았습니다"}
      </p>
    </div>
  );
}

export default EventOBJ;