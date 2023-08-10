import {useDispatch, useSelector} from "react-redux";
import React from "react";
import counterSlice from "../store/counter-slice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => {
    return state.counter;
  })

  return (
    <div>
      <button onClick={() => {
        dispatch(counterSlice.actions.up(2))
      }}>+</button>
      {count.value}
    </div>
  )
}

export default Counter;