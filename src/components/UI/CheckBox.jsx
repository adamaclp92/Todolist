import React from "react";

import { IconContext } from "react-icons";
import { AiFillCheckSquare } from "react-icons/ai";
import { BsSquare } from "react-icons/bs";

const CheckBox = ({ done, onClick }) => {
  return (
    <IconContext.Provider value={{ color: "#0ea5e9" }}>
      <div className="mt-1 mr-4">
        <div className="text-2xl" onClick={onClick}>
          {done && <AiFillCheckSquare />}
        </div>

        <div className="border-niceblue" onClick={onClick}>
          {!done && <BsSquare />}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default CheckBox;
