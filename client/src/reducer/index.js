const initialState = {
    breeds: [],
    breedsForm: [],
    detail: [],
    temperaments: [],
    allBreeds: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_BREEDS':
            return {
                ...state,
                breeds: action.payload,
            }
        case 'GET_NAME_BREEDS':
            return {
                ...state,
                breeds: action.payload
            }
        case 'GET_NAME_BREEDS_FORM':
            return {
                ...state,
                breedsForm: action.payload
            }
        case 'CLEAR_NAME_BREEDS_FORM':
            return {
                ...state,
                breedsForm: []
            }
        case 'GET_DETAILS':
            return {
                ...state,
                detail: action.payload
            }
        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temperaments: action.payload,
            }
        case 'GET_ALL_BREEDS':
            return {
                ...state,
                allBreeds: action.payload,
            }
        default:
            return state;
    }

}

export default rootReducer;

