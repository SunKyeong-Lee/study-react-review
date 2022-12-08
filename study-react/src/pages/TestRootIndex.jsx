import { BrowserRouter, Route } from "react-router-dom";
import Board from "./Board";
import BoardNumPage from "./BoardNumPage";
import BoardPage from "./BoardPage";
import Home from "./Home";

const TestRootIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />}>
          <Route path="/board/:page" element={<BoardPage />} />
        </Route>

        <Route path="/board/:page/:num" element={<BoardNumPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TestRootIndex;
