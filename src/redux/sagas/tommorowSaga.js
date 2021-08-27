import { put, call, takeEvery } from 'redux-saga/effects'
import * as axios from 'axios'

import { fetchTommorowMoviesAC, asyncFetchTommorowMoviesAC } from '../types';


const setTodayMovies = async () => {
    let data = []

    await axios.get('https://demo3586434.mockable.io/date/aug_24')
    .then((res) => {
        data = res.data.aug_24
    })

    return data
}

function* fetchTommorowWorker() {
    const data = yield call(setTodayMovies)
    yield put(fetchTommorowMoviesAC(data))
}

export function* fetchTommorowWatcher() {
    yield takeEvery(asyncFetchTommorowMoviesAC().type, fetchTommorowWorker)
}