import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../actions/index';
import { useEffect } from 'react';
import styles from './BreedDetail.module.css';
import default_img from '../images/pexels-pixabay-257540.jpg';
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function BreedDetail(props) {
	let { id } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDetail(id))
	}, [dispatch, id]);

	const myBreed = useSelector((state) => state.detail);

	return (
		<div>
		<div className={styles.container}>
			{
				myBreed ?
					<div>
						<img src={myBreed.image_url ? myBreed.image_url : default_img} className={styles.imageback} alt='' />
						<div className={styles.detail}>
							<h2 className={styles.title}>{myBreed.name}</h2>
							{/* <img src={myBreed.image_url ? myBreed.image_url : default_img} alt='' width="200px" height="250px" /> */}
							<h4>
								<p>Weight-imperial: {myBreed.weight_imperial}</p>
								<p>Weight-metric: {myBreed.weight_metric}</p>
								<br />
								<p>Height-imperial: {myBreed.height_imperial}</p>
								<p>Height-metric: {myBreed.height_metric}</p>
								<br />
								<p>Life_span: {myBreed.life_span}</p>
								<br />

							</h4>
							{/* <h4>{(typeof id === 'number') ?
							temperaments?.reduce((e1, e2) => e1 + '-' + e2)
							: temperaments?.map(el => el.name + '- ')
						}</h4> */}
						</div>
					</div>
					: <p>Loading...</p>
			}
			
		</div>
		<NavLink to='/'>
		<button title='Come back'><AiOutlineCloseCircle /></button>
	</NavLink>
	</div>
	)
}
