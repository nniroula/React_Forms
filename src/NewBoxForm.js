import React, { useState } from 'react';

const NewBoxForm = () => {
    const INITIAL_FORM_DATA = {
        width: '',
        height: '',
        backgroundColor: ''
    }
    // create state to hold inital data
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    // onChange in input fields
    const onInputFieldChange = (evt) => {
        setFormData(eachItem => ({...eachItem, [evt.target.name]:[evt.target.value]}));
    }

    // create a func to clear the form when submitted
    const onSubmit = (e) => {
        // copy the exising state, and add new values to the copy
        setFormData(INITIAL_FORM_DATA);
    }
    return (
       <form>
        <label htmlFor="num">Width</label>
        <input 
            id="num" 
            type="number" 
            name="width"
            value={formData.value}
            onChange={onInputFieldChange}
        />

        <label htmlFor="height">Height</label>
        <input 
            id="height" 
            type="number" 
            name="height"
            value={formData.height}
            onChange={onInputFieldChange}
        />

        <label htmlFor="bgc">Background Color</label>
        <input 
            id="bgc" 
            type="" 
            name="backgroundColor"
            value={formData.value}
            onChange={onInputFieldChange}
        />

        <button onClick={onSubmit}>Submit</button>
       </form>

    //    render box component here
    )
}

export default NewBoxForm;