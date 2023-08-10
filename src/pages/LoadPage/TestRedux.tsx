import { increment, decrement } from "../../redux/counter";
import "./TestRedux.scss";
import { useSelector, useDispatch } from "react-redux";
import { TestRedux2 } from "./TestRedux2";
import { Link } from "react-router-dom";

interface StateProps {
  counter: {
    count: number;
  };
}

export const TestRedux = () => {
  const { count } = useSelector((state: StateProps) => state.counter);
  const dispatch = useDispatch();

  

  return (
    <>
      <div className="test">
        <h1>count = {count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
      <TestRedux2 />
      <Link to="/test3">
        <button>test3</button>
      </Link>
    </>
  );
};
