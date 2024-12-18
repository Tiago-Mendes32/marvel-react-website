import axios from "axios";
import md5 from "md5";

const public_key = "6b1b90061938a6fd2029b05cc18707e4";
const private_key = "3e369344c7b7c0d4fffa4eb6be42d195b0e9609b";
const time_stemp = Number(new Date());
const cards_number = 15;
const hash = md5(time_stemp + private_key + public_key);
let offset = 0;

const api = {
  async getCharacters(index) {
    try {
      offset = index * cards_number;
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?ts=${time_stemp}&apikey=${public_key}&hash=${hash}&offset=${offset}&limit=${cards_number}`
      );
      console.log(response.data.data.results);
      return response.data.data.results;
    } catch (error) {
      console.error("Error searching characters:", error);
      return [];
    }
  },

  async getCharacterByName(name) {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?ts=${time_stemp}&apikey=${public_key}&hash=${hash}&limit=5&nameStartsWith=${name}`
      );
      console.log(response.data.data.results);
      return response.data.data.results;
    } catch (error) {
      console.error("Error searching characters:", error);
      return [];
    }
  },

  async getCharacterData(id) {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${id}?ts=${time_stemp}&apikey=${public_key}&hash=${hash}`
      );
      const characters = await response.data.data.results;
      return characters[0];
    } catch (error) {
      console.error("Error searching dataMax:", error);
      return null;
    }
  },

  async getPaginationData() {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?ts=${time_stemp}&apikey=${public_key}&hash=${hash}&limit=${1}`
      );
      const maxData = response.data.data.total;
      const maxPage = parseInt(maxData / cards_number);
      const minPage = 0;
      return {
        maxData: maxData,
        maxPage: maxPage,
        minPage: minPage,
      };
    } catch (error) {
      console.error("Error searching dataMax:", error);
      return {
        maxData: 1564,
        maxPage: 104,
        minPage: 0,
      };
    }
  },
};

export default api;
