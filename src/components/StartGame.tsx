import {useState} from 'react'

import Game from './Game'
import Header from './Header'
import InGame from './InGame';


interface StartGameProps{
  setShowRules: (value: boolean) => void;
}


const StartGame = ({setShowRules}: StartGameProps) => {
  const [inGame, setInGame] = useState(true)
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
        <Header />
        {!inGame ? <Game /> : <InGame />}
        <button className='border-2 py-2 px-10 rounded-md text-white tracking-[2px]' onClick={()=> setShowRules(true)}>RULES</button>
    </div>
  )
}

export default StartGame