function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.image} alt="img" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
      </div>
    </div>
  );
}

export default Card;
