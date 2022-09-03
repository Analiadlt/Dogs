import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../actions/index';
import { useEffect } from 'react';
import styles from './BreedDetail.module.css';
import default_img from '../images/pexels-pixabay-257540.jpg';

export default function BreedDetail(props) {
	let { id } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDetail(id))
	}, [dispatch, id]);

	const myBreed = useSelector((state) => state.detail);

	return (
		<div>
			{
				myBreed ?
					<div>
						<h2>{myBreed.name}</h2>
						<img src={myBreed.image_url ? myBreed.image_url : default_img} alt='' width="200px" height="250px" />
						<h4>
							<p>Weight-imperial: {myBreed.weight_imperial} - Weight-metric: {myBreed.weight_metric}</p>
							<br />
							<p>Height-imperial: {myBreed.height_imperial} - Height-metric: {myBreed.height_metric}</p>
							<br />
							<p>Life_span: {myBreed.life_span}</p>

						</h4>
						{/* <h4>{(typeof id === 'number') ?
							temperaments?.reduce((e1, e2) => e1 + '-' + e2)
							: temperaments?.map(el => el.name + '- ')
						}</h4> */}
					</div>
					: <p>Loading...</p>
			}
			<NavLink to='/home'>
				<button>Come back</button>
			</NavLink>
		</div>
	)
}
