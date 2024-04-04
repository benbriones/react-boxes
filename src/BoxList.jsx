import React, { useState } from "react";
import {v4 as uuid} from "uuid";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box"



function BoxList() {
    const [boxes, setBoxes] = useState([]);

    function addBox(box) {
        let newBox = {...box, id: uuid()};
        setBoxes(boxes =>[...boxes, newBox])
    }

    function deleteBox(evt) {
        const id = evt.target.parentElement.getAttribute('id');
        console.log(id);
        setBoxes(boxes => boxes.filter((box) => box.id !== id));
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {
                boxes.map(box =>
                <li key={box.id}>
                    <Box
                    bgColor={box.bgColor}
                    width={box.width}
                    height={box.height}
                    id={box.id}
                    deleteBox={deleteBox}
                    />
                </li>)
            }
        </div>
    )
}


export default BoxList;