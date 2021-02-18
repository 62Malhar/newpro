import { call } from 'redux-saga/effects'
import { watchFetchPost } from './postSagas'

export default function* rootSagas() {
    yield call(watchFetchPost);
}