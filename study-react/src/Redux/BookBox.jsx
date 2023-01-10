import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPay, setTitle } from "./modules/book";

const BookBox = () => {
  const [input, setInput] = useState("");
  const [changePay, setChangePay] = useState();

  // useSelector를 이용해서 값을 가져오기
  const book = useSelector((state) => state.booktest);

  // useDispatch를 이용해서 dispatch 가져오기
  const dispatch = useDispatch();

  return (
    <div>
      <hr />
      <h3>
        책 제목 : {book.title}, 금액 : {book.pay}
      </h3>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {/**
       * button에 onClick을 이용하여 값을 전달하기
       * 리덕스의 값은 onChange 를 통해 바꾸기 보단,
       * 값이 정해졌을 때 onClick을 통해 한번에 바꿀 수 있도록 하는게 좋다
       */}
      <button
        onClick={() => {
          dispatch(setTitle(input));
        }}
      >
        제목 수정
      </button>

      <br /><br />
      <input
        type="text"
        onChange={(e) => {
          setChangePay(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(setPay(changePay));
        }}
      >
        값 수정
      </button>
    </div>
  );
};

export default BookBox;
