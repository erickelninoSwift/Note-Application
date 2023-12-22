import { ADD_TODO, DELETE, EDIT_TODO } from "./action.type";

const TodoReducer = ({ state, action }) => {
  if (action.type === ADD_TODO) {
    return { todo: [...state.todo, action.payload] };
  }

  if (action.type === DELETE) {
    return null;
  }
};

export default TodoReducer;
