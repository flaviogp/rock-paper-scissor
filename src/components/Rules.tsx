import ImageRules from '../assets/images/image-rules.svg'
import IClose from '../assets/images/icon-close.svg'
import {IGameData} from '../interfaces/interfaces'

interface RulesProps{
  setGameData: (arg: IGameData) => void;
  gameData: IGameData;
}

const Rules = ({setGameData, gameData}: RulesProps) => {

  const handleClick = () => {
    setGameData({...gameData, stage: gameData.previousStage})
    
  }

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-around">
        <h1 className="w-full text-center text-4xl font-bold text-darkText">RULES</h1>
        <img src={ImageRules} alt="Image Rules"/>
        <img src={IClose} alt="Close Rules" className='cursor-pointer' onClick={() => handleClick()}/>
    </div>
  )
}

export default Rules