import React from "react";
import styles from "./Header.module.scss";

const Header = ({ selectTask }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ToDo List</h1>
      <div>
        <button
          value="All"
          className={styles.filter_button}
          onClick={() => {
            selectTask("All");
          }}
        >
          All
        </button>
        <button
          value="Completed"
          className={styles.filter_button}
          onClick={() => {
            selectTask(true);
          }}
        >
          Completed
        </button>
        <button
          value="No Completed"
          className={styles.filter_button}
          onClick={() => {
            selectTask(false);
          }}
        >
          No Completed
        </button>
      </div>
    </header>
  );
};
export default Header;
