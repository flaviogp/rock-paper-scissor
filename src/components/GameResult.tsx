import { IGameData } from "../interfaces/interfaces";

interface GameResultProps {
  gameData: IGameData;
  setGameData: (arg: IGameData) => void;
}

const GameResult = ({gameData, setGameData}:GameResultProps) => {

  const handleClick = () => {
    setGameData({...gameData, stage: 1, previousStage: 1})
  }

  return (
    <div className='flex flex-col items-center text-white gap-4' >
        <p className="text-5xl font-bold uppercase">YOU {gameData.result}</p>
        <button 
        className="py-2 px-4 border rounded-md bg-white text-darkText tracking-wider font-bold w-full"
        onClick={() => handleClick()}> 
            PLAY AGAIN 
        </button>
    </div>
  )
}

export default GameResult