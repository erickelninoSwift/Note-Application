import React, { useContext } from "react";
import contextTodo from "./context/context";
import { ListElement } from "./ListElement";

function DispalyNotes() {
  const { todos: listTodo } = useContext(contextTodo);
  const handleEditing = (idElement, data) => {
    console.log(data, idElement);
  };
  return (
    <div className="grid grid-cols-3 gap-1 m-10">
      {listTodo.todo.map((data) => {
        const { id, myNote } = data;
        return <ListElement key={id} listData={myNote} idElement={id} />;
      })}
    </div>
  );
}

export default DispalyNotes;
