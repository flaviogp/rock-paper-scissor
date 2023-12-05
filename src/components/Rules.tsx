import ImageRules from '../assets/images/image-rules.svg'
import IClose from '../assets/images/icon-close.svg'

interface RulesProps{
    setCloseRules: (value: boolean) => void;
}

const Rules = ({setCloseRules}: RulesProps) => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-around">
        <h1 className="w-full text-center text-4xl font-bold text-darkText">RULES</h1>
        <img src={ImageRules} alt="Image Rules"/>
        <img src={IClose} alt="Close Rules" className='cursor-pointer' onClick={() => setCloseRules(true)}/>
    </div>
  )
}

export default Rules