import ImageScissors from '../assets/images/icon-scissors.svg'
import { IGameData } from '../interfaces/interfaces';
import GameOpition from './GameOpition'

interface ScissorProps{
  setGameData?: (value: IGameData) => void;
  gameData?: IGameData;
}

const Scissor = ({setGameData, gameData}: ScissorProps) => {
  return (
    <div>
        < GameOpition
            image={ImageScissors} altImage={'Scissors'} 
            css={'bg-gradient-to-b from-scissorsGradientInitial to-scissorsGradientFinal'}
            setGameData={setGameData}
            gameData={gameData}
        />
    </div>
  )
}

export default Scissor