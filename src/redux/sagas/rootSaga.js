import { fork } from "redux-saga/effects";

import { fetchPremieresWatcher } from "./premieresSaga";
import { fetchTodayWatcher } from "./todaySaga";

export default function* rootSaga() {
    yield fork(fetchPremieresWatcher)
    yield fork(fetchTodayWatcher)
}