import { put, call, takeEvery } from 'redux-saga/effects'

import { AxiosAPI } from './../../api';

const  FETCH_MOVIES_TODAY = 'cinema_app/rootReducer/FETCH_MOVIES_TODAY'
const  ASYNC_FETCH_MOVIES_TODAY = 'cinema_app/rootReducer/ASYNC_FETCH_MOVIES_TODAY'

export const fetchTodayMoviesAC = (payload) => ({type: FETCH_MOVIES_TODAY, payload})
export const asyncFetchTodayMoviesAC = () => ({type: ASYNC_FETCH_MOVIES_TODAY})

let initialState = {
    aug_23: []
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_TODAY:
            return {...state, aug_23: action.payload}
        default:
            return state
    }
}

function* fetchTodayWorker() {
    const data = yield call(AxiosAPI.setTodayMovies)
    yield put(fetchTodayMoviesAC(data))
}

export function* fetchTodayWatcher() {
    yield takeEvery(asyncFetchTodayMoviesAC().type, fetchTodayWorker)
}