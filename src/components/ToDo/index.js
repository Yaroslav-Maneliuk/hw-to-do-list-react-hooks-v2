import React from "react";
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { useToDo } from "../../hooks";
import styles from "../../App.scss";

const ToDo = () => {
  const { addTask, setDoneTask, deleteTask, selectTask, filteredTasks } =
    useToDo([
      {
        id: Date.now(),
        body: "Example task 1",
        isDone: false,
      },
    ]);
  return (
    <div>
      <Header selectTask={selectTask} />
      <ToDoForm addTask={addTask} />
      <ToDoList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        setDoneTask={setDoneTask}
      />
    </div>
  );
};
export default ToDo;
