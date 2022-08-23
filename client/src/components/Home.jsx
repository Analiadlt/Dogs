import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBreeds } from '../actions/index';
import BreedCard from './BreedCard';
import SearchBar from './SearchBar';

export default function Home() {
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
	const allBreeds = useSelector ((state) => state.breeds);
	const filterBreeds = useSelector ((state) => state.breeds);
	const temperaments = useSelector ((state) => state.temperaments);
	
	const handleClick = (e)=> {
		e.preventDefault();
		dispatch(getBreeds(pages, order, filter, temp));
	};

	//paginado
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
			setPages (pages + 6);
		}
	};

	//ordenamiento
	function changeOrder (e) {
		e.preventDefault();
		setOrder (e.target.value);
	};

	//filtrado
	const changeFilter = (e) => {
		e.preventDefault();
		setFilter(e.target.value);
	};

	return (
		<div>
			<NavLink to="/breed">New Breed</NavLink>
			<h1>Breeds of Dogs</h1>
			<button onClick={(e)=> {handleClick(e)}}>ReLoad Breeds</button>
			<SearchBar/>
			<div>
				<h5>Breed Filter</h5>
				<select onChange={(e) => changeFilter(e)}>
					<option value="All">All Breeds</option>
					{ allBreeds.map((breed) => (
							<option value={breed.name}>{breed.name}</option>
							))}
				</select>
				<h5>Temperament Filter</h5>
				<select onChange={(e) => changeFilter(e)}>
					<option value="All">All Temperaments</option>
					{ temperaments.map((temp) => (
						<option value={temp.name}>{temp.name}</option>
					))}
				</select>
			</div>
			<div>
				<h5>Alphabetic Order</h5>
				<select onChange={(e) => changeOrder(e)}>
					<option value='ASC'>Ascendent</option>
					<option value='DESC'>Descendent</option>
				</select>
			</div>
			{allBreeds?.map((b) => {
				return (
					<fragment>
						<NavLink to = {"/home/"+ b.id}>
							<BreedCard name={b.name} image={b.image_url} key={b.id} />
						</NavLink>
					</fragment>
				)
			})}
			<button onClick={(e)=> {prev(e)}} disabled={pages <= 0}>{"<--Prev"}</button>
			<button onClick={(e) => { next(e);}}  disabled={allBreeds.length < 6}>{"Next-->"}</button>
		</div>
	);
 }
