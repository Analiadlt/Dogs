import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBreeds } from '../actions/index';
import BreedCard from './BreedCard';
import NavBar from './NavBar';
import Paginated from './Paginated';
import styles from './Home.module.css';
import { getTemperaments } from '../actions';
import { getAllBreeds } from '../actions/index';

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
        dispatch(getTemperaments());
	    dispatch(getAllBreeds());
    }, [dispatch])

	//defino los estados locales de react
	const [pages] = useState(0);
	const [order] = useState('ASC');
	const [filter] = useState('');
	const [temp] = useState('');

	useEffect(() => {
		dispatch(getBreeds(pages, order, filter, temp));
	}, [dispatch, pages, order, filter, temp]);

	//trae la parte del estado que necesita
	const filterBreeds = useSelector((state) => state.breeds);

	return (
		<div>
			
			<NavBar />

			<div className={styles.cards}>
				{filterBreeds?.map((b) => {
					return (
						<div key={b.id}>
							<Link to={`/${b.id}`}>
								<BreedCard id={b.id} name={b.name} image={b.image_url} temperaments={b.temperaments} />
							</Link>
						</div>
					)
				})}
			</div>

			<Paginated />

		</div>
	);
}
