import React, { useContext } from "react";
import contextTodo from "./context/context";

export const ListElement = ({ listData, idElement }) => {
  const { todos, dispatch } = useContext(contextTodo);
  const handleDelete = () => {
    console.log(idElement);
  };
  return (
    <div className="rounded border-2 p-[20px]">
      <h2>{listData}</h2>
      <button className="rounded border-2 p-[5px] mt-2" onClick={handleDelete}>
        Delete[X]
      </button>
    </div>
  );
};
