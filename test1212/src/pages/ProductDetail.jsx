import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>{name}</h2>
      <p>상품의 이름으로 상품 페이지를 출력하고 있습니다</p>
      <button onClick={() => {navigate("/product")}}>product로 가기</button>
    </div>
  );
};

export default ProductDetail;
