import React from "react";
import Cell from "./Cell.component";

export default function Column({degree, inputType, x=-1}) {
    const cells = [];
    for (let i = 0; i < degree; ++i){
        cells.push(<Cell inputType={inputType} x={x} y={i} key={`${x} ${i}`} />)
    }

    return (
        <div className="flex flex-col gap-3 place-content-between">
            {cells}
        </div>
    )
}