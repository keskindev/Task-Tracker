import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);

  //* URL
  const baseUrl = "http://localhost:5000/tasks";

  //!  -Create -Read -Update -Delete

  //* Fetch tasks
  // const fetchTasks = async () => {
  //   const res = await fetch(baseUrl);
  //   const data = await res.json();
  //   console.log(data);
  // };

  //* Fetch tasks with axios
  const fetchTasks = async () => {
    // const res = await axios.get(baseUrl);
    const { data } = await axios.get(baseUrl);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  //* ADD TASK
  // const addTask = (newTask) => {
  //   // console.log("Add Task");
  //   const id = Math.floor(Math.random() * 100) + 1;
  //   const addNewTask = { id, ...newTask };
  //   setTasks([...tasks, addNewTask]);
  // };

  //* ADD TASK fetch
  // const addTask = async (newTask) => {
  //   const res = await fetch(baseUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(newTask),
  //   });
  //   fetchTasks();
  // };

  //* ADD TASK axios
  const addTask = async (newTask) => {
    await axios.post(baseUrl, newTask);
    fetchTasks();
  };

  //* DELETE TASK
  // const deleteTask = (deletedTaskId) => {
  //   // console.log("delete", deleteTaskId);
  //   setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  // };

  //* DELETE TASK fetch
  // const deleteTask = async (deletedTaskId) => {
  //   await fetch(`${baseUrl}/${deletedTaskId}`, {
  //     method: "DELETE",
  //   });
  //   fetchTasks();
  // };

  //* DELETE TASK axios
  const deleteTask = async (deletedTaskId) => {
    await axios.delete(`${baseUrl}/${deletedTaskId}`);
    fetchTasks();
  };

  //*TOGGLE DONE
  // const toggleDone = (toggleDoneId) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
  //     )
  //   );
  // };

  //* TOGGLE DONE fetch
  // const toggleDone = async (toggleDoneId) => {
  //   const res = await fetch(`${baseUrl}/${toggleDoneId}`);
  //   const data = await res.json();
  //   const updatedTask = { ...data, isDone: !data.isDone };
  //   console.log(updatedTask);

  //   await fetch(`${baseUrl}/${toggleDoneId}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(updatedTask),
  //   });
  //   fetchTasks();
  // };

  //* TOGGLE DONE axios
  const toggleDone = async (toggleDoneId) => {
    const { data } = await axios.get(`${baseUrl}/${toggleDoneId}`);
    const updatedTask = { ...data, isDone: !data.isDone };

    await axios.put(`${baseUrl}/${toggleDoneId}`, updatedTask);
    fetchTasks();
  };

  //* SHOW ADD TASK
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
