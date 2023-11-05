import './App.css';
import DegreeInput from "./components/DegreeInput.component";
import React, {useEffect, useRef, useState} from "react";
import MatrixValues from "./components/MatrixValues.component";

function App() {
    const [degree, setDegree] = useState("");
    const [matrixDegree, setMatrixDegree] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const firstRender = useRef(0);

    useEffect(() => {
        if (firstRender.current > 1){
            setMatrixDegree(degree);
            setIsShown(true);
        } else
            firstRender.current++;

    }, [isSubmitted]);

    return (
        <div className="App h-screen w-screen grid grid-cols-5 grid-rows-9 px-20 py-10">
            <main className="flex flex-col place-items-center justify-start gap-y-14 col-start-1 col-end-6 row-start-1 row-end-2">
                <DegreeInput degree={degree} setDegree={setDegree} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
                {isShown &&
                    <MatrixValues matrixDegree={matrixDegree} />
                }
            </main>
        </div>
    );
}

export default App;
