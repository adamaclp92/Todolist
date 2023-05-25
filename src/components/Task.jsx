import React, { useState } from "react";
import CheckBox from "./UI/CheckBox";
import { BsFillTrashFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Task = ({ name, done, onDoneChange, onRemoveTask, onUpdateTask }) => {
  const [editMode, setEditMode] = useState(false);

  const handleDone = () => {
    onDoneChange(!done);
  };

  const handleRemoving = () => {
    onRemoveTask();
  };

  const style =
    (done ? " checked " : " unchecked ") +
    " flex justify-between m-auto mt-2 max-w-lg  p-4 text-2xl border rounded-2xl bg-darkgrey";

  return (
    <IconContext.Provider value={{ color: "#0ea5e9" }}>
      <div className={style}>
        <div className="flex">
          <CheckBox done={done} onClick={handleDone} />
          {!editMode && (
            <p className="text-grey" onClick={() => setEditMode(!editMode)}>
              {name}
            </p>
          )}
          {editMode && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEditMode(false);
              }}
            >
              <input
                className="pl-2 w-full text-grey rounded-xl focus:rounded-xl bg-niceblue text-darkgrey"
                type="text"
                value={name}
                onChange={(e) => onUpdateTask(e.target.value)}
              />
            </form>
          )}
        </div>

        <div className="mt-1 ">
          <BsFillTrashFill onClick={handleRemoving} />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Task;
