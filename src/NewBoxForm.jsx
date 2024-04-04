import React, { useState } from "react";

/** Form to add a new Box
 *
 * Props: addBox (callback function)
 * State: formData
 *
 *
 */
function NewBoxForm({ addBox }) {
    const initialState = {
        bgColor: "",
        width: "",
        height: ""
    };

    const [formData, setFormData] = useState(initialState);

    /** Handle submit of form to add box */
    function handleSubmit(evt) {
        evt.preventDefault();
        addBox(formData);
        setFormData(initialState);
    }

    /** Handle changes to form  */
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