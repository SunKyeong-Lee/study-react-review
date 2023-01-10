const ImageCard = ({ num }) => {
  return (
    <div className="card-container">
      <img src={require(`../img/옷${num}.png`)} />
      <h3>옷 {num}</h3>
    </div>
  );
};

export default ImageCard;
