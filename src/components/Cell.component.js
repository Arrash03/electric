import React, { useContext, useEffect, useState } from "react";
import { MatrixContext } from "./MatrixValues.component";

export default function Cell({ inputType, x, y }) {
    const [isInputFilled, setIsInputFilled] = useState(false);
  const matrixValues = useContext(MatrixContext);
  const matrixValuesCopy = JSON.parse(
    JSON.stringify(matrixValues.matrixValues)
  );
  let className = "input-primary";
  if (inputType === "secondary") {
    className = "input-secondary";
  }
  let parentArray = [];
  useEffect(() => {
    switch (x) {
      case -1:
        parentArray = matrixValuesCopy.Constants;
        break;
      default:
        parentArray = matrixValuesCopy.Coefficients[x];
    }
  });
  const changeHandler = (e) => {
    if (!isNaN(+e.target.value)) {
        if (!isInputFilled) {
            setIsInputFilled(true)
            matrixValues.setFilledInputs(matrixValues.filledInputs + 1);
        }
      parentArray[y] = +e.target.value;
      matrixValues.setMatrixValues(matrixValuesCopy);
    } else if(e.target.value === ""){
        if (isInputFilled) {
            setIsInputFilled(false);
            matrixValues.setFilledInputs(matrixValues.filledInputs - 1);
        }
    }
  };
  return (
    <input
      key={`${x}${y}`}
      type="text"
      placeholder="N"
      className={`input input-bordered px-0 ${className} w-14 text-center max-w-xs`}
      value={parentArray[y]}
      onChange={changeHandler}
      required={true}
    />
  );
}
