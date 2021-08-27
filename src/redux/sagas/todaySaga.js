import { put, call, takeEvery } from 'redux-saga/effects'
import * as axios from 'axios'

import { fetchTodayMoviesAC, asyncFetchTodayMoviesAC } from '../types';

const setTodayMovies = async () => {
    let data = []
    await axios.get('https://demo3586434.mockable.io/date/aug_23')
    .then((res) => {
        data = res.data.aug_23
    })
    return data
}

function* fetchTodayWorker() {
    const data = yield call(setTodayMovies)
    yield put(fetchTodayMoviesAC(data))
}

export function* fetchTodayWatcher() {
    yield takeEvery(asyncFetchTodayMoviesAC().type, fetchTodayWorker)
}
