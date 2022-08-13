
import * as Yup from "yup";

export const SCHEMA_TASK_NAME = Yup.string()
  .matches(/^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{0,36}$/, "Invalid Login")
  .required("Invalid Login");
