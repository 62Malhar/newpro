import {call,fork} from 'redux-saga/effects'
import { watchFetchGet, watchFetchPost } from './postSagas'

export default function* rootSagas() {
    yield call(watchFetchPost)
}