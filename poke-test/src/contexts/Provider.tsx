import { ReactNode, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { fetchPokemonsForHomePage, ReturnedFromAPI } from '../API/fetchFunctions/MainFetch';

type PokemonContextProps = {
  children: ReactNode,
}

interface Sprites {
  front_default: string,
}

export const PokemonProvider = ({ children }: PokemonContextProps) => {
  const [offSetPage, setOffSetPage] = useState(0);
  const [pokemons, setPokemons] = useState<ReturnedFromAPI[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const value = {
    pokemons,
    isLoaded,
    offSetPage,
    setOffSetPage,
    setPokemons
  }

  useEffect(() => {
    const takeInitialPokemons = async () => setPokemons(await fetchPokemonsForHomePage(offSetPage));
    takeInitialPokemons();
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const takeInitialPokemons = async () => setPokemons([...pokemons,
      ...await fetchPokemonsForHomePage(offSetPage)
    ]);
    setTimeout(() => {
      takeInitialPokemons();
      setIsLoaded(true);
    }, 500)
  }, [offSetPage]);

  return( 
  <AppContext.Provider value={ value }>
    {children}
  </AppContext.Provider> )
};