import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await api.getCharacterData(id);
        setCharacter(response);
        console.log(response);
      } catch (error) {
        console.error("Erro ao buscar os dados do personagem:", error);
      }
    };

    getCharacters();
  }, [id]);

  return (
    <div>
      {character ? (
        <div>
          <h1>{character.name}</h1>
          <p>{character.description}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default CharacterDetails;
