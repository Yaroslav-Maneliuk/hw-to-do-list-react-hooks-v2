import React from "react";
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { useToDo } from "../../hooks";
import styles from "../../App.scss";

const ToDo = () => {
  const { tasks, addTask, setDoneTask, deleteTask, selectTask} = useToDo([
    {
      id: Date.now(),
      body: "Example task 1",
      isDone: false,
    },
  ]);
  return (
    <div>
      <Header selectTask={selectTask}/>
      <ToDoForm addTask={addTask} />
      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        setDoneTask={setDoneTask}
      />
    </div>
  );
};
export default ToDo;
