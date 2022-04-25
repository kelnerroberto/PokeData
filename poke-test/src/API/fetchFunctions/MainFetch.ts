export interface ReturnedFromAPI {
  count: number;
  next: string;
  previous: string;
  results: Array<{
    name: string;
    url: string;
  }>;
}

export const fetchPokemonsForHomePage = async (page: number): Promise<ReturnedFromAPI> => {
  const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10`);
  const pokemonsJson = await apiCall.json();
  return pokemonsJson;
}