import "./Banner.css";

const Banner = (props) => {
  return (
    <section className="banner">
      <h2>{props.title}</h2>
      <div className="text-container">
        <p>{props.text}</p>
      </div>
    </section>
  );
};

export default Banner;
