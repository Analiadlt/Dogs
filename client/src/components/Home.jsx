import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBreeds } from '../actions/index';
import BreedCard from './BreedCard';
import MenuBar from './MenuBar';
import Paginated from './Paginated';

export default function Home() {
	const dispatch = useDispatch();
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

			<MenuBar />

			<div>
				{filterBreeds?.map((b) => {
					return (
						<div key={b.id}>
							<Link to={`/home/${b.id}`}>
								<BreedCard key={b.id} name={b.name} image={b.image_url} temperaments={b.temperaments} />
							</Link>
						</div>
					)
				})}
			</div>

			<Paginated />

		</div>
	);
}
