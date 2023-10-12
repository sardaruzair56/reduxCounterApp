import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
  const counter=useSelector(state=>state.counter);
  const Dispatch=useDispatch();
  const toggleCounterHandler = () => {};
  const incrementHandler=()=>{
    Dispatch({type:"increment"});
  }
  
  const decrementHandler=()=>{
    Dispatch({type:"decrement"});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
