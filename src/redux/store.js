import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './rootReducer'
import {fetchPremieresWatcher} from './premieresSaga';

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(fetchPremieresWatcher)

export default store;
