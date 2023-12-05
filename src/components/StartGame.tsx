
import Game from './Game'
import Header from './Header'

const StartGame = () => {
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
        <Game />
        <button className='border-2 py-2 px-10 rounded-md text-white tracking-[2px]'>RULES</button>
    </div>
  )
}

export default StartGame