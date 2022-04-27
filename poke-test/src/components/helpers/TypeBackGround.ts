const grass = '#88cc00';
const fire = '#ed1d1d';
const electric = '#ffcc00';
const water = '#4582bf';
const psychic = '#946f00';
const rock = '#bebbbb';
const fighting = '#8e5757';
const ghost = '#7905c7';
const ground = '#854200';
const poison = '#660066';
const steel = '#bfbfab';
const bug = '#0c730c';
const fairy = '#ff99cc';
const dark = '#242424';
const dragon = '#e65d19';
const flying = '#aff8e0';
const ice = '#00ffff';
const normal = '#eac3ea';

export const ColoredTypeBackGround = (type: string) => {
  switch(type) {
    case 'grass': 
      return grass;
    case 'fire':
      return fire;
    case 'electric':
      return electric;
    case 'water':
      return water;
    case 'psychic':
      return psychic;
    case 'rock':
      return rock;
    case 'fighting':
      return fighting;
    case 'ghost':
      return ghost;
    case 'ground':
      return ground;
    case 'poison':
      return poison;
    case 'steel':
      return steel;
    case 'bug':
      return bug;
    case 'fairy':
      return fairy;
    case 'dark':
      return dark;
    case 'dragon':
      return dragon;
    case 'flying':
      return flying;
    case 'ice':
      return ice;
    default:
      return normal;
  }
}