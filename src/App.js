import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Character from "./Pages/Characters";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
