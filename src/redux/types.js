export const  FETCH_PREMIERES = 'cinema_app/rootReducer/FETCH_PREMIERES'
const  ASYNC_FETCH_PREMIERES = 'cinema_app/rootReducer/ASYNC_FETCH_PREMIERES'

export const  FETCH_MOVIES_TODAY = 'cinema_app/rootReducer/FETCH_MOVIES_TODAY'
const  ASYNC_FETCH_MOVIES_TODAY = 'cinema_app/rootReducer/ASYNC_FETCH_MOVIES_TODAY'

export const  FETCH_MOVIES_TOMMOROW = 'cinema_app/rootReducer/FETCH_MOVIES_TOMMOROW'
const  ASYNC_FETCH_MOVIES_TOMMOROW = 'cinema_app/rootReducer/ASYNC_FETCH_MOVIES_TOMMOROW'


export const fetchPremieresAC = (payload) => ({type: FETCH_PREMIERES, payload})
export const asyncFetchPremieresAC = () => ({type: ASYNC_FETCH_PREMIERES})

export const fetchTodayMoviesAC = (payload) => ({type: FETCH_MOVIES_TODAY, payload})
export const asyncFetchTodayMoviesAC = () => ({type: ASYNC_FETCH_MOVIES_TODAY})

export const fetchTommorowMoviesAC = (payload) => ({type: FETCH_MOVIES_TOMMOROW, payload})
export const asyncFetchTommorowMoviesAC = () => ({type: ASYNC_FETCH_MOVIES_TOMMOROW})
