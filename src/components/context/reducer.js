import { ADD_TODO, DELETE, EDIT_TODO } from "./action.type";

const TodoReducer = (state, action) => {
  if (action.type === ADD_TODO) {
    return { ...state, todo: [...state.todo, action.payload] };
  }

  if (action.type === DELETE) {
    return { todo: state.todo.filter((data) => data.id !== action.payload) };
  }
  if (action.type === EDIT_TODO) {
    return {
      ...state,
      todo: [...state.todo, action.payload],
      editMode: false,
      edit: {},
    };
  }
};

export default TodoReducer;
