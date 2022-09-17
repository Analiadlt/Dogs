import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import landing from '../images/landing_breeds_dogs.jpg';
// import { useEffect } from 'react';
// import { getTemperaments } from '../actions';
// import { useDispatch } from 'react-redux';
// import { getAllBreeds } from '../actions/index';



export default function LandingPage() {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getTemperaments());
	//     dispatch(getAllBreeds());
    // }, [dispatch])


    return (
        <div className={styles.gral}>
            <div>
                <h1>Welcome</h1>
            </div>
            <img src={landing} alt="Breed" className={styles.img} />
            <div>
                <Link to='/home'>
                    <button className={styles.enter}>Enter</button>
                </Link>
            </div>
        </div>
    );
}