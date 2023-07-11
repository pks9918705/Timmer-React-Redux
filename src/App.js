import React, { useState, useRef } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Screen from './components/Screen';

function App() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);
  
  // const pksRef=useRef("pks")

  const handleStart = () => {
    // If an interval is already running, clear it
    if (intervalRef.current) {
      console.log("Yes i am runnig")
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setTimer(0)
    }

    // Start a new interval that increments the timer every second
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
      // console.log(pksRef)
    }, 1000);

  };

  const handlePause = () => {
    // If an interval is running, clear it to pause the timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleReset = () => {
    // If an interval is running, clear it
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Reset the timer to 0
    setTimer(0);
  };

  return (
    <>
      <Screen timer={timer} />
      <Buttons
        handleReset={handleReset}
        handleStart={handleStart}
        handlePause={handlePause}
      />
    </>
  );
}

export default App;
