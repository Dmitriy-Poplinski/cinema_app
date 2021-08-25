import {createStore , applyMiddleware, compose} from 'redux'
import { rootReducer } from './rootReducer'
import createSagaMiddleware from 'redux-saga'

const SagaMiddleware = createSagaMiddleware()

let store = createStore(
    rootReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(SagaMiddleware)
    )
)

export default store;