interface GameOpitionProps{
    image: string;
    altImage: string;
    css: string

}

const GameOpition = ({image, altImage, css}: GameOpitionProps) => {
  return (
        <div className={`w-[100px] h-[100px] absolute flex justify-center items-center ${css}`}>
        <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
            <img src={image} alt={altImage} className='w-[40px]'/>
        </div>
    </div>
  )
}

export default GameOpition