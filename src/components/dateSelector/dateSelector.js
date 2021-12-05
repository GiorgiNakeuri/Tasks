import styles from "./dateSelector.module.css";
export function DateSelector() {
  return (
    <div className={styles.DateSelector}>
      <button>Today</button>
      <button>Tomorrow</button>
      <button>Select Dates</button>
    </div>
  );
}
