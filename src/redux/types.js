export const  FETCH_PREMIERES = 'PREMIERES/FETCH_PREMIERES'
export const  ASYNC_FETCH_PREMIERES = 'PREMIERES/ASYNC_FETCH_PREMIERES'

export const  FETCH_MOVIES_TODAY = 'TODAY/FETCH_MOVIES_TODAY'
export const  FETCH_MOVIES_TOMMOROW = 'TOMMOROW/FETCH_MOVIES_TOMMOROW'


export const fetchPremieresAC = (payload) => {
    console.log('Action ', payload)
    return {type: FETCH_PREMIERES, payload }
}
export const asyncFetchPremieresAC = () => ({type: ASYNC_FETCH_PREMIERES})
export const fetchMoviesTodayAC = () => ({type: FETCH_MOVIES_TODAY})
export const fetchMoviesTommorowAC = () => ({type: FETCH_MOVIES_TOMMOROW})
