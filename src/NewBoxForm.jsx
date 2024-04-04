import React, { useState } from "react";


function NewBoxForm({ addBox }) {
    const initialState = {
        bgColor: "",
        width: "",
        height: ""
    };

    const [formData, setFormData] = useState(initialState);

    function handleSubmit(evt) {
        evt.preventDefault();
        addBox(formData);
        setFormData(initialState);
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="bgColor">Background Color:</label>
            <input
                id="bgColor"
                name="bgColor"
                value={formData.bgColor}
                onChange={handleChange}
            />

            <label htmlFor="width">Width:</label>
            <input
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="heigh">Height:</label>
            <input
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />

            <button>Add a new Box!</button>
        </form>
    );
}

export default NewBoxForm;