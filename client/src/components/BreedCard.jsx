import React from 'react';
import styles from './BreedCard.module.css';

export default function BreedCard({ id, name, image, temperaments }) {
	return (
		<div className="container">
			<div className="row">
				<div className="card col-sm-12 col-md-4 col-lg-4 col-xl-4">
					<h2>{name}</h2>
					<img src={image} alt='' width="100px" height="125px" />
					<div>
						<label>Temperaments</label>
						<h6>{(typeof id === 'number') ?
							temperaments?.reduce((e1, e2) => e1 + '-' + e2)
							: temperaments?.map(el => el.name + '- ')
						}</h6>
					</div>
				</div>
			</div>
		</div>
	);
}