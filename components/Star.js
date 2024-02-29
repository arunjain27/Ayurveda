import React from 'react';
import '../css/star.css'
const Star = ({ isSelected, onClickStar }) => {
    const fill = isSelected ? 'orange' : 'gray';
    return (
        <span onClick={onClickStar} style={{ cursor: 'pointer', color: fill }} className='star'>
            ★
        </span>
    );
};

export default Star;
