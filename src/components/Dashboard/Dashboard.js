import React, { useState } from 'react';
import './Dashboard.css';
import Details from '../Details/Details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Dashboard = ({detail}) => {
    const [breakTime, setBreaktime] = useState(0)
    
    const breakTimeBtn = (num) => {
        setBreaktime(num)
    }
    return (
        <div>
            <div className='dashboard'>
                <div className="user">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <span>
                        <h4>Adnan Hossain</h4>
                        <span className='user-info'>
                            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                            <p>Dhaka, Bangladesh</p>
                        </span>
                    </span>
                </div>
                <div className='user-detail'>
                    <span>
                        <h2>75 <small className='kg'>kg</small></h2>
                        <p>Weight</p>
                    </span>
                    <span>
                        <h2>5.6</h2>
                        <p>Height</p>
                    </span>
                    <span>
                        <h2>23</h2>
                        <p>Age</p>
                    </span>
                </div>
                <div>
                    <h4>Add a Break</h4>
                    <div className='add-break'>
                        <p onClick={() => breakTimeBtn(25)}>25</p>
                        <p onClick={() => breakTimeBtn(20)}>20</p>
                        <p onClick={() => breakTimeBtn(40)}>40</p>
                        <p onClick={() => breakTimeBtn(15)}>15</p>
                        <p onClick={() => breakTimeBtn(30)}>30</p>
                    </div>
                </div>
                <Details details={detail} breakTime={breakTime}></Details>
            </div>
        </div>
    );
};

export default Dashboard;