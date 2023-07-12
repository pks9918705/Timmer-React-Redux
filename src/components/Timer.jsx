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

This code snippet is written in React and utilizes the useEffect hook. The useEffect hook is used to perform side effects in functional components, such as fetching data, subscribing to events, or in this case, setting up and cleaning up intervals.

Let's break down the code step by step:

The useEffect hook is called with a function as its first argument and an array of dependencies as its second argument. The function inside useEffect will be executed after the component renders, and it will also run whenever any of the dependencies change.

Within the useEffect function, a variable named interval is declared. This variable will be used to store the reference to the interval that is created.

The condition if (isRunning) checks if the isRunning variable is truthy. If it is, it means that the timer is running, and we need to start the interval.

Inside the conditional block, setInterval is called. setInterval is a JavaScript function that repeatedly calls a function or executes a piece of code at a specified interval (in this case, every 1000 milliseconds or 1 second).

The function passed to setInterval dispatches an action called incrementTimer(). It seems that this action is a part of a Redux store, as the dispatch function is used. This action is responsible for incrementing the timer.

The return statement within the useEffect function is a cleanup function. It will be invoked when the component is unmounted or when the dependencies specified in the array change. In this case, it clears the interval using clearInterval to stop the timer and prevent any memory leaks.

The dependencies array [isRunning, dispatch] specifies that the useEffect function should run whenever either isRunning or dispatch changes. If one of these values changes, the cleanup function is invoked, and the effect is re-run with the updated values.

To summarize, this code sets up an interval timer that increments a timer value by dispatching an action every second. The timer starts or stops depending on the value of isRunning. If isRunning is true, the interval is started, and if it becomes false, the interval is cleared to stop the timer.







*/