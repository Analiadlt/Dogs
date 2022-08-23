import React, {useState, useEffect} from 'react';
import { useNavigate , NavLink }  from 'react-router-dom';
import {postBreed, getNameBreedsForm, clearNameBreedsForm } from '../actions/index';
import { useDispatch, useSelector} from 'react-redux';
import styles from './BreedCreate.module.css';

// function validate (input){
// 	let errors={};
// 	if (!input.name) {
// 		errors.name='Please, insert a Name.'
// 	}

// 	// if (!input.types.length) {
// 	// 	errors.types='You must select a Type.'
// 	// }
// 	// if (input.img) {
// 	// 	if(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(input.img)) {
// 	//       errors.img='Invalid url.';
// 	// }}

// 	return errors;
// }

export default function BreedCreate(){
	const dispatch = useDispatch();
	const navigate  = useNavigate();
	const breeds = useSelector((state)=> state.breedsForm);
	const [name, setName] = useState('');
	const [breedId, setBreedId] = useState([]);
	const [breedName, setBreedName] = useState('');
	const [breedObj, setBreedObj] = useState([]);
	
	useEffect(() => {
		setBreedObj([...breedObj, ...breeds]);
		setBreedId([...new Set(breedObj.map((b) => b.id))]);
	}, [dispatch, breeds]);

	useEffect(() => {
		setBreedId([...new Set(breedObj.map((b) => b.id))]);
	}, [dispatch, breedObj]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(postBreed(name, breedId));
		alert('Breed created.');
		dispatch(clearNameBreedsForm());
		navigate('/home');
	};
	// const handleName = (e) => {
	// 	e.preventDefault();
	// 	setName(e.target.value);
	// };

	// const handleBreedName = (e) => {
	// 	e.preventDefault();
	// 	setBreedName(e.target.value);
	// };
	// const handleGetBreedName = async (e) => {
	// 	e.preventDefault();
	// 	dispatch(getNameBreedsForm(breedName));
	// };
	// const handleDeleteBreed = async (e, id) => {
	// 	e.preventDefault();
	// 	setBreedObj(breedObj.filter((b) => b.id !== id));
	// 	setBreedId([...new Set(breedObj.map((b) =>b.id))]);
	// };

	// types.sort((a,b) => a.name < b.name ? -1 : +(a.name > b.name));
	return (
		<div >
			<NavLink to='/home'><button className={styles.button}>Come back</button></NavLink>
			<h1 className={styles.h1}>New Breed Creation</h1>
			<form className={styles.newPokemon} onSubmit={(e)=>handleSubmit(e)}>
				<div className={styles.inputDiv}>	
					<label>Temperaments:</label>
					{/* <select className={styles.inputDiv} onChange={(e)=> handleName(e)}>
						{ temperaments.map((temp) => (
							<option value={temp.name}>{temp.name}</option>
							))}
					</select> */}
					{/* {errors.temperaments && <p className ={styles.errors}>{errors.temperaments}</p>} */}
				</div>
				<div className={styles.inputDiv}>
					<label>Name:</label>
					{/* <input type='text' value= {name} name='name' onChange={(e)=> handleName(e)} /> */}
					{/* {errors.name && <p className ={styles.errors}>{errors.name}</p>} */}
				</div>
				{/* <div className={styles.inputDiv}>
					<label>Height:</label>
					<input type='number' value= {input.height} name='height' onChange={(e)=> handleChange(e)}/>

					<label>Weight:</label>
					<input type='number' value= {input.weight} name='weight' onChange={(e)=> handleChange(e)} />
				</div>
				
				<div className={styles.inputDiv}>
					<label>Life:</label>
					<input type='number' value= {input.life} name='life' onChange={(e)=> handleChange(e)}/>
					<label>Attack:</label>
					<input type='number' value= {input.attack} name='attack' onChange={(e)=> handleChange(e)}/>
				</div>
				<div className={styles.inputDiv}>
					<label>Defense:</label>
					<input type='number' value= {input.defense} name='defense' onChange={(e)=> handleChange(e)}/>
					<label>Speed:</label>
					<input type='number' value= {input.speed} name='speed' onChange={(e)=> handleChange(e)}/>					
				</div>
				<div className={styles.inputDiv}>
					<label>Image:</label>
					<input type='text' value= {input.img} name='img' placeholder='Enter image url' onChange={(e)=> handleChange(e)}/>
				</div>
			 */}
			{/* <button className={styles.button} type='submit' disabled={Object.keys(errors).length? true : false}>
				Create Pokemon
			</button> */}
		</form>
		{/* {input.types.map(el=>
			<>
			<p>{el}</p><button onClick={()=>handleDelete(el)}>x</button>
			</>)
		} */}		
	</div>
	);
}