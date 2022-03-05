import Counter from "./components/Counter";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { totalIncreaseCount, totalDecreaseCount } from "./redux/action";

function App() {
  const [totalCount, setTotalCount] = useState(0);
  const dispatch = useDispatch();
  const nofilterstate = useSelector((state) => ({
    state,
  }));
  const state = nofilterstate.state.totalCountReducer;
  return (
    <div>
      TotalCount : {state}
      <Counter
        onIncrease={() => {
          dispatch(totalIncreaseCount(state));
        }}
        onDecrease={() => {
          dispatch(totalDecreaseCount(state));
        }}
        idx={1}
      ></Counter>
      <Counter
        onIncrease={() => {
          dispatch(totalIncreaseCount(state));
        }}
        onDecrease={() => {
          dispatch(totalDecreaseCount(state));
        }}
        idx={2}
      ></Counter>
      <Counter
        onIncrease={() => {
          dispatch(totalIncreaseCount(state));
        }}
        onDecrease={() => {
          dispatch(totalDecreaseCount(state));
        }}
        idx={3}
      ></Counter>
    </div>
  );
}

export default App;
