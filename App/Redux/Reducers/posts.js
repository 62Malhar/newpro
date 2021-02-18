import { FETCH_SUCCEDED, FETCH_FAILED ,FETCH_POST,CHANGE} from "../../Constants/ActionTypes"

const initialState = [];

export default function posts(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCEDED:
      return action.recievedPosts
    case FETCH_FAILED:
      return [];
    default:
      return state
  }
}