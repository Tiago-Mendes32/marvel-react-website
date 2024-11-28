import Header from "./Components/Header";
import Banner from "./Components/Banner";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner
        title="Marvel Characters"
        text="Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!"
      />
    </div>
  );
}

export default App;
