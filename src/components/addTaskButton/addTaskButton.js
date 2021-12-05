import style from "./addTaskButton.module.css";

export function AddTaskButton({ onClick }) {
  return (
    <button onClick={onClick} className={style.AddTaskButton}>
      Add Task
    </button>
  );
}
