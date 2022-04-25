import { ReactNode, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { fetchPokemonsForHomePage, ReturnedFromAPI } from '../API/fetchFunctions/MainFetch';

type PokemonContextProps = {
  children: ReactNode,
}

interface Sprites {
  front_default: string,
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
  sprites: {
    front_default: '',
  },
  stats: [],
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
}];

export const PokemonProvider = ({ children }: PokemonContextProps) => {
  const [offSetPage, setOffSetPage] = useState(0);
  const [pokemons, setPokemons] = useState<ReturnedFromAPI[]>(pokemonsInitialState);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const takeInitialPokemons = async () => setPokemons(await fetchPokemonsForHomePage(offSetPage));
    takeInitialPokemons();
    setIsLoaded(true);
  }, []);

  return( 
  <AppContext.Provider value={ { pokemons, isLoaded, offSetPage } }>
    {children}
  </AppContext.Provider> )
};