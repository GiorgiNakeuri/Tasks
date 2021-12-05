import style from "./addTaskButton.module.css";

export function AddTaskButton({ setIsTaskModalOpen }) {
  return (
    <button
      onClick={() => setIsTaskModalOpen(false)}
      className={style.AddTaskButton}
    >
      Add Task
    </button>
  );
}
