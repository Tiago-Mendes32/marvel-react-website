import "./CardSection.css";
import Card from "../Card";

const CardSection = (props) => {
  return (
    <section className="card-section">
      <h3>{props.title}</h3>
      <div className="cards">
        <Card
          name="DEADPOOL"
          image="http://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99"
          format="jpg"
        />
        <Card
          name="WOLVERINE"
          image="http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf"
          format="jpg"
        />
        <Card
          name="Captain America"
          image="http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087"
          format="jpg"
        />
        <Card
          name="Iron Man"
          image="http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55"
          format="jpg"
        />
        <Card
          name="Spider-Man (Marvel: Avengers Alliance)"
          image="http://i.annihil.us/u/prod/marvel/i/mg/9/03/5239b59f49020"
          format="jpg"
        />
        <Card
          name="THOR"
          image="http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350"
          format="jpg"
        />
        <Card
          name="Rocket Raccoon"
          image="http://i.annihil.us/u/prod/marvel/i/mg/9/b0/50fec1e49298a"
          format="jpg"
        />
        <Card
          name="Hulk"
          image="http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0"
          format="jpg"
        />
        <Card
          name="Doctor Strange"
          image="http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe"
          format="jpg"
        />
        <Card
          name="Black Widow"
          image="http://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b"
          format="jpg"
        />
      </div>
    </section>
  );
};

export default CardSection;
