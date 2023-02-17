import { TiTimes } from "react-icons/ti";

const Task = ({ task, deleteTask, toggleDone }) => {
  return (
    <div
      className={`task ${task.isDone ? "done" : ""}`}
      onDoubleClick={() => toggleDone(task.id)}
    >
      <h3>
        {task.text}
        <TiTimes style={{ color: "red" }} onClick={() => deleteTask(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
