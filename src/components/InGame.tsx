import { useEffect, useState } from "react";
import { IGameData } from "../interfaces/interfaces"
import Paper from "./Paper";
import Rock from "./Rock";
import Scissor from "./Scissor";
import GameResult from "./GameResult";


interface InGameProps{
    gameData: IGameData;
    setGameData: (value: IGameData) => void;
}

const InGame = ({gameData, setGameData}: InGameProps) => {
            
    const randomOption = () => {
        const randomNumber = Math.floor(Math.random() * 2);
        const option = gameData.gameOptions[randomNumber]
        console.log(option);
        return option;
    }
          
    const changeScore = (result: string) =>{
        if(result === 'draw') return;
        if(result === 'lose') setGameData({...gameData, score: 0})
        if(result === 'won') setGameData({...gameData, score: gameData.score+1})
    }
    const declareChampion = () => {

        if(
            gameData.playerOption === 'paper' && gameData.machineOption === 'rock' ||
            gameData.playerOption === 'rock' && gameData.machineOption === 'scissors' ||
            gameData.playerOption === 'scissors' && gameData.machineOption === 'paper'
        ){
            setGameData({...gameData, result: 'won', score: (gameData.score+1)});
        }
        if(
            gameData.playerOption === 'paper' && gameData.machineOption === 'paper' ||
            gameData.playerOption === 'rock' && gameData.machineOption === 'rock' ||
            gameData.playerOption === 'scissors' && gameData.machineOption === 'scissors'
        ){
            setGameData({...gameData, result: 'draw'});
        }
        if(
            gameData.playerOption === 'paper' && gameData.machineOption === 'scissors' ||
            gameData.playerOption === 'rock' && gameData.machineOption === 'paper' ||
            gameData.playerOption === 'scissors' && gameData.machineOption === 'rock'
        ){
            setGameData({...gameData, result: 'lose'});
          }

        changeScore(gameData.result);
    }
    const game =() => {
        const machineChoice = randomOption();
        setGameData({...gameData, machineOption: machineChoice})
        setTimeout(declareChampion, 1000)
        
    }

    useEffect(() => {
        game();
    },[gameData.machineOption])

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
                    {gameData.machineOption === 'paper' && <Paper />}
                    {gameData.machineOption === 'scissors' && <Scissor />}
                    {gameData.machineOption === 'rock' && <Rock />}
                </div>
                <p className="text-white tracking-widest">THE HOUSE PICKED</p>
            </div>
        </div>

        {gameData.result && <GameResult result={gameData.result} />}
    </div>
  )
}

export default InGame