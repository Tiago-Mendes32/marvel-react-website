import "./CardSection.css";
import Card from "../Card";

const CardSection = (props) => {
  return (
    <section className="card-section">
      {props.title && <h3>{props.title}</h3>}
      <div className="cards">
        {Array.from({ length: 15 }).map((_, index) => (
          <Card
            key={index}
            name={``}
            image="/images/doogpowl.png"
            format="png"
          />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
