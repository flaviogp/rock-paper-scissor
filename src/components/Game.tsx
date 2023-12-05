import ImagePaper from '../assets/images/icon-paper.svg'
import ImageRock from '../assets/images/icon-rock.svg'
import ImageScissors from '../assets/images/icon-scissors.svg'

const Game = () => {
  return (
    <div className=" max-w-md w-full h-[290px] bg-bg-triangle bg-no-repeat bg-center relative">
        
        <div className="w-[100px] h-[100px] absolute top-[-25px] left-[50px] p-3 rounded-full bg-gradient-to-b from-paperGradientInitial to-paperGradientFinal flex justify-center items-center">
            <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
                <img src={ImagePaper} alt="paper" className='w-[40px]'/>
            </div>
        </div>
        <div className="w-[100px] h-[100px] absolute top-[-25px]  right-[50px] rounded-full p-3 bg-gradient-to-b from-scissorsGradientInitial to-scissorsGradientFinal flex justify-center items-center">
            <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
                <img src={ImageScissors} alt="Scissors" className='w-[40px]'/>
            </div>
        </div>
        <div className="w-[100px] h-[100px] absolute bottom-0 right-[40%] rounded-full p-3 bg-gradient-to-b from-rockGradientInitial to-rockGradientFinal flex justify-center items-center">
            <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
                <img src={ImageRock} alt="Rock" className='w-[40px]'/>
            </div>
        </div>
    </div>
  )
}

export default Game