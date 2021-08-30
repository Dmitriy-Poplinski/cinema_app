import { FETCH_MOVIES_TODAY, FETCH_MOVIES_TOMMOROW, FETCH_PREMIERES } from "./types"

const initialState = {
    premieres: [],
    aug_23: [],
    aug_24: [],
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PREMIERES:
            return {...state, premieres: action.payload}
        case FETCH_MOVIES_TODAY:
            return {...state, aug_23: action.payload}
        case FETCH_MOVIES_TOMMOROW:
            return {...state, aug_24: action.payload}
        default:
            return state
    }
}
