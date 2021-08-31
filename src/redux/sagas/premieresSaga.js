import { put, call, takeEvery } from 'redux-saga/effects'

import { fetchPremieresAC, asyncFetchPremieresAC } from '../types'
import { AxiosAPI } from './../../api'

function* fetchPremieresWorker() {
    const data = yield call(AxiosAPI.setPremieres)
    yield put(fetchPremieresAC(data))
}

export function* fetchPremieresWatcher() {
    yield takeEvery(asyncFetchPremieresAC().type, fetchPremieresWorker)
}
