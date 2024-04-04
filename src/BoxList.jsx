import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";


/** Component for entire list of boxes on page.
 *
 * Props: none
 * State: boxes ( [{id, height, bgColor, width}, ... ])
 *
*/

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    /** add a new box */
    function addBox(box) {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    }

    /** delete an existing box */
    function deleteBox(id) {
        console.log(id)
        setBoxes(boxes => boxes.filter((box) => box.id !== id));
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />

                {
                    boxes.map(box =>
                        <div key={box.id}>
                            <Box
                                bgColor={box.bgColor}
                                width={box.width}
                                height={box.height}
                                id={box.id}
                                deleteBox={deleteBox}
                            />
                        </div>)
                }

        </div>
    );
}


export default BoxList;