import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm.jsx";


/** Component for a single box on page.
 *
 * Props:  id, bgColor, width, height, deleteBox
 * State: none
 *
*/

function Box({ id, bgColor, width, height, deleteBox }) {

    const style = {
        backgroundColor: bgColor,
        width: `${width}px`,
        height: `${height}px`
    };

    /** handle remove of a box */
    function handleRemove(evt) {
        console.log('clicked')
        deleteBox(evt.target.id);
    }

    return (
        <div>
            <div className="Box" style={style} ></div>
            <button className="Box-button" onClick={handleRemove} id={id}>
                Delete Box!
            </button>
        </div>
    );
}

export default Box;