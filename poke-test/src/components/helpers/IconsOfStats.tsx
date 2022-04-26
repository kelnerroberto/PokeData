import { GiLifeBar, GiBroadsword, GiCheckedShield, GiCometSpark, GiSparkSpirit } from 'react-icons/gi';
import { BiRun } from 'react-icons/bi';
import { Stats } from '../../API/fetchFunctions/MainFetch';

export const StatsAndIcons = (eachStat: Stats) => {
  if (eachStat.stat.name === 'hp') return <li><GiLifeBar />{` Hp: ${eachStat.base_stat}`}</li>
  if (eachStat.stat.name === 'attack') return <li><GiBroadsword />{` Attack: ${eachStat.base_stat}`}</li>
  if (eachStat.stat.name === 'defense') return <li><GiCheckedShield />{` Defense: ${eachStat.base_stat}`}</li>
  if (eachStat.stat.name === 'special-attack') return <li><GiCometSpark />{` Special-attack: ${eachStat.base_stat}`}</li>
  if (eachStat.stat.name === 'special-defense') return <li><GiSparkSpirit />{` Special-defense: ${eachStat.base_stat}`}</li>
  if (eachStat.stat.name === 'speed') return <li><BiRun />{` Speed: ${eachStat.base_stat}`}</li>
};
