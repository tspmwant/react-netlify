import React from "react";
import ToDoItem from "./ToDoItem";
import "./css/ToDoItem.css";
import Greet from "./Greet";

function MainContent() {
  return (
    <div>
      <Greet />
      <div className="todo-list">
        <ToDoItem todo={{ task: "Bangun tidur", jam: "4:30" }} />
        <ToDoItem todo={{ task: "Mandi", jam: "6:00" }} />
        <ToDoItem todo={{ task: "Sarapan", jam: "6:30" }} />
        <ToDoItem todo={{ task: "Berangkat kerja", jam: "6:45" }} />
      </div>
    </div>
  );
}

export default MainContent;
