import "./App.css";
import { Routes, Route } from "react-router-dom";
import Board from "./Pages/Board";
import BoardPage from "./Pages/BoardPage";
import BoardWriteFrom from "./Pages/BoardWriteFrom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Board />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:id" element={<BoardPage />} />
        <Route path="/board/modifyform" element={<BoardWriteFrom />} />
      </Routes>
    </div>
  );
}

export default App;
