import { useState } from "react";
import PropsChildren from "./PropsChildren";

const PropsParent = () => {
  // props를 통해서 state의 값을 자식 컴포넌트로 전달할 수 있다.
  // props를 통해서 리액트의 값은 위에서 아래로, 부모에서 자식으로 전달되는 것을 확인
  // state의 set함수를 전달해서 부모의 값을 수정할 수도 있다.
  const [count, setCount] = useState(1);

  return (
    <div>
      <h3>PropsParent : {count}</h3>
      <PropsChildren
        name="흥부"
        count={count}
        setCount={setCount}
        // 만들어진 컴포넌트에 on이벤트는 props값으로 들어간다.
        onClick={() => {
          console.log("클릭했습니다");
        }}
      >
        태그 사이에 들어가는 값, children : {count} <br />
        태그도 들어갈 수 있다. <br />
        원한다면 컴포넌트도 들어갈 수 있다. <br />
        map을 이용하여 컴포넌트를 children으로 넘겨줄 수 있다.
      </PropsChildren>
      <hr />
    </div>
  );
};

export default PropsParent;
