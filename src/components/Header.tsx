
const Header = () => {
  return (
    <header className="w-full h-[110px] border-4 border-headerOutline rounded-lg p-3 flex items-center justify-between">
        <div className="flex flex-col text-white font-bold text leading-5 text-xl">
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
        </div>
        <div className="bg-white h-full w-[90px] flex flex-col items-center p-2 rounded-md">
            <p className='text-scoreText text-sm font-bold'>SCORE</p>
            <p className='text-darkText font-bold text-5xl' >0</p>
        </div>
    </header>
  )
}

export default Header