import { useEffect, useState } from "react";
import { IGameData } from "../interfaces/interfaces"
import Paper from "./Paper";
import Rock from "./Rock";
import Scissor from "./Scissor";
import GameResult from "./GameResult";


interface InGameProps{
    gameData: IGameData;
}

const InGame = ({gameData}: InGameProps) => {
    const [machineChoice, setMachineChoice] = useState('')    

    useEffect(() => {        

        const randomOption = () => {
            const randomNumber = Math.floor(Math.random() * 2);
            console.log(randomNumber);
            return gameData.gameOptions[randomNumber];
        }

        setTimeout(()=>{
            setMachineChoice(randomOption());
        }, 1000)

        
    const declareChampion = () => {
        if(
            gameData.playerOption === 'paper' && machineChoice === 'rock' ||
            gameData.playerOption === 'rock' && machineChoice === 'scissors' ||
            gameData.playerOption === 'scissors' && machineChoice === 'paper'
        ){
            gameData.result = 'won';
        } else{
            gameData.result = 'lose';
        }
    }

        setTimeout(()=>{
            declareChampion();
        }, 1000)



    }, [gameData, machineChoice])

  return (
    <div className=" max-w-md w-full h-[290px] py-5 flex flex-col items-center gap-10">

        <div className="flex justify-around w-full">
            <div className="flex flex-col items-center gap-4">
                <div className="flex justify-center items-center border-none rounded-full w-[110px] h-[110px] bg-gradient-to-b from-radialGradientInitial to-radialGradientFinal">
                    {gameData.playerOption === 'paper' && <Paper />}
                    {gameData.playerOption === 'scissors' && <Scissor />}
                    {gameData.playerOption === 'rock' && <Rock />}
                </div>
                <p className="text-white tracking-widest">YOU PICKED</p>
            </div>

            <div className="flex flex-col items-center gap-4">
                <div className="flex justify-center items-center border-none rounded-full w-[110px] h-[110px] bg-gradient-to-b from-radialGradientInitial to-radialGradientFinal">
                    {machineChoice === 'paper' && <Paper />}
                    {machineChoice === 'scissors' && <Scissor />}
                    {machineChoice === 'rock' && <Rock />}
                </div>
                <p className="text-white tracking-widest">THE HOUSE PICKED</p>
            </div>
        </div>

        <GameResult />
    </div>
  )
}

export default InGame