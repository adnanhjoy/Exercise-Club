import React from 'react';
import './Details.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = ({details}) => {
    let exerciseTime = 0;
    for(const detail of details){
        exerciseTime = exerciseTime + parseInt(detail.time);
    }
    const addedToastify = () => {
        toast('Congratulations ! Activity Completed')
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <h4>Exercise Details</h4>
            <div className='exercise-detail'>
                <div className='exercise-time'><p>Exercise Time</p><p className='set-time'>{exerciseTime}</p></div>
                <div className='exercise-time'><p>Break Time</p><p className='set-time'>{exerciseTime}</p></div>
            </div>
            <button onClick={addedToastify} className='add-to-list'>Activity Completed</button>
        </div>
    );
};

export default Details;