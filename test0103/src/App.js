import { useState } from "react";
import "./App.css";
import ImageCard from "./components/ImageCard";

function App() {
  const [arr, setArr] = useState([1, 2, 3]);

  return (
    <div className="App">
      <img src={require("../src/img/image.jpg")} />
      <div>
        <div>
          <a href="">더보기</a>
          <div className="wrap">
            {arr.map((num, index) => (
              <ImageCard key={index} num={num} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
