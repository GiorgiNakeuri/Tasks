import { useState } from "react";
import { Home } from "./views/home/home";
import { NewTask } from "./views/newTaks/newTask";
function App() {
  const [isAddTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  return (
    <div id="app-wrapper">
      {isAddTaskModalOpen ? (
        <NewTask setTasks={setTasks} setIsTaskModalOpen={setIsTaskModalOpen} />
      ) : (
        <Home setIsTaskModalOpen={setIsTaskModalOpen} tasks={tasks} />
      )}
    </div>
  );
}

export default App;
