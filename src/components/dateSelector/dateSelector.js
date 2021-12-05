import styles from "./dateSelector.module.css";
import { useState, useRef } from "react";

export function DateSelector() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const inputRef = useRef();
  const hendle = () => {
    const date = new Date();
    console.log(date.toDateString());
  };

  const hendleTomorrow = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    console.log(tomorrow.toDateString());
  };

  return (
    <div className={styles.DateSelector}>
      <button onClick={hendle}>Today</button>
      <button onClick={hendleTomorrow}>Tomorrow</button>
      <input
        ref={inputRef}
        placeholder="Date"
        type="text"
        onClick={() => {
          inputRef.current.type = "date";
        }}
      />
    </div>
  );
}
