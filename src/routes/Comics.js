import Banner from "../Components/Banner/index.js";
import CardSection from "../Components/CardSection/index.js";
import SearchSection from "../Components/SearchSection/index.js";
import api from "../api.js";
import charactersList from "../PopularCharactersList.js";
import { useEffect, useState } from "react";

const Comics = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Banner
        title="Marvel Comics"
        text="Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!"
      />
      <CardSection title="Popular Characters" characters={charactersList} />
      <SearchSection label="All Characters" placeholder="Character name" />
      <CardSection />
    </>
  );
};

export default Comics;
