import "./SearchSection.css";

const SearchSection = (props) => {
  return (
    <section className="search-form">
      <form>
        <label htmlFor="characters-input">{props.label}</label>
        <input name="characters-input" placeholder={props.placeholder} />
      </form>
    </section>
  );
};

export default SearchSection;
