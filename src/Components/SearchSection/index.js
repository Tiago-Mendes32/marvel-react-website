import "./SearchSection.css";

const SearchSection = (props) => {
  return (
    <section className="search-form">
      <form>
        <label for="characters-input">{props.label}</label>
        <input name="characters-input" />
      </form>
    </section>
  );
};

export default SearchSection;
