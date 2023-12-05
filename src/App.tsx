import {useState} from 'react'
import Rules from './components/Rules';

function App() {

  const [initGame, setInitGame] = useState(false);
  return (
    <div className="flex flex-col w-full justify-center items-center">
      {!initGame && <Rules setInitGame={setInitGame}/>}
    </div>
  )
}

export default App
