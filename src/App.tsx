import {useState} from 'react'
import Rules from './components/Rules';
import StartGame from './components/StartGame';

function App() {

  const [showRules, setShowRules] = useState(false);
  return (
    <div className="flex flex-col w-full justify-center items-center">
      {showRules && <Rules setShowRules={setShowRules}/>}
      {!showRules && <StartGame setShowRules={setShowRules} />}
    </div>
  )
}

export default App
