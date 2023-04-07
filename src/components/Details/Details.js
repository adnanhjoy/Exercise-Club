import React from 'react';
import './Details.css';

const Details = () => {
    return (
        <div>
            <h4>Exercise Details</h4>
            <div className='exercise-detail'>
                <div className='exercise-time'><p>Exercise Time</p></div>
                <div className='exercise-time'><p>Break Time</p></div>
            </div>
            <button className='add-to-list'>Activity Completed</button>
        </div>
    );
};

export default Details;