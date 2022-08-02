import React from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

// BoxList - Place your state that contains all of the boxes here. This component should render all of the 
// Box components along with the NewBoxForm component

const BoxList = () => {
    return (
        <div>
           <NewBoxForm />
           <Box />
        </div>
    )
}

export default BoxList;