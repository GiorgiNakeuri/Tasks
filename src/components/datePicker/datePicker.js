import styles from "./datePicker.module.css";
import { DateSelector } from "../dateSelector/dateSelector";
export function DatePicker() {
  return (
    <div className={styles.DatePicker}>
      <span>WHEN</span>
      <DateSelector />
    </div>
  );
}
