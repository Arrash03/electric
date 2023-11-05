import React from "react";

export const det = (matrix) => {
  let result = 1;
  let myMatrix = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < myMatrix.length; i++) {
    if (myMatrix[i][i] === 0) {
      return 0;
    }
    for (let j = i + 1; j < myMatrix.length; j++) {
      if (myMatrix[j][i] !== 0) {
        const nesbat = myMatrix[j][i] / myMatrix[i][i];
        for (let k = i; k < myMatrix.length; k++) {
          myMatrix[j][k] -= myMatrix[i][k] * nesbat;
        }
      }
    }
  }
  for (let l = 0; l < myMatrix.length; l++) {
    result *= myMatrix[l][l];
  }
  return result;
};

function Modal({ showModal, setShowModal, matrixValues }) {
  const coefficientsDet = det(matrixValues.Coefficients);
  const results = [];
  for (let i = 0; i < matrixValues.Coefficients.length; i++) {
    const inputMatrix = [
      ...matrixValues.Coefficients.slice(0, i),
      matrixValues.Constants,
      ...matrixValues.Coefficients.slice(i + 1),
    ];
    results.push(
      <div key={i}>
        {i + 1 + ")"} {String.fromCharCode(65 + i)} ={" "}
        {det(inputMatrix) / coefficientsDet}
      </div>
    );
  }


  return (
    <dialog
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle transition ease-in-out delay-1000"
      open={showModal}
    >
      <div className="modal-box">
        <div className="flex flex-col justify-start place-items-between">
          {results}
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
