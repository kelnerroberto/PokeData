import { ReactNode, useState } from "react";
import { AppContext } from "./AppContext";

type PokemonContextProps = {
  children: ReactNode,
}

export const PokemonProvider = ({ children }: PokemonContextProps) => {
  const [offSetPage, setOffSetPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);

  return( 
  <AppContext.Provider value={{ offSetPage, pokemons }}>
    {children}
  </AppContext.Provider> )
};