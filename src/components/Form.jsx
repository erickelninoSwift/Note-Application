import React, { useContext, useEffect } from "react";
import contextTodo from "./context/context";
import { useState } from "react";
import { ADD_TODO, EDIT_TODO } from "./context/action.type";
import { v4 as uuidv4 } from "uuid";
function Form() {
  const { todos, dispatch } = useContext(contextTodo);
  const [todoNotes, setTodoNotes] = useState("");
  const { todo, editMode, edit } = todos;

  const handleClick = (e) => {
    e.preventDefault();
    if (todoNotes === "") return;
    let myId = uuidv4();

    const newData = { id: myId, myNote: todoNotes };
    dispatch({ type: ADD_TODO, payload: newData });
    setTodoNotes("");
  };

  const handleEdit = () => {
    if (editMode) {
      dispatch({ type: EDIT_TODO, payload: todoNotes });
    }
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <form className="text-center py-6 m-4" onSubmit={handleClick}>
      <input
        type="text"
        placeholder="Enter notes"
        className="border-2 p-3 rounded-full  text-sm w-[500px] border-stone-200"
        value={editMode ? edit.data : todoNotes}
        onChange={(e) => setTodoNotes(e.target.value)}
      />
      <button
        onClick={handleEdit}
        className="bg-red-300 p-2 w-[180px] h-[45px] ml-2 rounded-full text-stone-500"
      >
        {editMode ? "Save" : "Click"}
      </button>
    </form>
  );
}

export default Form;
