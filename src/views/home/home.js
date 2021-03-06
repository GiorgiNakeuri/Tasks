import { Timeline } from "../../components/timeline/timeline";
import { MainBody } from "../../components/mainBody/mainBody";
import { AddTask } from "../../components/addTask/addTask";
import { Header } from "../../components/header/header";
import styles from "./home.module.css";

export function Home({ setIsTaskModalOpen, tasks }) {
  return (
    <div className={styles.layout}>
      <Header />
      <div>
        <Timeline />
        <MainBody tasks={tasks} />
        <AddTask setIsTaskModalOpen={setIsTaskModalOpen} />
      </div>
    </div>
  );
}
