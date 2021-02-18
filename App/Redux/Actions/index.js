import { DELETE_TODO, ADD_TODO, FETCH_POST, FETCH_SUCCEDED, FETCH_FAILED,CHANGE } from "../../Constants/ActionTypes"

export const addTodo = text => ({ type: ADD_TODO, text })
export const deleteTodo = id => ({ type: DELETE_TODO, id })

export const fetchPostAction = () => ({ type: FETCH_POST })
export const fetchSucessAction = (recievedPosts) => ({ type: FETCH_SUCCEDED, recievedPosts })
export const fetchFailedAction = (error) => ({ type: FETCH_FAILED, error })
export const change=(obj)=>({type:CHANGE,obj})

