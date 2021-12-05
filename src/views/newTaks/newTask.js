import { AddTaskButton } from "../../components/addTaskButton/addTaskButton";
import { AddTaskHeader } from "../../components/addTaskHeader/addTaskHeader";
import { AddTaskInput } from "../../components/addTaskInput/addTaskInput";
import { DatePicker } from "../../components/datePicker/datePicker";
import styles from "./newTask.module.css";

export function NewTask({ setIsTaskModalOpen }) {
  return (
    <div className={styles.wraper}>
      <AddTaskHeader />
      <AddTaskInput />
      <div className={styles.bottomHalf}>
        <DatePicker />
        <AddTaskButton setIsTaskModalOpen={setIsTaskModalOpen} />
      </div>
    </div>
  );
}
