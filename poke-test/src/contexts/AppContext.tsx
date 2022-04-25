import { createContext } from "react";

const initialState = {
  offSetPage: 1,
  pokemons: [],
}

export const AppContext = createContext(initialState);
