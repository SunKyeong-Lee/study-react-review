import './App.css';
import StateBox from './components/StateBox'; // ??
import PropsParent from './components/PropsParent';
import TestState from './components/TestState';
import EventBox from './components/EventBox';
import TestEvent from './components/TestEvent';
import Hook from './components/Hook';
import Testhook from './components/Testhook';
import APIComp from './components/APIComp';

// App 안에 원하는 내용을 바로 작성할 수 있지만, 
// 각 내용을 컴포넌트로 만들어서 화면에 출력을 하고 있다.
// 빈 컴포넌트를 먼저 만들고 App으로 불러와서 화면을 보고나서 작성
function App() {
  // function App 안에서는 자바스크립트의 내용을 자유롭게 쓸 수 있다.

  // return : 렌더될 html 내용 + {}를 통해서 자바스크립트를 함께 사용
  // return 안에서 실행순서는 위에서 아래로 실행이 된다.
  // * 오류가 났을 때, 전체가 출력이 되지 않는다.

  return (
    <div className="App">
      {/*
      <StateBox />
      <StateBox></StateBox>
      <PropsParent />
      <TestState />
      <hr />
      <EventBox />
      <TestEvent />
      <hr />
      <Hook />
      <Testhook />
       */}
      <APIComp />
    </div>
  );
}

// export를 통해서 모듈 형식으로 함수나 변수를 내보내줄 수 있다.
// defualt가 붙게되면 {} 없이 들고올 수 있다.
// export로만 내보내주면 {}를 통해서 값을 들고올 수 있다.
export default App;
