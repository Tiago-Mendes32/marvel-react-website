import { useState } from "react";
import "./SearchSection.css";
import api from "../../api";
import SugestionsCharacters from "../SugestionsCharacters";

const SearchSection = (props) => {
  const [charactersSugestion, setCharactersSugestion] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function findSugestions(name) {
    try {
      const characters = await api.getCharacterByName(name);
      setCharactersSugestion(characters);
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
      setCharactersSugestion([]);
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim()) {
      debounceFindSuggestions(value);
    } else {
      setCharactersSugestion([]);
    }
  };

  let debounceTimer;
  const debounceFindSuggestions = (value) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => findSugestions(value), 300);
  };

  return (
    <section className="search-form">
      <form>
        <label htmlFor="characters-input">{props.label}</label>
        <input
          id="characters-input"
          name="characters-input"
          placeholder={props.placeholder}
          value={searchTerm}
          onChange={handleInputChange}
        />
        <SugestionsCharacters characters={charactersSugestion} />
      </form>
    </section>
  );
};

export default SearchSection;
