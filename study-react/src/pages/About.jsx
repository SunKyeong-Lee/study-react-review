import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About 페이지</h1>
      <Link to="/about/test">about test로 이동</Link> <br />
      <Link to="/about/main">about main으로 이동</Link>
      <Outlet />

      {/**
       * AboutTest, AboutMain 출력
       * 
       * 라우터를 중첩해서 쓸 때
       * 그 안에 들어간 주소와 컴포넌트를 화면에 출력하기 위해 Outlet을 사용
       * about 안에 들어갔어도 그 안에 주소로 들어가지 않으면 화면에 출력되지 않는다
       */}
    </div>
  );
}

export default About;