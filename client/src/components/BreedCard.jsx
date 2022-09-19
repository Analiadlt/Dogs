import React from 'react';
import styles from './BreedCard.module.css';

export default function BreedCard({ id, name, image, temperaments }) {
	return (
		<div className={styles.container}>
			<div className="">
				<h2 className={styles.title}>{name}</h2>
				<div className={styles.row}>
					<img src={image} alt='' className={styles.image} />
					<div className={styles.temperaments}>
						<ul className={styles.ul}><h6>{(temperaments.length) ?
							temperaments?.map(el => <li className={styles.li} key={el.id}>{el.name}</li>) :
							<li>Unknow temperaments</li>
						}</h6></ul>
					</div>
				</div>
			</div>
		</div>
	);
}