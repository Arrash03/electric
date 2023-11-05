import React from "react";
import Column from "./column.component";

export default function Matrix ({degree, name}){
    const matrix = []
    for (let i = 0; i < degree; ++i){
        matrix.push(<Column inputType={"primary"} degree={degree} x={i} key={i}/>)
    }
    return(
        <div className="flex flex-col place-content-between gap-3">
            <div className="badge badge-primary text-xl">{name}</div>
            <div className="flex justify-between gap-3">
                {matrix}
            </div>
        </div>
    )
}