const initialState = {
	allBreeds: [],
	breeds: [],
	detail: [],
	temperaments: []
}

function rootReducer (state=initialState, action) {
	switch(action.temperament) {
		case 'GET_TEMPERAMENTS':
			return {
				...state,
				temperaments: action.payload,
			}

		default:
			return state;	
	}

}

export default rootReducer;

