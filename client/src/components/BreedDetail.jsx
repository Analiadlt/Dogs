import React from 'react';
import {NavLink , useParams }  from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {getDetail} from '../actions/index';
import {useEffect} from 'react';
import styles from './BreedDetail.module.css';

export default function BreedDetail(props) {
	let {id} = useParams();
    const default_img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png';

	const dispatch=useDispatch()
	useEffect(() => {
		dispatch(getDetail(id))
	}, [dispatch]);

	const myBreed = useSelector ((state)=> state.detail);
	
	return (
		<div className={styles.myPokemon}>
		{
			myBreed ?
			<div>
				<h2>{myBreed.name}</h2>
				<img src={myBreed.image_url? myBreed.image_url : default_img} alt='' width="200px" height="250px"/>
				{/* <p>Height: {myBreed.height} - Weight: {myBreed.weight}</p>	
				<h2>Stats</h2>
			<h4>
				<p>Life: {myPokemon.life} </p>
				<p>Attack: {myPokemon.attack} </p>
				<p>Defense: {myPokemon.defense} </p> 
				<p>Speed: {myPokemon.speed}</p>
			</h4> */}
{/* 
			<h4>Temperaments: {(id.length<5)? 
							myPokemon.types?.reduce((e1,e2) => e1 + '-' + e2)
							: myPokemon.types?.map(el=>el.name + ('-'))
						}</h4> */}
			</div> 
			: <p>Loading...</p>	
		}
			<NavLink to= '/home'>
				<button className={styles.button}>Come back</button>
			</NavLink>
		</div>
		)
}
