import { useState } from "react";
import styles from "./taskItem.module.css";

export function TaskItem({ task }) {
  const [isCompleted, setIsCompleted] = useState(false);

  console.log(isCompleted);

  return (
    <div
      onClick={() => setIsCompleted((prev) => !prev)}
      className={
        isCompleted ? `${styles.taskItem} ${styles.completed}` : styles.taskItem
      }
    >
      <p>{task}</p>
    </div>
  );
}
