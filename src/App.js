import Left1 from "./Component/left/Left1";
import React, {useState} from "react";
import Right1 from "./Component/right/Right1";
import {createStore} from "redux";

const reducer = (state,action) => {
  // const newState
  return
}

const store = createStore(reducer);


function App() {
  const [number, setNumber] = useState(1)

  return (
    <div id={'container'}>
      <h1>Root : {number}</h1>
      <div id={'grid'}>
        <Left1/>
        <Right1/>
      </div>
    </div>
  );
}

export default App;
