import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    { id: 2, text: "Feed the Dog", day: "Dec 13th at 1:30pm", isDone: true },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  // ADD TASK
  const addTask = (newTask) => {
    // console.log("Add Task");
    const id = Math.floor(Math.random() * 100) + 1;
    const addNewTask = { id, ...newTask };
    setTasks([...tasks, addNewTask]);
  };

  // DELETE TASK
  const deleteTask = (deleteTaskId) => {
    // console.log("delete", deleteTaskId);
    setTasks(tasks.filter((task) => task.id !== deleteTaskId));
  };

  //TOGGLE DONE
  const toggleDone = (toggleDoneId) => {
    setTasks(
      tasks.map((task) =>
        task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  // SHOW ADD TASK
  const toggleShow = () => setShowAddTask(!showAddTask);

  return (
    <div className="container">
      <Header
        title="TASK TRACKER"
        toggleShow={toggleShow}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
      ) : (
        <p style={{ textAlign: "center" }}>NO TASK TO SHOW</p>
      )}
    </div>
  );
}

export default App;
