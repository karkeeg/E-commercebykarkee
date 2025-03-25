import React from 'react';
import { FaStarHalfAlt, FaRegStar, FaStar } from "react-icons/fa";

const Rating = (props) => {
    let rating = props.rating; 
    let arr = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            arr.push(<FaStar key={i} color="#facc15" size={20} />); 
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            arr.push(<FaStarHalfAlt key={i} color="#facc15" size={20} />); 
        } else {
            arr.push(<FaRegStar key={i} color="#9ca3af" size={20} />); 
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
               Rating:  {arr} 
            </div>
            <span style={{ marginLeft: '8px', fontSize: '14px', color: '#4B5563' }}>
                {rating.toFixed(1)}
            </span>
        </div>
    );
};

export default Rating;
