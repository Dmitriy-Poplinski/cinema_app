import { put, call, takeEvery } from 'redux-saga/effects'

import { fetchTodayMoviesAC, asyncFetchTodayMoviesAC } from '../types'
import { AxiosAPI } from './../../api'

function* fetchTodayWorker() {
    const data = yield call(AxiosAPI.setTodayMovies)
    yield put(fetchTodayMoviesAC(data))
}

export function* fetchTodayWatcher() {
    yield takeEvery(asyncFetchTodayMoviesAC().type, fetchTodayWorker)
}
