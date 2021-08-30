import { put, call, takeEvery } from 'redux-saga/effects'

import { AxiosAPI } from './../../api';

const  FETCH_PREMIERES = 'cinema_app/rootReducer/FETCH_PREMIERES'
const  ASYNC_FETCH_PREMIERES = 'cinema_app/rootReducer/ASYNC_FETCH_PREMIERES'

export const fetchPremieresAC = (payload) => ({type: FETCH_PREMIERES, payload})
export const asyncFetchPremieresAC = () => ({type: ASYNC_FETCH_PREMIERES})

let initialState = {
    premieres: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PREMIERES:
            return {...state, premieres: action.payload}
        default:
            return state}
}



function* fetchPremieresWorker() {
    const data = yield call(AxiosAPI.setPremieres)
    yield put(fetchPremieresAC(data))
}

export function* fetchPremieresWatcher() {
    yield takeEvery(asyncFetchPremieresAC().type, fetchPremieresWorker)
}

