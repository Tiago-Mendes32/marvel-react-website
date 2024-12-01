import axios from "axios";
import md5 from "md5";

const public_key = "6b1b90061938a6fd2029b05cc18707e4";
const private_key = "3e369344c7b7c0d4fffa4eb6be42d195b0e9609b";
const time_stemp = Number(new Date());
const cards_number = 15;

const api = {
  async getCharacters(index) {
    const hash = md5(time_stemp + private_key + public_key);
    const offset = index * cards_number;
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?ts=${time_stemp}&apikey=${public_key}&hash=${hash}&offset=${offset}&limit=${cards_number}`
      );
      return response.data.data.results;
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
      return [];
    }
  },
};

export default api;
