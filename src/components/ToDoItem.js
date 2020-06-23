import React from "react";
import "./css/ToDoItem.css";

const ToDoItem = (props) => {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <div style={{ flexDirection: "column" }}>
        <p>{props.todo.task}</p>
        <p>Jam: {props.todo.jam}</p>
      </div>
    </div>
  );
};

/*function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <div style={{ flexDirection: "column" }}>
        <p>{props.todo.task}</p>
        <p>Jam: {props.todo.jam}</p>
      </div>
    </div>
  );
}*/

export default ToDoItem;
