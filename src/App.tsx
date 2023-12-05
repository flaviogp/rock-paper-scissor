import {useState} from 'react'
import Rules from './components/Rules';
import StartGame from './components/StartGame';

function App() {

  const [closeRules, setCloseRules] = useState(false);
  return (
    <div className="flex flex-col w-full justify-center items-center">
      {!closeRules && <Rules setCloseRules={setCloseRules}/>}
      {closeRules && <StartGame />}
    </div>
  )
}

export default App
