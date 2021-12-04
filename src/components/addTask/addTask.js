import styles from "./addTask.module.css";

export function AddTask() {
  return (
    <div className={styles.AddTask}>
      <button>
        <div>
          <img src="/assets/icons/plus.svg" alt="" />
        </div>
      </button>
    </div>
  );
}
