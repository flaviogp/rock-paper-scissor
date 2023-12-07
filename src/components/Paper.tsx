import ImagePaper from '../assets/images/icon-paper.svg'
import { IGameData } from '../interfaces/interfaces';
import GameOpition from './GameOpition'


interface PaperProps{
  setGameData?: (value: IGameData) => void;
  gameData?: IGameData;
}

const Paper = ({setGameData, gameData}: PaperProps) => {
  return (
    <div>
        < GameOpition 
            image={ImagePaper} altImage={'paper'} 
            css={'bg-gradient-to-b from-paperGradientInitial to-paperGradientFinal'}
            setGameData={setGameData}
            gameData={gameData}
        />
    </div>
  )
}

export default Paper