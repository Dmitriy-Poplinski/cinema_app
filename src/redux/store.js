import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './rootReducer'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)

export default store
