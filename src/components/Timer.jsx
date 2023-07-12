import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementTimer } from "../redux/actions/timmerActions";

export const Timer = () => {
  const dispatch = useDispatch();
  const { isRunning, elapsedTime } = useSelector((state) => state);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(incrementTimer());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, dispatch]);

  return <b>{elapsedTime}</b>;
};


//! Here Explain the working of Above Code 

/*
The return statement within the useEffect function is a cleanup function. It will be invoked when the component is unmounted or when the dependencies specified in the array change. In this case, it clears the interval using clearInterval to stop the timer and prevent any memory leaks.

The dependencies array [isRunning, dispatch] specifies that the useEffect function should run whenever either isRunning or dispatch changes. If one of these values changes, the cleanup function is invoked, and the effect is re-run with the updated values.
*/