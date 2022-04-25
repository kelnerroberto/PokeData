interface ReturnedFromAPI {
  count: number;
  next: string;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
}

export const fetchPokemonsForHomePage = async (): Promise<ReturnedFromAPI> => {
  const apiCall = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');
  const pokemonsJson = await apiCall.json();
  return pokemonsJson;
}