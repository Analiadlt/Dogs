import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBreeds } from '../actions/index';
import styles from './OrderBar.module.css';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export default function OrderBar() {
	const dispatch = useDispatch();
	//defino los estados locales de react
	const [pages] = useState(0);
	const [order, setOrder] = useState('ASC');
	const [filter] = useState('');
	const [temp] = useState('');

	useEffect(() => {
		dispatch(getBreeds(pages, order, filter, temp));
	}, [dispatch, pages, order, filter, temp]);

	return (
		<div>
			<h5>Alphabetic Order</h5>
			<button type='button' className={styles.orderbutton} title='Ascendent by name' onClick={() => setOrder('ASC')}><AiFillCaretUp /></button>
			<button type='button' className={styles.orderbutton} title='Descendent by name' onClick={() => setOrder('DESC')}><AiFillCaretDown /></button>
		</div>
	);
}
