import { put, takeLatest, takeEvery } from "redux-saga/effects";
import { Api } from "./Api";
import { FETCH_SUCCEDED, FETCH_FAILED, FETCH_POST,CHANGE } from "../../Constants/ActionTypes";

function* fetchPosts(action) {
    try {
        const recievedPosts = yield Api.postApi(action.obj);
        yield put({ type: FETCH_SUCCEDED, recievedPosts: recievedPosts });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error });
    }
}

export function* watchFetchPost() {
    yield takeEvery(CHANGE, fetchPosts);
}