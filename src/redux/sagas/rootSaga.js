import { fork } from "redux-saga/effects";

import { fetchPremieresWatcher } from "./premieresSaga";
import { fetchTodayWatcher } from "./todaySaga";
import { fetchTommorowWatcher } from "./tommorowSaga";

export default function* rootSaga() {
    yield fork(fetchPremieresWatcher)
    yield fork(fetchTodayWatcher)
    yield fork(fetchTommorowWatcher)
}