import { useState,useEffect, useRef } from 'react';

const useTimer = ({
  counter = 0,
  timerInterval = 1000 , // milliseconds
}={}) => {
  const [timerState, setTimerState] = useState('playing'); /* paused, play */
  const [seconds, setSeconds] = useState(counter);
  const minutes = useRef(0);

  const timer = useRef(null);
  const startTimer = () => {
    setTimerState('playing');
    timer.current = setInterval(()=>{
      setSeconds((seconds)=>{
        if (seconds + 1 === 60) {
          return 0;
        }
        return seconds + 1;
      });
    }, timerInterval);

  };
  const stopTimer = () => {
    setTimerState('stopped');
    setSeconds(seconds);
    clearInterval(timer.current);
  };

  const resetTimer = () => {
    setTimerState('reset');
    setSeconds(0);
    minutes.current = 0;
    clearInterval(timer.current);
  };
  useEffect(()=>{
    if (seconds + 1 === 60) {
      minutes.current = minutes.current + 1
    }
  }, [seconds]);
  
  return {
    startTimer,
    stopTimer,
    resetTimer,
    timerState,
    seconds,
    minutes: minutes.current,
  };
};

export default useTimer;