import { put, call, takeEvery } from 'redux-saga/effects'

import { fetchPremieresAC, ASYNC_FETCH_PREMIERES } from './types';
import * as axios from 'axios'

const setPremieres = async () => {
    let data = []
    
    await axios.get('https://demo3586434.mockable.io/date/aug_23')
    .then((res) => {
        data = res.data.aug_23
    })

    return data
}

function* fetchPremieresWorker() {
    const data = yield call(setPremieres)
    yield put(fetchPremieresAC(data))
}

export function* fetchPremieresWatcher() {
    yield takeEvery(ASYNC_FETCH_PREMIERES, fetchPremieresWorker)
}

