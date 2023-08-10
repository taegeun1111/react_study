import React from "react";
import {createStore} from "@reduxjs/toolkit";
import {Provider, useDispatch, useSelector} from "react-redux";
import Counter from "./component/Counter";
import store from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter/>
      </div>
    </Provider>
  );
}

export default App;
