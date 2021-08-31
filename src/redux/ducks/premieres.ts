import { put, call, takeEvery } from 'redux-saga/effects'

import { AxiosAPI } from '../../api';
import { Action } from '../../react-app-env';

const  FETCH_PREMIERES = 'cinema_app/rootReducer/FETCH_PREMIERES'
const  ASYNC_FETCH_PREMIERES = 'cinema_app/rootReducer/ASYNC_FETCH_PREMIERES'

export const fetchPremieresWidget = (payload: object) => ({type: FETCH_PREMIERES, payload})
export const asyncFetchPremieresWidget = () => ({type: ASYNC_FETCH_PREMIERES})

let initialState = {
    premieres: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case FETCH_PREMIERES:
            return {...state, premieres: action.payload}
        default:
            return state}
}

function* fetchPremieresWorker() {
    const data: { call(): void } = yield call(AxiosAPI.setPremieres)
    yield put(fetchPremieresWidget(data))
}

export function* fetchPremieresWatcher() {
    yield takeEvery(asyncFetchPremieresWidget().type, fetchPremieresWorker)
}
