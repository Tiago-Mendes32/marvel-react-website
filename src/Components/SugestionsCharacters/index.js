import "./SugestionsCharacters.css";

const SugestionsCharacters = ({ characters }) => {
  return (
    <ul className="characters-sugestions-list">
      {characters.map((character) => (
        <a href="#">
          <li key={character.id} className="character-sugestion">
            <h5>{character.name}</h5>
          </li>
        </a>
      ))}
    </ul>
  );
};

export default SugestionsCharacters;
