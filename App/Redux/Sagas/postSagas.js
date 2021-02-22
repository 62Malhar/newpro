import { put, takeLatest, takeEvery } from "redux-saga/effects";
import { Api } from "./Api";
import { FETCH_SUCCEDED, FETCH_FAILED, FETCH_POST,CHANGE } from "../../Constants/ActionTypes";

function* fetchPosts(action) {
    try {
        const rack = yield Api.postApi(action.obj);
        if (rack === true) {
            yield put({ type: FETCH_POST});     
        }
    } catch (error) {   
    }     
}
export function* watchFetchPost() {
    yield takeLatest(CHANGE, fetchPosts);
}
export function* watchFetchGet(){
    yield takeLatest(FETCH_POST,fetchGet)
}


function* fetchGet(){
    try {
        const result = yield Api.getApi();
        yield put({ type: FETCH_SUCCEDED, recievedPosts: result });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error });
    }

}