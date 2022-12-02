import { useState } from "react";

const TestEvent = () => {
  const [memolist, setMemolist] = useState([
    { id: 1, text: "메모1" },
    { id: 2, text: "메모2" },
    { id: 3, text: "메모3" },
    { id: 4, text: "메모4" },
  ]);

  return (
    <div>
      <hr />
      <h1>이벤트 테스트 공간</h1>
      {/* map을 통해 전체 내용 출력하기 */}
      {memolist.map((memo) => (
        <div key={memo.id}>
          <p>{memo.text}</p>
        </div>
      ))}

      <hr />
      {/* TestBox를 이용하여 내용 출력하기 */}
      {memolist.map((memo) => (
        <TestBox memo={memo} memolist={memolist} setMemolist={setMemolist} />
      ))}
    </div>
  );
};

// TestEvent에서 사용할 TestBox
const TestBox = (props) => {
  // memoList와 setMemoList를 props값으로 들고오기
  const { memo, memolist, setMemolist } = props;

  // 수정창을 닫고 여는 state
  const [modify, setModify] = useState(false);
  // 수정할 내용을 저장하는 state
  const [input, setInput] = useState("");

  return (
    <div>
      {/* TestEvent에서 전달받은 memo의 값 들고오기 */}
      <h4>{memo.text}</h4>

      {
        // modify가 true일 때, 화면에 출력
        // true일 때 input의 값을 입력받고,
        // 버튼을 누르면 그 값이 setMemolist로 수정되고 modify가 false로 바뀜
        modify ? (
          <div>
            <input type="text" onChange={(e) => {setInput(e.target.value);}}/>
            <button
              onClick={() => {
                setMemolist(
                  memolist.map((item) =>
                    item.id == memo.id ? { ...memo, text: input } : item
                  )
                );
                setModify(false);
              }}
            >
              수정완료
            </button>
          </div>
        ) : (
          // 버튼을 누르면 modify가 true
          <button onClick={() => {setModify(true);}}>수정</button>
        )
      }
    </div>
  );
};

export default TestEvent;
