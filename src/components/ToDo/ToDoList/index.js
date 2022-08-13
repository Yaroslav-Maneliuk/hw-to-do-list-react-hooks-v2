import React from "react";
import styles from "./ToDoList.module.scss";
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const ToDoList = ({ tasks, deleteTask, setDoneTask, filteredTasks}) => {
  return (
    <div>
      <ul className={styles.to_do_list}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.to_do}>
            <span
              className={
                task.isDone ? styles.completed_task : !styles.completed_task
              }
            >
              {task.body}
            </span>
            <button
              onClick={() => {
                setDoneTask(task.id);
              }}
              className={styles.delete_to_do_button}
            >
              <CheckIcon />
            </button>
            <button
              onClick={() => {
                deleteTask(task.id);
              }}
              className={styles.complete_to_do_button}
            >
              <DeleteOutlineIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
