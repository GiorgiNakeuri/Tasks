import styles from "./addTaskInput.module.css";

export function AddTaskInput({ onChange }) {
  return (
    <div className={styles.AddTaskInput}>
      <input onChange={onChange} type="text" placeholder="Enter Task" />
    </div>
  );
}
