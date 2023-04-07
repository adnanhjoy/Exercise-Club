import React from 'react';
import './Dashboard.css';
import Details from '../Details/Details';

const Dashboard = ({detail}) => {
    return (
        <div>
            <div className='dashboard'>
                <div className="user">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <span className='user-info'>
                        <h4>Adnan Hossain</h4>
                        <p>Dhaka, Bangladesh</p>
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
                        <p>10</p>
                        <p>10</p>
                        <p>10</p>
                        <p>10</p>
                    </div>
                </div>
                <Details details={detail}></Details>
            </div>
        </div>
    );
};

export default Dashboard;