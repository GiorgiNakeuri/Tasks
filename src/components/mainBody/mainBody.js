import { TaskItem } from "../taskItem/taskItem";
import styles from "./mainBody.module.css";

export function MainBody({ tasks }) {
  return (
    <div className={styles.MainBody}>
      {tasks.length ? (
        tasks.map((task) => <TaskItem task={task} key={task} />)
      ) : (
        <p>No tasks added yet!</p>
      )}
    </div>
  );
}
