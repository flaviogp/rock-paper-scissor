import { IGameData } from "../interfaces/interfaces";

interface GameOpitionProps{
    image: string;
    altImage: string;
    css: string
    setGameData?: (value: IGameData) => void;
    gameData?: IGameData;

}

const GameOpition = ({image, altImage, css, gameData, setGameData}: GameOpitionProps) => {
  const handleClick = () => {

    if(!setGameData || !gameData) return;

    const option = altImage;
    return setGameData({...gameData, inGame: true, playerOption: option})
  }

  return (
      <div className={`w-[100px] h-[100px] flex justify-center items-center cursor-pointer rounded-full p-3 ${css}`} onClick={() => handleClick()}>
        <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
            <img src={image} alt={altImage} className='w-[40px]'/>
        </div>
      </div>
  )
}

export default GameOpition