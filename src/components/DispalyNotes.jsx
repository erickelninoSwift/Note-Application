import React, { useContext } from "react";
import contextTodo from "./context/context";
import { ListElement } from "./ListElement";

function DispalyNotes() {
  const { todos, dispatch } = useContext(contextTodo);
  const { todo: myNotes } = todos;
  const handleDelete = () => {
    console.log("delete element");
  };
  return (
    <div className="grid grid-cols-3 gap-1 m-10">
      {myNotes.map((data, index) => {
        return <ListElement key={index} listData={data} idElement={index} />;
      })}
    </div>
  );
}

export default DispalyNotes;
