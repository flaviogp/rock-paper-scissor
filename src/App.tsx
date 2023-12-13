import {useState} from 'react'
import Rules from './components/Rules';
import StartGame from './components/StartGame';
import { IGameData } from './interfaces/interfaces';

function App() {
  const [gameData, setGameData] = useState<IGameData>({
    stage: 0,
    previousStage: 1,
    gameOptions: ['paper', 'scissors', 'rock'],
    playerOption: '',
    machineOption: '',
    score: 0,
    result: ''
  })


  return (
    <div className="flex flex-col w-full justify-center items-center">

      {gameData.stage === 0 ? 
        <Rules setGameData={setGameData} gameData={gameData}/> :
        <StartGame setGameData={setGameData} gameData={gameData} />
      }
      
    </div>
  )
}

export default App
