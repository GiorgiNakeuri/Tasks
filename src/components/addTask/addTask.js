import styles from "./addTask.module.css";

export function AddTask({ setIsTaskModalOpen }) {
  return (
    <div className={styles.AddTask}>
      <button onClick={() => setIsTaskModalOpen(true)}>
        <div>
          <img src="/assets/icons/plus.svg" alt="" />
        </div>
      </button>
    </div>
  );
}
