import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga, { reducers } from './ducks'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)

export default store;
