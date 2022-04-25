import { createContext } from "react";

const initialState = {
  offSetPage: 0,
  pokemons: {
    count: 0,
    next: '',
    previous: '',
    results: [{
      name: '',
      url: '',
    }],
  },
}

export const AppContext = createContext(initialState);
