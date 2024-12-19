import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <NavLink to={`/character/${props.id}`} end>
        <div className="card">
          <div className="card-image">
            <img src={`${props.image}.${props.format}`} alt={props.name} />
          </div>
          <h4>{props.name}</h4>
        </div>
      </NavLink>
    </>
  );
};

export default Card;
