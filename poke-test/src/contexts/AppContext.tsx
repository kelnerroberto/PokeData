import { createContext } from "react";

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
  sprites: {},
  stats: [{}],
  types: [{}],
  weight: 0,  
}]
};

export const AppContext = createContext(initialState);
