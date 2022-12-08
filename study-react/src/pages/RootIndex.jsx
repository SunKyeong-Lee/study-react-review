// 현재 페이지는 라우터의 내용을 정리하기 위한 컴포넌트
// 아래 내용에 BrowerRouter와 Routes를 정리
// 아래 내용을 app.js와 index.js에 분리해서 넣어도 상관없다.

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import AboutMain from "./AboutMain";
import AboutTest from "./AboutTest";
import Home from "./Home";
import Error from "./Error";

const RootIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/**
         * Route를 통해서 주소와 컴포넌트를 연결
         * http://localhost:3000/  가장 처음 위치
         * http://localhost:3000/about  기본 위치를 두고 path의 내용을 붙여서 이동
         */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="/about/test" element={<AboutTest />}>
            {/** 중첩된 Route는 outlet을 통해 계속 보여줄 수 있다 */}
            <Route path="/about/test/outlet" element={<AboutTest />} />
          </Route>
          <Route path="/about/main" element={<AboutMain />} />
          {/**
           * 기본주소로 들어왔을때 가장 처음 위치 : index
           * 기본주소 : 자신을 감싸고 있는 path
           */}
          <Route index element={<AboutMain />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>

      <hr />
      {/** Routes를 사용하면 같은 주소일 때 화면을 분할해서 사용할 수 있다. */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/**
         * 첫번째 Route에서 사용하지 않은 주소에 연결하면 현재화면만 보인다
         * 단, *을 사용할 경우, 사용하지 않는 주소가 없기에 *을 사용한 주소는 항상 보인다
         */}
        <Route path="test" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootIndex;
