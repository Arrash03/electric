import React, { createContext, useEffect, useState } from "react";
import Matrix from "./Matrix.component";
import Column from "./column.component";
import Modal from "./modal.component";

export const MatrixContext = createContext({
  matrixValues: { Coefficients: [], Constants: [] },
  setMatrixValues: null,
});

const createMatrixValues = (degree) => {
  const matrix = { Coefficients: [], Constants: [] };
  for (let i = 0; i < degree; ++i) {
    let column = [];
    for (let j = 0; j < degree; ++j) {
      column.push("");
    }
    matrix.Coefficients.push(column);
  }
  for (let i = 0; i < degree; ++i) {
    matrix.Constants.push("");
  }
  return matrix;
};

export default function MatrixValues({ matrixDegree }) {
  const [matrixValues, setMatrixValues] = useState(
    createMatrixValues(matrixDegree)
  );
  const [showModal, setShowModal] = useState(false);
  const [filledInputs, setFilledInputs] = useState(0);

  useEffect(() => {
    setMatrixValues(createMatrixValues(matrixDegree));
  }, [matrixDegree]);
  const clickHandler = () => {
    if (filledInputs === matrixDegree*(matrixDegree+1)) {
      setShowModal(true);
    }
  };
  return (
    <MatrixContext.Provider
      value={{ matrixValues, setMatrixValues, filledInputs, setFilledInputs }}
    >
      <form className="flex flex-col justify-center place-items-center gap-6" onSubmit={(e) => e.preventDefault()}>
        <div className="flex justify-between gap-10 ">
          <Matrix degree={matrixDegree} name={"Coefficients"} />
          <div className="flex flex-col place-content-between gap-3 place-items-center">
            <div className="badge badge-secondary text-xl">Constants</div>
            <Column degree={matrixDegree} inputType={"secondary"} />
          </div>
        </div>
        <button
          className="btn btn-success text-lg w-fit"
          onClick={clickHandler}
        >
          Calculate
        </button>
        {showModal && (
          <Modal showModal={showModal} setShowModal={setShowModal} matrixValues={matrixValues}/>
        )}
      </form>
    </MatrixContext.Provider>
  );
}
