import React from 'react';
import './Details.css';

const Details = ({details}) => {
    console.log(details)
    let exerciseTime = 0;
    for(const detail of details){
        exerciseTime = exerciseTime + parseInt(detail.time);
    }
    return (
        <div>
            <h4>Exercise Details</h4>
            <div className='exercise-detail'>
                <div className='exercise-time'><p>Exercise Time</p><p className='set-time'>{exerciseTime}</p></div>
                <div className='exercise-time'><p>Break Time</p><p className='set-time'>{exerciseTime}</p></div>
            </div>
            <button className='add-to-list'>Activity Completed</button>
        </div>
    );
};

export default Details;