import { createContext } from "react";
import { ReturnedFromAPI } from "../API/fetchFunctions/MainFetch";

const initialState = {
  pokemons: [{
  abilities: [{}],
  base_experience: 0,
  forms: [{}],
  game_indices: [{}],
  height: 0,
  held_items: [{}],
  id: 1,
  is_default: true,
  location_area_encounters: "",
  moves: [{}],
  name: "",
  order: 0,
  past_types: [{}],
  species: {},
  sprites: {
    front_default: '',
  },
  stats: [{}],
  types: [
    {
      slot: 0,
      type: {
        name: '',
        url: '',
      },
    }
  ],
  weight: 0,  
}],
 isLoaded: false,
 offSetPage: 0,
};

export interface Value {
  pokemons: ReturnedFromAPI[];
  isLoaded: boolean;
  offSetPage: number;
  setOffSetPage: React.Dispatch<React.SetStateAction<number>>;
  setPokemons: React.Dispatch<React.SetStateAction<ReturnedFromAPI[]>>;
}

export const AppContext = createContext(initialState);
