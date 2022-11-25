import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameBreeds } from '../actions/index';
import styles from './SearchBar.module.css';
import { FcSearch } from "react-icons/fc";

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
			<button type='submit' title='Search for' onClick={(e) => handleClick(e)}><FcSearch/></button>
		</form>
	);
}