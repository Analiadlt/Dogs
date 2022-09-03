import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBreeds } from '../actions/index';
import styles from './MenuBar.module.css';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import OrderBar from './OrderBar';

export default function MenuBar() {
	const dispatch = useDispatch();

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(getBreeds());
	};

	return (
		<div className={styles.navbar}>
			<h1>Breeds of Dogs</h1>
						
			<SearchBar />

			<p><Link to="/breed">New Breed</Link></p>

			<button onClick={(e) => { handleClick(e) }}>ReLoad Breeds</button>

			<FilterBar />

			<OrderBar />
		</div>
	);
}
