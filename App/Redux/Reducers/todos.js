import { DELETE_TODO, ADD_TODO, UPDATE_TODO,EDIT_ADD_TODO } from "../../Constants/ActionTypes"

const initState = {
  todos: [],
  text: "",
  selected: undefined
};
export default function todos(state = initState, action) {
  switch (action.type) {
    
    case ADD_TODO:
      const todos2 = state.todos.concat(action.payload);
      return { ...state, todos: todos2, text: "" };
    case DELETE_TODO:
      const todo3 = state.todos.filter((todo, i) => i !== action.payload);
      return {
        ...state,
        todos: todo3
      };
    case UPDATE_TODO:
      return {
        ...state,
        text: state.todos[action.payload],
        selected: action.payload
      };
    case EDIT_ADD_TODO:
      const todo4 = state.todos.map((todo, i) =>
        i !== action.payload.selected ? todo : action.payload.value
      );
      return {
        ...state,
        todos: todo4,
        selected: undefined,
        text: ""
      };
    default:
      return state
  }
}