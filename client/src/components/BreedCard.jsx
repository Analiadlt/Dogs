import React from 'react';
import styles from './BreedCard.module.css';

export default function BreedCard({name, image, temperaments, id}) {
	return (
		<div className = {styles.pokemoncard}>
			<span className={styles.pokName}>{name}</span>
			<img src={image} alt= '' width="100px" height="125px" />
			<div className={styles.pokTypes}>
				<label>Temperaments</label>
				{/* <h4>{ (typeof id === 'number')? 
							temperaments?.reduce((e1,e2) => e1 + '-' + e2)
							: temperaments?.map(el=>el.name + '- ')
						}</h4> */}
			</div>	
		</div>
	);
}



