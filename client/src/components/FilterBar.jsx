import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBreeds } from '../actions/index';
import styles from './FilterBar.module.css';

export default function FilterBar() {
	const dispatch = useDispatch();
	//defino los estados locales de react
	const [pages, setPages] = useState(0);
	const [order, setOrder] = useState('ASC');
	const [filter, setFilter] = useState('');
	const [temp, setTemp] = useState('');

	useEffect(() => {
		dispatch(getBreeds(pages, order, filter, temp));
	}, [dispatch, pages, order, filter, temp]);

	//trae la parte del estado que necesita
	const temperaments = useSelector((state) => state.temperaments);
	const allBreedsFilter = useSelector((state) => state.allBreeds);


	//filtrando Breeds
	const changeBreedFilter = (e) => {
		e.preventDefault();
		setFilter(e.target.value);
	};

	//filtrando Temperaments
	const changeTempFilter = (e) => {
		e.preventDefault();
		setTemp(e.target.value);
	};

	return (
		<div>
			<div>
			<h5>Filters</h5>
				<select className={styles.filter} onChange={(e) => changeBreedFilter(e)}>
					<option value="">All Breeds</option>
					{allBreedsFilter.map((breedName) => (
						<option value={breedName} key={breedName}>{breedName}</option>
					))}
				</select>
				{/* <h5>Temperament Filter</h5> */}
				<select className={styles.filter} onChange={(e) => changeTempFilter(e)}>
					<option value="All">All Temperaments</option>
					{temperaments.map((temp) => (
						<option value={temp.name} key={temp.id}>{temp.name}</option>
					))}
				</select>
			</div>
		</div>
	);
}
