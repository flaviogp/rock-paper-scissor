import React from 'react'
import Header from './Header'

const StartGame = () => {
  return (
    <div 
        className="
            w-full h-[100vh] 
            bg-gradient-to-b
             from-radialGradientInitial
             to-radialGradientFinal 
            flex flex-col items-center
            p-5"
    >
        <Header />
    </div>
  )
}

export default StartGame