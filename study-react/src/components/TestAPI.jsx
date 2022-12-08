import { useState } from "react";

const TestAPI = () => {
  const [news, setNews] = useState();

  const getData = async (country) => {
    const url =
      "https://newsapi.org/v2/top-headlines/sources?" +
      "category=business&" +
      "country=" +
      country +
      "&apiKey=c4c09dd0ba45435cb60e93cd10259c2a";
    // 위의 주소를 이용하여 버튼을 누를 때마다 다른 나라의 값을 받아오기
    const response = await fetch(url);
    const body = await response.json();
    console.log(body);
    setNews(body);
  };

  return (
    <div>
      <h1>뉴스 API 확인</h1>
      <p>버튼을 누를 때 관련 나라의 기사 가져오기</p>
      {/** 필요한 값을 전달하여 url의 내용을 채울 수 있게 작성 */}
      <button onClick={() => {getData("us");}}>us</button>
      <button onClick={() => {getData("fr");}}>fr</button>
      <button onClick={() => {getData("kr");}}>kr</button>

      {/**
       * map을 이용해 기사 출력
       * 값이 들어왔지만 배열에 값이 없을 경우, 삼항 연산자 안에 또 삼항연산자가 들어갈 수 있다
       * */}
      {
        // news의 값이 있다면 화면출력 / news의 길이가 0보다 길다면 ? 참:거짓
        news && news.sources.length > 0 ? (
          news.sources.map((source) => <li>{source.description}</li>)
        ) : (
          <div>검색 결과가 없습니다</div>
        )
      }
    </div>
  );
};

export default TestAPI;
