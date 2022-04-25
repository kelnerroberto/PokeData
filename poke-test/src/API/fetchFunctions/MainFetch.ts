
interface PokeNameAndUrl {
  name: string,
  url: string,
}

interface Sprites {
  front_default: string,
}

interface Types {
  slot: number,
  type: PokeNameAndUrl,
}

export interface ReturnedFromAPI {
  abilities: Array<object>,
  base_experience: number,
  forms: Array<object>,
  game_indices: Array<object>,
  height: number,
  held_items: Array<object>,
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: Array<object>,
  name: string,
  order: number,
  past_types: Array<object>,
  species: object,
  sprites: Sprites,
  stats: Array<object>,
  types: Array<Types>,
  weight: number,
}

export const fetchPokemonsForHomePage = async (page: number): Promise<ReturnedFromAPI[]> => {
  const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10`);
  const pokemonsJson = await apiCall.json();
  const pokesUrl = pokemonsJson.results.map((eachPoke: PokeNameAndUrl)  => eachPoke.url);
  const pokesDetails = Promise.all(pokesUrl
    .map(async (eachUrl: string) => await fetch(eachUrl)
    .then(json => json.json())
    .then(result => result)
    ))
  const detailedPokemons = await pokesDetails;
  return detailedPokemons;
}
