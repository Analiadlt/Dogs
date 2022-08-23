import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import landing from '../images/landing_breeds_dogs.jpg';
import { useEffect } from 'react';
import { getTemperaments } from '../actions';
import { useDispatch } from 'react-redux';



export default function LandingPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch])


    return (
        <div className={styles.gral}>
            <div>
                <h1 className={styles.h1}>Welcome</h1>
            </div>
            <img src={landing} alt="Breed" className={styles.img} />
            {/* <div>
                <Link to='/home'>
                    <button className={styles.enter}>Enter</button>
                </Link>
            </div> */}
            <button class="learn-more">
                <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                </span>
                <span class="button-text">Learn More</span>
            </button>
        </div>
    );
}