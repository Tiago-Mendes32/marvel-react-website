import Header from "./Components/Header";
import Banner from "./Components/Banner";
import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner
        title="Marvel Characters"
        text="Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!"
      />
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
        name="MAGNETO"
        image="http://i.annihil.us/u/prod/marvel/i/mg/3/b0/5261a7e53f827"
        format="jpg"
      />
    </div>
  );
}

export default App;
