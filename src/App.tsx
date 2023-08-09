import { useState } from "react";
import NewTodo from "./component/NewTodo";
import Todos from "./component/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos)=>{
        return prevTodos.concat(newTodo);
    });
  };

  const removeHandler = (removeId : string) => {
    const updatedTodo = todos.filter((list) => list.id !== removeId)

    setTodos(updatedTodo);
  }

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeHandler} />
    </>
  );
}

export default App;
