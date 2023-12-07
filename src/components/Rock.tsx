import ImageRock from '../assets/images/icon-rock.svg'
import { IGameData } from '../interfaces/interfaces';

import GameOpition from './GameOpition'

interface RockProps {
  setGameData?: (value: IGameData) => void;
  gameData?: IGameData;
}

const Rock = ({setGameData, gameData}: RockProps) => {
  return (
    <div>
        < GameOpition
            image={ImageRock} altImage={'rock'} 
            css={'bg-gradient-to-b from-rockGradientInitial to-rockGradientFinal'}
            setGameData={setGameData}
            gameData={gameData}
        />
    </div>
  )
}

export default Rock