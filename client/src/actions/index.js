import axios from 'axios';

export function getBreeds(page, order, filter, temp) {
    return async function (dispatch) {
        if (!page) page = 8;
        if (!order) order = 'ASC';
        if (!filter) filter = '';
        if (!temp) temp = '';
        var json = await axios.get("http://localhost:3001/breeds?page=" + page + "&order=" + order + "&filter=" + filter + "&temp=" + temp);
        return dispatch({
            type: 'GET_BREEDS',
            payload: json.data
        });
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/breed/" + id);
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function getNameBreeds(name) {
    return async function (dispatch) {
        try {
            var json = await axios("http://localhost:3001/breeds?name=" + name);
            return dispatch({
                type: 'GET_NAME_BREEDS',
                payload: json.data
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function getNameBreedsForm(nameBreed) {
    return async function (dispatch) {
        try {
            var json = await axios("http://localhost:3001/breeds?name=" + nameBreed);
            return dispatch({
                type: 'GET_NAME_BREEDS_FORM',
                payload: json.data
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function clearNameBreedsForm() {
    return function (dispatch) {
        return dispatch({ type: 'CLEAR_NAME_CHARACTERS_FORM' });
    }
}

export function postBreed(name, breedId) { //envío temperamentName y un array con los Ids de las breeds
    return async function (dispatch) {
        const response = await axios.post("http://localhost:3001/temperaments", {
            name,
            breedId
        });
        console.log(response);
        return response;
    }
}

export function getTemperaments() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/temperaments");
        return dispatch({
            type: 'GET_TEMPERAMENTS',
            payload: json.data
        })
    }
}

export function getAllBreeds() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/breed");
        return dispatch({
            type: 'GET_ALL_BREEDS',
            payload: json.data
        });
    }
}