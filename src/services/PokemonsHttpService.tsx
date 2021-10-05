import axios from "axios";
import { ResponseApi } from "../interfaces/interfaces";

export const fetchAllPokemons = async (): Promise<ResponseApi> => {
  var result = null;
  await axios
    .get<ResponseApi>("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((pokemons) => (result = pokemons));
  if (result == null)
    throw new Error("Was not possible fetch all pokemons from api");
  return result;
};
