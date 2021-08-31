import { combineReducers } from 'redux'
import { fork } from 'redux-saga/effects';

import premiereReducer, {fetchPremieresWatcher} from './premieres'
import todayReducer, {fetchTodayWatcher} from './today'
import tommorowReducer, {fetchTommorowWatcher} from './tommorow'

export const reducers = combineReducers({
    premiereReducer,
    todayReducer,
    tommorowReducer
})

export default function* rootSaga() {
    yield fork(fetchPremieresWatcher)
    yield fork(fetchTodayWatcher)
    yield fork(fetchTommorowWatcher)
}


