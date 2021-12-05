import { useState } from "react";
import { Home } from "./views/home/home";
import { NewTask } from "./views/newTaks/newTask";
function App() {
  const [isAddTaskModalOpen, setIsTaskModalOpen] = useState(false);

  return (
    <div id="app-wrapper">
      {isAddTaskModalOpen ? (
        <NewTask setIsTaskModalOpen={setIsTaskModalOpen} />
      ) : (
        <Home setIsTaskModalOpen={setIsTaskModalOpen} />
      )}
    </div>
  );
}

export default App;
