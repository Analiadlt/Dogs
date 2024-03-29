import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBreeds } from '../actions/index';
import styles from './NavBar.module.css';
import SearchBar from './SearchBar';
import landing from '../images/landing_breeds_dogs.jpg';
import FilterBar from './FilterBar';
import OrderBar from './OrderBar';

export default function NavBar() {
	const dispatch = useDispatch();

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(getBreeds());
	};

	return (
		<>
			<img src={landing} className={styles.imageback} alt=''/>
			<div className={styles.navbar}>

				<div className={styles.title}>
					<h1>Breeds of Dogs</h1>
				</div>

				<button className={styles.boton} onClick={(e) => { handleClick(e) }}>Reload All Breeds</button>

				<button className={styles.boton}><Link to="/breed" className={styles.link1}>Load a New Breed</Link></button>

				<SearchBar />

			</div>
			<hr></hr>
			<div className={styles.container}>
				<FilterBar />
				<OrderBar />
			</div>
			<hr></hr>
		</>
	);
}
