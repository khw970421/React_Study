import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { totalIncreaseCount, totalDecreaseCount } from "./redux/action";
import { increaseCount, decreaseCount } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const { first, second, third, totalState } = useSelector((state) => ({
    totalState: state.totalCountReducer,
    first: state.countReducer.first,
    second: state.countReducer.second,
    third: state.countReducer.third,
  }));

  console.log(first, second, third);

  const handleIncrease = (val, key) => {
    dispatch(increaseCount(val, key));
    dispatch(totalIncreaseCount(totalState));
  };

  const handleDecrease = (val, key) => {
    dispatch(decreaseCount(val, key));
    dispatch(totalDecreaseCount(totalState));
  };

  return (
    <div>
      TotalCount : {totalState}
      <Counter
        onIncrease={() => handleIncrease(first, "first")}
        onDecrease={() => handleDecrease(first, "first")}
        val={first}
      ></Counter>
      <Counter
        onIncrease={() => handleIncrease(second, "second")}
        onDecrease={() => handleDecrease(second, "second")}
        val={second}
      ></Counter>
      <Counter
        onIncrease={() => handleIncrease(third, "third")}
        onDecrease={() => handleDecrease(third, "third")}
        val={third}
      ></Counter>
    </div>
  );
}

export default App;
