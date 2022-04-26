import { GiLifeBar, GiBroadsword, GiCheckedShield, GiCometSpark, GiSparkSpirit } from 'react-icons/gi';
import { BiRun } from 'react-icons/bi';

import { Stats } from '../../API/fetchFunctions/MainFetch';

export const StatsAndIcons = (eachStat: Stats) => {
  if (eachStat.stat.name === 'hp') return <li><GiLifeBar />{` Pontos de vida: ${eachStat.base_stat}`}</li>
  if (eachStat.stat.name === 'attack') return <li><GiBroadsword />{` Ataque: ${eachStat.base_stat}`}</li>
  if (eachStat.stat.name === 'defense') return <li><GiCheckedShield />{` Defesa: ${eachStat.base_stat}`}</li>
  if (eachStat.stat.name === 'special-attack') return <li><GiCometSpark />{` Ataque especial: ${eachStat.base_stat}`}</li>
  if (eachStat.stat.name === 'special-defense') return <li><GiSparkSpirit />{` Defesa especial: ${eachStat.base_stat}`}</li>
  if (eachStat.stat.name === 'speed') return <li><BiRun />{` velocidade: ${eachStat.base_stat}`}</li>
};
