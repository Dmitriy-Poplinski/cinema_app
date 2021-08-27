import { FETCH_MOVIES_TODAY, FETCH_MOVIES_TOMMOROW, FETCH_PREMIERES } from "./types"

const defaultState = {
    premieres: [],
    aug_23: [],
    aug_24: [],
}

export const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_PREMIERES:
            return {...state, premieres: 
                state.premieres.concat(action.payload)
            }
        case FETCH_MOVIES_TODAY:
            return state
        case FETCH_MOVIES_TOMMOROW:
            return state
        default:
            return state
    }
}
