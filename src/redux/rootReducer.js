import { defaultState } from './defaultState'
import { GET_PREMIERES, GET_TODAY_MOVIES, GET_TOMMOROW_MOVIES } from './actions'

export const rootReducer = (state =defaultState, action) => {
    // switch (action.type) {
    //     case GET_PREMIERES:
    //         return {...state, user: action.user}
    //     case GET_TODAY_MOVIES:
    //         return {...state, payload: action.payload}
    //     case GET_TOMMOROW_MOVIES:
    //         return {...state, payload: action.payload}
    //     default:
    //         return state
    // }
    return state
}