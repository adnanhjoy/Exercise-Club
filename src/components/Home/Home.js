import React, { useEffect, useState } from 'react';
import './Home.css';
import Exercise from '../Exercise/Exercise';
import Dashboard from '../Dashboard/Dashboard';

const Home = () => {
    const [exercises, setExercise] = useState([]);
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    },[])

    const addToButton = (exercise) => {
        setDetail([...detail, exercise])
    }
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
                    addToButton={addToButton}
                    ></Exercise>)
            }
            </div>
            </div>
            <div className='dashboadr-container'>
                <Dashboard detail={detail}></Dashboard>
            </div>
        </div>
    );
};

export default Home;