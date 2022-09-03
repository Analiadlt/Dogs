import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBreeds } from '../actions/index';

export default function Paginated() {
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
	const allBreeds = useSelector((state) => state.breeds);
	const filterBreeds = useSelector((state) => state.breeds);

	const prev = (e) => {
		e.preventDefault();
		if (pages <= 0) {
			setPages(0);
		} else {
			setPages(pages - 6);
		}
	};

	const next = (e) => {
		e.preventDefault();
		if (allBreeds.length < 6) {
			return;
		} else {
			setPages(pages + 6);
		}
	};

	return (
		<div>
			<button onClick={(e) => { prev(e) }} disabled={pages <= 0}>{"<--Prev"}</button>
			<button onClick={(e) => { next(e); }} disabled={filterBreeds.length < 6}>{"Next-->"}</button>
		</div>
	);
}
