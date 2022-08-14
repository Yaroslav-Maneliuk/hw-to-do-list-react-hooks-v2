import { useState, useEffect } from "react";

const useToDo = (initalValue) => {
  const [tasks, setTasks] = useState(initalValue);
  const [filteredTasks, setFilteredTasks] = useState([...tasks]);
  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  return {
    tasks,
    filteredTasks,
    addTask: (value, {resetForm}) => {
      if (value.body !== "") {
        const newTask = {
          id: Date.now(),
          body: value.body,
          isDone: false,
        };
        setTasks([...tasks, newTask]);
        resetForm({value:""})
      }
    },
    setDoneTask: (id) => {
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            task.isDone = true;
            setFilteredTasks(tasks);
            return task;
          } else {
            return task;
          }
        })
      );
    },
    deleteTask: (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
      setFilteredTasks(tasks);
    },
    selectTask: (isDone) => {
      if (isDone === "All") {
        setFilteredTasks(tasks);
      } else {
        let newToDo = [...tasks].filter((tasks) => tasks.isDone === isDone);
        setFilteredTasks(newToDo);
      }
    },
  };
};
export default useToDo;
