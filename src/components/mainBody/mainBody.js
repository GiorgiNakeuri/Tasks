import { TaskItem } from "../taskItem/taskItem";
import styles from "./mainBody.module.css";

const tasks = [
  "Book appoinment with Jared",
  "Upload today shot on Dribbble",
  "Complete the Elephant Illustration",
  "Buy Cake for Clair's Bithday",
];

export function MainBody() {
  return (
    <div className={styles.MainBody}>
      {tasks.map((task) => (
        <TaskItem task={task} key={task} />
      ))}
    </div>
  );
}
