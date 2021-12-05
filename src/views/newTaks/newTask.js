import { AddTaskButton } from "../../components/addTaskButton/addTaskButton";
import { AddTaskHeader } from "../../components/addTaskHeader/addTaskHeader";
import { AddTaskInput } from "../../components/addTaskInput/addTaskInput";
import { DatePicker } from "../../components/datePicker/datePicker";
import styles from "./newTask.module.css";
import { useState } from "react";

export function NewTask({ setIsTaskModalOpen, setTasks }) {
  const [input, setInput] = useState("");

  const hendleClick = () => {
    setIsTaskModalOpen(false);
    setTasks((previous) => [...previous, input]);
  };
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className={styles.wraper}>
      <AddTaskHeader />
      <AddTaskInput onChange={handleInputChange} />
      <div className={styles.bottomHalf}>
        <DatePicker />
        <AddTaskButton onClick={hendleClick} />
      </div>
    </div>
  );
}
