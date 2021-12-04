import { Timeline } from "../timeline/timeline";
import { MainBody } from "../mainBody/mainBody";
import { AddTask } from "../addTask/addTask";
export function Layout() {
  return (
    <div style={{ display: "flex" }}>
      <Timeline />
      <MainBody />
      <AddTask />
    </div>
  );
}
