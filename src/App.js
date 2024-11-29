import Header from "./Components/Header";
import Banner from "./Components/Banner";
import "./App.css";
import CardSection from "./Components/CardSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner
        title="Marvel Characters"
        text="Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!"
      />
      <CardSection title="Popular Characters" />
    </div>
  );
}

export default App;
