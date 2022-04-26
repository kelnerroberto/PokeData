
interface PokeNameAndUrl {
  name: string,
  url: string,
}

interface SpritesOther {
  home: {
    front_default: string,
  }
}

interface Sprites {
  front_default: string,
  other: SpritesOther,
}

interface Types {
  slot: number,
  type: PokeNameAndUrl,
}

export interface Stats {
  base_stat: number,
  effort: number,
  stat: PokeNameAndUrl,
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
  stats: Array<Stats>,
  types: Array<Types>,
  weight: number,
}

export const fetchPokemonsForHomePage = async (page: number): Promise<ReturnedFromAPI[]> => {
  // faz o fetch da API com limite de 10 pokemons, a partir da numeração da pagina, começando do 0.
  const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10`);
  // pega a resposta da chamada da api para resolver
  const pokemonsJson = await apiCall.json();
  // utiliza o resultado acima para mapear e retornar um array com todos os urls listados na chamada da api
  const pokesUrl = pokemonsJson.results.map((eachPoke: PokeNameAndUrl)  => eachPoke.url);
  // utiliza o método Promise.all para resolver todas as requisições que serão feitas com o array criado acima.
  const pokesDetails = Promise.all(pokesUrl
    .map(async (eachUrl: string) => await fetch(eachUrl)
    .then(json => json.json())
    .then(result => result)
    ));
  // como acima retorna uma promise, criei uma variável para esperar e armazenar o resultado e em seguida retornar um array com os dados detalhados de todos os pokemons listados na chamada da api.
  const detailedPokemons = await pokesDetails;
  return detailedPokemons;
}

export const fetchDetailedPokemons = async (name: string | undefined): Promise<ReturnedFromAPI> => {
  const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemonsJson = await apiCall.json();
  return pokemonsJson;
}
