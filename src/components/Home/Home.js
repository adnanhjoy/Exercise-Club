import React, { useEffect, useState } from 'react';
import './Home.css';
import Exercise from '../Exercise/Exercise';

const Home = () => {
    const [exercises, setExercise] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    },[])
    return (
        <div className='home-container'>
            <div className='exercise-container'>
            <h1>BOOST EXERCISE CLUB</h1>
            <h3>Select Today's Exercise</h3>
            <div className='exercises'>
            {
                exercises.map(exercise => <Exercise 
                    exercise={exercise}
                    key={exercise.id}
                    ></Exercise>)
            }
            </div>
            </div>
            <div>
                <h1>User</h1>
            </div>
        </div>
    );
};

export default Home;