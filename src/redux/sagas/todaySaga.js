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
    console.log('Worker today 1')
    const data = yield call(setTodayMovies)
    yield put(fetchTodayMoviesAC(data))
    console.log('Worker today 2')
}

export function* fetchTodayWatcher() {
    yield takeEvery(asyncFetchTodayMoviesAC().type, fetchTodayWorker)
}