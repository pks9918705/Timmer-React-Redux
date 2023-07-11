import React from 'react'

export default function Buttons({handleReset,handleStart,handlePause}) {
  return (
    <>
    {/* start button  */}
    <button onClick={handleStart}>START</button>
    
    {/* pause button  */}
    <button onClick={handlePause}>PAUSE</button>

    {/* reset button  */}
    <button onClick={handleReset}>REST</button>
    
      
    </>
  )
}
