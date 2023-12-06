import { IGameData } from "../interfaces/interfaces"
import Paper from "./Paper";
import Rock from "./Rock";
import Scissor from "./Scissor";


interface InGameProps{
    gameData: IGameData;
}

const InGame = ({gameData}: InGameProps) => {
  return (
    <div className=" max-w-md w-full h-[290px] flex justify-around py-5">

        <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center items-center border-none rounded-full w-[110px] h-[110px] bg-gradient-to-b from-radialGradientInitial to-radialGradientFinal">
                {gameData.playerOption === 'Paper' && <Paper />}
                {gameData.playerOption === 'Scissors' && <Scissor />}
                {gameData.playerOption === 'Rock' && <Rock />}
            </div>
            <p className="text-white tracking-widest">YOU PICKED</p>
        </div>

        <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center items-center border-none rounded-full w-[110px] h-[110px] bg-gradient-to-b from-radialGradientInitial to-radialGradientFinal">
                {gameData.playerOption === 'Paper' && <Paper />}
                {gameData.playerOption === 'Scissors' && <Scissor />}
                {gameData.playerOption === 'Rock' && <Rock />}
            </div>
            <p className="text-white tracking-widest">YOU PICKED</p>
        </div>

    </div>
  )
}

export default InGame