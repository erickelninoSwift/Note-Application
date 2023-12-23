import { ADD_TODO, DELETE } from "./action.type";

const TodoReducer = (state, action) => {
  if (action.type === ADD_TODO) {
    return { todo: [...state.todo, action.payload] };
  }
};

export default TodoReducer;
