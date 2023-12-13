import Game from './Game'
import Header from './Header'
import InGame from './InGame';
import { IGameData } from '../interfaces/interfaces';


interface StartGameProps{
  setGameData: (arg: IGameData) => void;
  gameData: IGameData;
}


const StartGame = ({setGameData, gameData}: StartGameProps) => {

  const handleClick = () => {
    setGameData({...gameData, stage: 0})
  }

  return (
    <div 
        className="
            w-full h-[100vh] 
            bg-gradient-to-b
             from-radialGradientInitial
             to-radialGradientFinal 
            flex flex-col items-center justify-around
            p-5"
    >
        <Header gameData={gameData} />
        {gameData.stage === 1 && <Game setGameData={setGameData} gameData={gameData}/>}
        {gameData.stage === 2 && <InGame gameData={gameData} setGameData={setGameData} />}
        <button className='border-2 py-2 px-10 rounded-md text-white tracking-[2px]' onClick={()=> handleClick()}>RULES</button>
    </div>
  )
}

export default StartGame