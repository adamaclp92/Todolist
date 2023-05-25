import React, { useState } from "react";

const TaskForm = (props) => {
  const [taskInput, setTaskInput] = useState("");

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const task = {
      name: taskInput,
      done: false,
    };
    props.onAddTask(task);
    setTaskInput("");
  };

  return (
    <form
      onSubmit={handleTaskSubmit}
      className="border-grey border-4 rounded-lg m-auto mt-16 max-w-lg p-2 text-2xl"
    >
      <button
        type="submit"
        className="border pl-2 pr-2 mr-2 bg-niceblue rounded-lg"
      >
        +
      </button>
      <input
        className=" pl-2 pr-2 bg-input w-10/12 focus: text-niceblue outline-niceblue"
        type="text"
        placeholder="Your next task..."
        value={taskInput}
        required
        onChange={(e) => setTaskInput(e.target.value)}
      />
    </form>
  );
};

export default TaskForm;
