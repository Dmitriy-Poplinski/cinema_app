import { put, call, takeEvery } from 'redux-saga/effects'

import { AxiosAPI } from './../../api';

const  FETCH_MOVIES_TOMMOROW = 'cinema_app/rootReducer/FETCH_MOVIES_TOMMOROW'
const  ASYNC_FETCH_MOVIES_TOMMOROW = 'cinema_app/rootReducer/ASYNC_FETCH_MOVIES_TOMMOROW'

export const fetchTommorowMoviesAC = (payload) => ({type: FETCH_MOVIES_TOMMOROW, payload})
export const asyncFetchTommorowMoviesAC = () => ({type: ASYNC_FETCH_MOVIES_TOMMOROW})

let initialState = {
    aug_24: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_TOMMOROW:
            return {...state, aug_24: action.payload}
        default:
            return state
    }
}

function* fetchTommorowWorker() {
    const data = yield call(AxiosAPI.setTommorowMovies)
    yield put(fetchTommorowMoviesAC(data))
}

export function* fetchTommorowWatcher() {
    yield takeEvery(asyncFetchTommorowMoviesAC().type, fetchTommorowWorker)
}
