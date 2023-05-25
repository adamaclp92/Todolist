import React, { useState, useEffect } from "react";
import "./App.css";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    if (tasks.length === 0) {
      localStorage.clear();
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /* useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks || []);
  }, []);*/

  let doneCount = 0;
  let motivationalString = "Keep it going!";

  tasks.map((task) => {
    if (task.done) doneCount++;
  });

  if (tasks.length > 0 && doneCount === 0) {
    motivationalString = "Try to do at least one!";
  }

  if (tasks.length === doneCount) {
    motivationalString = "Nice job for today!";
  }

  const addTask = (task) => {
    if (tasks !== null) {
      setTasks((prev) => {
        return [...prev, task];
      });
    } else {
      setTasks([task]);
    }
  };

  const doneChange = (taskIndex, newDone) => {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  };

  const removeTask = (taskIndex) => {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks.splice(taskIndex, 1);
      return newTasks;
    });
  };

  const updateTask = (taskIndex, newName) => {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].name = newName;
      return newTasks;
    });
  };

  return (
    <div className="main_div max-w-xs m-auto">
      <div className=" text-white  mt-10 text-center font-bold text-4xl">
        Complete: {doneCount}/{tasks.length}
      </div>
      <div className="flex items-center justify-center">
        <div className=" text-white mt-10 font-bold text-2xl mr-4">
          {motivationalString}
        </div>
      </div>

      <TaskForm onAddTask={addTask} />
      {tasks.map((task, index) => (
        <Task
          key={index}
          {...task}
          onDoneChange={(done) => doneChange(index, done)}
          onRemoveTask={() => removeTask(index)}
          onUpdateTask={(newName) => updateTask(index, newName)}
        />
      ))}
    </div>
  );
}

export default App;
