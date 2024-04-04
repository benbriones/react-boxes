import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm.jsx";
import { v4 as uuid } from 'uuid';

function Box({ id, bgColor, width, height, deleteBox }) {

    const style = {
        backgroundColor: bgColor,
        width: `${width}px`,
        height: `${height}px`
    };

    return (
        <div id={id}>
            <div className="Box" style={style} ></div>
            <button className="Box-button" onClick={deleteBox}>
                Delete Box!
            </button>
        </div>
    );
}

export default Box;