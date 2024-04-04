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

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {
                boxes.map(box => <Box />)
            }
        </div>
    )
}


export default BoxList;