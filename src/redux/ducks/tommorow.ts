import { put, call, takeEvery } from 'redux-saga/effects'

import { AxiosAPI } from '../../api';
import { Action } from '../../react-app-env';

const  FETCH_MOVIES_TOMMOROW = 'cinema_app/rootReducer/FETCH_MOVIES_TOMMOROW'
const  ASYNC_FETCH_MOVIES_TOMMOROW = 'cinema_app/rootReducer/ASYNC_FETCH_MOVIES_TOMMOROW'

export const fetchTommorowMoviesWidget = (payload: object) => ({type: FETCH_MOVIES_TOMMOROW, payload})
export const asyncFetchTommorowMoviesWidget = () => ({type: ASYNC_FETCH_MOVIES_TOMMOROW})

let initialState = {
    aug_24: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case FETCH_MOVIES_TOMMOROW:
            return {...state, aug_24: action.payload}
        default:
            return state
    }
}

function* fetchTommorowWorker() {
    const data: { call(): void } = yield call(AxiosAPI.setTommorowMovies)
    yield put(fetchTommorowMoviesWidget(data))
}

export function* fetchTommorowWatcher() {
    yield takeEvery(asyncFetchTommorowMoviesWidget().type, fetchTommorowWorker)
}
