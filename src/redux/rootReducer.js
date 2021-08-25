import { defaultState } from './defaultState'
import { FETCH_PREMIERES, GET_TODAY_MOVIES, GET_TOMMOROW_MOVIES } from './types'

export const rootReducer = (state =defaultState, action) => {
    switch (action.type) {
        case FETCH_PREMIERES:
            return {...state, premieres: action.payload}
        // case GET_TODAY_MOVIES:
        //     return {...state, todayMovies}
        // case GET_TOMMOROW_MOVIES:
        //     return {...state, tommorowMovies}
        default:
            return state
    }
}