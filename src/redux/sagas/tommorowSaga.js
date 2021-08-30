import { put, call, takeEvery } from 'redux-saga/effects'

import { fetchTommorowMoviesAC, asyncFetchTommorowMoviesAC } from '../types';
import { AxiosAPI } from './../../api';

function* fetchTommorowWorker() {
    const data = yield call(AxiosAPI.setTommorowMovies)
    yield put(fetchTommorowMoviesAC(data))
}

export function* fetchTommorowWatcher() {
    yield takeEvery(asyncFetchTommorowMoviesAC().type, fetchTommorowWorker)
}
