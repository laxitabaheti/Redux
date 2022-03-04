import Card from "../UI/Card/Card";

import { useSelector, useDispatch } from "react-redux";

import { CounterActions } from "../store/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(CounterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(CounterActions.decrement());
  };

  const toggleHandler = () => {
    dispatch(CounterActions.toggle());
  };

  return (
    <Card>
      <div>Redux Counter</div>

      {show && <div>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </Card>
  );
};
export default Counter;
