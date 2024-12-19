import "./CardSection.css";
import Card from "../Card";

const CardSection = ({ title, characters = [] }) => {
  return (
    <section className="card-section">
      {title && <h3>{title}</h3>}
      <div className="cards">
        {characters.length > 0
          ? characters.map((character) => (
              <Card
                id={character.id}
                key={character.name}
                name={character.name}
                image={character.image}
                format={character.format}
              />
            ))
          : Array.from({ length: 15 }).map((_, index) => (
              <Card
                key={`empty-${index}`}
                name=""
                image="/images/doogpowl"
                format="png"
              />
            ))}
      </div>
    </section>
  );
};

export default CardSection;
