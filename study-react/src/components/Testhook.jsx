import { useEffect } from "react";
import { useState } from "react";

// setInterval의 id 값을 저장하기 위한 공간
let id;

// Hook의 내용을 이용해서 현재 시간과 타이머를 만들어서 출력하기
const Testhook = () => {
  // Date()를 이용하여 화면에 시간 출력
  const [date, setDate] = useState(new Date());

  // timestart : timer를 시작, 종료 state
  // timer : 초당 흐른 시간 저장
  const [timerstart, setTimerstart] = useState(false);
  const [timer, setTimer] = useState(0);

  // 생성할 때
  useEffect(() => {
    // setInterval을 사용하여 1초마다 date에 값을 새로 할당
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  // 버튼을 누르면 timerstart 값이 true/false로 들어감
  const onTimerStart = () => {
    setTimerstart(!timerstart);
  };

  // timer의 값을 0으로 초기화
  const onTimerInit = () => {
    setTimer(0);
  };

  // timerstart의 값이 업데이트될 때, 실행되는 함수
  useEffect(() => {
    // timerstart가 true라면, 1초마다 시간이 지날 수 있도록 setInterval 사용
    // 이때, setInterval값을 종료할 수 있도록 id 사용
    // * id 값을 모든 영역에서 사용하기 위해 컴포넌트 외부에 미리 선언해서 사용한다.
    if (timerstart) {
      id = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      // false라면 clearInter(id);를 통해 interval을 종료
      clearInterval(id);
    }
  }, [timerstart]);

  return (
    <div>
      <h3>
        현재 시간 : {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
      </h3>
      <p>타이머 : {timer} </p>
      <button onClick={onTimerStart}>
        {timerstart ? "타이머멈춤" : " 타이머시작"}
      </button>
      <button onClick={onTimerInit}>타이머 초기화</button>
    </div>
  );
};

export default Testhook;
