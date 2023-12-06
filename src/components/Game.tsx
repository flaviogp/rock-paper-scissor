import { IGameData } from "../interfaces/interfaces";
import Paper from "./Paper"
import Rock from "./Rock"
import Scissor from "./Scissor"

interface GameProps{
    setGameData: (value: IGameData) => void;
    gameData: IGameData;
}

const Game = ({setGameData, gameData}: GameProps) => {
  return (
    <div className=" max-w-md w-full h-[290px] bg-bg-triangle bg-no-repeat bg-center relative">
      <div className="absolute top-[-25px] left-[50px] ">
        <Paper setGameData={setGameData} gameData={gameData}/>
      </div>
      <div className="absolute top-[-25px]  right-[50px]">
        <Scissor setGameData={setGameData} gameData={gameData}/>
      </div>
      <div className="absolute bottom-0 right-[40%]">
        <Rock setGameData={setGameData} gameData={gameData}/>
      </div>
    </div>
  )
}

export default Game