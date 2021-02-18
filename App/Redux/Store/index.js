import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../Reducers'
import rootSagas from '../Sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware()

// export const store = createStore(reducer)
export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSagas)