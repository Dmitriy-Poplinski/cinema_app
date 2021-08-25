import { FETCH_PREMIERES } from './types';
import { API } from './API';

export const fetchPremieres = (payload) => {
    return async dispatch => {
        const data = await API.premieres
        dispatch({type: FETCH_PREMIERES, payload: data})
    }
}