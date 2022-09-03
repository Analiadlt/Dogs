import React from 'react';
// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBreeds } from '../actions/index';
// import BreedCard from './BreedCard';
// import MenuBar from './MenuBar';

export default function OrderBar() {
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
	// const allBreeds = useSelector((state) => state.breeds);
	// const filterBreeds = useSelector((state) => state.breeds);

	//ordenamiento
	function changeOrder(e) {
		e.preventDefault();
		setOrder(e.target.value);
	};

	return (
		<div>
			<div>
				<h5>Alphabetic Order</h5>
				<select onChange={(e) => changeOrder(e)}>
					<option value='ASC'>Ascendent</option>
					<option value='DESC'>Descendent</option>
				</select>
			</div>
		</div>
	);
}
