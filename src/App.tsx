import { useState } from "react";
import NewTodo from "./component/NewTodo";
import Todos from "./component/Todos";
import Todo from "./models/todo";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo/>
      <Todos/>
    </TodosContextProvider>
  );
}

export default App;
