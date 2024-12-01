import Banner from "../Components/Banner/index.js";
import CardSection from "../Components/CardSection/index.js";
import SearchSection from "../Components/SearchSection/index.js";
import api from "../api.js";
import charactersList from "../PopularCharactersList.js";
import { useEffect, useState } from "react";

const Characters = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getCharacters(index);
        setData(response);
      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
      }
    };

    fetchData();
  }, [index]);

  useEffect(() => {
    if (data.length > 0) {
      const mappedCharacters = data.map((character) => ({
        id: character.id,
        name: character.name,
        image: character.thumbnail.path,
        format: character.thumbnail.extension,
      }));
      setCharacters(mappedCharacters);
    }
  }, [data]);

  const handleNextPage = () => {
    setIndex((prevIndex) => prevIndex + 1);
    window.scrollTo({
      top: 2100,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Banner
        title="Marvel Characters"
        text="Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!"
      />
      <CardSection title="Popular Characters" characters={charactersList} />
      <SearchSection label="All Characters" placeholder="Character name" />
      <CardSection title="All Characters" characters={characters} />
      <button onClick={handleNextPage}>Próxima Página</button>
    </>
  );
};

export default Characters;
