import React from "react";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/degreeInput.css"

export default function DegreeInput({degree, setDegree, isSubmitted, setIsSubmitted}) {
    const clickHandler = (e) => {
        e.preventDefault();
        if (+degree > 8){
            toast.error("Number Is Greater Than 8.", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else if (+degree < 2){
            toast.error("Number Is Smaller Than 2.", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else
            setIsSubmitted(!isSubmitted);
    }
    return (
        <div>
            <form id="DegreeInput"
                  className="border rounded-lg border-gray-500 flex flex-col place-items-center gap-y-5 px-10 py-5 w-fit h-fit">
                <div className="md:form-control basis-1/3">
                    <label className="label">
                        <span className="label-text">Enter amount</span>
                    </label>
                    <label className="input-group md:flex-row  flex-col ">
                        <span id="mySpan" className="flex justify-center">Matrix Degree</span>
                        <input id="myInput" type="text" placeholder="Number" required={true} value={degree}
                               className="input input-bordered" onChange={(e) => {!isNaN(+e.target.value) && setDegree(+e.target.value)}}/>
                    </label>
                </div>
                <button className="btn btn-outline btn-success shrink min-w-fit w-40 text-lg" onClick={clickHandler}>Next
                </button>
            </form>
            <ToastContainer limit={1} />
        </div>
    )
}