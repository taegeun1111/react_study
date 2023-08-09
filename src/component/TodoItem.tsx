import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  id: string;
  text: string;
  onRemoveTodo: (removeId: string) => void;
}> = (props) => {
    
  const removeTodoList = () => {
    props.onRemoveTodo(props.id);
  };

  return (
    <li className={classes.item} onClick={removeTodoList}>
      {props.text}
    </li>
  );
};

export default TodoItem;
