/**
 * 현재 컴포넌트의 주소에 쿼리스트링이 함께 있을때
 * 그 쿼리스트링의 값을 가져올 수 있다.
 */

import { useSearchParams } from "react-router-dom";

const QueryString = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const paramId = searchParams.get("id");
  const paramName = searchParams.get("name");
  
  return (
    <div>
      <p>{paramId}</p>
      <p>{paramName}</p>
      <button onClick={() => {setSearchParams({address: "부산"})}}>쿼리스트링 바꾸기</button>
    </div>
  );
}
 
export default QueryString;