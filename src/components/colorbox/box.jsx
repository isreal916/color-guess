import React from 'react';
import './box.css';
const Box = ({color,handleClicks}) => {
    return (
        <div className='box' style={{backgroundColor:color}} onClick={()=>handleClicks(color)} data-testid="colorOption"></div>
    );
};

export default Box;