import { useParams } from "react-router-dom";

const BoardNumPage = () => {
  const { page, num } = useParams();

  return (
    <div>
      <h4>BoardNumPage</h4>
      <p>page: {page}</p>
      <p>num: {num}</p>
    </div>
  );
}

export default BoardNumPage;