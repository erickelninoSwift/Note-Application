import { ADD_TODO, DELETE } from "./action.type";

const TodoReducer = (state, action) => {
  if (action.type === ADD_TODO) {
    return { todo: [...state.todo, action.payload] };
  }

  if (action.type === DELETE) {
    return { todo: state.todo.filter((data) => data.id !== action.payload) };
  }
};

export default TodoReducer;
