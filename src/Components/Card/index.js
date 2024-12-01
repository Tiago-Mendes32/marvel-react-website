import "./Card.css";

const Card = (props) => {
  return (
    <>
      <a href="#">
        <div className="card">
          <div className="card-image">
            <img src={props.image} alt={props.name} />
          </div>
          <h4>{props.name}</h4>
        </div>
      </a>
    </>
  );
};

export default Card;
