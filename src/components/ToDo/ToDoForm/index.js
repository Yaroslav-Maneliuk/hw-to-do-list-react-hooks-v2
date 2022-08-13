import React from "react";
import { Field, Form, Formik } from "formik";
import styles from "./ToDoForm.module.scss";
import AddIcon from "@mui/icons-material/Add";

const ToDoForm = ({ addTask }) => {
  return (
    <div className={styles.to_do_form}>
      <Formik initialValues={{ body: "" }} onSubmit={addTask}>
        <Form>
          <Field name="body" className={styles.to_do_form_input} />
          <button type="submit" className={styles.to_do_form_button}>
            <AddIcon />
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ToDoForm;
