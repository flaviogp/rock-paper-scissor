
interface GameResultProps {
  result: string;
}

const GameResult = ({result}:GameResultProps) => {
  return (
    <div className='flex flex-col items-center text-white gap-4' >
        <p className="text-5xl font-bold uppercase">YOU {result}</p>
        <button 
        className="py-2 px-4 border rounded-md bg-white text-darkText tracking-wider font-bold w-full"> 
            PLAY AGAIN 
        </button>
    </div>
  )
}

export default GameResult