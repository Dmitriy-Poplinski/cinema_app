import { put, call, takeEvery } from 'redux-saga/effects'
import * as axios from 'axios'

import { fetchPremieresAC, asyncFetchPremieresAC } from '../types';

const setPremieres = async () => {
    let data = []
    await axios.get('https://demo3586434.mockable.io/premieres')
    .then((res) => {
        data = res.data.premieres
    })
    return data
}

function* fetchPremieresWorker() {
    const data = yield call(setPremieres)
    yield put(fetchPremieresAC(data))
}

export function* fetchPremieresWatcher() {
    yield takeEvery(asyncFetchPremieresAC().type, fetchPremieresWorker)
}
