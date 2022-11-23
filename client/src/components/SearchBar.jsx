import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameBreeds } from '../actions/index';
import styles from './SearchBar.module.css';

export default function SearchBar() {
	const dispatch = useDispatch();
	const [name, setName] = useState('');

	function handleInputChange(e) {
		e.preventDefault();
		setName(e.target.value);
	}

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(getNameBreeds(name));
		setName('');
	};

	return (
		<form className={styles.searchBar}>
			<input
				type='text'
				placeholder="Search for..."
				onChange={(e) => handleInputChange(e)}
			/>
			<button type='submit' onClick={(e) => handleClick(e)}>Search for</button>
		</form>
	);
}