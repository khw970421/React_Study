// 1. 증감기능
// 2. 부모 컴포넌트에게 메세지 전달 기능

//지역 상태관리
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount, decreaseCount } from "../redux/action";

function Counter({ onIncrease, onDecrease, idx }) {
  let val;
  if (idx === 1) {
    val = "first";
  } else if (idx === 2) {
    val = "second";
  } else val = "third";
  const dispatch = useDispatch();
  
  const state = useSelector((state) => ({
    state,
  })).state.countReducer[val];

  const handleIncrease = () => {
    dispatch(increaseCount(state, val));
    onIncrease();
  };

  const handleDecrease = () => {
    dispatch(decreaseCount(state, val));
    onDecrease();
  };

  return (
    <div>
      <span style={{ fontSize: 40 }}>{state}</span>
      <br />
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
}

export default Counter;
