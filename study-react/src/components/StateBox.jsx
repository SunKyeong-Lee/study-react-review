// 함수형 컴포넌틑(화살표함수)
// 보통 함수(선언형 함수)의 경우는 가장 먼저 생성되어있지만(호이스팅)
// 화살표 함수 또는 익명 함수가 변수에 담아서 있는 경우는 변수에 담겨질 때 함수가 생성

import { useState } from "react";

const StateBox = () => {
  // state : 컴포넌트 안에서 개별적으로 사용되는 데이터 값
  // state로 들어가있는 값들은 컴포넌트의 업데이트에 영향

  // useState : 함수형 컴포넌트에서 state를 사용할 수 있게 만들어둔 hook
  // hook : use를 붙여서 사용하는 함수형 컴포넌트의 내용 (리액트 v16 이후 사용)
  // useState는 ()안에 원하는 데이터 값을 넣어서 사용할 수 있다.
  // 이때, 그 안에 있는 값은 setName을 통해서 값을 바꿔준다.
  const [name, setName] = useState("홍길동");
  const [input, setInput] = useState("");

  // inputName의 값을 받아와서 return 해주는 내용
  const printName = (inputName) => {
    return inputName + "입니다";
  };

  // 리액트는 html 값을 변수에 넣어서 사용할 수 있다.
  // 이때 태그를 여러개 사용하고 싶다면 하나의 태그로 감싸서 사용
  const element = (
    <div>
      <h3>자바스크립트 변수 안에 넣어서 사용할 수 있다.</h3>
      <p>단, 여러개의 태그는 하나의 태그로 감싸사 사용</p>
    </div>
  );

  return (
    <div>
      <h1>{name} 입니다</h1>
      <p>{printName("성춘향")}</p>
      <p>
        변수는 중괄호 안에 변수 이름을 넣으면 값이 그대로 출력되고, <br />
        함수는 괄호를 통해 내용을 실행시킬 수 있다. <br />
        단, 화면에 출력되는 부분은 return되는 부분이다.
      </p>
      
      {element}

      <h3>값을 입력받아서 확인하기 : {name}</h3>
      <input type="text" onChange={(e) => {setInput(e.target.value)}}/>
      <button onClick={() => {setName(input)}}>이름 수정</button>
      <hr />
    </div>
  );
};

export default StateBox;
