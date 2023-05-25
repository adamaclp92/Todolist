import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const CheckBox = ({ done, onClick }) => {
  return (
    <div className="mr-4">
      <div className="text-2xl" onClick={onClick}>
        {done && (
          <FontAwesomeIcon icon={faSquareCheck} style={{ color: "#0ea5e9" }} />
        )}
      </div>

      <div className="text-2xl border-niceblue" onClick={onClick}>
        {!done && (
          <FontAwesomeIcon icon={faSquare} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default CheckBox;
