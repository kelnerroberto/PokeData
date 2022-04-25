import { ReactNode, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { fetchPokemonsForHomePage, ReturnedFromAPI } from '../API/fetchFunctions/MainFetch';

type PokemonContextProps = {
  children: ReactNode,
}

const pokemonsInitialState = [{
  abilities: [],
  base_experience: 0,
  forms: [],
  game_indices: [],
  height: 0,
  held_items: [],
  id: 1,
  is_default: true,
  location_area_encounters: "",
  moves: [],
  name: "",
  order: 0,
  past_types: [],
  species: {},
  sprites: {},
  stats: [],
  types: [],
  weight: 0,  
}];

export const PokemonProvider = ({ children }: PokemonContextProps) => {
  const [offSetPage, setOffSetPage] = useState(0);
  const [pokemons, setPokemons] = useState<ReturnedFromAPI[]>(pokemonsInitialState);

  useEffect(() => {
    const takeInitialPokemons = async () => setPokemons(await fetchPokemonsForHomePage(offSetPage));
    takeInitialPokemons();
  }, []);

  return( 
  <AppContext.Provider value={ { pokemons } }>
    {children}
  </AppContext.Provider> )
};