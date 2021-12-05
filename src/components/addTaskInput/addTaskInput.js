import styles from "./addTaskInput.module.css";

export function AddTaskInput() {
  return (
    <div className={styles.AddTaskInput}>
      <input type="text" placeholder="Enter Task" />
    </div>
  );
}
