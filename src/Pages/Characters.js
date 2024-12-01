import Header from "../Components/Header";
import Banner from "../Components/Banner";
import CardSection from "../Components/CardSection";
import SearchSection from "../Components/SearchSection";
import api from "../api.js";
import { useEffect, useState } from "react";

const Character = () => {
  const [index, setIndex] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      if (loading) return;

      setLoading(true);
      try {
        const results = await api.getCharacters(index);
        setCharacters(results);
        console.log("Resultados obtidos:", results);
      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
      } finally {
        setLoading(false);
      }
    };
    if (loading === false) {
      fetchCharacters();
    }
  }, [index]);

  useEffect(() => {
    if (characters != []) {
      console.log("Personagens carregados no estado:", characters);
    }
  }, [characters]);

  return (
    <>
      <Header />
      <Banner
        title="Marvel Characters"
        text="Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!"
      />
      <CardSection title="Popular Characters" />
      <SearchSection label="All Characters" placeholder="Character name" />
      <CardSection />
    </>
  );
};

export default Character;
