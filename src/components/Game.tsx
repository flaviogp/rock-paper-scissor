import ImagePaper from '../assets/images/icon-paper.svg'
import ImageRock from '../assets/images/icon-rock.svg'
import ImageScissors from '../assets/images/icon-scissors.svg'
import GameOpition from './GameOpition'


const Game = () => {
  return (
    <div className=" max-w-md w-full h-[290px] bg-bg-triangle bg-no-repeat bg-center relative">
        
        < GameOpition 
            image={ImagePaper} altImage={'Paper'} 
            css={' top-[-25px] left-[50px] p-3 rounded-full bg-gradient-to-b from-paperGradientInitial to-paperGradientFinal'}
        />
        < GameOpition 
            image={ImageScissors} altImage={'Scissors'} 
            css={'top-[-25px]  right-[50px] rounded-full p-3 bg-gradient-to-b from-scissorsGradientInitial to-scissorsGradientFinal'}
        />
        < GameOpition 
            image={ImageRock} altImage={'Rock'} 
            css={'bottom-0 right-[40%] rounded-full p-3 bg-gradient-to-b from-rockGradientInitial to-rockGradientFinal'}
        />

    </div>
  )
}

export default Game